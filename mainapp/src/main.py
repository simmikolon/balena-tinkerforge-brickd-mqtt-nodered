#!/usr/bin/env python

import notecard
import time
from periphery import Serial

while True:
    time.sleep(1)

port = Serial("/dev/ttyS0", 9600)
nCard = notecard.OpenSerial(port)

req = {"req": "card.wireless"}

rsp = nCard.Transaction(req)
print(rsp)

while True:
    time.sleep(1)
