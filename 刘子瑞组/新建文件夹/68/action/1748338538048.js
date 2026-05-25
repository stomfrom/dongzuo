Blockly.Blocks['1748338538048'] = {
  init: function() {
    this.jsonInit({
      "type": "1748338538048",
      "message0": "bkzy（2）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748338538048'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35,0,0,0)\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 112, 110, 80, 115, 95, 132, 187, 10, 180, 110, 140, 65, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(70)\nMOTOmove19(60, 15, 190, 112, 105, 70, 120, 100, 132, 187, 10, 180, 115, 155, 60, 125, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 112, 105, 70, 120, 100, 132, 187, 10, 180, 115, 155, 65, 130, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 112, 95, 60, 125, 95, 132, 187, 10, 180, 105, 140, 70, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 112, 93, 58, 128, 95, 132, 187, 10, 100, 107, 142, 72, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748338538048'] = function(block) {
  let code = "base_action.action('bkzy（2）')\n";
  return code;
}

