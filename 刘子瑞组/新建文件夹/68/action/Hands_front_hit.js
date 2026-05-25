Blockly.Blocks['Hands_front_hit'] = {
  init: function () {
    this.jsonInit({
      type: 'Hands_front_hit',
      message0: '%{BKY_HANDS_FRONT_HIT}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#377DFD',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Hands_front_hit'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 108, 120, 170, 100, 100, 107, 145, 73, 112)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(162, 70, 64, 99, 131, 128, 87, 94, 35, 130, 137, 109, 129, 83, 150, 99)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(162, 70, 64, 85, 127, 111, 120, 86, 35, 130, 137, 102, 139, 97, 145, 99)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(65)',
    'MOTOmove16(128, 174, 59, 99, 139, 131, 91, 102, 57, 40, 139, 118, 121, 118, 122, 120)',
    'MOTOwait()',
    'DelayMs(800)',
    'MOTOsetspeed(35)',
    'MOTOmove16(128, 174, 59, 99, 139, 131, 91, 112, 57, 40, 139, 103, 80, 71, 119, 118)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(75, 42, 88, 99, 98, 140, 51, 101, 132, 153, 96, 103, 101, 57, 152, 98)',
    'MOTOwait()',
    'MOTOsetspeed(22)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Hands_front_hit'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['HANDS_FRONT_HIT'] + "')\n";
  return code;
}

