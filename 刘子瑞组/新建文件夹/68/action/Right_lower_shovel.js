Blockly.Blocks['Right_lower_shovel'] = {
  init: function () {
    this.jsonInit({
      type: 'Right_lower_shovel',
      message0: '%{BKY_RIGHT_LOWER_SHOVEL}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#377DFD',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Right_lower_shovel'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 31, 100, 100, 94, 56, 124, 100, 121, 171, 100, 100, 107, 146, 76, 101)',
    'MOTOwait()',
    'MOTOsetspeed(14)',
    'MOTOmove16(80, 40, 100, 108, 93, 55, 123, 105, 120, 160, 100, 114, 109, 152, 71, 115)',
    'MOTOwait()',
    'MOTOsetspeed(90)',
    'MOTOmove16(80, 40, 100, 108, 93, 55, 123, 110, 121, 162, 51, 114, 109, 152, 71, 115)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(56, 89, 97, 80, 115, 140, 60, 90, 151, 180, 55, 128, 125, 176, 62, 134)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(35)',
    'MOTOmove16(79, 29, 100, 100, 94, 56, 124, 98, 121, 162, 51, 100, 107, 146, 76, 102)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Right_lower_shovel'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['RIGHT_LOWER_SHOVEL'] + "')\n";
  return code;
}

