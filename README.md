# Dockerized Django boilerplate

## Work in progress...

This is a django base project with this main features:
- Admin panel (django admin)
- Auth with social (django all auth)
- Rest API (django-rest-framework)
- Websocket (django-channels and redis)
- Background task (celery and rabbitmq)
- Dependecies handler (webpack)
- Modern js client (react.js, es6,...)
- Hot reload

For a better developing environment the project is dockerized.
To run it do the execute the following commands:
```
  docker build
  docker-compose up -d
```


And to stop the process:
```
  docker-compose stop
```
