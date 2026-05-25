Blockly.Blocks['1749276973842'] = {
  init: function() {
    this.jsonInit({
      "type": "1749276973842",
      "message0": "左移sp",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1749276973842'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,85,112,90,110,90,144,189,16,110,107,146,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,95,93,53,126,105,144,189,16,120,116,160,63,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,54,129,98,144,189,16,103,107,146,71,105,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1749276973842'] = function(block) {
  let code = "base_action.action('左移sp')\n";
  return code;
}

