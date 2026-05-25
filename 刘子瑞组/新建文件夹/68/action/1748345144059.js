Blockly.Blocks['1748345144059'] = {
  init: function() {
    this.jsonInit({
      "type": "1748345144059",
      "message0": "报块左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748345144059'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,30,20,20,65,75,65,65,65,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(80, 30, 115, 95, 63, 55, 94, 95, 120, 170, 115, 105, 77, 145, 46, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 115, 95, 63, 55, 94, 93, 120, 170, 115, 105, 77, 145, 46, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1748345144059'] = function(block) {
  let code = "base_action.action('报块左转')\n";
  return code;
}

