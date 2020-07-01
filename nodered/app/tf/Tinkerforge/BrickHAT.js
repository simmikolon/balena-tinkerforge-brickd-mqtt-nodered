/* ***********************************************************
 * This file was automatically generated on 2019-08-23.      *
 *                                                           *
 * JavaScript Bindings Version 2.1.24                        *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generators git repository on tinkerforge.com       *
 *************************************************************/

var Device = require('./Device');
var IPConnection = require('./IPConnection');

BrickHAT.DEVICE_IDENTIFIER = 111;
BrickHAT.DEVICE_DISPLAY_NAME = 'HAT Brick';
BrickHAT.FUNCTION_SET_SLEEP_MODE = 1;
BrickHAT.FUNCTION_GET_SLEEP_MODE = 2;
BrickHAT.FUNCTION_SET_BRICKLET_POWER = 3;
BrickHAT.FUNCTION_GET_BRICKLET_POWER = 4;
BrickHAT.FUNCTION_GET_VOLTAGES = 5;
BrickHAT.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickHAT.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickHAT.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickHAT.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickHAT.FUNCTION_WRITE_FIRMWARE = 238;
BrickHAT.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickHAT.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickHAT.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickHAT.FUNCTION_RESET = 243;
BrickHAT.FUNCTION_WRITE_UID = 248;
BrickHAT.FUNCTION_READ_UID = 249;
BrickHAT.FUNCTION_GET_IDENTITY = 255;
BrickHAT.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickHAT.BOOTLOADER_MODE_FIRMWARE = 1;
BrickHAT.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickHAT.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickHAT.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickHAT.BOOTLOADER_STATUS_OK = 0;
BrickHAT.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickHAT.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickHAT.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickHAT.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickHAT.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickHAT.STATUS_LED_CONFIG_OFF = 0;
BrickHAT.STATUS_LED_CONFIG_ON = 1;
BrickHAT.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickHAT.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickHAT(uid, ipcon) {
	//HAT for Raspberry Pi with 8 Bricklets ports and real-time clock

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickHAT.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickHAT.FUNCTION_SET_SLEEP_MODE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickHAT.FUNCTION_GET_SLEEP_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickHAT.FUNCTION_SET_BRICKLET_POWER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickHAT.FUNCTION_GET_BRICKLET_POWER] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickHAT.FUNCTION_GET_VOLTAGES] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickHAT.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickHAT.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickHAT.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickHAT.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickHAT.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickHAT.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickHAT.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickHAT.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickHAT.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickHAT.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickHAT.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickHAT.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;



	this.setSleepMode = function(powerOffDelay, powerOffDuration, raspberryPiOff, brickletsOff, enableSleepIndicator, returnCallback, errorCallback) {
		/*
		Sets the sleep mode.
		
		.. note::
		 Calling this function will cut the Raspberry Pi's power after Power Off Delay seconds.
		 You have to shut down the Operating System yourself, e.g. by calling 'sudo shutdown -h now'.
		
		Parameters:
		
		* Power Off Delay: Time in seconds before the RPi/Bricklets are powered off.
		* Power Off Duration: Duration in seconds that the RPi/Bricklets stay powered off.
		* Raspberry Pi Off: RPi is powered off if set to true.
		* Bricklets Off: Bricklets are powered off if set to true.
		* Enable Sleep Indicator: If set to true, the status LED will blink in a 1s interval
		  during the whole power off duration. This will draw additional 0.3mA.
		
		Example: To turn RPi and Bricklets off in 5 seconds for 10 minutes with sleep
		indicator enabled, call (5, 60*10, true, true, true).
		
		This function can also be used to implement a watchdog. To do this you can
		write a program that calls this function once per second in a loop with
		(10, 2, true, false, false). If the RPi crashes or gets stuck
		the HAT will reset the RPi after 10 seconds.
		*/
		this.ipcon.sendRequest(this, BrickHAT.FUNCTION_SET_SLEEP_MODE, [powerOffDelay, powerOffDuration, raspberryPiOff, brickletsOff, enableSleepIndicator], 'I I ? ? ?', '', returnCallback, errorCallback, false);
	};
	this.getSleepMode = function(returnCallback, errorCallback) {
		/*
		Returns the sleep mode settings as set by :func:`Set Sleep Mode`.
		*/
		this.ipcon.sendRequest(this, BrickHAT.FUNCTION_GET_SLEEP_MODE, [], '', 'I I ? ? ?', returnCallback, errorCallback, false);
	};
	this.setBrickletPower = function(brickletPower, returnCallback, errorCallback) {
		/*
		Set to true/false to turn the power supply of the connected Bricklets on/off.
		
		By default the Bricklets are on.
		*/
		this.ipcon.sendRequest(this, BrickHAT.FUNCTION_SET_BRICKLET_POWER, [brickletPower], '?', '', returnCallback, errorCallback, false);
	};
	this.getBrickletPower = function(returnCallback, errorCallback) {
		/*
		Returns the power status of the connected Bricklets as set by :func:`Set Bricklet Power`.
		*/
		this.ipcon.sendRequest(this, BrickHAT.FUNCTION_GET_BRICKLET_POWER, [], '', '?', returnCallback, errorCallback, false);
	};
	this.getVoltages = function(returnCallback, errorCallback) {
		/*
		Returns the USB supply voltage and the DC input supply voltage in mV.
		
		There are three possible combinations:
		
		* Only USB connected: The USB supply voltage will be fed back to the
		  DC input connector. You will read the USB voltage and a slightly lower
		  voltage on the DC input.
		* Only DC input connected: The DC voltage will not be fed back to the
		  USB connector. You will read the DC input voltage and the USB voltage
		  will be 0.
		* USB and DC input connected: You will read both voltages. In this case
		  the USB supply will be without load, but it will work as backup if you
		  disconnect the DC input (or if the DC input voltage falls below the
		  USB voltage).
		*/
		this.ipcon.sendRequest(this, BrickHAT.FUNCTION_GET_VOLTAGES, [], '', 'H H', returnCallback, errorCallback, false);
	};
	this.getSPITFPErrorCount = function(returnCallback, errorCallback) {
		/*
		Returns the error count for the communication between Brick and Bricklet.
		
		The errors are divided into
		
		* ACK checksum errors,
		* message checksum errors,
		* framing errors and
		* overflow errors.
		
		The errors counts are for errors that occur on the Bricklet side. All
		Bricks have a similar function that returns the errors on the Brick side.
		*/
		this.ipcon.sendRequest(this, BrickHAT.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 'I I I I', returnCallback, errorCallback, false);
	};
	this.setBootloaderMode = function(mode, returnCallback, errorCallback) {
		/*
		Sets the bootloader mode and returns the status after the requested
		mode change was instigated.
		
		You can change from bootloader mode to firmware mode and vice versa. A change
		from bootloader mode to firmware mode will only take place if the entry function,
		device identifier and CRC are present and correct.
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickHAT.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 'B', returnCallback, errorCallback, false);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickHAT.FUNCTION_GET_BOOTLOADER_MODE, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickHAT.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', '', returnCallback, errorCallback, false);
	};
	this.writeFirmware = function(data, returnCallback, errorCallback) {
		/*
		Writes 64 Bytes of firmware at the position as written by
		:func:`Set Write Firmware Pointer` before. The firmware is written
		to flash every 4 chunks.
		
		You can only write firmware in bootloader mode.
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickHAT.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 'B', returnCallback, errorCallback, false);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickHAT.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', '', returnCallback, errorCallback, false);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickHAT.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature in °C as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickHAT.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 'h', returnCallback, errorCallback, false);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickHAT.FUNCTION_RESET, [], '', '', returnCallback, errorCallback, false);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickHAT.FUNCTION_WRITE_UID, [uid], 'I', '', returnCallback, errorCallback, false);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickHAT.FUNCTION_READ_UID, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.getIdentity = function(returnCallback, errorCallback) {
		/*
		Returns the UID, the UID where the Bricklet is connected to,
		the position, the hardware and firmware version as well as the
		device identifier.
		
		The position can be 'a', 'b', 'c' or 'd'.
		
		The device identifier numbers can be found :ref:`here <device_identifier>`.
		|device_identifier_constant|
		*/
		this.ipcon.sendRequest(this, BrickHAT.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
}

module.exports = BrickHAT;
