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

BrickletPiezoSpeakerV2.DEVICE_IDENTIFIER = 2145;
BrickletPiezoSpeakerV2.DEVICE_DISPLAY_NAME = 'Piezo Speaker Bricklet 2.0';
BrickletPiezoSpeakerV2.CALLBACK_BEEP_FINISHED = 7;
BrickletPiezoSpeakerV2.CALLBACK_ALARM_FINISHED = 8;
BrickletPiezoSpeakerV2.FUNCTION_SET_BEEP = 1;
BrickletPiezoSpeakerV2.FUNCTION_GET_BEEP = 2;
BrickletPiezoSpeakerV2.FUNCTION_SET_ALARM = 3;
BrickletPiezoSpeakerV2.FUNCTION_GET_ALARM = 4;
BrickletPiezoSpeakerV2.FUNCTION_UPDATE_VOLUME = 5;
BrickletPiezoSpeakerV2.FUNCTION_UPDATE_FREQUENCY = 6;
BrickletPiezoSpeakerV2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletPiezoSpeakerV2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletPiezoSpeakerV2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletPiezoSpeakerV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletPiezoSpeakerV2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletPiezoSpeakerV2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletPiezoSpeakerV2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletPiezoSpeakerV2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletPiezoSpeakerV2.FUNCTION_RESET = 243;
BrickletPiezoSpeakerV2.FUNCTION_WRITE_UID = 248;
BrickletPiezoSpeakerV2.FUNCTION_READ_UID = 249;
BrickletPiezoSpeakerV2.FUNCTION_GET_IDENTITY = 255;
BrickletPiezoSpeakerV2.BEEP_DURATION_OFF = 0;
BrickletPiezoSpeakerV2.BEEP_DURATION_INFINITE = 4294967295;
BrickletPiezoSpeakerV2.ALARM_DURATION_OFF = 0;
BrickletPiezoSpeakerV2.ALARM_DURATION_INFINITE = 4294967295;
BrickletPiezoSpeakerV2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletPiezoSpeakerV2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletPiezoSpeakerV2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletPiezoSpeakerV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletPiezoSpeakerV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletPiezoSpeakerV2.BOOTLOADER_STATUS_OK = 0;
BrickletPiezoSpeakerV2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletPiezoSpeakerV2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletPiezoSpeakerV2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletPiezoSpeakerV2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletPiezoSpeakerV2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletPiezoSpeakerV2.STATUS_LED_CONFIG_OFF = 0;
BrickletPiezoSpeakerV2.STATUS_LED_CONFIG_ON = 1;
BrickletPiezoSpeakerV2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletPiezoSpeakerV2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletPiezoSpeakerV2(uid, ipcon) {
	//Creates beep and alarm with configurable volume and frequency

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletPiezoSpeakerV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletPiezoSpeakerV2.FUNCTION_SET_BEEP] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletPiezoSpeakerV2.FUNCTION_GET_BEEP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPiezoSpeakerV2.FUNCTION_SET_ALARM] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletPiezoSpeakerV2.FUNCTION_GET_ALARM] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPiezoSpeakerV2.FUNCTION_UPDATE_VOLUME] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletPiezoSpeakerV2.FUNCTION_UPDATE_FREQUENCY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletPiezoSpeakerV2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPiezoSpeakerV2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPiezoSpeakerV2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPiezoSpeakerV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletPiezoSpeakerV2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPiezoSpeakerV2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletPiezoSpeakerV2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPiezoSpeakerV2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPiezoSpeakerV2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletPiezoSpeakerV2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletPiezoSpeakerV2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletPiezoSpeakerV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletPiezoSpeakerV2.CALLBACK_BEEP_FINISHED] = '';
	this.callbackFormats[BrickletPiezoSpeakerV2.CALLBACK_ALARM_FINISHED] = '';



	this.setBeep = function(frequency, volume, duration, returnCallback, errorCallback) {
		/*
		Beeps with the given frequency and volume for the duration in ms. 
		
		For example: If you set a duration of 1000, with a volume of 10 and a frequency
		value of 2000 the piezo buzzer will beep with maximum loudness for one 
		second with a frequency of 2 kHz.
		
		A duration of 0 stops the current beep if any is ongoing.
		A duration of 4294967295 results in an infinite beep.
		
		The ranges are:
		
		* Frequency: 50Hz - 15000Hz
		* Volume: 0 - 10
		* Duration: 0ms - 4294967295ms
		*/
		this.ipcon.sendRequest(this, BrickletPiezoSpeakerV2.FUNCTION_SET_BEEP, [frequency, volume, duration], 'H B I', '', returnCallback, errorCallback, false);
	};
	this.getBeep = function(returnCallback, errorCallback) {
		/*
		Returns the last beep settings as set by :func:`Set Beep`. If a beep is currently 
		running it also returns the remaining duration of the beep in ms.
		
		If the frequency or volume is updated during a beep (with :func:`Update Frequency` 
		or :func:`Update Volume`) this function returns the updated value.
		*/
		this.ipcon.sendRequest(this, BrickletPiezoSpeakerV2.FUNCTION_GET_BEEP, [], '', 'H B I I', returnCallback, errorCallback, false);
	};
	this.setAlarm = function(startFrequency, endFrequency, stepSize, stepDelay, volume, duration, returnCallback, errorCallback) {
		/*
		Creates an alarm (a tone that goes back and force between two specified frequencies).
		
		The following parameters can be set:
		
		* Start Frequency: Start frequency of the alarm in Hz.
		* End Frequency: End frequency of the alarm in Hz.
		* Step Size: Size of one step of the sweep between the start/end frequencies in Hz.
		* Step Delay: Delay between two steps (duration of time that one tone is used in a sweep) in ms.
		* Duration: Duration of the alarm in ms.
		
		A duration of 0 stops the current alarm if any is ongoing.
		A duration of 4294967295 results in an infinite alarm.
		
		Below you can find two sets of example settings that you can try out. You can use
		these as a starting point to find an alarm signal that suits your application.
		
		Example 1: 10 seconds of loud annoying fast alarm
		
		* Start Frequency = 800
		* End Frequency = 2000
		* Step Size = 10
		* Step Delay = 1
		* Volume = 10
		* Duration = 10000
		
		Example 2: 10 seconds of soft siren sound with slow build-up
		
		* Start Frequency = 250
		* End Frequency = 750
		* Step Size = 1
		* Step Delay = 5
		* Volume = 0
		* Duration = 10000
		
		The ranges are:
		
		* Start Frequency: 50Hz - 14999Hz (has to be smaller than end frequency)
		* End Frequency: 51Hz - 15000Hz (has to be bigger than start frequency)
		* Step Size: 1Hz - 65535Hz (has to be small enough to fit into the frequency range)
		* Step Delay: 1ms - 65535ms (has to be small enough to fit into the duration)
		* Volume: 0 - 10
		* Duration: 0ms - 4294967295ms
		*/
		this.ipcon.sendRequest(this, BrickletPiezoSpeakerV2.FUNCTION_SET_ALARM, [startFrequency, endFrequency, stepSize, stepDelay, volume, duration], 'H H H H B I', '', returnCallback, errorCallback, false);
	};
	this.getAlarm = function(returnCallback, errorCallback) {
		/*
		Returns the last alarm settings as set by :func:`Set Alarm`. If an alarm is currently 
		running it also returns the remaining duration of the alarm in ms as well as the
		current frequency of the alarm in Hz.
		
		If the volume is updated during a beep (with :func:`Update Volume`) 
		this function returns the updated value.
		*/
		this.ipcon.sendRequest(this, BrickletPiezoSpeakerV2.FUNCTION_GET_ALARM, [], '', 'H H H H B I I H', returnCallback, errorCallback, false);
	};
	this.updateVolume = function(volume, returnCallback, errorCallback) {
		/*
		Updates the volume of an ongoing beep or alarm. The range of the volume is 0 to 10.
		*/
		this.ipcon.sendRequest(this, BrickletPiezoSpeakerV2.FUNCTION_UPDATE_VOLUME, [volume], 'B', '', returnCallback, errorCallback, false);
	};
	this.updateFrequency = function(frequency, returnCallback, errorCallback) {
		/*
		Updates the frequency of an ongoing beep. The range of the frequency is 50Hz to 15000Hz.
		*/
		this.ipcon.sendRequest(this, BrickletPiezoSpeakerV2.FUNCTION_UPDATE_FREQUENCY, [frequency], 'H', '', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletPiezoSpeakerV2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 'I I I I', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletPiezoSpeakerV2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 'B', returnCallback, errorCallback, false);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletPiezoSpeakerV2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletPiezoSpeakerV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', '', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletPiezoSpeakerV2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 'B', returnCallback, errorCallback, false);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletPiezoSpeakerV2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', '', returnCallback, errorCallback, false);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletPiezoSpeakerV2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature in °C as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletPiezoSpeakerV2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 'h', returnCallback, errorCallback, false);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletPiezoSpeakerV2.FUNCTION_RESET, [], '', '', returnCallback, errorCallback, false);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletPiezoSpeakerV2.FUNCTION_WRITE_UID, [uid], 'I', '', returnCallback, errorCallback, false);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletPiezoSpeakerV2.FUNCTION_READ_UID, [], '', 'I', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletPiezoSpeakerV2.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
}

module.exports = BrickletPiezoSpeakerV2;
