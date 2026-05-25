Blockly.Blocks['Right_foot_shot'] = {
  init: function () {
    this.jsonInit({
      type: 'Right_foot_shot',
      message0: '%{BKY_RIGHT_FOOT_SHOT}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#7148F5',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Right_foot_shot'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(8)',
    'MOTOmove16(80, 40, 100, 108, 93, 55, 123, 111, 120, 160, 100, 114, 109, 152, 71, 115)',
    'MOTOwait()',
    'MOTOsetspeed(34)',
    'MOTOmove16(80, 40, 100, 105, 113, 55, 130, 114, 120, 160, 100, 114, 58, 88, 96, 117)',
    'MOTOwait()',
    'MOTOsetspeed(34)',
    'MOTOmove16(90, 37, 38, 107, 113, 68, 115, 114, 135, 161, 35, 123, 139, 84, 122, 104)',
    'MOTOwait()',
    'MOTOsetspeed(90)',
    'MOTOmove16(79, 39, 100, 105, 113, 64, 126, 114, 119, 161, 99, 123, 98, 105, 119, 112)',
    'MOTOwait()',
    'MOTOsetspeed(110)',
    'MOTOmove16(71, 23, 166, 105, 101, 57, 129, 113, 120, 160, 150, 123, 48, 153, 29, 104)',
    'MOTOwait()',
    'DelayMs(400)',
    'MOTOsetspeed(25)',
    'MOTOmove16(80, 40, 100, 105, 97, 55, 128, 112, 120, 160, 100, 123, 70, 122, 58, 117)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(80, 40, 100, 105, 95, 55, 123, 113, 120, 160, 100, 123, 90, 119, 86, 120)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 40, 100, 107, 93, 55, 123, 110, 120, 160, 100, 113, 103, 127, 83, 122)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Right_foot_shot'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['RIGHT_FOOT_SHOT'] + "')\n";
  return code;
}

