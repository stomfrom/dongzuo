Blockly.Blocks['1749012040902'] = {
  init: function() {
    this.jsonInit({
      "type": "1749012040902",
      "message0": "侧上高台测试2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1749012040902'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(80,100,100,106,93,54,124,110,120,145,100,115,107,146,76,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,100,100,106,93,54,124,110,120,130,100,130,105,54,161,108,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80,100,100,106,93,54,124,110,120,130,100,153,105,54,161,107,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80,100,100,104,92,54,123,90,120,130,30,164,106,74,153,135,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80,100,100,86,103,102,79,84,120,130,30,127,106,73,157,119,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(50,50,30,86,103,102,79,84,100,100,100,127,106,73,157,119,0,0,100)\nMOTOwait()\n\n\n-- s\nMOTOsetspeed(20)\nMOTOmove19(50,50,30,72,78,26,125,94,100,100,100,127,106,73,157,119,0,0,100)\nMOTOwait()\n\n\n-- 转移重心前\nMOTOsetspeed(30)\nMOTOmove19(50,50,30,42,77,50,126,68,100,100,100,89,98,50,158,111,0,0,100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 转移1t\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,72,76,65,105,84,100,100,100,89,98,50,158,111,0,0,100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,61,75,32,138,74,100,100,100,88,105,50,162,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,47,96,31,144,66,100,100,100,88,80,50,159,108,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(100,153,99,63,95,30,156,112,130,135,150,88,79,50,152,80,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(50)\nMOTOmove19(100,153,99,60,142,113,136,112,99,135,99,88,79,50,152,80,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,153,99,77,159,150,89,92,99,135,99,88,78,50,151,78,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,153,99,101,115,150,39,103,99,135,99,99,84,50,164,100,0,0,100)\nMOTOwait()\n\n\n-- 战力\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1749012040902'] = function(block) {
  let code = "base_action.action('侧上高台测试2')\n";
  return code;
}

