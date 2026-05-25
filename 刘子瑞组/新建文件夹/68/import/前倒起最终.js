Blockly.Blocks['1748827233498'] = {
  init: function() {
    this.jsonInit({
      "type": "1748827233498",
      "message0": "前倒起最终",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748827233498'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(86, 81, 170, 100, 97, 52, 45, 99, 120, 110, 29, 99, 103, 151, 155, 99, 0, 0, 99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(86, 25, 176, 101, 148, 120, 42, 99, 120, 164, 30, 99, 50, 76, 152, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(86, 25, 146, 101, 158, 150, 40, 99, 120, 164, 59, 99, 42, 50, 161, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85, 10, 152, 75, 160, 150, 47, 80, 118, 190, 47, 128, 40, 50, 154, 119, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85, 10, 152, 74, 160, 150, 82, 73, 118, 190, 47, 128, 40, 50, 120, 127, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(85, 10, 83, 101, 101, 150, 46, 100, 119, 183, 116, 99, 103, 50, 161, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748827233498'] = function(block) {
  let code = "base_action.action('前倒起最终')\n";
  return code;
}

