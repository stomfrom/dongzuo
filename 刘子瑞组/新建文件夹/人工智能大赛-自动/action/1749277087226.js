Blockly.Blocks['1749277087226'] = {
  init: function() {
    this.jsonInit({
      "type": "1749277087226",
      "message0": "抱块小左移sp",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1749277087226'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,103,109,54,139,100,144,189,16,108,112,144,82,109,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,110,109,55,136,108,144,189,16,117,113,145,86,122,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,96,102,55,130,106,144,189,16,101,112,145,82,112,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,124,106,144,189,16,100,102,135,81,104,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(5)\nMOTOmove19(60,15,190,100,93,55,124,100,144,189,16,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1749277087226'] = function(block) {
  let code = "base_action.action('抱块小左移sp')\n";
  return code;
}

