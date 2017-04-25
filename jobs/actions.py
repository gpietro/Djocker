from .models import Task

ADD_TODO = 'ADD_TODO'
REMOVE_TODO = 'REMOVE_TODO'

def add_todo(payload):
    Task.objects.create(        
        id=payload['id'], 
        text=payload['text'], 
        completed=payload['completed']
    )


def remove_todo(payload):
    Task.objects.get(pk=payload['id']).delete()


def complete_todo(payload):
    Task.objects.get(pk=payload['id']).update(completed=True)


actions = {
    ADD_TODO: add_todo,
    REMOVE_TODO: remove_todo
}