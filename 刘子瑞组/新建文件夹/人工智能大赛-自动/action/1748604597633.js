Blockly.Blocks['1748604597633'] = {
  init: function() {
    this.jsonInit({
      "type": "1748604597633",
      "message0": "111223",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748604597633'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(79,30,99,99,92,55,123,100,120,169,99,98,105,145,76,99,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,30,99,99,138,57,183,100,120,169,99,96,105,94,122,90,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,30,99,99,154,58,184,92,120,169,99,95,105,62,157,90,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,30,99,97,145,150,67,96,120,169,99,97,54,50,132,97,0,0,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748604597633'] = function(block) {
  let code = "base_action.action('111223')\n";
  return code;
}

