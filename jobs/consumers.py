from django.core import serializers
import json
import logging
from channels import Channel
from channels.sessions import channel_session
from .models import Job, Task
from .serializers import TaskSerializer
from .tasks import sec3
from .signals import dispatcher
from example.celery import app

log = logging.getLogger(__name__)


@channel_session
def ws_connect(message):
    message.reply_channel.send({
        "text": json.dumps({
            "type": "INIT_TODO",
            "payload": TaskSerializer(Task.objects.all(), many=True).data,
        })
    })


@channel_session
def ws_receive(message):
    try:
        data = json.loads(message['text'])
        print(message.reply_channel.name)
    except ValueError:
        log.debug("ws message isn't json text=%s", message['text'])
        return

    if data:
        dispatcher.send(
            sender=None, 
            action=data['type'], 
            payload=dict(text=data['text']),
            reply_channel=message.reply_channel.name
        )


def start_sec3(data, reply_channel):
    log.debug("job Name=%s", data['job_name'])
    # Save model to our database
    job = Job(
        name=data['job_name'],
        status="started",
    )
    job.save()

    # Start long running task here (using Celery)
    sec3_task = sec3.delay(job.id, reply_channel)

    # Store the celery task id into the database if we wanted to
    # do things like cancel the task in the future
    job.celery_id = sec3_task.id
    job.save()

    # Tell client task has been started
    Channel(reply_channel).send({
        "text": json.dumps({
            "action": "started",
            "job_id": job.id,
            "job_name": job.name,
            "job_status": job.status,
        })
    })
