Blockly.Blocks['1748411580683'] = {
  init: function() {
    this.jsonInit({
      "type": "1748411580683",
      "message0": "前躺起身",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748411580683'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,98,97,145,41,99,120,170,100,100,98,53,159,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,100,98,97,145,40,99,122,109,100,100,98,53,159,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(32)\nMOTOmove19(85,80,100,100,140,150,60,100,115,109,100,100,60,50,140,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(100,10,185,100,165,145,35,100,100,190,15,100,35,55,165,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,89,190,100,140,90,40,100,129,108,10,100,60,110,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(57,79,131,100,140,90,40,100,138,131,66,100,60,110,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(44,69,190,100,26,100,146,100,162,134,10,100,174,105,52,100,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(68)\nMOTOmove19(47,56,190,100,26,100,146,100,160,131,10,100,174,105,52,100,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(37)\nMOTOmove19(115,176,127,101,51,150,35,101,85,24,78,99,153,50,165,102,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(37)\nMOTOmove19(116,177,160,101,51,150,35,101,84,24,43,99,153,50,165,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,100,98,97,145,40,99,119,80,100,100,98,53,159,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(97,25,170,100,102,149,61,100,122,164,29,100,104,50,148,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(37)\nMOTOmove19(69,64,100,101,100,144,33,101,121,130,99,99,100,56,165,102,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(83,28,98,100,123,152,44,103,115,169,89,103,78,46,161,100,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(85,30,102,99,107,150,44,100,115,162,96,99,94,50,159,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(85,30,102,102,110,73,116,101,115,162,96,106,91,122,84,99,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748411580683'] = function(block) {
  let code = "base_action.action('前躺起身')\n";
  return code;
}

