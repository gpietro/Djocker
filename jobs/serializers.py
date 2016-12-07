from rest_framework import serializers
from .models import Job, Task

class JobSerializer(serializers.ModelSerializer):

    class Meta:
        model = Job
        fields = ('id', 'name', 'status', 'completed')


class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = ('id', 'text', 'completed')
