/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Logic blocks for Blockly.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Blocks.aff');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

var affAnaloguePins = [
    ["A2", "A2"],
    ["A3", "A3"],
    ["A4", "A4"],
    ["A5", "A5"],
    ["A6", "A6"],
    ["A7", "A7"],
]

var affDigitalPins = [
    ["D0", "D0"],
    ["D1", "D1"],
    ["D2", "D2"],
    ["D3", "D3"],
    ["D4", "D4"],
    ["D5", "D5"],
    ["D6", "D6"],
    ["D7", "D7"],
    ["D8", "D8"],
    ["D9", "D9"],
    ["D10", "D10"],
    ["D11", "D11"],
    ["D12", "D12"],
    ["D13", "D13"],
]

var percentages = [
    ["0%","0"],
    ["25%","25"],
    ["50%","50"],
    ["75%","75"],
    ["100%","100"],
]

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.aff.HUE = 210;

Blockly.Blocks['initialise_wifi'] = {
    /**
     * Delay block definition
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('http://arduino.cc/en/Reference/Delay');
        this.setColour(160);
        // this.appendValueInput('DELAY_TIME_MILI')
        //     .setCheck(Blockly.Types.NUMBER.checkList)
        //     .appendField(Blockly.Msg.ARD_TIME_DELAY);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(
                "/img/blockly/wifi.png",
                15,
                15,
                "*"))
            .appendField("Initialise WiFi");
        // this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_TIME_DELAY_TIP);
    }
};

Blockly.Blocks['send_wifi'] = {
    /**
     * Block for appending to a variable in place.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl(Blockly.Msg.TEXT_APPEND_HELPURL);
        this.setColour(160);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(
                "/img/blockly/wifi.png",
                15,
                15,
                "*"))
            .appendField("Send To WiFi")
            .appendField(new Blockly.FieldVariable(
                Blockly.Msg.TEXT_APPEND_VARIABLE), 'VAR')
            // .appendField(Blockly.Msg.TEXT_APPEND_APPENDTEXT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function () {
            return Blockly.Msg.TEXT_APPEND_TOOLTIP.replace('%1',
                thisBlock.getFieldValue('VAR'));
        });
    },
    /**
     * Set's the type of the variable selected in the drop down list. As there is
     * only one possible option, the variable input is not really checked.
     * @param {!string} varName Name of the variable to check type.
     * @return {string} String to indicate the variable type.
     */
    getVarType: function (varName) {
        return Blockly.Types.TEXT;
    }
};

Blockly.Blocks['dc_motor'] = {
    /**
     * Block for appending to a variable in place.
     * @this Blockly.Block
     */
    init: function () {
        console.log('Blockly.Blocks.aff.HUE')
        console.log(Blockly.Blocks.aff.HUE)
        this.setHelpUrl(Blockly.Msg.TEXT_APPEND_HELPURL);
        this.setColour(Blockly.Blocks.aff.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(
                "/img/blockly/motor.png",
                20,
                20,
                "*"))
            .appendField("set DC Motor")
            .appendField("Pin")
            .appendField(new Blockly.FieldDropdown(
                affDigitalPins), 'PIN')
            .appendField("Speed")
            .appendField(new Blockly.FieldNumber(100, 0, 100, 10), 'SPEED')
            .appendField("%");
        // .appendField(Blockly.Msg.TEXT_APPEND_APPENDTEXT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function () {
            return Blockly.Msg.TEXT_APPEND_TOOLTIP.replace('%1',
                thisBlock.getFieldValue('VAR'));
        });
    },
    /**
     * Set's the type of the variable selected in the drop down list. As there is
     * only one possible option, the variable input is not really checked.
     * @param {!string} varName Name of the variable to check type.
     * @return {string} String to indicate the variable type.
     */
    getVarType: function (varName) {
        return Blockly.Types.TEXT;
    }
};

Blockly.Blocks['fan'] = {
    /**
     * Block for appending to a variable in place.
     * @this Blockly.Block
     */
    init: function () {
        console.log('Blockly.Blocks.aff.HUE')
        console.log(Blockly.Blocks.aff.HUE)
        this.setHelpUrl(Blockly.Msg.TEXT_APPEND_HELPURL);
        this.setColour(Blockly.Blocks.aff.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(
                "/img/blockly/fan.png",
                20,
                20,
                "*"))
            .appendField("set Fan")
            .appendField("Pin")
            .appendField(new Blockly.FieldDropdown(
                affDigitalPins), 'PIN')
            .appendField("Speed")
            .appendField(new Blockly.FieldNumber(100, 0, 100, 10), 'SPEED')
            .appendField("%");
        // .appendField(Blockly.Msg.TEXT_APPEND_APPENDTEXT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function () {
            return Blockly.Msg.TEXT_APPEND_TOOLTIP.replace('%1',
                thisBlock.getFieldValue('VAR'));
        });
    },
    /**
     * Set's the type of the variable selected in the drop down list. As there is
     * only one possible option, the variable input is not really checked.
     * @param {!string} varName Name of the variable to check type.
     * @return {string} String to indicate the variable type.
     */
    getVarType: function (varName) {
        return Blockly.Types.TEXT;
    }
};

Blockly.Blocks['servo'] = {
    /**
     * Block for writing an angle value into a servo pin.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('http://arduino.cc/en/Reference/ServoWrite');
        this.setColour(Blockly.Blocks.aff.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(
                "/img/blockly/servo.png",
                20,
                20,
                "*"))
            .appendField('set Servo Motor')
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.digitalPins), 'SERVO_PIN');
        this.setInputsInline(false);
        this.appendValueInput('SERVO_ANGLE')
            .setCheck(Blockly.Types.NUMBER.checkList)
            .appendField(Blockly.Msg.ARD_SERVO_WRITE_TO);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARD_SERVO_WRITE_DEG_180);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARD_SERVO_WRITE_TIP);
    },
    /**
     * Updates the content of the the pin related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'SERVO_PIN', 'digitalPins');
    }
};

Blockly.Blocks['read_temp'] = {
    /**
     * Block for creating a 'read pin'.
     * @this Blockly.Block
     */
    init: function () {
        console.log('Blockly.Arduino.Boards.selected.digitalPins')
        console.log(Blockly.Arduino.Boards.selected.digitalPins)
        this.setHelpUrl('http://arduino.cc/en/Reference/DigitalRead');
        this.setColour(Blockly.Blocks.io.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(
                "/img/blockly/temperature.png",
                20,
                20,
                "*"))
            .appendField("Read Temperature Pin")
            .appendField(new Blockly.FieldDropdown(
                affAnaloguePins), 'PIN');
        this.setOutput(true, Blockly.Types.BOOLEAN.output);
        this.setTooltip(Blockly.Msg.ARD_DIGITALREAD_TIP);
    },
    /** @return {!string} The type of return value for the block, an integer. */
    getBlockType: function () {
        return Blockly.Types.BOOLEAN;
    },
    /**
     * Updates the content of the the pin related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'PIN', 'digitalPins');
    }
};

Blockly.Blocks['read_light'] = {
    /**
     * Block for creating a 'read pin'.
     * @this Blockly.Block
     */
    init: function () {
        console.log('Blockly.Arduino.Boards.selected.digitalPins')
        console.log(Blockly.Arduino.Boards.selected.digitalPins)
        this.setHelpUrl('http://arduino.cc/en/Reference/DigitalRead');
        this.setColour(Blockly.Blocks.io.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(
                "/img/blockly/brightness.png",
                20,
                20,
                "*"))
            .appendField("Read Light Intensity Pin")
            .appendField(new Blockly.FieldDropdown(
                affAnaloguePins), 'PIN');
        this.setOutput(true, Blockly.Types.BOOLEAN.output);
        this.setTooltip(Blockly.Msg.ARD_DIGITALREAD_TIP);
    },
    /** @return {!string} The type of return value for the block, an integer. */
    getBlockType: function () {
        return Blockly.Types.BOOLEAN;
    },
    /**
     * Updates the content of the the pin related fields.
     * @this Blockly.Block
     */
    updateFields: function () {
        Blockly.Arduino.Boards.refreshBlockFieldDropdown(
            this, 'PIN', 'digitalPins');
    }
};

Blockly.Blocks['command_recieved'] = {
    /**
     * Block for if/elseif/else condition.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL);
        this.setColour(160);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(
                "/img/blockly/wifi.png",
                15,
                15,
                "*"))
            .appendField("When command recieved")
        this.appendStatementInput('DO0')
            .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function () {
            if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
                return Blockly.Msg.CONTROLS_IF_TOOLTIP_1;
            } else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
                return Blockly.Msg.CONTROLS_IF_TOOLTIP_2;
            } else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) {
                return Blockly.Msg.CONTROLS_IF_TOOLTIP_3;
            } else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
                return Blockly.Msg.CONTROLS_IF_TOOLTIP_4;
            }
            return '';
        });
        this.elseifCount_ = 0;
        this.elseCount_ = 0;
    },
    /**
     * Create XML to represent the number of else-if and else inputs.
     * @return {Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function () {
        if (!this.elseifCount_ && !this.elseCount_) {
            return null;
        }
        var container = document.createElement('mutation');
        if (this.elseifCount_) {
            container.setAttribute('elseif', this.elseifCount_);
        }
        if (this.elseCount_) {
            container.setAttribute('else', 1);
        }
        return container;
    },
    /**
     * Parse XML to restore the else-if and else inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function (xmlElement) {
        this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10) || 0;
        this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10) || 0;
        this.updateShape_();
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('controls_if_if');
        containerBlock.initSvg();
        var connection = containerBlock.nextConnection;
        for (var i = 1; i <= this.elseifCount_; i++) {
            var elseifBlock = workspace.newBlock('controls_if_elseif');
            elseifBlock.initSvg();
            connection.connect(elseifBlock.previousConnection);
            connection = elseifBlock.nextConnection;
        }
        if (this.elseCount_) {
            var elseBlock = workspace.newBlock('controls_if_else');
            elseBlock.initSvg();
            connection.connect(elseBlock.previousConnection);
        }
        return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose: function (containerBlock) {
        var clauseBlock = containerBlock.nextConnection.targetBlock();
        // Count number of inputs.
        this.elseifCount_ = 0;
        this.elseCount_ = 0;
        var valueConnections = [null];
        var statementConnections = [null];
        var elseStatementConnection = null;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case 'controls_if_elseif':
                    this.elseifCount_++;
                    valueConnections.push(clauseBlock.valueConnection_);
                    statementConnections.push(clauseBlock.statementConnection_);
                    break;
                case 'controls_if_else':
                    this.elseCount_++;
                    elseStatementConnection = clauseBlock.statementConnection_;
                    break;
                default:
                    throw 'Unknown block type.';
            }
            clauseBlock = clauseBlock.nextConnection &&
                clauseBlock.nextConnection.targetBlock();
        }
        this.updateShape_();
        // Reconnect any child blocks.
        for (var i = 1; i <= this.elseifCount_; i++) {
            Blockly.Mutator.reconnect(valueConnections[i], this, 'IF' + i);
            Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
        }
        Blockly.Mutator.reconnect(elseStatementConnection, this, 'ELSE');
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    saveConnections: function (containerBlock) {
        var clauseBlock = containerBlock.nextConnection.targetBlock();
        var i = 1;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case 'controls_if_elseif':
                    var inputIf = this.getInput('IF' + i);
                    var inputDo = this.getInput('DO' + i);
                    clauseBlock.valueConnection_ =
                        inputIf && inputIf.connection.targetConnection;
                    clauseBlock.statementConnection_ =
                        inputDo && inputDo.connection.targetConnection;
                    i++;
                    break;
                case 'controls_if_else':
                    var inputDo = this.getInput('ELSE');
                    clauseBlock.statementConnection_ =
                        inputDo && inputDo.connection.targetConnection;
                    break;
                default:
                    throw 'Unknown block type.';
            }
            clauseBlock = clauseBlock.nextConnection &&
                clauseBlock.nextConnection.targetBlock();
        }
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this Blockly.Block
     */
    updateShape_: function () {
        // Delete everything.
        if (this.getInput('ELSE')) {
            this.removeInput('ELSE');
        }
        var i = 1;
        while (this.getInput('IF' + i)) {
            this.removeInput('IF' + i);
            this.removeInput('DO' + i);
            i++;
        }
        // Rebuild block.
        for (var i = 1; i <= this.elseifCount_; i++) {
            this.appendValueInput('IF' + i)
                .setCheck('Boolean')
                .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF);
            this.appendStatementInput('DO' + i)
                .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        }
        if (this.elseCount_) {
            this.appendStatementInput('ELSE')
                .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
        }
    }
};