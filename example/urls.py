from django.conf.urls import url, include, patterns
from django.conf import settings


urlpatterns = [
    url(r'^', include('jobs.urls')),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns += [
        url(r'^__debug__/', include(debug_toolbar.urls)),
    ]
