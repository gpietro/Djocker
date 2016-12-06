from django.shortcuts import render, get_object_or_404
from .models import Job


def homepage(request):
    return render(request, 'jobs/homepage.html')


def index(request):
    return render(request, 'jobs/index.html')


def about(request):
    return render(request, 'jobs/about.html')
