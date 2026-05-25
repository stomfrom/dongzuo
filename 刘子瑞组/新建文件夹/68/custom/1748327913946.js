Blockly.Blocks['1748327913946'] = {
  init: function() {
    this.jsonInit({
      "type": "1748327913946",
      "message0": "nmb",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748327913946'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(88,76,190,100,93,55,124,100,104,109,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,55,111,124,50,60,147,177,47,137,77,62,156,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(18,38,169,100,93,55,124,100,190,158,14,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(21)\nMOTOmove19(90,30,130,100,90,55,124,100,110,170,70,100,110,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(21)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748327913946'] = function(block) {
  let code = "base_action.action('nmb')\n";
  return code;
}

