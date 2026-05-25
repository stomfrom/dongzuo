Blockly.Blocks['1748430536069'] = {
  init: function() {
    this.jsonInit({
      "type": "1748430536069",
      "message0": "倒了没起来",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748430536069'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(79,29,188,98,88,10,112,98,120,169,20,99,107,179,94,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,28,112,94,86,10,112,94,120,173,87,95,107,179,94,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,28,112,98,106,55,117,102,120,173,87,99,91,142,86,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(92,78,112,29,88,60,190,94,118,113,86,174,110,150,10,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(38,151,10,41,63,14,190,94,164,45,190,174,110,150,10,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(38,151,10,46,39,117,41,99,164,45,190,170,116,62,146,82,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(37,153,10,37,83,36,51,91,164,45,190,167,104,150,158,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,185,26,36,133,29,105,95,118,29,182,176,46,149,99,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,183,26,102,160,11,130,100,142,20,181,100,40,190,63,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(130,181,22,102,160,11,130,100,71,18,181,100,40,190,63,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,185,26,100,160,135,40,101,150,20,184,101,40,64,161,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(129,184,14,100,160,135,40,101,75,19,184,101,40,64,161,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(129,184,14,100,140,150,56,100,75,19,184,100,61,50,143,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,185,14,101,158,150,73,99,84,28,186,101,40,64,161,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,185,14,102,144,150,58,97,84,28,186,101,55,50,143,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,185,14,101,125,89,62,96,84,28,186,101,78,111,141,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85,27,117,101,125,89,62,96,122,172,81,101,78,111,141,98,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748430536069'] = function(block) {
  let code = "base_action.action('倒了没起来')\n";
  return code;
}

