Blockly.Blocks['1748576278789'] = {
  init: function() {
    this.jsonInit({
      "type": "1748576278789",
      "message0": "左转最终版",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748576278789'] = function(block) {
  let code = "MOTOrigid16(20,20,20,75,65,65,65,65,30,20,20,65,75,65,65,65)\nMOTOsetspeed(24)\nMOTOmove19(42,29,159,95,63,55,94,95,154,176,47,105,77,145,46,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(42,29,159,95,63,55,94,93,154,176,47,105,77,145,46,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(42,29,159,100,93,55,124,100,154,176,47,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1748576278789'] = function(block) {
  let code = "base_action.action('左转最终版')\n";
  return code;
}

