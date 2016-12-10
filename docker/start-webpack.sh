#!/usr/bin/env bash

until cd /code && npm install
do
  echo "Retrying npm install"
done

webpack --watch --watch-polling
