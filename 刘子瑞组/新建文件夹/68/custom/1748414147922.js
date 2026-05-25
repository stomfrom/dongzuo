Blockly.Blocks['1748414147922'] = {
  init: function() {
    this.jsonInit({
      "type": "1748414147922",
      "message0": "前躺起立",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748414147922'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(57,79,131,100,140,90,40,100,138,131,66,100,60,110,160,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(44,69,190,100,26,100,146,100,162,134,10,100,174,105,52,100,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(68)\nMOTOmove19(47,56,190,100,26,100,146,100,160,131,10,100,174,105,52,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(37)\nMOTOmove19(115,176,127,101,51,150,35,101,85,24,78,99,153,50,165,102,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(37)\nMOTOmove19(116,177,160,101,51,150,35,101,84,24,43,99,153,50,165,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(37)\nMOTOmove19(69,64,100,101,100,144,35,101,121,130,99,99,100,56,165,102,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(85,30,102,102,110,73,116,101,115,162,96,106,91,122,84,99,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748414147922'] = function(block) {
  let code = "base_action.action('前躺起立')\n";
  return code;
}

