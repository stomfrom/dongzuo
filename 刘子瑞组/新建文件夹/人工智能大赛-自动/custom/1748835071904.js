Blockly.Blocks['1748835071904'] = {
  init: function() {
    this.jsonInit({
      "type": "1748835071904",
      "message0": "抱块左移v1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748835071904'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,85,112,90,110,90,145,190,10,110,107,146,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,95,93,53,126,105,145,190,10,120,116,160,63,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,54,129,98,145,190,10,103,107,146,71,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,145,190,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,145,190,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748835071904'] = function(block) {
  let code = "base_action.action('抱块左移v1')\n";
  return code;
}

