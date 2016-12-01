# use base python image with python 2.7
FROM python:2.7
ENV PYTHONUNBUFFERED 1

MAINTAINER Pietro Ghezzi

# set working directory to /code/
RUN mkdir /code
WORKDIR /code

# add requirements.txt to the image
ADD requirements.txt /code/

# install python dependencies
RUN pip install -r   requirements.txt

ADD . /code/

# Port to expose
EXPOSE 8000
