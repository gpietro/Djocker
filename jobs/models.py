from django.db import models
from django.utils import timezone


class Job(models.Model):
    name = models.CharField(max_length=255)
    status = models.CharField(max_length=255, null=True, blank=True)
    created = models.DateTimeField(default=timezone.now)
    completed = models.DateTimeField(null=True, blank=True)
    celery_id = models.CharField(max_length=255, null=True, blank=True)

    class Meta:
        ordering = ('created',)

    def __unicode__(self):
        return self.name


class Task(models.Model):
    text = models.CharField(max_length=40)
    completed = models.NullBooleanField()

    def __str__(self):
        return self.text