#!/usr/bin/env python
# Disabling some Pylint checks as it assumes that the global variables are all constants.
# pylint: disable=invalid-name
# pylint: disable=global-statement

import asyncio
import paho.mqtt.client as mqtt
from xknx import XKNX
from xknx.devices import Sensor, BinarySensor, Switch
from xknx.telegram import AddressFilter, GroupAddress, Telegram, TelegramType, TelegramDirection, PhysicalAddress
from xknx.dpt import DPTBinary, DPTArray
from xknx.io import GatewayScanner, Tunnel


BROKER_ADDRESS = 'mqtt.datacake.co'


class KNX2Datacake():

    def __init__(self):
        self.xknx = XKNX(device_updated_cb=self.device_updated_cb, telegram_received_cb=self.telegram_received_cb)
        self.mqttc = mqtt.Client('xknx2datacake')
        self.loop = asyncio.get_event_loop()
        self.loop.run_until_complete(self.main())
        self.loop.close()

    async def main(self):
        self.power_total_device = Sensor(self.xknx, 'POWER_TOTAL', group_address_state='0/0/13', value_type="DPT-12")
        self.vent_airflow_temp_outside = Sensor(self.xknx, 'VENT_AIRFLOW_TEMP_OUTSIDE', group_address_state='0/0/5', value_type="DPT-9")
        self.vent_airflow_level = Sensor(self.xknx, 'VENT_AIRFLOW_LEVEL', group_address_state='0/0/2', value_type="DPT-5")
        self.vent_status = Switch(self.xknx, name='VENT_STATUS', group_address='0/0/18')
        self.floor_light = Switch(self.xknx, name='FLOOR_LIGHT', group_address='1/0/0')

        self.xknx.devices.add(self.power_total_device)
        self.xknx.devices.add(self.vent_airflow_temp_outside)
        self.xknx.devices.add(self.vent_airflow_level)
        self.xknx.devices.add(self.vent_status)
        self.xknx.devices.add(self.floor_light)

        self.mqttc.on_connect = self.on_connect
        self.mqttc.on_message = self.on_message
        self.mqttc.tls_set()
        self.mqttc.username_pw_set("fa65117dcd295a77926569f30f7d3a327e6ff30c", password="fa65117dcd295a77926569f30f7d3a327e6ff30c")
        self.mqttc.connect(BROKER_ADDRESS, 8883, 60)
        self.mqttc.loop_start()

        await self.xknx.start(daemon_mode=True)
        await self.xknx.stop()

        await self.mqttc.loop_stop()
        await self.mqttc.disconnect()


    async def telegram_received_cb(self, telegram):
        print(telegram)


    async def device_updated_cb(self, device):
        print("")
        print("Callback received from {0}".format(device.name))
        if device.name == "VENT_STATUS":
            value = 1 if device.state is True else 0
            print(value)
            self.mqttc.publish("dtck-pub/xknx2datacake/160aa447-c7e1-46f9-966e-1ebb515bd2d4/VENT_STATUS", value)
        elif device.name == "VENT_AIRFLOW_TEMP_OUTSIDE":
            try:
                value = float(device.resolve_state())
                print(value)
                self.mqttc.publish("dtck-pub/xknx2datacake/160aa447-c7e1-46f9-966e-1ebb515bd2d4/VENT_AIRFLOW_TEMP_OUTSIDE", value)
            except:
                print("sww")
        elif device.name == "VENT_AIRFLOW_LEVEL":
            try:
                value = int(device.resolve_state())
                print(value)
                self.mqttc.publish("dtck-pub/xknx2datacake/160aa447-c7e1-46f9-966e-1ebb515bd2d4/VENT_AIRFLOW_LEVEL", value)
            except:
                print("sww")
        elif device.name == "POWER_TOTAL":
            try:
                value = int(device.resolve_state())
                print(value)
                self.mqttc.publish("dtck-pub/xknx2datacake/160aa447-c7e1-46f9-966e-1ebb515bd2d4/POWER_TOTAL", value)
            except:
                print("sww")
        else:
            pass
            #print(device.resolve_state())

    def on_message(self, client, userdata, msg):

        # MQTT Callback

        print(msg.topic+" "+str(msg.payload))

        # Ventilation

        if msg.topic == "dtck/xknx2datacake/160aa447-c7e1-46f9-966e-1ebb515bd2d4/VENT_STATUS_CONTROL":
            try:
                if msg.payload == b'true':
                    self.xknx.loop.create_task(self.xknx.devices['VENT_STATUS'].set_on())
                else:
                    self.xknx.loop.create_task(self.xknx.devices['VENT_STATUS'].set_off())
            except Exception as e:
                print(e)

        # Floor Light

        elif msg.topic == "dtck/xknx2datacake/160aa447-c7e1-46f9-966e-1ebb515bd2d4/FLOOR_LIGHT":
            try:
                if msg.payload == b'true':
                    self.xknx.loop.create_task(self.xknx.devices['FLOOR_LIGHT'].set_on())
                else:
                    self.xknx.loop.create_task(self.xknx.devices['FLOOR_LIGHT'].set_off())
            except Exception as e:
                print(e)

        # Airflow set_port_interrupt

        elif msg.topic == "dtck/xknx2datacake/160aa447-c7e1-46f9-966e-1ebb515bd2d4/VENT_AIRFLOW_LEVEL_SETPOINT":
            try:
                if msg.payload == b'true':
                    self.xknx.loop.create_task(self.xknx.devices['VENT_AIRFLOW_LEVEL'].set_on())
                else:
                    self.xknx.loop.create_task(self.xknx.devices['VENT_AIRFLOW_LEVEL'].set_off())
            except Exception as e:
                print(e)

    def on_connect(self, client, userdata, flags, rc):
        print("Connected with result code "+str(rc))
        client.subscribe("dtck/xknx2datacake/160aa447-c7e1-46f9-966e-1ebb515bd2d4/+")


if __name__ == "__main__":
    knx2datacake = KNX2Datacake()
