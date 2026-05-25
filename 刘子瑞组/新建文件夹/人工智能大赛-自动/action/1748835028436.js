Blockly.Blocks['1748835028436'] = {
  init: function() {
    this.jsonInit({
      "type": "1748835028436",
      "message0": "抱块左移v1_1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748835028436'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,55,128,100,145,190,10,100,107,145,72,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,100,100,100,85)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,90,98,64,128,90,145,190,10,95,107,146,72,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,95,93,54,128,90,145,190,10,105,107,146,72,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(60,15,190,98,93,54,128,102,145,190,10,109,107,146,72,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,98,94,54,128,102,145,190,10,103,105,139,77,109,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,98,93,54,128,102,145,190,10,103,105,139,77,109,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,128,100,145,190,10,100,107,145,72,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748835028436'] = function(block) {
  let code = "base_action.action('抱块左移v1_1')\n";
  return code;
}

