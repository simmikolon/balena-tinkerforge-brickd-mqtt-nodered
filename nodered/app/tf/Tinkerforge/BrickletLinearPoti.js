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

BrickletLinearPoti.DEVICE_IDENTIFIER = 213;
BrickletLinearPoti.DEVICE_DISPLAY_NAME = 'Linear Poti Bricklet';
BrickletLinearPoti.CALLBACK_POSITION = 13;
BrickletLinearPoti.CALLBACK_ANALOG_VALUE = 14;
BrickletLinearPoti.CALLBACK_POSITION_REACHED = 15;
BrickletLinearPoti.CALLBACK_ANALOG_VALUE_REACHED = 16;
BrickletLinearPoti.FUNCTION_GET_POSITION = 1;
BrickletLinearPoti.FUNCTION_GET_ANALOG_VALUE = 2;
BrickletLinearPoti.FUNCTION_SET_POSITION_CALLBACK_PERIOD = 3;
BrickletLinearPoti.FUNCTION_GET_POSITION_CALLBACK_PERIOD = 4;
BrickletLinearPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD = 5;
BrickletLinearPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD = 6;
BrickletLinearPoti.FUNCTION_SET_POSITION_CALLBACK_THRESHOLD = 7;
BrickletLinearPoti.FUNCTION_GET_POSITION_CALLBACK_THRESHOLD = 8;
BrickletLinearPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD = 9;
BrickletLinearPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD = 10;
BrickletLinearPoti.FUNCTION_SET_DEBOUNCE_PERIOD = 11;
BrickletLinearPoti.FUNCTION_GET_DEBOUNCE_PERIOD = 12;
BrickletLinearPoti.FUNCTION_GET_IDENTITY = 255;
BrickletLinearPoti.THRESHOLD_OPTION_OFF = 'x';
BrickletLinearPoti.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletLinearPoti.THRESHOLD_OPTION_INSIDE = 'i';
BrickletLinearPoti.THRESHOLD_OPTION_SMALLER = '<';
BrickletLinearPoti.THRESHOLD_OPTION_GREATER = '>';

function BrickletLinearPoti(uid, ipcon) {
	//59mm linear potentiometer

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletLinearPoti.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletLinearPoti.FUNCTION_GET_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLinearPoti.FUNCTION_GET_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLinearPoti.FUNCTION_SET_POSITION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLinearPoti.FUNCTION_GET_POSITION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLinearPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLinearPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLinearPoti.FUNCTION_SET_POSITION_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLinearPoti.FUNCTION_GET_POSITION_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLinearPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLinearPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLinearPoti.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLinearPoti.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLinearPoti.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletLinearPoti.CALLBACK_POSITION] = 'H';
	this.callbackFormats[BrickletLinearPoti.CALLBACK_ANALOG_VALUE] = 'H';
	this.callbackFormats[BrickletLinearPoti.CALLBACK_POSITION_REACHED] = 'H';
	this.callbackFormats[BrickletLinearPoti.CALLBACK_ANALOG_VALUE_REACHED] = 'H';



	this.getPosition = function(returnCallback, errorCallback) {
		/*
		Returns the position of the linear potentiometer. The value is
		between 0 (slider down) and 100 (slider up).
		
		If you want to get the position periodically, it is recommended to use the
		:cb:`Position` callback and set the period with
		:func:`Set Position Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_GET_POSITION, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.getAnalogValue = function(returnCallback, errorCallback) {
		/*
		Returns the value as read by a 12-bit analog-to-digital converter.
		The value is between 0 and 4095.
		
		.. note::
		 The value returned by :func:`Get Position` is averaged over several samples
		 to yield less noise, while :func:`Get Analog Value` gives back raw
		 unfiltered analog values. The only reason to use :func:`Get Analog Value` is,
		 if you need the full resolution of the analog-to-digital converter.
		
		If you want the analog value periodically, it is recommended to use the
		:cb:`Analog Value` callback and set the period with
		:func:`Set Analog Value Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_GET_ANALOG_VALUE, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.setPositionCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :cb:`Position` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Position` callback is only triggered if the position has changed
		since the last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_SET_POSITION_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback, false);
	};
	this.getPositionCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Position Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_GET_POSITION_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setAnalogValueCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :cb:`Analog Value` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Analog Value` callback is only triggered if the analog value has
		changed since the last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback, false);
	};
	this.getAnalogValueCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Analog Value Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setPositionCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Position Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the position is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the position is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the position is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the position is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_SET_POSITION_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback, false);
	};
	this.getPositionCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Position Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_GET_POSITION_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback, false);
	};
	this.getAnalogValueCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Analog Value Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback, false);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the threshold callbacks
		
		* :cb:`Position Reached`,
		* :cb:`Analog Value Reached`
		
		are triggered, if the thresholds
		
		* :func:`Set Position Callback Threshold`,
		* :func:`Set Analog Value Callback Threshold`
		
		keep being reached.
		
		The default value is 100.
		*/
		this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback, false);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletLinearPoti.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
}

module.exports = BrickletLinearPoti;
