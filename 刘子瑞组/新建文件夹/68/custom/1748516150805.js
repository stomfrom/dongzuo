Blockly.Blocks['1748516150805'] = {
  init: function() {
    this.jsonInit({
      "type": "1748516150805",
      "message0": "CNB2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748516150805'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(112,75,190,100,93,55,124,100,104,109,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(112,75,190,76,97,150,48,77,104,109,10,123,103,50,157,124,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(45,67,148,53,111,123,50,60,146,132,60,137,76,61,156,139,0,0,99)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(45,31,153,53,111,123,50,60,144,184,53,137,76,61,156,139,0,0,99)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,62,117,150,52,60,147,177,47,150,91,50,153,140,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,98,91,76,105,99,147,177,47,98,109,123,97,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748516150805'] = function(block) {
  let code = "base_action.action('CNB2')\n";
  return code;
}

