#!/bin/bash

python3 tinkerforge_mqtt.py --debug \
 --show-payload \
 --global-topic-prefix DTCK/$GLOBAL_TOPIC_PREFIX \
 --broker-host $BROKER_HOST \
 --broker-port $BROKER_PORT \
 --broker-username $BROKER_USERNAME \
 --broker-password $BROKER_PASSWORD \
 --broker-certificate isrgrootx1.pem \
 --client-id $CLIENT_ID
