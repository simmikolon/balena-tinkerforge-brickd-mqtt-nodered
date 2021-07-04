#!/bin/bash

python src/tinkerforge_mqtt.py --debug \
 --show-payload \
 --global-topic-prefix $BALENA_DEVICE_UUID \
 --broker-host $BROKER_HOST \
 --broker-port $BROKER_PORT \
 --broker-username $BROKER_USERNAME \
 --broker-password $BROKER_PASSWORD \
 --broker-certificate src/isrgrootx1.pem \
 --client-id $BALENA_DEVICE_UUID
