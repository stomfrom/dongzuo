Blockly.Blocks['1748567527113'] = {
  init: function() {
    this.jsonInit({
      "type": "1748567527113",
      "message0": "boxgo3（2）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748567527113'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(55, 10, 179, 86, 113, 85, 115, 90, 140, 190, 25, 114, 87, 115, 85, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(55, 10, 179, 90, 90, 50, 130, 80, 140, 190, 25, 100, 105, 140, 75, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(55, 10, 170, 95, 95, 55, 125, 95, 140, 190, 25, 105, 105, 145, 75, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(55, 10, 170, 95, 95, 55, 125, 95, 140, 190, 25, 110, 115, 155, 65, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(55, 10, 179, 86, 113, 85, 115, 90, 140, 190, 25, 114, 87, 115, 85, 110, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748567527113'] = function(block) {
  let code = "base_action.action('boxgo3（2）')\n";
  return code;
}

