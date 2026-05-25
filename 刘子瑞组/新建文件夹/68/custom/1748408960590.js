Blockly.Blocks['1748408960590'] = {
  init: function() {
    this.jsonInit({
      "type": "1748408960590",
      "message0": "没迈上去",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748408960590'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50)\nMOTOsetspeed(22)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(20)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,87,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,103,102,145,74,88,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(25)\nMOTOmove19(125,65,100,90,115,145,47,90,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,89,160,145,46,89,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,101,160,150,90,90,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,85,133,28,188,72,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,97,144,112,92,102,125,86,100,101,41,58,75,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,101,149,40,188,89,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,101,149,40,188,89,125,86,100,113,100,143,75,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,94,159,47,190,93,125,86,100,109,101,144,75,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,102,149,39,190,103,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,107,160,147,53,121,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(125,65,100,105,160,10,190,75,125,86,100,126,75,144,83,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,96,146,30,190,89,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(33)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,88,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(22)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748408960590'] = function(block) {
  let code = "base_action.action('没迈上去')\n";
  return code;
}

