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

BrickletRealTimeClock.DEVICE_IDENTIFIER = 268;
BrickletRealTimeClock.DEVICE_DISPLAY_NAME = 'Real-Time Clock Bricklet';
BrickletRealTimeClock.CALLBACK_DATE_TIME = 10;
BrickletRealTimeClock.CALLBACK_ALARM = 11;
BrickletRealTimeClock.FUNCTION_SET_DATE_TIME = 1;
BrickletRealTimeClock.FUNCTION_GET_DATE_TIME = 2;
BrickletRealTimeClock.FUNCTION_GET_TIMESTAMP = 3;
BrickletRealTimeClock.FUNCTION_SET_OFFSET = 4;
BrickletRealTimeClock.FUNCTION_GET_OFFSET = 5;
BrickletRealTimeClock.FUNCTION_SET_DATE_TIME_CALLBACK_PERIOD = 6;
BrickletRealTimeClock.FUNCTION_GET_DATE_TIME_CALLBACK_PERIOD = 7;
BrickletRealTimeClock.FUNCTION_SET_ALARM = 8;
BrickletRealTimeClock.FUNCTION_GET_ALARM = 9;
BrickletRealTimeClock.FUNCTION_GET_IDENTITY = 255;
BrickletRealTimeClock.WEEKDAY_MONDAY = 1;
BrickletRealTimeClock.WEEKDAY_TUESDAY = 2;
BrickletRealTimeClock.WEEKDAY_WEDNESDAY = 3;
BrickletRealTimeClock.WEEKDAY_THURSDAY = 4;
BrickletRealTimeClock.WEEKDAY_FRIDAY = 5;
BrickletRealTimeClock.WEEKDAY_SATURDAY = 6;
BrickletRealTimeClock.WEEKDAY_SUNDAY = 7;
BrickletRealTimeClock.ALARM_MATCH_DISABLED = -1;
BrickletRealTimeClock.ALARM_INTERVAL_DISABLED = -1;

function BrickletRealTimeClock(uid, ipcon) {
	//Battery-backed real-time clock

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletRealTimeClock.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletRealTimeClock.FUNCTION_SET_DATE_TIME] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRealTimeClock.FUNCTION_GET_DATE_TIME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRealTimeClock.FUNCTION_GET_TIMESTAMP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRealTimeClock.FUNCTION_SET_OFFSET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRealTimeClock.FUNCTION_GET_OFFSET] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRealTimeClock.FUNCTION_SET_DATE_TIME_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRealTimeClock.FUNCTION_GET_DATE_TIME_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRealTimeClock.FUNCTION_SET_ALARM] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRealTimeClock.FUNCTION_GET_ALARM] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRealTimeClock.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletRealTimeClock.CALLBACK_DATE_TIME] = 'H B B B B B B B q';
	this.callbackFormats[BrickletRealTimeClock.CALLBACK_ALARM] = 'H B B B B B B B q';



	this.setDateTime = function(year, month, day, hour, minute, second, centisecond, weekday, returnCallback, errorCallback) {
		/*
		Sets the current date (including weekday) and the current time with hundredths
		of a second resolution.
		
		Possible value ranges:
		
		* Year: 2000 to 2099
		* Month: 1 to 12 (January to December)
		* Day: 1 to 31
		* Hour: 0 to 23
		* Minute: 0 to 59
		* Second: 0 to 59
		* Centisecond: 0 to 99
		* Weekday: 1 to 7 (Monday to Sunday)
		
		If the backup battery is installed then the real-time clock keeps date and
		time even if the Bricklet is not powered by a Brick.
		
		The real-time clock handles leap year and inserts the 29th of February
		accordingly. But leap seconds, time zones and daylight saving time are not
		handled.
		*/
		this.ipcon.sendRequest(this, BrickletRealTimeClock.FUNCTION_SET_DATE_TIME, [year, month, day, hour, minute, second, centisecond, weekday], 'H B B B B B B B', '', returnCallback, errorCallback, false);
	};
	this.getDateTime = function(returnCallback, errorCallback) {
		/*
		Returns the current date (including weekday) and the current time of the
		real-time clock with hundredths of a second resolution.
		*/
		this.ipcon.sendRequest(this, BrickletRealTimeClock.FUNCTION_GET_DATE_TIME, [], '', 'H B B B B B B B', returnCallback, errorCallback, false);
	};
	this.getTimestamp = function(returnCallback, errorCallback) {
		/*
		Returns the current date and the time of the real-time clock converted to
		milliseconds. The timestamp has an effective resolution of hundredths of a
		second.
		*/
		this.ipcon.sendRequest(this, BrickletRealTimeClock.FUNCTION_GET_TIMESTAMP, [], '', 'q', returnCallback, errorCallback, false);
	};
	this.setOffset = function(offset, returnCallback, errorCallback) {
		/*
		Sets the offset the real-time clock should compensate for in 2.17 ppm steps
		between -277.76 ppm (-128) and +275.59 ppm (127).
		
		The real-time clock time can deviate from the actual time due to the frequency
		deviation of its 32.768 kHz crystal. Even without compensation (factory
		default) the resulting time deviation should be at most ±20 ppm (±52.6
		seconds per month).
		
		This deviation can be calculated by comparing the same duration measured by the
		real-time clock (``rtc_duration``) an accurate reference clock
		(``ref_duration``).
		
		For best results the configured offset should be set to 0 ppm first and then a
		duration of at least 6 hours should be measured.
		
		The new offset (``new_offset``) can be calculated from the currently configured
		offset (``current_offset``) and the measured durations as follow::
		
		  new_offset = current_offset - round(1000000 * (rtc_duration - ref_duration) / rtc_duration / 2.17)
		
		If you want to calculate the offset, then we recommend using the calibration
		dialog in Brick Viewer, instead of doing it manually.
		
		The offset is saved in the EEPROM of the Bricklet and only needs to be
		configured once.
		*/
		this.ipcon.sendRequest(this, BrickletRealTimeClock.FUNCTION_SET_OFFSET, [offset], 'b', '', returnCallback, errorCallback, false);
	};
	this.getOffset = function(returnCallback, errorCallback) {
		/*
		Returns the offset as set by :func:`Set Offset`.
		*/
		this.ipcon.sendRequest(this, BrickletRealTimeClock.FUNCTION_GET_OFFSET, [], '', 'b', returnCallback, errorCallback, false);
	};
	this.setDateTimeCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :cb:`Date Time` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Date Time` Callback is only triggered if the date or time changed
		since the last triggering.
		
		The default value is 0.
		
		.. versionadded:: 2.0.1$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletRealTimeClock.FUNCTION_SET_DATE_TIME_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback, false);
	};
	this.getDateTimeCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Date Time Callback Period`.
		
		.. versionadded:: 2.0.1$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletRealTimeClock.FUNCTION_GET_DATE_TIME_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setAlarm = function(month, day, hour, minute, second, weekday, interval, returnCallback, errorCallback) {
		/*
		Configures a repeatable alarm. The :cb:`Alarm` callback is triggered if the
		current date and time matches the configured alarm.
		
		Setting a parameter to -1 means that it should be disabled and doesn't take part
		in the match. Setting all parameters to -1 disables the alarm completely.
		
		For example, to make the alarm trigger every day at 7:30 AM it can be
		configured as (-1, -1, 7, 30, -1, -1, -1). The hour is set to match 7 and the
		minute is set to match 30. The alarm is triggered if all enabled parameters
		match.
		
		The interval has a special role. It allows to make the alarm reconfigure itself.
		This is useful if you need a repeated alarm that cannot be expressed by matching
		the current date and time. For example, to make the alarm trigger every 23
		seconds it can be configured as (-1, -1, -1, -1, -1, -1, 23). Internally the
		Bricklet will take the current date and time, add 23 seconds to it and set the
		result as its alarm. The first alarm will be triggered 23 seconds after the
		call. Because the interval is not -1, the Bricklet will do the same again
		internally, take the current date and time, add 23 seconds to it and set that
		as its alarm. This results in a repeated alarm that triggers every 23 seconds.
		
		The interval can also be used in combination with the other parameters. For
		example, configuring the alarm as (-1, -1, 7, 30, -1, -1, 300) results in an
		alarm that triggers every day at 7:30 AM and is then repeated every 5 minutes.
		
		.. versionadded:: 2.0.1$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletRealTimeClock.FUNCTION_SET_ALARM, [month, day, hour, minute, second, weekday, interval], 'b b b b b b i', '', returnCallback, errorCallback, false);
	};
	this.getAlarm = function(returnCallback, errorCallback) {
		/*
		Returns the alarm configuration as set by :func:`Set Alarm`.
		
		.. versionadded:: 2.0.1$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletRealTimeClock.FUNCTION_GET_ALARM, [], '', 'b b b b b b i', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletRealTimeClock.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
}

module.exports = BrickletRealTimeClock;
