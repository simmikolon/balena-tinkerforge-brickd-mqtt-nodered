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

BrickletCurrent12.DEVICE_IDENTIFIER = 23;
BrickletCurrent12.DEVICE_DISPLAY_NAME = 'Current12 Bricklet';
BrickletCurrent12.CALLBACK_CURRENT = 15;
BrickletCurrent12.CALLBACK_ANALOG_VALUE = 16;
BrickletCurrent12.CALLBACK_CURRENT_REACHED = 17;
BrickletCurrent12.CALLBACK_ANALOG_VALUE_REACHED = 18;
BrickletCurrent12.CALLBACK_OVER_CURRENT = 19;
BrickletCurrent12.FUNCTION_GET_CURRENT = 1;
BrickletCurrent12.FUNCTION_CALIBRATE = 2;
BrickletCurrent12.FUNCTION_IS_OVER_CURRENT = 3;
BrickletCurrent12.FUNCTION_GET_ANALOG_VALUE = 4;
BrickletCurrent12.FUNCTION_SET_CURRENT_CALLBACK_PERIOD = 5;
BrickletCurrent12.FUNCTION_GET_CURRENT_CALLBACK_PERIOD = 6;
BrickletCurrent12.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD = 7;
BrickletCurrent12.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD = 8;
BrickletCurrent12.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD = 9;
BrickletCurrent12.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD = 10;
BrickletCurrent12.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD = 11;
BrickletCurrent12.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD = 12;
BrickletCurrent12.FUNCTION_SET_DEBOUNCE_PERIOD = 13;
BrickletCurrent12.FUNCTION_GET_DEBOUNCE_PERIOD = 14;
BrickletCurrent12.FUNCTION_GET_IDENTITY = 255;
BrickletCurrent12.THRESHOLD_OPTION_OFF = 'x';
BrickletCurrent12.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletCurrent12.THRESHOLD_OPTION_INSIDE = 'i';
BrickletCurrent12.THRESHOLD_OPTION_SMALLER = '<';
BrickletCurrent12.THRESHOLD_OPTION_GREATER = '>';

function BrickletCurrent12(uid, ipcon) {
	//Measures AC/DC current between -12.5A and +12.5A

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletCurrent12.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletCurrent12.FUNCTION_GET_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCurrent12.FUNCTION_CALIBRATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletCurrent12.FUNCTION_IS_OVER_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCurrent12.FUNCTION_GET_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCurrent12.FUNCTION_SET_CURRENT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletCurrent12.FUNCTION_GET_CURRENT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCurrent12.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletCurrent12.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCurrent12.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletCurrent12.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCurrent12.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletCurrent12.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCurrent12.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletCurrent12.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCurrent12.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletCurrent12.CALLBACK_CURRENT] = 'h';
	this.callbackFormats[BrickletCurrent12.CALLBACK_ANALOG_VALUE] = 'H';
	this.callbackFormats[BrickletCurrent12.CALLBACK_CURRENT_REACHED] = 'h';
	this.callbackFormats[BrickletCurrent12.CALLBACK_ANALOG_VALUE_REACHED] = 'H';
	this.callbackFormats[BrickletCurrent12.CALLBACK_OVER_CURRENT] = '';



	this.getCurrent = function(returnCallback, errorCallback) {
		/*
		Returns the current of the sensor. The value is in mA
		and between -12500mA and 12500mA.
		
		If you want to get the current periodically, it is recommended to use the
		:cb:`Current` callback and set the period with
		:func:`Set Current Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_GET_CURRENT, [], '', 'h', returnCallback, errorCallback, false);
	};
	this.calibrate = function(returnCallback, errorCallback) {
		/*
		Calibrates the 0 value of the sensor. You have to call this function
		when there is no current present.
		
		The zero point of the current sensor
		is depending on the exact properties of the analog-to-digital converter,
		the length of the Bricklet cable and the temperature. Thus, if you change
		the Brick or the environment in which the Bricklet is used, you might
		have to recalibrate.
		
		The resulting calibration will be saved on the EEPROM of the Current
		Bricklet.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_CALIBRATE, [], '', '', returnCallback, errorCallback, false);
	};
	this.isOverCurrent = function(returnCallback, errorCallback) {
		/*
		Returns *true* if more than 12.5A were measured.
		
		.. note::
		 To reset this value you have to power cycle the Bricklet.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_IS_OVER_CURRENT, [], '', '?', returnCallback, errorCallback, false);
	};
	this.getAnalogValue = function(returnCallback, errorCallback) {
		/*
		Returns the value as read by a 12-bit analog-to-digital converter.
		The value is between 0 and 4095.
		
		.. note::
		 The value returned by :func:`Get Current` is averaged over several samples
		 to yield less noise, while :func:`Get Analog Value` gives back raw
		 unfiltered analog values. The only reason to use :func:`Get Analog Value` is,
		 if you need the full resolution of the analog-to-digital converter.
		
		If you want the analog value periodically, it is recommended to use the
		:cb:`Analog Value` callback and set the period with
		:func:`Set Analog Value Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_GET_ANALOG_VALUE, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.setCurrentCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :cb:`Current` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Current` callback is only triggered if the current has changed since
		the last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_SET_CURRENT_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback, false);
	};
	this.getCurrentCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Current Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_GET_CURRENT_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setAnalogValueCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :cb:`Analog Value` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Analog Value` callback is only triggered if the analog value has
		changed since the last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback, false);
	};
	this.getAnalogValueCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Analog Value Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setCurrentCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Current Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the current is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the current is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the current is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the current is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD, [option, min, max], 'c h h', '', returnCallback, errorCallback, false);
	};
	this.getCurrentCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Current Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD, [], '', 'c h h', returnCallback, errorCallback, false);
	};
	this.setAnalogValueCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Analog Value Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the analog value is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the analog value is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the analog value is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the analog value is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback, false);
	};
	this.getAnalogValueCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Analog Value Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback, false);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the threshold callbacks
		
		* :cb:`Current Reached`,
		* :cb:`Analog Value Reached`
		
		are triggered, if the thresholds
		
		* :func:`Set Current Callback Threshold`,
		* :func:`Set Analog Value Callback Threshold`
		
		keep being reached.
		
		The default value is 100.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback, false);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletCurrent12.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
}

module.exports = BrickletCurrent12;
