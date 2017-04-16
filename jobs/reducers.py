from .models import Task
from . import actions

def reducer(sender, **kwargs):
    action = kwargs['action']
    payload = kwargs['payload']
    
    if action == actions.ADD_TODO:
        Task.objects.create(text=payload['text'], completed=False)
    else:
        print('Action has not been implemented yet...')