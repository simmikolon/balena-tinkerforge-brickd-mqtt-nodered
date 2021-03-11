#!/usr/bin/env python

import notecard
from periphery import Serial

port = Serial("/dev/ttyS0", 9600)
nCard = notecard.OpenSerial(port)

req = {"req": "card.wireless"}

rsp = nCard.Transaction(req)
print(rsp)
