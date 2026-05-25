Blockly.Blocks['1748576363617'] = {
  init: function() {
    this.jsonInit({
      "type": "1748576363617",
      "message0": "右转最终版",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748576363617'] = function(block) {
  let code = "MOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65)\nMOTOsetspeed(24)\nMOTOmove19(42,29,158,95,123,55,154,95,154,176,47,105,137,145,106,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,95,123,55,154,93,154,176,47,105,137,145,106,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,100,93,55,124,100,154,176,47,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1748576363617'] = function(block) {
  let code = "base_action.action('右转最终版')\n";
  return code;
}

