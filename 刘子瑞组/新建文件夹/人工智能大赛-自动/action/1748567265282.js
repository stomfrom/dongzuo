Blockly.Blocks['1748567265282'] = {
  init: function() {
    this.jsonInit({
      "type": "1748567265282",
      "message0": "boxgo3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748567265282'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(55, 10, 179, 100, 90, 50, 130, 100, 140, 190, 25, 100, 110, 150, 70, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(55, 10, 179, 100, 92, 52, 128, 100, 140, 190, 25, 100, 108, 148, 72, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 10, 179, 100, 95, 55, 125, 100, 140, 190, 25, 100, 105, 145, 75, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748567265282'] = function(block) {
  let code = "base_action.action('boxgo3')\n";
  return code;
}

