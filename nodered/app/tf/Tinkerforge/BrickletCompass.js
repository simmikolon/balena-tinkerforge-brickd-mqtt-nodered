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

BrickletCompass.DEVICE_IDENTIFIER = 2153;
BrickletCompass.DEVICE_DISPLAY_NAME = 'Compass Bricklet';
BrickletCompass.CALLBACK_HEADING = 4;
BrickletCompass.CALLBACK_MAGNETIC_FLUX_DENSITY = 8;
BrickletCompass.FUNCTION_GET_HEADING = 1;
BrickletCompass.FUNCTION_SET_HEADING_CALLBACK_CONFIGURATION = 2;
BrickletCompass.FUNCTION_GET_HEADING_CALLBACK_CONFIGURATION = 3;
BrickletCompass.FUNCTION_GET_MAGNETIC_FLUX_DENSITY = 5;
BrickletCompass.FUNCTION_SET_MAGNETIC_FLUX_DENSITY_CALLBACK_CONFIGURATION = 6;
BrickletCompass.FUNCTION_GET_MAGNETIC_FLUX_DENSITY_CALLBACK_CONFIGURATION = 7;
BrickletCompass.FUNCTION_SET_CONFIGURATION = 9;
BrickletCompass.FUNCTION_GET_CONFIGURATION = 10;
BrickletCompass.FUNCTION_SET_CALIBRATION = 11;
BrickletCompass.FUNCTION_GET_CALIBRATION = 12;
BrickletCompass.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletCompass.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletCompass.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletCompass.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletCompass.FUNCTION_WRITE_FIRMWARE = 238;
BrickletCompass.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletCompass.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletCompass.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletCompass.FUNCTION_RESET = 243;
BrickletCompass.FUNCTION_WRITE_UID = 248;
BrickletCompass.FUNCTION_READ_UID = 249;
BrickletCompass.FUNCTION_GET_IDENTITY = 255;
BrickletCompass.THRESHOLD_OPTION_OFF = 'x';
BrickletCompass.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletCompass.THRESHOLD_OPTION_INSIDE = 'i';
BrickletCompass.THRESHOLD_OPTION_SMALLER = '<';
BrickletCompass.THRESHOLD_OPTION_GREATER = '>';
BrickletCompass.DATA_RATE_100HZ = 0;
BrickletCompass.DATA_RATE_200HZ = 1;
BrickletCompass.DATA_RATE_400HZ = 2;
BrickletCompass.DATA_RATE_600HZ = 3;
BrickletCompass.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletCompass.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletCompass.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletCompass.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletCompass.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletCompass.BOOTLOADER_STATUS_OK = 0;
BrickletCompass.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletCompass.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletCompass.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletCompass.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletCompass.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletCompass.STATUS_LED_CONFIG_OFF = 0;
BrickletCompass.STATUS_LED_CONFIG_ON = 1;
BrickletCompass.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletCompass.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletCompass(uid, ipcon) {
	//3-axis compass with 0.1mG (milli Gauss) and 0.1° resolution

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletCompass.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletCompass.FUNCTION_GET_HEADING] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCompass.FUNCTION_SET_HEADING_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletCompass.FUNCTION_GET_HEADING_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCompass.FUNCTION_GET_MAGNETIC_FLUX_DENSITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCompass.FUNCTION_SET_MAGNETIC_FLUX_DENSITY_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletCompass.FUNCTION_GET_MAGNETIC_FLUX_DENSITY_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCompass.FUNCTION_SET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletCompass.FUNCTION_GET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCompass.FUNCTION_SET_CALIBRATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletCompass.FUNCTION_GET_CALIBRATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCompass.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCompass.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCompass.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCompass.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletCompass.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCompass.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletCompass.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCompass.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCompass.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletCompass.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletCompass.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCompass.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletCompass.CALLBACK_HEADING] = 'h';
	this.callbackFormats[BrickletCompass.CALLBACK_MAGNETIC_FLUX_DENSITY] = 'i i i';



	this.getHeading = function(returnCallback, errorCallback) {
		/*
		Returns the heading in 1/10 degree (north = 0 degree, east = 90 degree).
		
		Alternatively you can use :func:`Get Magnetic Flux Density` and calculate the
		heading with ``heading = atan2(y, x) * 180 / PI``.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Heading` callback. You can set the callback configuration
		with :func:`Set Heading Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletCompass.FUNCTION_GET_HEADING, [], '', 'h', returnCallback, errorCallback, false);
	};
	this.setHeadingCallbackConfiguration = function(period, valueHasToChange, option, min, max, returnCallback, errorCallback) {
		/*
		The period in ms is the period with which the :cb:`Heading` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change
		within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		It is furthermore possible to constrain the callback with thresholds.
		
		The `option`-parameter together with min/max sets a threshold for the :cb:`Heading` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Threshold is turned off"
		 "'o'",    "Threshold is triggered when the value is *outside* the min and max values"
		 "'i'",    "Threshold is triggered when the value is *inside* or equal to the min and max values"
		 "'<'",    "Threshold is triggered when the value is smaller than the min value (max is ignored)"
		 "'>'",    "Threshold is triggered when the value is greater than the min value (max is ignored)"
		
		If the option is set to 'x' (threshold turned off) the callback is triggered with the fixed period.
		
		The default value is (0, false, 'x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletCompass.FUNCTION_SET_HEADING_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c h h', '', returnCallback, errorCallback, false);
	};
	this.getHeadingCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Heading Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletCompass.FUNCTION_GET_HEADING_CALLBACK_CONFIGURATION, [], '', 'I ? c h h', returnCallback, errorCallback, false);
	};
	this.getMagneticFluxDensity = function(returnCallback, errorCallback) {
		/*
		Returns the `magnetic flux density (magnetic induction) <https://en.wikipedia.org/wiki/Magnetic_flux>`__
		for all three axis in 1/10 `mG (milli Gauss) <https://en.wikipedia.org/wiki/Gauss_(unit)>`__.
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Magnetic Flux Density` callback. You can set the callback configuration
		with :func:`Set Magnetic Flux Density Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletCompass.FUNCTION_GET_MAGNETIC_FLUX_DENSITY, [], '', 'i i i', returnCallback, errorCallback, false);
	};
	this.setMagneticFluxDensityCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period in ms is the period with which the :cb:`Magnetic Flux Density` callback
		is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		The default value is (0, false).
		*/
		this.ipcon.sendRequest(this, BrickletCompass.FUNCTION_SET_MAGNETIC_FLUX_DENSITY_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', '', returnCallback, errorCallback, false);
	};
	this.getMagneticFluxDensityCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set Magnetic Flux Density Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletCompass.FUNCTION_GET_MAGNETIC_FLUX_DENSITY_CALLBACK_CONFIGURATION, [], '', 'I ?', returnCallback, errorCallback, false);
	};
	this.setConfiguration = function(dataRate, backgroundCalibration, returnCallback, errorCallback) {
		/*
		Configures the data rate and background calibration.
		
		* Data Rate: Sets the data rate that is used by the magnetometer.
		  The lower the data rate, the lower is the noise on the data.
		* Background Calibration: Set to *true* to enable the background
		  calibration and *false* to turn it off. If the background calibration
		  is enabled the sensing polarity is flipped once per second to automatically
		  calculate and remove offset that is caused by temperature changes.
		  This polarity flipping takes about 20ms. This means that once a second
		  you will not get new data for a period of 20ms. We highly recommend that
		  you keep the background calibration enabled and only disable it if the 20ms
		  off-time is a problem in your application.
		
		Default values: Data rate of 100Hz and background calibration enabled.
		*/
		this.ipcon.sendRequest(this, BrickletCompass.FUNCTION_SET_CONFIGURATION, [dataRate, backgroundCalibration], 'B ?', '', returnCallback, errorCallback, false);
	};
	this.getConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletCompass.FUNCTION_GET_CONFIGURATION, [], '', 'B ?', returnCallback, errorCallback, false);
	};
	this.setCalibration = function(offset, gain, returnCallback, errorCallback) {
		/*
		Sets offset and gain for each of the three axes.
		
		The Bricklet is factory calibrated. If you want to re-calibrate the
		Bricklet we recommend that you do the calibration through Brick Viewer.
		
		The calibration is saved in non-volatile memory and only has to be
		done once.
		*/
		this.ipcon.sendRequest(this, BrickletCompass.FUNCTION_SET_CALIBRATION, [offset, gain], 'h3 h3', '', returnCallback, errorCallback, false);
	};
	this.getCalibration = function(returnCallback, errorCallback) {
		/*
		Returns the calibration parameters as set by :func:`Set Calibration`.
		*/
		this.ipcon.sendRequest(this, BrickletCompass.FUNCTION_GET_CALIBRATION, [], '', 'h3 h3', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletCompass.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 'I I I I', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletCompass.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 'B', returnCallback, errorCallback, false);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletCompass.FUNCTION_GET_BOOTLOADER_MODE, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletCompass.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', '', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletCompass.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 'B', returnCallback, errorCallback, false);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletCompass.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', '', returnCallback, errorCallback, false);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletCompass.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature in °C as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletCompass.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 'h', returnCallback, errorCallback, false);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletCompass.FUNCTION_RESET, [], '', '', returnCallback, errorCallback, false);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletCompass.FUNCTION_WRITE_UID, [uid], 'I', '', returnCallback, errorCallback, false);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletCompass.FUNCTION_READ_UID, [], '', 'I', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletCompass.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
}

module.exports = BrickletCompass;
