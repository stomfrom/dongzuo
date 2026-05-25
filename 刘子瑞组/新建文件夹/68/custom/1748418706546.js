Blockly.Blocks['1748418706546'] = {
  init: function() {
    this.jsonInit({
      "type": "1748418706546",
      "message0": "永远上不去",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748418706546'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50)\nMOTOsetspeed(22)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(20)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,87,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,103,102,145,74,88,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,145,47,110,100,100,100,103,102,145,74,88,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,65,115,100,102,60,100,100,100,140,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(125,65,100,70,115,95,102,60,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,74,128,150,46,84,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,69,114,98,102,121,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,70,115,95,102,60,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,87,160,150,101,95,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(90,28,99,87,160,150,101,95,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(90,28,99,88,141,150,66,107,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,87,160,150,101,95,69,19,100,93,40,50,105,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,80,160,150,93,83,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,97,160,150,84,122,125,86,100,99,85,128,73,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(81,65,100,70,115,95,102,60,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(81,65,100,76,115,94,101,60,125,86,100,128,89,50,164,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(81,65,100,76,115,94,101,60,125,86,100,122,89,173,47,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(81,65,100,83,114,33,154,111,125,86,100,122,89,173,47,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,64,100,86,115,67,127,107,125,18,99,103,102,145,74,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748418706546'] = function(block) {
  let code = "base_action.action('永远上不去')\n";
  return code;
}

