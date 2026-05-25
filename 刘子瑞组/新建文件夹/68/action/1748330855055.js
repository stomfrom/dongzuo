Blockly.Blocks['1748330855055'] = {
  init: function() {
    this.jsonInit({
      "type": "1748330855055",
      "message0": "cnm",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748330855055'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(88,76,190,100,93,55,124,100,104,109,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(88,76,190,99,92,150,39,100,104,109,10,100,106,50,165,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(45,67,148,53,111,123,50,60,146,132,60,137,76,61,156,139,0,0,99)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(45,49,148,53,111,123,50,60,145,157,51,137,76,61,156,139,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,55,111,124,50,60,147,177,47,137,77,62,156,139,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,62,117,150,52,60,147,177,47,150,91,50,153,140,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,98,91,76,105,99,147,177,47,98,109,123,97,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748330855055'] = function(block) {
  let code = "base_action.action('cnm')\n";
  return code;
}

