Blockly.Blocks['1748488035521'] = {
  init: function() {
    this.jsonInit({
      "type": "1748488035521",
      "message0": "QWQ",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748488035521'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(49)\nMOTOmove19(145,120,105,15,130,140,83,130,55,80,95,168,62,60,117,80,128,71,100)\nMOTOwait()\n\n\n-- 改\nMOTOsetspeed(30)\nMOTOmove19(145,120,105,20,130,140,83,125,55,80,95,180,190,115,116,78,0,0,100)\nMOTOwait()\n\n\n-- 改\nMOTOsetspeed(30)\nMOTOmove19(145,120,105,20,32,112,68,106,55,80,95,180,190,115,116,78,0,0,100)\nMOTOwait()\n\n\n-- 改\nMOTOsetspeed(30)\nMOTOmove19(145,120,105,20,130,140,83,125,55,80,95,91,190,163,150,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(42)\nMOTOmove19(135,120,105,100,127,127,83,86,65,80,95,183,65,60,117,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,50,105,100,120,110,83,82,120,150,95,113,68,62,117,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80,50,100,98,132,140,83,97,120,150,100,102,68,60,117,103,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748488035521'] = function(block) {
  let code = "base_action.action('QWQ')\n";
  return code;
}

