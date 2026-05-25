Blockly.Blocks['1748495924791'] = {
  init: function() {
    this.jsonInit({
      "type": "1748495924791",
      "message0": "未完成",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748495924791'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(79,13,190,103,160,51,190,99,120,186,10,99,40,145,10,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,13,190,99,158,84,45,99,120,186,10,98,46,113,155,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(122,177,177,99,158,84,45,99,84,21,24,98,46,113,155,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(122,176,190,20,151,91,44,99,83,20,10,180,51,112,155,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748495924791'] = function(block) {
  let code = "base_action.action('未完成')\n";
  return code;
}

