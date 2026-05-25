Blockly.Blocks['1748486635059'] = {
  init: function() {
    this.jsonInit({
      "type": "1748486635059",
      "message0": "WC",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748486635059'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,90,101,101,93,57,124,101,131,100,98,102,107,143,77,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(74,95,101,100,92,47,46,100,134,101,98,101,106,154,157,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(37,92,182,100,92,68,44,100,153,107,19,101,106,129,158,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(82,33,169,100,157,150,43,100,130,161,35,101,45,50,161,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(90,15,155,100,160,150,35,100,110,185,45,100,40,50,165,100,0,0,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(53)\nMOTOmove19(90,15,155,100,160,150,35,100,110,185,45,100,40,50,165,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(42)\nMOTOmove19(90,15,140,100,160,150,50,100,110,185,60,100,40,50,150,100,0,0,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,155,150,62,100,120,170,87,100,45,50,138,100,0,0,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,135,150,62,100,120,170,87,100,65,50,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,155,150,62,100,120,170,87,100,45,50,138,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,135,150,62,100,120,170,87,100,65,50,138,100,0,0,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,135,150,62,100,120,170,87,100,65,50,138,100,0,0,100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(25)\nMOTOmove19(80,30,113,84,136,150,60,88,120,170,87,102,64,50,139,106,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80,30,113,95,116,61,135,94,120,170,87,109,82,124,77,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\n";
  return code;
}

Blockly.Python['1748486635059'] = function(block) {
  let code = "base_action.action('WC')\n";
  return code;
}

