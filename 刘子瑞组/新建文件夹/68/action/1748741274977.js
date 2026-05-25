Blockly.Blocks['1748741274977'] = {
  init: function() {
    this.jsonInit({
      "type": "1748741274977",
      "message0": "抱块后移最终版",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748741274977'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(42, 29, 158, 100, 93, 55, 130, 100, 157, 176, 47, 100, 107, 145, 70, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(42, 29, 158, 105, 93, 55, 130, 108, 157, 176, 47, 111, 102, 136, 70, 112, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(42, 29, 158, 105, 93, 55, 134, 107, 157, 176, 47, 108, 125, 145, 94, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(42, 29, 158, 92, 106, 55, 144, 85, 157, 176, 47, 95, 117, 145, 76, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(42, 29, 158, 92, 75, 55, 106, 95, 157, 176, 47, 95, 107, 145, 66, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(42, 29, 158, 105, 83, 55, 124, 107, 157, 176, 47, 108, 94, 141, 56, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(42, 29, 158, 100, 93, 55, 130, 98, 157, 176, 47, 100, 107, 145, 70, 102, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748741274977'] = function(block) {
  let code = "base_action.action('抱块后移最终版')\n";
  return code;
}

