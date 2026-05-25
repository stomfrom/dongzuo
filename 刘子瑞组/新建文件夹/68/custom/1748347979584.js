Blockly.Blocks['1748347979584'] = {
  init: function() {
    this.jsonInit({
      "type": "1748347979584",
      "message0": "滚上去",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748347979584'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(50)\nMOTOmove19(70,50,80,100,25,133,40,98,130,150,120,100,175,65,161,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(45,50,45,100,23,151,68,100,155,150,155,100,177,49,130,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(70,50,35,100,160,11,121,97,130,150,165,100,40,186,81,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(70,50,10,100,160,19,92,96,130,150,190,100,40,180,108,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(30,135,187,100,162,23,100,97,170,65,10,100,40,180,95,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(30,135,190,90,80,80,70,100,170,65,10,110,120,120,130,100,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(53)\nMOTOmove19(90,10,160,63,162,145,33,75,110,190,40,137,38,55,167,125,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(53)\nMOTOmove19(90,15,155,100,160,145,55,100,110,185,45,100,40,55,145,100,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(53)\nMOTOmove19(90,15,155,100,162,145,55,100,110,185,45,100,38,55,145,100,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(42)\nMOTOmove19(90,15,140,100,162,175,50,100,110,185,60,100,38,25,150,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(28)\nMOTOmove19(80,30,113,100,155,175,62,100,120,170,87,100,45,25,138,100,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(28)\nMOTOmove19(80,30,100,100,142,145,77,100,120,170,100,100,58,55,123,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748347979584'] = function(block) {
  let code = "base_action.action('滚上去')\n";
  return code;
}

