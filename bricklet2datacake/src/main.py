HOST = "localhost"
PORT = 4223
UID = "FX5" # Change XYZ to the UID of your Particulate Matter Bricklet

from tinkerforge.ip_connection import IPConnection
from tinkerforge.bricklet_particulate_matter import BrickletParticulateMatter
import time
import paho.mqtt.client as mqtt

client = mqtt.Client()

# The callback for when the client receives a CONNACK response from the server.
def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))

    # Subscribing in on_connect() means that if we lose the connection and
    # reconnect then subscriptions will be renewed.
    # client.subscribe("$SYS/#")

# The callback for when a PUBLISH message is received from the server.
def on_message(client, userdata, msg):
    print(msg.topic+" "+str(msg.payload))


# Callback function for PM concentration callback
def cb_pm_concentration(pm10, pm25, pm100):
    #client.publish("dtck-pub/balena-fin-mqtt-1nce/a1576706-cb5e-410f-8a92-69fabccd858f/PM1", pm10)
    client.publish("dtck-pub/balena-fin-cellular-demo/0e5d7891-7b73-4377-a7f9-f837a12df327/PM25", pm25)
    client.publish("dtck-pub/balena-fin-cellular-demo/0e5d7891-7b73-4377-a7f9-f837a12df327/PM10", pm100)


if __name__ == "__main__":

    ipcon = IPConnection()
    pm = BrickletParticulateMatter(UID, ipcon)

    ipcon.connect(HOST, PORT)

    pm.register_callback(pm.CALLBACK_PM_CONCENTRATION, cb_pm_concentration)
    pm.set_pm_concentration_callback_configuration(60000, False)

    client.on_connect = on_connect
    client.on_message = on_message

    client.tls_set()
    client.username_pw_set("yourtokenhere", password="yourtokenhere")

    client.connect("mqtt.datacake.co", 8883, 60)

    # Blocking call that processes network traffic, dispatches callbacks and
    # handles reconnecting.
    # Other loop*() functions are available that give a threaded interface and a
    # manual interface.
    client.loop_forever()
