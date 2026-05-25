Blockly.Blocks['1778760954112'] = {
  init: function() {
    this.jsonInit({
      "type": "1778760954112",
      "message0": "爬台子（2）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1778760954112'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(79, 39, 188, 98, 88, 10, 112, 98, 120, 179, 20, 99, 107, 179, 94, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79, 28, 112, 94, 86, 10, 112, 94, 120, 175, 87, 96, 107, 179, 94, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 28, 112, 99, 106, 55, 120, 105, 120, 175, 87, 100, 90, 140, 94, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(90, 80, 115, 30, 90, 60, 190, 90, 120, 110, 87, 170, 110, 150, 10, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10, 140, 190, 40, 65, 15, 190, 90, 190, 65, 15, 170, 110, 150, 10, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10, 140, 190, 44, 40, 146, 39, 99, 190, 65, 15, 170, 109, 50, 145, 79, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10, 130, 190, 35, 80, 30, 55, 90, 190, 65, 15, 170, 109, 155, 160, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 190, 70, 160, 150, 35, 75, 110, 190, 15, 140, 40, 50, 160, 130, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(60)\nMOTOmove19(90, 15, 190, 60, 160, 150, 35, 75, 110, 150, 10, 140, 40, 55, 160, 130, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(100, 40, 110, 75, 160, 145, 60, 75, 95, 160, 90, 125, 40, 55, 140, 130, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85, 50, 130, 100, 120, 145, 45, 100, 115, 150, 110, 100, 90, 55, 160, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 40, 100, 100, 105, 145, 45, 100, 115, 150, 110, 100, 90, 55, 160, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 90, 55, 124, 100, 120, 170, 110, 100, 110, 145, 87, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1778760954112'] = function(block) {
  let code = "base_action.action('爬台子（2）')\n";
  return code;
}

