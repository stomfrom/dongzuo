Blockly.Blocks['1748334492866'] = {
  init: function() {
    this.jsonInit({
      "type": "1748334492866",
      "message0": "bkzpy",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748334492866'] = function(block) {
  let code = "MOTOrigid16(46,29,159,45,65,65,65,65,147,177,47,45,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,99,93,54,122,90,147,177,47,98,107,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,100,93,55,124,100,147,177,47,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(46,29,159,85,85,95,85,85,147,177,47,85,85,95,85,85)\nMOTOsetspeed(20)\nMOTOmove19(46,29,159,90,93,54,124,90,147,177,47,110,107,146,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(46,29,159,95,93,54,124,105,147,177,47,106,107,146,76,115,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(46,29,159,85,85,95,85,85,147,177,47,85,55,55,55,85)\nMOTOsetspeed(20)\nMOTOmove19(46,29,159,106,93,54,124,110,147,177,47,115,107,146,76,115,0,0,100)\nMOTOwait()\nMOTOrigid16(46,29,159,85,55,55,55,85,147,177,47,85,85,95,85,85)\nMOTOsetspeed(10)\nMOTOmove19(46,29,159,100,93,55,124,100,147,177,47,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748334492866'] = function(block) {
  let code = "base_action.action('bkzpy')\n";
  return code;
}

