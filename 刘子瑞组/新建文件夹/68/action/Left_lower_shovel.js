Blockly.Blocks['Left_lower_shovel'] = {
  init: function () {
    this.jsonInit({
      type: 'Left_lower_shovel',
      message0: '%{BKY_LEFT_LOWER_SHOVEL}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#377DFD',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Left_lower_shovel'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(14)',
    'MOTOmove16(80, 40, 100, 85, 91, 48, 129, 85, 120, 160, 100, 95, 107, 145, 77, 95)',
    'MOTOwait()',
    'MOTOsetspeed(90)',
    'MOTOmove16(79, 38, 149, 86, 91, 48, 129, 85, 120, 160, 100, 92, 107, 145, 77, 90)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(39, 30, 145, 92, 75, 24, 138, 60, 144, 111, 103, 120, 85, 65, 140, 110)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(35)',
    'MOTOmove16(79, 38, 149, 100, 94, 56, 124, 98, 121, 171, 100, 100, 107, 146, 76, 102)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Left_lower_shovel'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['LEFT_LOWER_SHOVEL'] + "')\n";
  return code;
}

