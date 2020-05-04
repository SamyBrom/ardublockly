/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Block for the Arduino map functionality.
 *     The Arduino built in functions syntax can be found at:
 *     http://arduino.cc/en/Reference/HomePage
 *
 * TODO: This block can be improved to set the new range properly.
 */
'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.variables.HUE = 330;

Blockly.Blocks.variables = {};
Blockly.Blocks.variables.HUE = 330;
Blockly.Blocks.variables.HUE2 = 75;
Blockly.Blocks.variables.HUE3 = 290;

var booleanValues = [
  ["On", true],
  ["Off", false]
]
Blockly.Blocks.variables_get = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.appendDummyInput().appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), "VAR");
    this.setOutput(!0, "Number");
    this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET
  },
  getVars: function () {
    return [this.getFieldValue("VAR")]
  },
  renameVar: function (a, b) {
    Blockly.Names.equals(a, this.getFieldValue("VAR")) &&
      this.setFieldValue(b, "VAR")
  },
  contextMenuType_: "variables_set",
  customContextMenu: function (a) {
    var b = {
      enabled: !0
    },
      c = this.getFieldValue("VAR");
    b.text = this.contextMenuMsg_.replace("%1", c);
    c = goog.dom.createDom("field", null, c);
    c.setAttribute("name", "VAR");
    c = goog.dom.createDom("block", null, c);
    c.setAttribute("type", this.contextMenuType_);
    b.callback = Blockly.ContextMenu.callbackFactory(this, c);
    a.push(b)
  }
};
Blockly.Blocks.variables_set = {
  init: function () {
    this.setColour(Blockly.Blocks.variables.HUE);
    this.appendValueInput("VALUE").appendField("Set").appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), "VAR").appendField("=").setCheck("Number");
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP)
  },
  getVars: function () {
    return [this.getFieldValue("VAR")]
  },
  renameVar: function (a,
    b) {
    Blockly.Names.equals(a, this.getFieldValue("VAR")) && this.setFieldValue(b, "VAR")
  },
  contextMenuType_: "variables_get",
  customContextMenu: Blockly.Blocks.variables_get.customContextMenu
};
Blockly.Blocks.variables_get_text = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.setColour(Blockly.Blocks.variables.HUE2);
    this.appendDummyInput().appendField(new Blockly.FieldTextInput('text'), "VARTEXT");
    this.setOutput(!0, "String");
    this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET
  },
  getVarsText: function () {
    return [this.getFieldValue("VARTEXT")]
  },
  renameVarText: function (a, b) {
    Blockly.Names.equals(a,
      this.getFieldValue("VARTEXT")) && this.setFieldValue(b, "VARTEXT")
  },
  contextMenuType_: "variables_set_text",
  customContextMenu: function (a) {
    var b = {
      enabled: !0
    },
      c = this.getFieldValue("VARTEXT");
    b.text = this.contextMenuMsg_.replace("%1", c);
    c = goog.dom.createDom("field", null, c);
    c.setAttribute("name", "VARTEXT");
    c = goog.dom.createDom("block", null, c);
    c.setAttribute("type", this.contextMenuType_);
    b.callback = Blockly.ContextMenu.callbackFactory(this, c);
    a.push(b)
  }
};
Blockly.Blocks.variables_set_text = {
  init: function () {
    this.setColour(Blockly.Blocks.variables.HUE2);
    this.appendValueInput("VALUE")
      .appendField("Set")
      // .appendField(new Blockly.FieldTextInput(Blockly.Msg.VARIABLES_DEFAULT_NAME_TEXT), "VARTEXT")
      .appendField(new Blockly.FieldVariable(
        'text'), 'VARTEXT')
      .appendField("=");
      // .setCheck("String");
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    // this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP)
  },
  getVarsText: function () {
    return [this.getFieldValue("VARTEXT")]
  },
  renameVarText: function (a, b) {
    Blockly.Names.equals(a,
      this.getFieldValue("VARTEXT")) && this.setFieldValue(b, "VARTEXT")
  }
};
Blockly.Blocks.variables_get_bool = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.setColour(Blockly.Blocks.variables.HUE3);
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable('state'), "VARBOOL");
    this.setOutput(!0, "Boolean");
    this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET
  },
  getVarsBool: function () {
    return [this.getFieldValue("VARBOOL")]
  },
  renameVarBool: function (a, b) {
    Blockly.Names.equals(a,
      this.getFieldValue("VARBOOL")) && this.setFieldValue(b, "VARBOOL")
  },
  contextMenuType_: "variables_set_bool",
  customContextMenu: function (a) {
    var b = {
      enabled: !0
    },
      c = this.getFieldValue("VARBOOL");
    b.text = this.contextMenuMsg_.replace("%1", c);
    c = goog.dom.createDom("field", null, c);
    c.setAttribute("name", "VARBOOL");
    c = goog.dom.createDom("block", null, c);
    c.setAttribute("type", this.contextMenuType_);
    b.callback = Blockly.ContextMenu.callbackFactory(this, c);
    a.push(b)
  }
};
Blockly.Blocks.variables_set_bool = {
  init: function () {
    this.setColour(Blockly.Blocks.variables.HUE3);
    this.appendValueInput("VALUE")
      .appendField("Set")
      .appendField(new Blockly.FieldVariable('state'), "VARBOOL")
      .appendField("=").setCheck("Boolean");
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP)
  },
  getVarsBool: function () {
    return [this.getFieldValue("VARBOOL")]
  },
  renameVarBool: function (a, b) {
    Blockly.Names.equals(a,
      this.getFieldValue("VARBOOL")) && this.setFieldValue(b, "VARBOOL")
  }
};

Blockly.Blocks['variables_set_type'] = {
  /**
   * Block for variable casting.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/HomePage');
    this.setColour(Blockly.Blocks.variables.HUE);
    this.appendValueInput('VARIABLE_SETTYPE_INPUT');
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_VAR_AS)
        .appendField(new Blockly.FieldDropdown(
                         Blockly.Types.getValidTypeArray()),
                     'VARIABLE_SETTYPE_TYPE');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.ARD_VAR_AS_TIP);
  },
  /**
   * Assigns a type to the block based on the selected type to cast.
   * @return {!string} Blockly type for this block configuration.
   * @this Blockly.Block
   */
  getBlockType: function() {
    var blocklyTypeKey = this.getFieldValue('VARIABLE_SETTYPE_TYPE');
    return Blockly.Types[blocklyTypeKey];
  }
};

Blockly.Blocks.logic_boolean2 = {
  init: function () {
    this.jsonInit({
      message0: "%1",
      args0: [{
        type: "field_dropdown",
        name: "BOOL",
        options: [
          ["On", "TRUE"],
          ["Off", "FALSE"]
        ]
      }],
      output: "Boolean",
      colour: Blockly.Blocks.logic.HUE,
      tooltip: Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP,
      helpUrl: Blockly.Msg.LOGIC_BOOLEAN_HELPURL
    })
  }
};