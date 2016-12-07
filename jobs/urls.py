from django.conf.urls import url, include
from django.contrib import admin
from rest_framework.routers import DefaultRouter
from . import views


router = DefaultRouter()
router.register(r'jobs', views.JobViewSet)
router.register(r'tasks', views.TaskViewSet)

urlpatterns = [
    url(r'^$', views.homepage),
    url(r'^about/$', views.about),
    url(r'^dashboard', views.index),
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
