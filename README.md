# Django Channels and Celery Example

This project shows how to setup a Django Channels project with a Celery task queue. The user can start a long running background task and get immediate notification when the task completes without a browser refresh.

To run this project you will need to install Docker and run this command from the project directory:

```
  docker-compose up
```

## How to Send Reply Back to Browser Client
The code block below shows how to send a reply back to the browser that originated the task request. `message.reply_channel.name` contains a unique address in the form of `websocket.send!hjnsMbQPiefT`.
```
Channel(reply_channel).send({
    "text": json.dumps ({
        "action": "completed",
        "job_id": job.id,
        "job_name": job.name,
        "job_status": job.status,
    })
})
```
