Blockly.Blocks['1748742378147'] = {
  init: function() {
    this.jsonInit({
      "type": "1748742378147",
      "message0": "放块最终版",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748742378147'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,100,93,55,130,98,154,176,47,100,107,145,70,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,99,90,150,38,100,154,176,47,101,111,50,163,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(42,29,158,99,122,150,39,100,154,176,47,101,79,50,163,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(72,31,146,99,122,150,39,100,129,160,56,101,79,50,163,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(72,31,146,99,98,150,40,100,129,160,56,100,105,50,163,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748742378147'] = function(block) {
  let code = "base_action.action('放块最终版')\n";
  return code;
}

