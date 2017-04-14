from django.dispatch import Signal

dispatcher = Signal(providing_args=['action', 'payload'])