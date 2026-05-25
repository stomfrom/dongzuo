Blockly.Blocks['1748401251348'] = {
  init: function() {
    this.jsonInit({
      "type": "1748401251348",
      "message0": "跨上去",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748401251348'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50)\nMOTOsetspeed(22)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(20)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,87,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,103,102,145,74,88,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,145,47,110,100,100,100,103,102,145,74,88,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,70,115,95,102,110,100,100,100,140,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(125,65,100,70,115,95,102,60,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nDelayMs(1000)\n";
  return code;
}

Blockly.Python['1748401251348'] = function(block) {
  let code = "base_action.action('跨上去')\n";
  return code;
}

