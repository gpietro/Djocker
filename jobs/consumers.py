from django.core import serializers
import json
import logging
from channels import Channel, Group
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
            "todos": TaskSerializer(Task.objects.all(), many=True).data,
        })
    })
    Group("todo_app").add(message.reply_channel)


@channel_session
def ws_receive(message):
    try:
        data = json.loads(message['text'])
        log.debug('ciao pippo')
        log.debug(message.reply_channel.name)
    except ValueError:
        log.debug("ws message isn't json text=%s", message['text'])
        return

    if data:
        dispatcher.send(
            sender=None, 
            action=data.pop('type', None), 
            payload=data,
            reply_channel=message.reply_channel.name
        )


@channel_session
def ws_disconnect(message):
    Group("todo_app").discard(message.reply_channel)