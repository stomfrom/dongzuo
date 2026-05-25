Blockly.Blocks['1748569896576'] = {
  init: function() {
    this.jsonInit({
      "type": "1748569896576",
      "message0": "抱块后测试1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748569896576'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,55,130,100,147,187,17,100,107,145,70,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,105,93,55,130,108,147,187,17,111,102,136,70,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,105,93,55,134,107,147,187,17,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,92,106,55,144,85,147,187,17,95,117,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,92,75,55,106,95,147,187,17,95,107,145,66,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,105,83,55,124,107,147,187,17,108,94,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,130,98,147,187,17,100,107,145,70,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748569896576'] = function(block) {
  let code = "base_action.action('抱块后测试1')\n";
  return code;
}

