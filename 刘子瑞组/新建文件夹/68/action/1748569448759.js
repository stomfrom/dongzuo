Blockly.Blocks['1748569448759'] = {
  init: function() {
    this.jsonInit({
      "type": "1748569448759",
      "message0": "抱块一步测试2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748569448759'] = function(block) {
  let code = "MOTOrigid16(25,25,25,75,75,90,80,70,25,25,25,75,75,90,80,70)\nMOTOsetspeed(45)\nMOTOmove19(46,29,159,99,93,54,122,90,147,177,47,98,107,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,115,99,103,100,147,177,47,101,109,134,91,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(46,29,159,99,110,74,121,100,147,177,47,101,114,137,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(46,29,159,99,110,61,126,104,147,177,47,101,100,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(46,29,159,99,91,66,109,102,147,177,47,101,85,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(46,29,159,99,86,63,110,100,147,177,47,101,90,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(46,29,159,99,100,73,106,100,147,177,47,101,90,139,74,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(46,29,159,96,95,70,110,100,147,177,47,102,109,146,75,96,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748569448759'] = function(block) {
  let code = "base_action.action('抱块一步测试2')\n";
  return code;
}

