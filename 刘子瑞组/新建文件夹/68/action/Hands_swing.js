Blockly.Blocks['Hands_swing'] = {
  init: function () {
    this.jsonInit({
      type: 'Hands_swing',
      message0: '%{BKY_HANDS_SWING}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Hands_swing'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(11)',
    'MOTOmove16(80, 40, 100, 90, 91, 48, 129, 88, 120, 160, 100, 92, 107, 146, 76, 92)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(90, 40, 100, 86, 95, 60, 120, 85, 110, 160, 100, 98, 107, 146, 76, 88)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(90, 70, 100, 84, 94, 54, 126, 80, 110, 130, 100, 98, 102, 137, 81, 92)',
    'MOTOwait()',
    'MOTOsetspeed(14)',
    'MOTOmove16(100, 100, 100, 97, 93, 55, 124, 98, 100, 100, 100, 103, 107, 145, 76, 102)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(100, 100, 100, 97, 93, 55, 124, 98, 100, 100, 100, 103, 107, 145, 76, 102)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(101, 100, 187, 101, 106, 81, 108, 108, 99, 101, 190, 107, 106, 145, 76, 114)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(101, 99, 10, 116, 98, 61, 122, 102, 99, 100, 13, 122, 90, 115, 90, 108)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(101, 100, 187, 93, 94, 55, 124, 86, 99, 101, 190, 99, 94, 119, 92, 92)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(101, 99, 10, 78, 110, 85, 110, 92, 99, 100, 13, 84, 102, 139, 78, 98)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(101, 100, 187, 101, 106, 81, 108, 108, 99, 101, 190, 107, 106, 145, 76, 114)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(101, 99, 10, 116, 98, 61, 122, 102, 99, 100, 13, 122, 90, 115, 90, 108)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(101, 100, 187, 93, 94, 55, 124, 86, 99, 101, 190, 99, 94, 119, 92, 92)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(101, 99, 10, 78, 110, 85, 110, 92, 99, 100, 13, 84, 102, 139, 78, 98)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(101, 100, 187, 101, 106, 81, 108, 108, 99, 101, 190, 107, 106, 145, 76, 114)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(100, 100, 100, 102, 93, 55, 124, 98, 100, 100, 100, 98, 107, 145, 76, 102)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Hands_swing'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['HANDS_SWING'] + "')\n";
  return code;
}

