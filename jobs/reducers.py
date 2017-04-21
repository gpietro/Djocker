from channels import Channel
from .models import Task
from . import actions


def reducer(sender, **kwargs):
    action = kwargs['action']
    payload = kwargs['payload']
    reply_channel = kwargs['reply_channel']
    
    if action == actions.ADD_TODO:
        Task.objects.create(
            id=payload['id'], 
            text=payload['text'], 
            completed=payload['completed']
        )
    else:
        print('Action has not been implemented yet...')

    # Update all clients
    Channel(reply_channel).send({
        "text": json.dumps({
            "type": action,
            "payload": payload,
        })
    })