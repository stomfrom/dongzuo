Blockly.Blocks['1748575420423'] = {
  init: function() {
    this.jsonInit({
      "type": "1748575420423",
      "message0": "右边",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748575420423'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(42,29,158,90,93,54,129,100,154,176,47,115,83,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(42,29,158,80,84,40,137,70,154,176,47,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,87,83,39,136,69,154,176,47,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,97,93,54,129,95,154,176,47,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(42,29,158,100,93,55,129,95,154,176,47,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,95,93,54,129,93,154,176,47,100,106,144,71,103,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748575420423'] = function(block) {
  let code = "base_action.action('右边')\n";
  return code;
}

