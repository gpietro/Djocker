import json
from channels import Channel, Group
from .models import Task
from . import actions


def add_todo(payload):
    print('....payload %s' % payload )
    Task.objects.create(        
        id=payload['id'], 
        text=payload['text'], 
        completed=payload['completed']
    )


def remove_todo(payload):
    Task.objects.get(pk=payload['id']).delete()


reducer_actions = {
    actions.ADD_TODO: add_todo,
    actions.REMOVE_TODO: remove_todo
}

def reducer(sender, **kwargs):
    action = kwargs['action']
    payload = kwargs['payload']
    reply_channel = kwargs['reply_channel']
    
    if action in reducer_actions:
        reducer_actions[action](payload)
        # Update all clients
        Group("todo_app").send({
            "text": json.dumps({
                "type": action,
                "done": True,                
                **payload
            })
        })
    else:
        print('Action has not been implemented yet...')
