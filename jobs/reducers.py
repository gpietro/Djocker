from .signals import dispatcher
from .models import Task
import actions

def reducer(sender, **kwargs):
    Task.objects.create(text='ciao', completed=False)
    '''action = kwargs['action']
    payload = kwargs['payload']
    
    if action == actions.ADD_TODO:
        Task.objects.create(text='ciao', completed=False)
    else:
        print('Action has not been implemented yet...')'''

dispatcher.connect(reducer)