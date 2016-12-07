from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, filters
from .models import Job, Task
from .serializers import JobSerializer, TaskSerializer


def homepage(request):
    return render(request, 'jobs/homepage.html')


def index(request):
    return render(request, 'jobs/index.html')


def about(request):
    return render(request, 'jobs/about.html')


class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer


class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = ('completed', 'text')
