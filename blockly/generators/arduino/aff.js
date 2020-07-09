/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Time blocks.
 *     Arduino built-in function docs: http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Arduino.aff');

goog.require('Blockly.Arduino');




/**
 * Code generator for the delay Arduino block.
 * Arduino code: loop { delay(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['initialise_wifi'] = function (block) {
    Blockly.Arduino.addInclude('SoftwareSerial1', '#define RX A0');
    Blockly.Arduino.addInclude('SoftwareSerial2', '#define TX A1');
    Blockly.Arduino.addInclude('SoftwareSerial3', '#include <SoftwareSerial.h>');
    Blockly.Arduino.addInclude('SoftwareSerial4', 'SoftwareSerial WiFiModule(RX, TX);');
    
    var code = 'WiFiModule.begin(19200); // begin the communication between the WiFi module and the microcontroller on the board\n';
    return code;
};

Blockly.Arduino['send_wifi'] = function (block) {
    var varName = Blockly.Arduino.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    // var varKey = Blockly.Arduino.variableDB_.getName(
    //     block.getField('VAR'), Blockly.Variables.NAME_TYPE);
    return 'WiFiModule.println("' + varName + '=" + String(' + varName + '));\n';
};

Blockly.Arduino['dc_motor'] = function (block) {
    // var pin = Blockly.Arduino.variableDB_.getName(
    //     block.getFieldValue('PIN'), Blockly.Variables.NAME_TYPE);
    var pin = block.getFieldValue('PIN');
    var speed = Blockly.Arduino.valueToCode(
        block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '90';
    // var varKey = Blockly.Arduino.variableDB_.getName(
    //     block.getField('VAR'), Blockly.Variables.NAME_TYPE);
    return 'analogWrite('+pin+', map('+speed+', 0, 100, 0, 255));\n';
};

Blockly.Arduino['led'] = function (block) {
    // var pin = Blockly.Arduino.variableDB_.getName(
    //     block.getFieldValue('PIN'), Blockly.Variables.NAME_TYPE);
    var pin = block.getFieldValue('PIN');
    var speed = Blockly.Arduino.valueToCode(
        block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '90';
    // var varKey = Blockly.Arduino.variableDB_.getName(
    //     block.getField('VAR'), Blockly.Variables.NAME_TYPE);
    return 'analogWrite(' + pin + ', map(' + speed + ', 0, 100, 0, 255));\n';
};

Blockly.Arduino['buzzer'] = function (block) {
    // var pin = Blockly.Arduino.variableDB_.getName(
    //     block.getFieldValue('PIN'), Blockly.Variables.NAME_TYPE);
    var pin = block.getFieldValue('PIN');
    var speed = Blockly.Arduino.valueToCode(
        block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '90';
    // var varKey = Blockly.Arduino.variableDB_.getName(
    //     block.getField('VAR'), Blockly.Variables.NAME_TYPE);
    return 'analogWrite(' + pin + ', map(' + speed + ', 0, 100, 0, 255));\n';
};

Blockly.Arduino['fan'] = function (block) {
    // var pin = Blockly.Arduino.variableDB_.getName(
    //     block.getFieldValue('PIN'), Blockly.Variables.NAME_TYPE);
    var pin = block.getFieldValue('PIN');
    // var speed = block.getFieldValue('SPEED');
    var speed = Blockly.Arduino.valueToCode(
        block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '90';
    // var servoAngle = Blockly.Arduino.valueToCode(
        // block, 'SERVO_ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '90';
    // var varKey = Blockly.Arduino.variableDB_.getName(
    //     block.getField('VAR'), Blockly.Variables.NAME_TYPE);
    return 'analogWrite(' + pin + ', map(' + speed + ', 0, 100, 0, 255));\n';
};


Blockly.Arduino['read_temp'] = function (block) {
    var pin = block.getFieldValue('PIN');
    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.PinTypes.INPUT, 'Digital Read');

    var pinSetupCode = 'pinMode(' + pin + ', INPUT);';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    var code =  '-21.231 * ((analogRead('+pin+') * 0.0048828125)- 3.765)';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['read_light'] = function (block) {
    var pin = block.getFieldValue('PIN');
    Blockly.Arduino.reservePin(
        block, pin, Blockly.Arduino.PinTypes.INPUT, 'Digital Read');

    var pinSetupCode = 'pinMode(' + pin + ', INPUT)';
    Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

    var code = 'map(analogRead('+pin+'), 0, 1023, 0, 100)';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['command_recieved'] = function (block) {
    Blockly.Arduino.addInclude('Command', 'String Command = "";');
    var n = 0;
    var branch = Blockly.Arduino.statementToCode(block, 'DO' + n);
    var code = 'if (WiFiModule.available() > 0) {\nCommand = WiFiModule.readStringUntil(",");\n' + branch + '}';
    return code + '\n';
};

/**
 * Code generator to set an angle (Y) value to a servo pin (X).
 * Arduino code: #include <Servo.h>
 *               Servo myServoX;
 *               setup { myServoX.attach(X); }
 *               loop  { myServoX.write(Y);  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['servo'] = function (block) {
    var pinKey = block.getFieldValue('SERVO_PIN');
    var servoAngle = Blockly.Arduino.valueToCode(
        block, 'SERVO_ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '90';
    var servoName = 'myServo' + pinKey;

    Blockly.Arduino.reservePin(
        block, pinKey, Blockly.Arduino.PinTypes.SERVO, 'Servo Write');

    Blockly.Arduino.addInclude('servo', '#include <Servo.h>');
    Blockly.Arduino.addDeclaration('servo_' + pinKey, 'Servo ' + servoName + ';');

    var setupCode = servoName + '.attach(' + pinKey + ');';
    Blockly.Arduino.addSetup('servo_' + pinKey, setupCode, true);

    var code = servoName + '.write(' + servoAngle + ');\n';
    return code;
};