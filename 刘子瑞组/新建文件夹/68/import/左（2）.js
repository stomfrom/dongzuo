Blockly.Blocks['1779450704855'] = {
  init: function() {
    this.jsonInit({
      "type": "1779450704855",
      "message0": "左（2）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1779450704855'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(42, 29, 158, 85, 112, 90, 110, 90, 154, 176, 47, 110, 107, 146, 71, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(42, 29, 158, 95, 93, 53, 126, 105, 154, 176, 47, 120, 116, 160, 63, 130, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42, 29, 158, 100, 93, 54, 129, 98, 154, 176, 47, 103, 107, 146, 71, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(42, 29, 158, 100, 93, 55, 129, 95, 154, 176, 47, 100, 107, 145, 71, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(42, 29, 158, 100, 93, 55, 129, 95, 154, 176, 47, 100, 107, 145, 71, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1779450704855'] = function(block) {
  let code = "base_action.action('左（2）')\n";
  return code;
}

