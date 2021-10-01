#!/bin/bash

python src/tinkerforge_mqtt.py --debug \
 --show-payload \
 --global-topic-prefix tf \
 --broker-host 127.0.0.1 \
 --broker-port 1883
