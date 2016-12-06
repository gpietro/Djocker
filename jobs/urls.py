from django.conf.urls import url
from django.contrib import admin

from . import views

urlpatterns = [
    url(r'^$', views.homepage),
    url(r'^about/$', views.about),
    url(r'^dashboard', views.index),
]
