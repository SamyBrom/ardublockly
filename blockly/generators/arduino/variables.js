/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Generating Arduino code for variables blocks.
 */
'use strict';

goog.provide('Blockly.Arduino.variables');

goog.require('Blockly.Arduino');


Blockly.Arduino.variables = {};
Blockly.Arduino.variables_set = function () {
  var a = Blockly.Arduino.valueToCode(this, "VALUE", Blockly.Arduino.ORDER_ASSIGNMENT) || "0";
  return Blockly.Arduino.variableDB_.getName(this.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE) + " = " + a + ";\n"
};
Blockly.Arduino.variables_get = function () {
  return [Blockly.Arduino.variableDB_.getName(this.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE), Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino.variables_set_text = function () {
  var a = Blockly.Arduino.valueToCode(this, "VALUE", Blockly.Arduino.ORDER_ASSIGNMENT) || '""';
  return "s_" + Blockly.Arduino.variableDB_.getName(this.getFieldValue("VARTEXT"), Blockly.Variables.NAME_TYPE) + " = " + a + ";\n"
};
Blockly.Arduino.variables_get_text = function () {
  return ["s_" + Blockly.Arduino.variableDB_.getName(this.getFieldValue("VARTEXT"), Blockly.Variables.NAME_TYPE), Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino.variables_set_bool = function () {
  var a = Blockly.Arduino.valueToCode(this, "VALUE", Blockly.Arduino.ORDER_ASSIGNMENT) || "false";
  return "b_" + Blockly.Arduino.variableDB_.getName(this.getFieldValue("VARBOOL"), Blockly.Variables.NAME_TYPE) + " = " + a + ";\n"
};
Blockly.Arduino.variables_get_bool = function () {
  return ["b_" + Blockly.Arduino.variableDB_.getName(this.getFieldValue("VARBOOL"), Blockly.Variables.NAME_TYPE), Blockly.Arduino.ORDER_ATOMIC]
};
/**
 * Code generator for variable (X) casting (Y).
 * Arduino code: loop { (Y)X }
 * @param {Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['variables_set_type'] = function(block) {
  var argument0 = Blockly.Arduino.valueToCode(block, 'VARIABLE_SETTYPE_INPUT',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var varType = Blockly.Arduino.getArduinoType_(
      Blockly.Types[block.getFieldValue('VARIABLE_SETTYPE_TYPE')]);
  var code = '(' + varType + ')(' + argument0 + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.variables_set_text = function () {
  var a = Blockly.Arduino.valueToCode(this, "VALUE", Blockly.Arduino.ORDER_ASSIGNMENT) || '""';
  return "s_" + Blockly.Arduino.variableDB_.getName(this.getFieldValue("VARTEXT"), Blockly.Variables.NAME_TYPE) + " = " + a + ";\n"
};

Blockly.Arduino.logic_boolean2 = function () {
  return ["TRUE" == this.getFieldValue("BOOL") ? "true" : "false", Blockly.Arduino.ORDER_ATOMIC]
};