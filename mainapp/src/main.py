#!/usr/bin/env python

import notecard
import time
#from periphery import Serial
#import serial

# Use python-periphery on a desktop or Raspberry Pi
from periphery import I2C

# tf
HOST = "0.0.0.0"
PORT = 4223

from tinkerforge.ip_connection import IPConnection
from tinkerforge.bricklet_industrial_dual_analog_in_v2 import BrickletIndustrialDualAnalogInV2


# Callback function for voltage callback
def cb_voltage(channel, voltage):
    print("Channel: " + str(channel))
    print("Voltage: " + str(voltage/1000.0) + " V")
    print("")

    try:
        #req = {"req": "card.location"}
        req = {"req":"note.add","file":"bricklet.qos","body":{"ch": channel, "v": voltage},"sync":True}
        rsp = nCard.Transaction(req)
        print(rsp)
    except Exception as e:
        print(e)


port = I2C("/dev/i2c-1")
nCard = notecard.OpenI2C(port, 0, 0)

def init_i2c():
    global port, nCard
    port = I2C("/dev/i2c-1")
    nCard = notecard.OpenI2C(port, 0, 0)

if __name__ == "__main__":

    setup_request = {"req":"hub.set","product":"de.datacake.simon:datacaketest","sn":"Datacake0003","mode":"continuous","outbound":5,"inbound":5,"sync":True}

    try:
        #req = {"req": "card.location"}
        rsp = nCard.Transaction(setup_request)
        print(rsp)
    except Exception as e:
        print(e)

    time.sleep(30)

    # Create connection and connect to brickd
    ipcon = IPConnection()

    idai = BrickletIndustrialDualAnalogInV2('HRD', ipcon) # Create device object

    ipcon.connect(HOST, PORT)

    # Register voltage callback to function cb_voltage
    idai.register_callback(idai.CALLBACK_VOLTAGE, cb_voltage)

    # Set period for voltage (channel 0) callback to 1s (1000ms) without a threshold
    idai.set_voltage_callback_configuration(0, 60000, False, "x", 0, 0)

    while True:
        time.sleep(1)
        try:
            req = {"req":"note.changes","file":"requests.qi","tracker":"inbound-tracker"}
            rsp = nCard.Transaction(req)
            if 'total' in rsp:
                print("Inbound changes detected ...")
                total = rsp['total']
                if total > 0:
                    req = {"req":"note.get","file":"requests.qi","delete":True}
                    rsp = nCard.Transaction(req)
                    print(rsp)

        except Exception as e:
            print("Exception: {}".format(e))

    input("Press key to exit\n") # Use raw_input() in Python 2
    ipcon.disconnect()
