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

Blockly.Blocks['Split_goal'] = {
  init: function () {
    this.jsonInit({
      type: 'Split_goal',
      message0: '%{BKY_SPLIT_GOAL}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#7148F5',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Split_goal'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 100, 20, 128, 133, 59, 65, 100, 100, 100, 180, 72, 67, 141, 135)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(101, 100, 101, 20, 80, 32, 135, 65, 99, 100, 99, 180, 120, 168, 65, 135)',
    'MOTOwait()',
    'DelayMs(600)',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 100, 20, 128, 133, 59, 65, 100, 100, 100, 180, 72, 67, 141, 135)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(103, 39, 113, 74, 125, 139, 62, 74, 97, 161, 87, 126, 75, 61, 138, 126)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(85, 50, 130, 100, 125, 135, 67, 100, 115, 150, 70, 100, 75, 65, 134, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 98, 108, 143, 44, 103, 118, 166, 99, 103, 97, 59, 160, 103)',
    'MOTOwait()',
    'DelayMs(250)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Split_goal'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SPLIT_GOAL'] + "')\n";
  return code;
}

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

Blockly.Blocks['Pan_right_1_step'] = {
  init: function () {
    this.jsonInit({
      type: 'Pan_right_1_step',
      message0: '%{BKY_PAN_RIGHT_1_STEP}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Pan_right_1_step'] = function (block) {
  const code = [
    'MOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 25, 100, 90, 93, 54, 124, 100, 120, 145, 100, 110, 107, 146, 76, 110)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 25, 100, 94, 93, 54, 124, 85, 120, 145, 100, 105, 107, 146, 76, 95)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 55, 100, 85, 93, 54, 124, 85, 120, 175, 100, 94, 107, 146, 76, 90)',
    'MOTOwait()',
    'MOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85)',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Pan_right_1_step'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['PAN_RIGHT_1_STEP'] + "')\n";
  return code;
}

Blockly.Blocks['Single_leg_stand'] = {
  init: function () {
    this.jsonInit({
      type: 'Single_leg_stand',
      message0: '%{BKY_SINGLE_LEG_STAND}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Single_leg_stand'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50)',
    'MOTOsetspeed(22)',
    'MOTOmove16(100, 100, 100, 90, 91, 48, 129, 88, 100, 100, 100, 92, 107, 146, 76, 88)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(20)',
    'MOTOmove16(100, 100, 100, 85, 115, 95, 102, 90, 100, 100, 100, 93, 102, 145, 74, 87)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(25)',
    'MOTOmove16(100, 100, 100, 90, 115, 145, 47, 85, 100, 100, 100, 103, 102, 145, 74, 88)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(25)',
    'MOTOmove16(125, 65, 100, 90, 115, 145, 47, 90, 125, 86, 100, 103, 102, 145, 74, 89)',
    'MOTOwait()',
    'DelayMs(1000)',
    'MOTOsetspeed(33)',
    'MOTOmove16(100, 100, 100, 85, 115, 95, 102, 90, 100, 100, 100, 93, 102, 145, 74, 88)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(22)',
    'MOTOmove16(100, 100, 100, 90, 91, 48, 129, 88, 100, 100, 100, 92, 107, 146, 76, 88)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Single_leg_stand'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SINGLE_LEG_STAND'] + "')\n";
  return code;
}

Blockly.Blocks['Right_front_hit'] = {
  init: function () {
    this.jsonInit({
      type: 'Right_front_hit',
      message0: '%{BKY_RIGHT_FRONT_HIT}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#377DFD',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Right_front_hit'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(45)',
    'MOTOmove16(80, 40, 50, 108, 93, 54, 124, 108, 180, 120, 15, 110, 109, 152, 71, 112)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 40, 50, 102, 93, 54, 124, 112, 180, 120, 15, 114, 105, 140, 80, 115)',
    'MOTOwait()',
    'MOTOsetspeed(60)',
    'MOTOmove16(80, 40, 50, 86, 69, 64, 90, 87, 120, 170, 11, 105, 74, 105, 84, 105)',
    'MOTOwait()',
    'DelayMs(1000)',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 40, 100, 95, 110, 70, 120, 93, 120, 160, 100, 105, 90, 130, 80, 107)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(80, 40, 100, 102, 110, 70, 120, 101, 120, 160, 100, 98, 90, 130, 80, 99)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Right_front_hit'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['RIGHT_FRONT_HIT'] + "')\n";
  return code;
}

Blockly.Blocks['Front_Hug'] = {
  init: function () {
    this.jsonInit({
      type: 'Front_Hug',
      message0: '%{BKY_FRONT_HUG}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Front_Hug'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(35)',
    'MOTOmove16(70, 90, 190, 100, 93, 55, 124, 100, 110, 110, 10, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(31, 38, 169, 100, 93, 55, 124, 100, 180, 158, 14, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(18, 38, 169, 100, 93, 55, 124, 100, 190, 158, 14, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(31, 38, 169, 100, 93, 55, 124, 100, 180, 158, 14, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(18, 38, 169, 100, 93, 55, 124, 100, 190, 158, 14, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(31, 38, 169, 100, 93, 55, 124, 100, 180, 158, 14, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(18, 38, 169, 100, 93, 55, 124, 100, 190, 158, 14, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(90, 30, 130, 100, 90, 55, 124, 100, 110, 170, 70, 100, 110, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Front_Hug'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['FRONT_HUG'] + "')\n";
  return code;
}

Blockly.Blocks['Salute_two'] = {
  init: function () {
    this.jsonInit({
      type: 'Salute_two',
      message0: '%{BKY_SALUTE_TWO}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Salute_two'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(68)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 47, 49, 103, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(2000)',
    'MOTOsetspeed(64)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Salute_two'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SALUTE_TWO'] + "')\n";
  return code;
}

Blockly.Blocks['remote_control'] = {
  init: function () {
    this.jsonInit({
      type: 'remote_control',
      message0: '%{BKY_GAMEPAD} %1 %{BKY_GAMEPAD_VAR} %2',
      args0: [
        {
          type: 'input_dummy',
        },
        {
          type: 'input_value',
          name: 'variable',
          check: 'Variable',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Msg.ControlHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['remote_control'] = function(block) {
  const variable = Blockly.Lua.valueToCode(block, "variable", Blockly.Lua.ORDER_NONE);
  let code = "";
  if(variable) {
    code = `${variable} = HKEY()\n`;
  } else {
    code = `HKEY()\n`;
  }
  return code;
}

Blockly.Python['remote_control'] = function (block) {
  const variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_NONE);
  const code = variable ? `${variable} = get_key.key()\n` : `get_key.key()\n`;
  return code;
}

Blockly.Blocks['aelos_if'] = {
  init: function () {
    this.jsonInit({
      type: 'aelos_if',
      message0: '%{BKY_AELOS_IF} %1 %{BKY_AELOS_DO} %2',
      args0: [
        {
          type: 'input_value',
          name: 'condition',
          check: 'Boolean',
        },
        {
          type: 'input_statement',
          name: 'do',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: '#86C113',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['aelos_if'] = function (block) {
  const condition = Blockly.Lua.valueToCode(block, 'condition', Blockly.Lua.ORDER_NONE) || 'false';
  const do_code = Blockly.Lua.statementToCode(block, 'do');

  const code = `if ${condition} then \n${do_code}\nHKEY()\nend\n`;
  return code;
}

Blockly.Python['aelos_if'] = function (block) {
  const condition =
    Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_NONE) || 'False';
  const do_code = Blockly.Python.statementToCode(block, 'do') || Blockly.Python.PASS;

  const code = `if ${condition}:\n${do_code}`;
  return code;
}

Blockly.Blocks['aelos_compare'] = {
  init: function () {
    this.jsonInit({
      type: 'aelos_compare',
      message0: '%1 %2 %3',
      args0: [
        {
          type: 'input_value',
          name: 'input_1',
          check: ['Number', 'Variable', 'Remote_type'],
        },
        {
          type: 'field_dropdown',
          name: 'OP',
          options: [
            ['=', 'JNE'],
            ['\u2260', 'JE'],
            ['<', 'JAE'],
            ['\u200f\u2265\u200f', 'JA'],
            ['>', 'JBE'],
            ['\u200f\u2264\u200f', 'JB'],
          ],
        },
        {
          type: 'input_value',
          name: 'input_2',
          check: ['Number', 'Variable', 'Remote_type'],
        },
      ],
      inputsInline: true,
      output: 'Boolean',
      outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
      colour: '#86C113',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['aelos_compare'] = function (block) {
  const op_map = {
    JNE: '==',
    JE: '~=',
    JAE: '<',
    JA: '<=',
    JBE: '>',
    JB: '>=',
  };
  const input_1 = Blockly.Lua.valueToCode(block, 'input_1', Blockly.Lua.ORDER_ATOMIC);
  const input_2 = Blockly.Lua.valueToCode(block, 'input_2', Blockly.Lua.ORDER_ATOMIC);
  const operation = op_map[block.getFieldValue('OP')];
  let code = '';

  if (input_1 && input_2) {
    code = `${input_1} ${operation} ${input_2}`;
  } else {
    code = 'false';
  }

  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['aelos_compare'] = function (block) {
  const op_map = {
    JNE: '==',
    JE: '!=',
    JAE: '<',
    JA: '<=',
    JBE: '>',
    JB: '>=',
  };
  const input_1 = Blockly.Python.valueToCode(block, 'input_1', Blockly.Python.ORDER_ATOMIC);
  const input_2 = Blockly.Python.valueToCode(block, 'input_2', Blockly.Python.ORDER_ATOMIC);
  const operation = op_map[block.getFieldValue('OP')];
  let code = '';

  if (input_1 && input_2) {
    code = `${input_1} ${operation} ${input_2}`;
  } else {
    code = 'False';
  }

  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Blocks['remote_control_button'] = {
  init: function () {
    this.jsonInit({
      type: 'remote_control_button',
      message0: '%{BKY_REMOTE_CONTROL_BUTTON_REMOTE}， %1 ，%{BKY_REMOTE_CONTROL_BUTTON_KEY} %2',
      args0: [
        { type: 'field_dropdown', name: 'mode', options: remoteControlMode() },
        { type: 'field_dropdown', name: 'key', options: remoteControlKey },
      ],
      output: 'Remote_type',
      colour: Blockly.Msg.ControlHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['remote_control_button'] = function(block) {
  const mode = block.getFieldValue("mode");
  const key = block.getFieldValue("key");
  const num = HKEYMap[mode][key];
  return [num, 0 > num ? Blockly.Lua.ORDER_UNARY : Blockly.Lua.ORDER_ATOMIC];
}

Blockly.Python['remote_control_button'] = function (block) {
  const mode = block.getFieldValue('mode');
  const key = block.getFieldValue('key');
  const num = HKEYMap[mode][key];
  return [num, 0 > num ? Blockly.Python.ORDER_UNARY_SIGN : Blockly.Python.ORDER_ATOMIC];
}

Blockly.Blocks['Press_right_leg'] = {
  init: function () {
    this.jsonInit({
      type: 'Press_right_leg',
      message0: '%{BKY_PRESS_RIGHT_LEG}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Press_right_leg'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(10, 85, 100, 78, 121, 129, 76, 87, 112, 150, 95, 133, 107, 143, 81, 140)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 99, 78, 121, 140, 52, 92, 109, 156, 93, 133, 107, 143, 82, 146)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(10, 85, 100, 78, 121, 129, 76, 87, 112, 150, 95, 133, 107, 143, 81, 140)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 100, 78, 121, 129, 76, 87, 112, 152, 93, 133, 107, 143, 81, 140)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 99, 78, 121, 144, 52, 92, 109, 156, 93, 133, 107, 143, 82, 146)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 100, 78, 121, 129, 76, 87, 112, 152, 93, 133, 107, 143, 81, 140)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 99, 78, 121, 144, 52, 92, 109, 156, 93, 133, 107, 143, 82, 146)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 100, 78, 121, 129, 76, 87, 112, 152, 93, 133, 107, 143, 81, 140)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 99, 78, 121, 144, 52, 92, 109, 156, 93, 133, 107, 143, 82, 146)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(10, 85, 100, 78, 121, 129, 76, 87, 112, 152, 93, 133, 107, 143, 81, 140)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(250)',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Press_right_leg'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['PRESS_RIGHT_LEG'] + "')\n";
  return code;
}

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

Blockly.Blocks['Squat'] = {
  init: function () {
    this.jsonInit({
      type: 'Squat',
      message0: '%{BKY_SQUAT}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Squat'] = function (block) {
  const code = [
    'MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)',
    'MOTOsetspeed(14)',
    'MOTOmove16(80, 30, 100, 100, 130, 130, 77, 100, 120, 170, 100, 100, 70, 70, 123, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(14)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Squat'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SQUAT'] + "')\n";
  return code;
}

Blockly.Blocks['1748327913946'] = {
  init: function() {
    this.jsonInit({
      "type": "1748327913946",
      "message0": "nmb",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748327913946'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(88,76,190,100,93,55,124,100,104,109,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,55,111,124,50,60,147,177,47,137,77,62,156,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(18,38,169,100,93,55,124,100,190,158,14,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(21)\nMOTOmove19(90,30,130,100,90,55,124,100,110,170,70,100,110,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(21)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748327913946'] = function(block) {
  let code = "base_action.action('nmb')\n";
  return code;
}

Blockly.Blocks['Front_Roll'] = {
  init: function () {
    this.jsonInit({
      type: 'Front_Roll',
      message0: '%{BKY_FRONT_ROLL}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Front_Roll'] = function (block) {
  const code = [
    'MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 98, 97, 145, 41, 99, 120, 170, 100, 100, 98, 53, 159, 99)',
    'MOTOwait()',
    'MOTOsetspeed(32)',
    'MOTOmove16(85, 30, 130, 100, 140, 152, 60, 100, 115, 170, 70, 100, 60, 48, 140, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(100, 10, 185, 100, 165, 145, 35, 100, 100, 190, 15, 100, 35, 55, 165, 100)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(75, 89, 190, 100, 140, 90, 40, 100, 129, 108, 10, 100, 60, 110, 160, 100)',
    'MOTOwait()',
    'MOTOsetspeed(40)',
    'MOTOmove16(57, 79, 131, 100, 140, 90, 40, 100, 138, 131, 66, 100, 60, 110, 160, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(44, 69, 190, 100, 26, 100, 146, 100, 162, 134, 10, 100, 174, 105, 52, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(68)',
    'MOTOmove16(47, 56, 190, 100, 26, 100, 146, 100, 160, 131, 10, 100, 174, 105, 52, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(37)',
    'MOTOmove16(115, 176, 127, 101, 51, 150, 33, 101, 85, 24, 78, 99, 153, 50, 165, 102)',
    'MOTOwait()',
    'MOTOsetspeed(37)',
    'MOTOmove16(116, 177, 160, 101, 51, 150, 33, 101, 84, 24, 43, 99, 153, 50, 165, 102)',
    'MOTOwait()',
    'MOTOsetspeed(37)',
    'MOTOmove16(116, 177, 160, 101, 51, 150, 33, 101, 84, 24, 43, 99, 153, 50, 165, 102)',
    'MOTOwait()',
    'MOTOsetspeed(40)',
    'MOTOmove16(116, 177, 160, 100, 69, 139, 43, 100, 86, 24, 43, 99, 134, 61, 162, 101)',
    'MOTOwait()',
    'MOTOsetspeed(40)',
    'MOTOmove16(97, 25, 170, 100, 102, 149, 61, 100, 122, 164, 29, 100, 104, 50, 148, 99)',
    'MOTOwait()',
    'MOTOsetspeed(37)',
    'MOTOmove16(69, 64, 100, 101, 100, 144, 33, 101, 121, 130, 99, 99, 100, 56, 165, 102)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(20)',
    'MOTOmove16(83, 28, 98, 100, 123, 152, 44, 103, 115, 169, 89, 103, 78, 46, 161, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(15)',
    'MOTOmove16(85, 30, 102, 99, 107, 150, 44, 100, 115, 162, 96, 99, 94, 50, 159, 98)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(85, 30, 102, 102, 110, 73, 116, 101, 115, 162, 96, 106, 91, 122, 84, 99)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Front_Roll'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['FRONT_ROLL'] + "')\n";
  return code;
}

Blockly.Blocks['1748330855055'] = {
  init: function() {
    this.jsonInit({
      "type": "1748330855055",
      "message0": "cnm",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748330855055'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(88,76,190,100,93,55,124,100,104,109,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(88,76,190,99,92,150,39,100,104,109,10,100,106,50,165,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(45,67,148,53,111,123,50,60,146,132,60,137,76,61,156,139,0,0,99)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(45,49,148,53,111,123,50,60,145,157,51,137,76,61,156,139,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,55,111,124,50,60,147,177,47,137,77,62,156,139,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,62,117,150,52,60,147,177,47,150,91,50,153,140,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,98,91,76,105,99,147,177,47,98,109,123,97,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748330855055'] = function(block) {
  let code = "base_action.action('cnm')\n";
  return code;
}

Blockly.Blocks['Right_Roll'] = {
  init: function () {
    this.jsonInit({
      type: 'Right_Roll',
      message0: '%{BKY_RIGHT_ROLL}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Right_Roll'] = function (block) {
  const code = [
    'MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)',
    'MOTOrigid16(60,60,60,60,70,70,70,60,60,60,60,60,70,70,70,60)',
    'MOTOsetspeed(52)',
    'MOTOmove16(80, 30, 100, 100, 97, 55, 124, 100, 120, 170, 100, 100, 103, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(140, 150, 105, 100, 137, 140, 83, 100, 60, 50, 95, 100, 63, 60, 117, 100)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(145, 155, 105, 95, 125, 115, 83, 83, 55, 45, 95, 110, 63, 60, 117, 92)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(170, 151, 103, 90, 140, 140, 83, 89, 30, 49, 97, 122, 55, 64, 117, 90)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(170, 151, 103, 50, 135, 140, 83, 89, 30, 49, 97, 150, 58, 60, 117, 94)',
    'MOTOwait()',
    'MOTOsetspeed(60)',
    'MOTOmove16(170, 151, 103, 30, 135, 140, 83, 120, 30, 49, 97, 170, 57, 60, 117, 96)',
    'MOTOwait()',
    'MOTOsetspeed(60)',
    'MOTOmove16(170, 151, 103, 17, 135, 140, 83, 120, 30, 49, 97, 185, 60, 60, 117, 90)',
    'MOTOwait()',
    'DelayMs(700)',
    'MOTOsetspeed(49)',
    'MOTOmove16(145, 120, 105, 32, 138, 140, 77, 120, 55, 80, 95, 185, 70, 60, 117, 80)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(135, 120, 105, 17, 135, 140, 75, 105, 65, 80, 95, 100, 73, 73, 117, 114)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 50, 105, 87, 132, 138, 77, 107, 120, 150, 95, 100, 80, 90, 117, 118)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(80, 50, 100, 98, 132, 140, 77, 97, 120, 150, 100, 102, 68, 60, 117, 103)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Right_Roll'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['RIGHT_ROLL'] + "')\n";
  return code;
}

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

Blockly.Blocks['1748332747902'] = {
  init: function() {
    this.jsonInit({
      "type": "1748332747902",
      "message0": "cnb",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748332747902'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(88,76,190,100,93,55,124,100,104,109,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(88,76,190,76,97,150,48,77,104,109,10,123,103,50,157,124,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(45,67,148,53,111,123,50,60,146,132,60,137,76,61,156,139,0,0,99)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(45,31,153,53,111,123,50,60,144,184,53,137,76,61,156,139,0,0,99)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,62,117,150,52,60,147,177,47,150,91,50,153,140,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,98,91,76,105,99,147,177,47,98,109,123,97,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748332747902'] = function(block) {
  let code = "base_action.action('cnb')\n";
  return code;
}

Blockly.Blocks['Take_a_quick_step_forward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_a_quick_step_forward',
      message0: '%{BKY_TAKE_A_QUICK_STEP_FORWARD}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_a_quick_step_forward'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,75,75,90,80,70,25,25,25,75,75,90,80,70)',
    'MOTOsetspeed(45)',
    'MOTOmove16(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95)',
    'MOTOwait()',
    'MOTOsetspeed(60)',
    'MOTOmove16(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 91, 94)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 91, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 91, 66, 109, 102, 120, 170, 120, 101, 85, 101, 97, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 86, 63, 110, 100, 120, 170, 120, 101, 90, 126, 79, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 94)',
    'MOTOwait()',
    'MOTOsetspeed(65)',
    'MOTOmove16(80, 30, 120, 96, 95, 70, 110, 100, 120, 170, 120, 102, 109, 146, 75, 96)',
    'MOTOwait()',
    'MOTOsetspeed(45)',
    'MOTOmove16(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_a_quick_step_forward'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_A_QUICK_STEP_FORWARD'] + "')\n";
  return code;
}

Blockly.Blocks['1748333831877'] = {
  init: function() {
    this.jsonInit({
      "type": "1748333831877",
      "message0": "bkkz",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748333831877'] = function(block) {
  let code = "MOTOrigid16(25,25,25,75,75,90,80,70,25,25,25,75,75,90,80,70)\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,99,93,54,122,90,147,177,47,98,107,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,115,99,103,100,147,177,47,101,109,134,91,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(46,29,159,99,110,74,121,100,147,177,47,101,114,137,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(46,29,159,99,110,61,126,104,147,177,47,101,100,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(46,29,159,99,91,66,109,102,147,177,47,101,85,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(46,29,159,99,86,63,110,100,147,177,47,101,90,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(46,29,159,99,100,73,106,100,147,177,47,101,90,139,74,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(46,29,159,96,95,70,110,100,147,177,47,102,109,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(46,29,159,99,93,54,122,90,147,177,47,98,107,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(46,29,159,100,93,55,124,100,147,177,47,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,99,93,54,122,90,147,177,47,98,107,146,75,95,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748333831877'] = function(block) {
  let code = "base_action.action('bkkz')\n";
  return code;
}

Blockly.Blocks['1748333881252'] = {
  init: function() {
    this.jsonInit({
      "type": "1748333881252",
      "message0": "cnb",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748333881252'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(88, 76, 190, 100, 93, 55, 124, 100, 104, 109, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(88, 76, 190, 76, 97, 150, 48, 77, 104, 109, 10, 123, 103, 50, 157, 124, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(45, 67, 148, 53, 111, 123, 50, 60, 146, 132, 60, 137, 76, 61, 156, 139, 0, 0, 99)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(45, 31, 153, 53, 111, 123, 50, 60, 144, 184, 53, 137, 76, 61, 156, 139, 0, 0, 99)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(46, 29, 159, 62, 117, 150, 52, 60, 147, 177, 47, 150, 91, 50, 153, 140, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(46, 29, 159, 98, 91, 76, 105, 99, 147, 177, 47, 98, 109, 123, 97, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748333881252'] = function(block) {
  let code = "base_action.action('cnb')\n";
  return code;
}

Blockly.Blocks['Hands_up'] = {
  init: function () {
    this.jsonInit({
      type: 'Hands_up',
      message0: '%{BKY_HANDS_UP}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Hands_up'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(80, 30, 185, 100, 76, 27, 142, 100, 120, 170, 15, 100, 124, 173, 58, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(28)',
    'MOTOmove16(50, 20, 140, 100, 88, 55, 123, 100, 150, 180, 60, 100, 114, 145, 77, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(35)',
    'MOTOmove16(50, 20, 140, 100, 76, 27, 141, 100, 150, 180, 60, 100, 124, 173, 60, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(130, 170, 60, 100, 76, 27, 142, 100, 70, 30, 140, 100, 124, 173, 61, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(42)',
    'MOTOmove16(130, 170, 60, 100, 86, 55, 124, 100, 70, 30, 140, 100, 114, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(90, 30, 130, 100, 90, 55, 124, 100, 110, 170, 70, 100, 110, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Hands_up'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['HANDS_UP'] + "')\n";
  return code;
}

Blockly.Blocks['Pan_left_1_step'] = {
  init: function () {
    this.jsonInit({
      type: 'Pan_left_1_step',
      message0: '%{BKY_PAN_LEFT_1_STEP}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Pan_left_1_step'] = function (block) {
  const code = [
    'MOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 55, 100, 90, 93, 54, 124, 90, 120, 175, 100, 110, 107, 146, 76, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 55, 100, 95, 93, 54, 124, 105, 120, 175, 100, 106, 107, 146, 76, 115)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 25, 100, 106, 93, 54, 124, 110, 120, 145, 100, 115, 107, 146, 76, 115)',
    'MOTOwait()',
    'MOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85)',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Pan_left_1_step'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['PAN_LEFT_1_STEP'] + "')\n";
  return code;
}

Blockly.Blocks['1748334492866'] = {
  init: function() {
    this.jsonInit({
      "type": "1748334492866",
      "message0": "bkzpy",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748334492866'] = function(block) {
  let code = "MOTOrigid16(46,29,159,45,65,65,65,65,147,177,47,45,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,99,93,54,122,90,147,177,47,98,107,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,100,93,55,124,100,147,177,47,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(46,29,159,85,85,95,85,85,147,177,47,85,85,95,85,85)\nMOTOsetspeed(20)\nMOTOmove19(46,29,159,90,93,54,124,90,147,177,47,110,107,146,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(46,29,159,95,93,54,124,105,147,177,47,106,107,146,76,115,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(46,29,159,85,85,95,85,85,147,177,47,85,55,55,55,85)\nMOTOsetspeed(20)\nMOTOmove19(46,29,159,106,93,54,124,110,147,177,47,115,107,146,76,115,0,0,100)\nMOTOwait()\nMOTOrigid16(46,29,159,85,55,55,55,85,147,177,47,85,85,95,85,85)\nMOTOsetspeed(10)\nMOTOmove19(46,29,159,100,93,55,124,100,147,177,47,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748334492866'] = function(block) {
  let code = "base_action.action('bkzpy')\n";
  return code;
}

Blockly.Blocks['Take_three_slow_steps_forward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_three_slow_steps_forward',
      message0: '%{BKY_TAKE_THREE_SLOW_STEPS_FORWARD}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_three_slow_steps_forward'] = function (block) {
  const code = [
    'MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 107, 146, 76, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 113, 37, 156, 88, 120, 165, 90, 94, 107, 146, 77, 89)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 95, 54, 123, 113, 120, 165, 110, 114, 75, 105, 90, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 93, 54, 123, 111, 120, 165, 110, 114, 87, 163, 44, 112)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 110, 88, 71, 45, 107, 90, 120, 165, 110, 93, 100, 144, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 107, 146, 76, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 113, 37, 156, 88, 120, 165, 90, 94, 107, 146, 77, 89)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 95, 54, 123, 113, 120, 165, 110, 114, 75, 105, 90, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 93, 54, 123, 111, 120, 165, 110, 114, 87, 163, 44, 112)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 110, 88, 71, 45, 107, 90, 120, 165, 110, 93, 100, 144, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 107, 146, 76, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 113, 37, 156, 88, 120, 165, 90, 94, 107, 146, 77, 89)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 95, 54, 123, 113, 120, 165, 110, 114, 75, 105, 90, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 93, 54, 123, 111, 120, 165, 110, 114, 87, 163, 44, 112)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 110, 88, 71, 45, 107, 90, 120, 165, 110, 93, 100, 144, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 110, 95, 100, 90, 120, 165, 90, 94, 107, 146, 77, 89)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_three_slow_steps_forward'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_THREE_SLOW_STEPS_FORWARD'] + "')\n";
  return code;
}

Blockly.Blocks['1748335620079'] = {
  init: function() {
    this.jsonInit({
      "type": "1748335620079",
      "message0": "bkmz",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748335620079'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,99,93,54,122,90,147,177,47,98,107,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,100,93,55,124,100,147,177,47,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(46,29,159,90,91,48,129,88,147,177,47,94,107,146,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,86,125,95,110,90,147,177,47,94,107,146,76,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,86,113,37,156,88,147,177,47,94,107,146,77,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(46,29,159,107,100,56,124,111,147,177,47,112,129,155,93,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,106,95,54,123,113,147,177,47,114,75,105,90,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,106,93,54,123,111,147,177,47,114,87,163,44,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(46,29,159,88,71,45,107,90,147,177,47,93,100,144,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,86,125,95,110,90,147,177,47,94,107,146,76,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,86,113,37,156,88,147,177,47,94,107,146,77,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(46,29,159,107,100,56,124,111,147,177,47,112,129,155,93,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,106,95,54,123,113,147,177,47,114,75,105,90,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,106,93,54,123,111,147,177,47,114,87,163,44,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(46,29,159,88,71,45,107,90,147,177,47,93,100,144,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,86,125,95,110,90,147,177,47,94,107,146,76,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,86,113,37,156,88,147,177,47,94,107,146,77,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(46,29,159,107,100,56,124,111,147,177,47,112,129,155,93,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,106,95,54,123,113,147,177,47,114,75,105,90,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,106,93,54,123,111,147,177,47,114,87,163,44,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(46,29,159,88,71,45,107,90,147,177,47,93,100,144,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,86,110,95,100,90,147,177,47,94,107,146,77,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(46,29,159,90,91,48,129,88,147,177,47,94,107,146,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(46,29,159,100,93,55,124,100,147,177,47,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748335620079'] = function(block) {
  let code = "base_action.action('bkmz')\n";
  return code;
}

Blockly.Blocks['Take_three_quick_steps_forward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_three_quick_steps_forward',
      message0: '%{BKY_TAKE_THREE_QUICK_STEPS_FORWARD}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_three_quick_steps_forward'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,75,75,90,80,70,25,25,25,75,75,90,80,70)',
    'MOTOsetspeed(45)',
    'MOTOmove16(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95)',
    'MOTOwait()',
    'MOTOsetspeed(60)',
    'MOTOmove16(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 91, 94)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 91, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 91, 66, 109, 102, 120, 170, 120, 101, 85, 101, 97, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 86, 63, 110, 100, 120, 170, 120, 101, 90, 126, 79, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 94)',
    'MOTOwait()',
    'MOTOsetspeed(75)',
    'MOTOmove16(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100)',
    'MOTOwait()',
    'MOTOsetspeed(75)',
    'MOTOmove16(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96)',
    'MOTOwait()',
    'MOTOsetspeed(75)',
    'MOTOmove16(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100)',
    'MOTOwait()',
    'MOTOsetspeed(75)',
    'MOTOmove16(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96)',
    'MOTOwait()',
    'MOTOsetspeed(65)',
    'MOTOmove16(80, 30, 120, 96, 95, 70, 110, 100, 120, 170, 120, 102, 109, 146, 75, 96)',
    'MOTOwait()',
    'MOTOsetspeed(45)',
    'MOTOmove16(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_three_quick_steps_forward'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_THREE_QUICK_STEPS_FORWARD'] + "')\n";
  return code;
}

Blockly.Blocks['1748336766397'] = {
  init: function() {
    this.jsonInit({
      "type": "1748336766397",
      "message0": "bkkz",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748336766397'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,75,75,90,80,70,25,25,25,75,75,90,80,70,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(46, 29, 159, 99, 93, 54, 122, 90, 147, 177, 47, 98, 107, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46, 29, 159, 99, 115, 99, 103, 100, 147, 177, 47, 101, 109, 134, 91, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(46, 29, 159, 99, 110, 74, 121, 100, 147, 177, 47, 101, 114, 137, 91, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(46, 29, 159, 99, 110, 61, 126, 104, 147, 177, 47, 101, 100, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(46, 29, 159, 99, 91, 66, 109, 102, 147, 177, 47, 101, 85, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(46, 29, 159, 99, 86, 63, 110, 100, 147, 177, 47, 101, 90, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(46, 29, 159, 99, 100, 73, 106, 100, 147, 177, 47, 101, 90, 139, 74, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(46, 29, 159, 96, 95, 70, 110, 100, 147, 177, 47, 102, 109, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(46, 29, 159, 99, 93, 54, 122, 90, 147, 177, 47, 98, 107, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(46, 29, 159, 100, 93, 55, 124, 100, 147, 177, 47, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(46, 29, 159, 99, 93, 54, 122, 90, 147, 177, 47, 98, 107, 146, 75, 95, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748336766397'] = function(block) {
  let code = "base_action.action('bkkz')\n";
  return code;
}

Blockly.Blocks['1748336787700'] = {
  init: function() {
    this.jsonInit({
      "type": "1748336787700",
      "message0": "抱块右侧移2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748336787700'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(60, 15, 190, 90, 93, 54, 129, 100, 132, 187, 10, 115, 83, 110, 90, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60, 15, 190, 80, 84, 40, 137, 70, 132, 187, 10, 105, 107, 147, 74, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 87, 83, 39, 136, 69, 132, 187, 10, 105, 107, 147, 74, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 97, 93, 54, 129, 95, 132, 187, 10, 100, 107, 146, 71, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 95, 132, 187, 10, 100, 107, 145, 71, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748336787700'] = function(block) {
  let code = "base_action.action('抱块右侧移2')\n";
  return code;
}

Blockly.Blocks['1748337762254'] = {
  init: function() {
    this.jsonInit({
      "type": "1748337762254",
      "message0": "bkzy",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748337762254'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(60, 15, 190, 85, 117, 90, 110, 90, 132, 187, 10, 110, 107, 146, 71, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60, 15, 190, 95, 93, 53, 126, 105, 132, 187, 10, 120, 116, 160, 63, 130, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 95, 93, 53, 126, 105, 132, 187, 10, 113, 117, 161, 64, 131, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 54, 129, 98, 132, 187, 10, 103, 107, 146, 71, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 95, 132, 187, 10, 100, 107, 145, 71, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748337762254'] = function(block) {
  let code = "base_action.action('bkzy')\n";
  return code;
}

Blockly.Blocks['1748338538048'] = {
  init: function() {
    this.jsonInit({
      "type": "1748338538048",
      "message0": "bkzy（2）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748338538048'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35,0,0,0)\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 112, 110, 80, 115, 95, 132, 187, 10, 180, 110, 140, 65, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(70)\nMOTOmove19(60, 15, 190, 112, 105, 70, 120, 100, 132, 187, 10, 180, 115, 155, 60, 125, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 112, 105, 70, 120, 100, 132, 187, 10, 180, 115, 155, 65, 130, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 112, 95, 60, 125, 95, 132, 187, 10, 180, 105, 140, 70, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 112, 93, 58, 128, 95, 132, 187, 10, 100, 107, 142, 72, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748338538048'] = function(block) {
  let code = "base_action.action('bkzy（2）')\n";
  return code;
}

Blockly.Blocks['1748339482851'] = {
  init: function() {
    this.jsonInit({
      "type": "1748339482851",
      "message0": "抱块快走3步",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748339482851'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 99, 103, 100, 132, 187, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 102, 132, 187, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 99, 103, 100, 132, 187, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 102, 132, 187, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 99, 103, 100, 132, 187, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 102, 132, 187, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 100, 132, 187, 10, 102, 119, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748339482851'] = function(block) {
  let code = "base_action.action('抱块快走3步')\n";
  return code;
}

Blockly.Blocks['1748341117149'] = {
  init: function() {
    this.jsonInit({
      "type": "1748341117149",
      "message0": "飞起来",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748341117149'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(80, 35, 100, 85, 91, 50, 128, 88, 120, 165, 100, 95, 117, 168, 62, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 35, 100, 88, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 110, 86, 90, 95, 84, 90, 120, 165, 110, 94, 107, 146, 78, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 110, 88, 84, 53, 115, 85, 120, 165, 110, 93, 104, 144, 78, 91, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 110, 106, 93, 53, 124, 113, 120, 165, 110, 114, 102, 154, 55, 110, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,30,30,30,30,30,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 106, 93, 53, 124, 113, 120, 165, 90, 114, 95, 105, 95, 110, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,95,95,95,65,30,30,30,50,50,50,50,50,0,0,0)\nMOTOsetspeed(25)\nMOTOmove19(80, 35, 100, 104, 83, 32, 135, 111, 120, 165, 100, 115, 111, 150, 72, 112, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,50,50,50,30,30,30,30,30,50,50,50,30,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748341117149'] = function(block) {
  let code = "base_action.action('飞起来')\n";
  return code;
}

Blockly.Blocks['1748343937714'] = {
  init: function() {
    this.jsonInit({
      "type": "1748343937714",
      "message0": "抱块左移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748343937714'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(60, 15, 190, 85, 112, 90, 110, 90, 132, 187, 10, 110, 107, 146, 71, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60, 15, 190, 95, 93, 53, 126, 105, 132, 187, 10, 120, 116, 160, 63, 130, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 54, 129, 98, 132, 187, 10, 103, 107, 146, 71, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 95, 132, 187, 10, 100, 107, 145, 71, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748343937714'] = function(block) {
  let code = "base_action.action('抱块左移')\n";
  return code;
}

Blockly.Blocks['1748345144059'] = {
  init: function() {
    this.jsonInit({
      "type": "1748345144059",
      "message0": "报块左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748345144059'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,30,20,20,65,75,65,65,65,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(80, 30, 115, 95, 63, 55, 94, 95, 120, 170, 115, 105, 77, 145, 46, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 115, 95, 63, 55, 94, 93, 120, 170, 115, 105, 77, 145, 46, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1748345144059'] = function(block) {
  let code = "base_action.action('报块左转')\n";
  return code;
}

Blockly.Blocks['1748345150079'] = {
  init: function() {
    this.jsonInit({
      "type": "1748345150079",
      "message0": "抱块右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748345150079'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(60, 15, 190, 95, 123, 55, 154, 95, 132, 187, 10, 105, 137, 145, 106, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 95, 123, 55, 154, 93, 132, 187, 10, 105, 137, 145, 106, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1748345150079'] = function(block) {
  let code = "base_action.action('抱块右转')\n";
  return code;
}

Blockly.Blocks['1748345792018'] = {
  init: function() {
    this.jsonInit({
      "type": "1748345792018",
      "message0": "报块左转6",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748345792018'] = function(block) {
  let code = "MOTOrigid16(20,20,20,75,65,65,65,65,30,20,20,65,75,65,65,65)\nMOTOsetspeed(24)\nMOTOmove19(60,15,190,95,63,55,94,95,132,187,10,105,77,145,46,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,95,63,55,94,93,132,187,10,105,77,145,46,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,55,124,100,132,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1748345792018'] = function(block) {
  let code = "base_action.action('报块左转6')\n";
  return code;
}

Blockly.Blocks['Back_flip'] = {
  init: function () {
    this.jsonInit({
      type: 'Back_flip',
      message0: '%{BKY_BACK_FLIP}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Back_flip'] = function (block) {
  const code = [
    'MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)',
    'MOTOsetspeed(50)',
    'MOTOmove16(70, 50, 80, 100, 25, 133, 40, 98, 130, 150, 120, 100, 175, 65, 161, 102)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(45, 50, 45, 100, 23, 151, 68, 100, 155, 150, 155, 100, 177, 49, 130, 102)',
    'MOTOwait()',
    'MOTOsetspeed(45)',
    'MOTOmove16(70, 50, 35, 100, 160, 11, 121, 97, 130, 150, 165, 100, 40, 186, 81, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(70, 50, 10, 100, 160, 19, 92, 96, 130, 150, 190, 100, 40, 180, 108, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(30, 135, 187, 100, 162, 23, 100, 97, 170, 65, 10, 100, 40, 180, 95, 100)',
    'MOTOwait()',
    'MOTOsetspeed(53)',
    'MOTOmove16(30, 135, 190, 90, 80, 80, 70, 100, 170, 65, 10, 110, 120, 120, 130, 100)',
    'MOTOwait()',
    'DelayMs(50)',
    'MOTOsetspeed(53)',
    'MOTOmove16(90, 10, 160, 63, 162, 145, 33, 75, 110, 190, 40, 137, 38, 55, 167, 125)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(53)',
    'MOTOmove16(90, 15, 155, 100, 162, 145, 55, 100, 110, 185, 45, 100, 38, 55, 145, 100)',
    'MOTOwait()',
    'MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)',
    'MOTOsetspeed(53)',
    'MOTOmove16(90, 15, 155, 100, 162, 145, 55, 100, 110, 185, 45, 100, 38, 55, 145, 100)',
    'MOTOwait()',
    'DelayMs(50)',
    'MOTOsetspeed(42)',
    'MOTOmove16(90, 15, 140, 100, 162, 175, 50, 100, 110, 185, 60, 100, 38, 25, 150, 100)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 113, 100, 155, 175, 62, 100, 120, 170, 87, 100, 45, 25, 138, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 100, 100, 142, 145, 77, 100, 120, 170, 100, 100, 58, 55, 123, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Back_flip'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['BACK_FLIP'] + "')\n";
  return code;
}

Blockly.Blocks['1748346973146'] = {
  init: function() {
    this.jsonInit({
      "type": "1748346973146",
      "message0": "上去",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748346973146'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,98,97,145,41,99,120,170,100,100,98,53,159,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(32)\nMOTOmove19(85,30,130,100,140,152,60,100,115,170,70,100,60,48,140,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(100,10,185,100,165,145,35,100,100,190,15,100,35,55,165,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,89,190,100,140,90,40,100,129,108,10,100,60,110,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(57,79,131,100,140,90,40,100,138,131,66,100,60,110,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(44,69,190,100,26,100,146,100,162,134,10,100,174,105,52,100,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(68)\nMOTOmove19(47,56,190,100,26,100,146,100,160,131,10,100,174,105,52,100,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(37)\nMOTOmove19(115,176,127,101,51,150,33,101,85,24,78,99,153,50,165,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(37)\nMOTOmove19(116,177,160,101,51,150,33,101,84,24,43,99,153,50,165,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(37)\nMOTOmove19(116,177,160,101,51,150,33,101,84,24,43,99,153,50,165,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(116,177,160,100,69,139,43,100,86,24,43,99,134,61,162,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(97,25,170,100,102,149,61,100,122,164,29,100,104,50,148,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(37)\nMOTOmove19(69,64,100,101,100,144,33,101,121,130,99,99,100,56,165,102,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(83,28,98,100,123,152,44,103,115,169,89,103,78,46,161,100,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(85,30,102,99,107,150,44,100,115,162,96,99,94,50,159,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(85,30,102,102,110,73,116,101,115,162,96,106,91,122,84,99,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748346973146'] = function(block) {
  let code = "base_action.action('上去')\n";
  return code;
}

Blockly.Blocks['1748347361205'] = {
  init: function() {
    this.jsonInit({
      "type": "1748347361205",
      "message0": "再上去",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748347361205'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,98,97,145,41,99,120,170,100,100,98,53,159,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(32)\nMOTOmove19(85,30,130,100,140,152,60,100,115,170,70,100,60,48,140,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(100,10,185,100,165,145,35,100,100,190,15,100,35,55,165,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,89,190,100,140,90,40,100,129,108,10,100,60,110,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(57,79,131,100,140,90,40,100,138,131,66,100,60,110,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(44,69,190,100,26,100,146,100,162,134,10,100,174,105,52,100,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(68)\nMOTOmove19(47,56,190,100,26,100,146,100,160,131,10,100,174,105,52,100,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(37)\nMOTOmove19(115,176,127,101,51,150,35,101,85,24,78,99,153,50,165,102,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(37)\nMOTOmove19(116,177,160,101,51,150,35,101,84,24,43,99,153,50,165,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(37)\nMOTOmove19(116,177,160,101,51,150,33,101,84,24,43,99,153,50,165,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(116,177,160,100,69,139,43,100,86,24,43,99,134,61,162,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(97,25,170,100,102,149,61,100,122,164,29,100,104,50,148,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(37)\nMOTOmove19(69,64,100,101,100,144,33,101,121,130,99,99,100,56,165,102,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(83,28,98,100,123,152,44,103,115,169,89,103,78,46,161,100,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(85,30,102,99,107,150,44,100,115,162,96,99,94,50,159,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(85,30,102,102,110,73,116,101,115,162,96,106,91,122,84,99,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748347361205'] = function(block) {
  let code = "base_action.action('再上去')\n";
  return code;
}

Blockly.Blocks['1748347712836'] = {
  init: function() {
    this.jsonInit({
      "type": "1748347712836",
      "message0": "滚下去",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748347712836'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,98,97,145,41,99,120,170,100,100,98,53,159,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(32)\nMOTOmove19(85,30,130,100,140,152,60,100,115,170,70,100,60,48,140,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(100,10,185,100,165,145,35,100,100,190,15,100,35,55,165,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,89,190,100,140,90,40,100,129,108,10,100,60,110,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(57,79,131,100,140,90,40,100,138,131,66,100,60,110,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(44,69,190,100,26,100,146,100,162,134,10,100,174,105,52,100,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(68)\nMOTOmove19(47,56,190,100,26,100,146,100,160,131,10,100,174,105,52,100,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(37)\nMOTOmove19(115,176,127,101,51,150,35,101,85,24,78,99,153,50,165,102,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(37)\nMOTOmove19(116,177,160,101,51,150,35,101,84,24,43,99,153,50,165,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(37)\nMOTOmove19(116,177,160,101,51,150,33,101,84,24,43,99,153,50,165,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(116,177,160,100,69,139,43,100,86,24,43,99,134,61,162,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(97,25,170,100,102,149,61,100,122,164,29,100,104,50,148,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(37)\nMOTOmove19(69,64,100,101,100,144,33,101,121,130,99,99,100,56,165,102,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(83,28,98,100,123,152,44,103,115,169,89,103,78,46,161,100,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(85,30,102,99,107,150,44,100,115,162,96,99,94,50,159,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(85,30,102,102,110,73,116,101,115,162,96,106,91,122,84,99,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748347712836'] = function(block) {
  let code = "base_action.action('滚下去')\n";
  return code;
}

Blockly.Blocks['1748347979584'] = {
  init: function() {
    this.jsonInit({
      "type": "1748347979584",
      "message0": "滚上去",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748347979584'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(50)\nMOTOmove19(70,50,80,100,25,133,40,98,130,150,120,100,175,65,161,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(45,50,45,100,23,151,68,100,155,150,155,100,177,49,130,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(70,50,35,100,160,11,121,97,130,150,165,100,40,186,81,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(70,50,10,100,160,19,92,96,130,150,190,100,40,180,108,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(30,135,187,100,162,23,100,97,170,65,10,100,40,180,95,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(30,135,190,90,80,80,70,100,170,65,10,110,120,120,130,100,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(53)\nMOTOmove19(90,10,160,63,162,145,33,75,110,190,40,137,38,55,167,125,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(53)\nMOTOmove19(90,15,155,100,160,145,55,100,110,185,45,100,40,55,145,100,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(53)\nMOTOmove19(90,15,155,100,162,145,55,100,110,185,45,100,38,55,145,100,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(42)\nMOTOmove19(90,15,140,100,162,175,50,100,110,185,60,100,38,25,150,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(28)\nMOTOmove19(80,30,113,100,155,175,62,100,120,170,87,100,45,25,138,100,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(28)\nMOTOmove19(80,30,100,100,142,145,77,100,120,170,100,100,58,55,123,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748347979584'] = function(block) {
  let code = "base_action.action('滚上去')\n";
  return code;
}

Blockly.Blocks['1748348747403'] = {
  init: function() {
    this.jsonInit({
      "type": "1748348747403",
      "message0": "滚上去2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748348747403'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(50)\nMOTOmove19(70,50,80,100,25,133,40,98,130,150,120,100,175,65,161,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(45,50,45,100,23,151,68,100,155,150,155,100,177,49,130,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(70,50,35,100,160,11,121,97,130,150,165,100,40,186,81,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(70,50,10,100,160,19,92,96,130,150,190,100,40,180,108,100,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(50)\nMOTOmove19(30,135,187,100,162,23,100,97,170,65,10,100,40,180,95,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(30,135,190,90,80,80,70,100,170,65,10,110,120,120,130,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(90,10,160,63,162,145,33,75,110,190,40,137,38,55,167,125,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(53)\nMOTOmove19(90,15,155,100,160,145,55,100,110,185,45,100,40,55,145,100,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(53)\nMOTOmove19(90,15,155,100,162,145,55,100,110,185,45,100,38,55,145,100,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(42)\nMOTOmove19(90,15,140,100,162,175,50,100,110,185,60,100,38,25,150,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(28)\nMOTOmove19(80,30,113,100,155,175,62,100,120,170,87,100,45,25,138,100,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(28)\nMOTOmove19(80,30,100,100,142,145,77,100,120,170,100,100,58,55,123,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748348747403'] = function(block) {
  let code = "base_action.action('滚上去2')\n";
  return code;
}

Blockly.Blocks['Left_Roll'] = {
  init: function () {
    this.jsonInit({
      type: 'Left_Roll',
      message0: '%{BKY_LEFT_ROLL}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Left_Roll'] = function (block) {
  const code = [
    'MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)',
    'MOTOrigid16(60,60,60,60,70,70,70,60,60,60,60,60,70,70,70,60)',
    'MOTOsetspeed(52)',
    'MOTOmove16(80, 30, 100, 100, 97, 55, 124, 100, 120, 170, 100, 100, 103, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(140, 150, 105, 100, 137, 140, 83, 100, 60, 50, 95, 100, 63, 60, 117, 100)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(145, 155, 105, 85, 137, 140, 83, 118, 55, 45, 95, 105, 75, 85, 117, 117)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(190, 157, 103, 70, 145, 136, 83, 120, 10, 49, 97, 115, 60, 60, 117, 111)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(190, 157, 103, 50, 142, 140, 83, 116, 10, 49, 97, 150, 65, 60, 117, 111)',
    'MOTOwait()',
    'MOTOsetspeed(60)',
    'MOTOmove16(190, 157, 103, 30, 143, 140, 83, 114, 10, 49, 97, 170, 65, 60, 117, 80)',
    'MOTOwait()',
    'MOTOsetspeed(60)',
    'MOTOmove16(190, 157, 103, 15, 140, 140, 83, 120, 10, 49, 97, 183, 65, 60, 117, 80)',
    'MOTOwait()',
    'DelayMs(700)',
    'MOTOsetspeed(49)',
    'MOTOmove16(145, 120, 105, 15, 130, 140, 83, 130, 55, 80, 95, 168, 62, 60, 117, 80)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(135, 120, 105, 100, 127, 127, 83, 86, 65, 80, 95, 183, 65, 60, 117, 95)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 50, 105, 100, 120, 110, 83, 82, 120, 150, 95, 113, 68, 62, 117, 93)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(80, 50, 100, 98, 132, 140, 83, 97, 120, 150, 100, 102, 68, 60, 117, 103)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Left_Roll'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['LEFT_ROLL'] + "')\n";
  return code;
}

Blockly.Blocks['1748350007677'] = {
  init: function() {
    this.jsonInit({
      "type": "1748350007677",
      "message0": "上去6",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748350007677'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,98,97,145,41,99,120,170,100,100,98,53,159,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,100,100,98,97,145,40,99,119,102,100,100,98,53,159,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(32)\nMOTOmove19(85,100,100,100,140,150,60,100,115,102,100,100,60,50,140,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(100,10,185,100,165,145,35,100,100,190,15,100,35,55,165,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,89,190,100,140,90,40,100,129,108,10,100,60,110,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(57,79,131,100,140,90,40,100,138,131,66,100,60,110,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(44,69,190,100,26,100,146,100,162,134,10,100,174,105,52,100,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(68)\nMOTOmove19(47,56,190,100,26,100,146,100,160,131,10,100,174,105,52,100,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(37)\nMOTOmove19(115,176,127,101,51,150,35,101,85,24,78,99,153,50,165,102,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(37)\nMOTOmove19(116,177,160,101,51,150,35,101,84,24,43,99,153,50,165,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(37)\nMOTOmove19(116,177,160,101,51,150,33,101,84,24,43,99,153,50,165,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(116,177,160,100,69,139,43,100,86,24,43,99,134,61,162,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(97,25,170,100,102,149,61,100,122,164,29,100,104,50,148,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(37)\nMOTOmove19(69,64,100,101,100,144,33,101,121,130,99,99,100,56,165,102,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(83,28,98,100,123,152,44,103,115,169,89,103,78,46,161,100,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(85,30,102,99,107,150,44,100,115,162,96,99,94,50,159,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(85,30,102,102,110,73,116,101,115,162,96,106,91,122,84,99,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748350007677'] = function(block) {
  let code = "base_action.action('上去6')\n";
  return code;
}

Blockly.Blocks['1748350404404'] = {
  init: function() {
    this.jsonInit({
      "type": "1748350404404",
      "message0": "上去7",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748350404404'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,98,97,145,41,99,120,170,100,100,98,53,159,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,100,98,97,145,40,99,122,109,100,100,98,53,159,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(32)\nMOTOmove19(85,80,100,100,140,150,60,100,115,109,100,100,60,50,140,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(100,10,185,100,165,145,35,100,100,190,15,100,35,55,165,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,89,190,100,140,90,40,100,129,108,10,100,60,110,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(57,79,131,100,140,90,40,100,138,131,66,100,60,110,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(44,69,190,100,26,100,146,100,162,134,10,100,174,105,52,100,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(68)\nMOTOmove19(47,56,190,100,26,100,146,100,160,131,10,100,174,105,52,100,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(37)\nMOTOmove19(115,176,127,101,51,150,35,101,85,24,78,99,153,50,165,102,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(37)\nMOTOmove19(116,177,160,101,51,150,35,101,84,24,43,99,153,50,165,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,100,98,97,145,40,99,119,80,100,100,98,53,159,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(37)\nMOTOmove19(116,177,160,101,51,150,33,101,84,24,43,99,153,50,165,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(116,177,160,100,69,139,43,100,86,24,43,99,134,61,162,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(97,25,170,100,102,149,61,100,122,164,29,100,104,50,148,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(37)\nMOTOmove19(69,64,100,101,100,144,33,101,121,130,99,99,100,56,165,102,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(83,28,98,100,123,152,44,103,115,169,89,103,78,46,161,100,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(85,30,102,99,107,150,44,100,115,162,96,99,94,50,159,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(85,30,102,102,110,73,116,101,115,162,96,106,91,122,84,99,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748350404404'] = function(block) {
  let code = "base_action.action('上去7')\n";
  return code;
}

Blockly.Blocks['1748390175464'] = {
  init: function() {
    this.jsonInit({
      "type": "1748390175464",
      "message0": "金鸡",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748390175464'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50)\nMOTOsetspeed(22)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(20)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,87,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,103,102,145,74,88,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(25)\nMOTOmove19(125,65,100,90,115,145,47,90,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(33)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,88,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(22)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748390175464'] = function(block) {
  let code = "base_action.action('金鸡')\n";
  return code;
}

Blockly.Blocks['1748395048571'] = {
  init: function() {
    this.jsonInit({
      "type": "1748395048571",
      "message0": "金鸡6",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748395048571'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50)\nMOTOsetspeed(22)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(20)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,87,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(100,99,100,84,115,95,102,88,100,100,99,93,102,143,74,85,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,99,100,84,115,95,102,88,100,100,99,93,102,143,74,85,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,103,102,145,74,88,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,145,47,110,100,100,100,103,102,145,74,88,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,70,115,95,102,110,100,100,100,140,102,145,74,88,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,70,115,95,102,110,100,100,100,140,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(125,65,100,70,115,95,102,60,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(25)\nMOTOmove19(125,65,100,70,115,95,102,60,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,83,107,150,39,100,125,86,100,88,85,62,142,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,70,115,95,102,110,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,70,115,95,102,110,125,86,100,90,102,60,150,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,90,115,145,47,110,125,86,100,90,102,60,150,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,70,115,150,46,60,125,86,100,103,102,145,74,88,0,0,100)\nMOTOwait()\nMOTOsetspeed(33)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,88,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(22)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748395048571'] = function(block) {
  let code = "base_action.action('金鸡6')\n";
  return code;
}

Blockly.Blocks['1748401251348'] = {
  init: function() {
    this.jsonInit({
      "type": "1748401251348",
      "message0": "跨上去",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748401251348'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50)\nMOTOsetspeed(22)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(20)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,87,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,103,102,145,74,88,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,145,47,110,100,100,100,103,102,145,74,88,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,70,115,95,102,110,100,100,100,140,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(125,65,100,70,115,95,102,60,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nDelayMs(1000)\n";
  return code;
}

Blockly.Python['1748401251348'] = function(block) {
  let code = "base_action.action('跨上去')\n";
  return code;
}

Blockly.Blocks['1748404422366'] = {
  init: function() {
    this.jsonInit({
      "type": "1748404422366",
      "message0": "翻一半",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748404422366'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50)\nMOTOsetspeed(22)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(20)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,87,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,103,102,145,74,88,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,145,47,110,100,100,100,103,102,145,74,88,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,65,115,100,102,60,100,100,100,140,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(125,65,100,70,115,95,102,60,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(25)\nMOTOmove19(125,65,100,70,115,95,102,60,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(30)\nMOTOmove19(81,65,100,70,115,95,102,60,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(81,65,100,76,115,94,101,60,125,86,100,128,89,50,164,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(81,65,100,76,115,94,101,60,125,86,100,122,89,173,47,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(81,65,100,83,114,33,154,111,125,86,100,122,89,173,47,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,64,100,86,115,67,127,107,125,18,99,103,102,145,74,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748404422366'] = function(block) {
  let code = "base_action.action('翻一半')\n";
  return code;
}

Blockly.Blocks['1748408960590'] = {
  init: function() {
    this.jsonInit({
      "type": "1748408960590",
      "message0": "没迈上去",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748408960590'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50)\nMOTOsetspeed(22)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(20)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,87,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,103,102,145,74,88,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(25)\nMOTOmove19(125,65,100,90,115,145,47,90,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,89,160,145,46,89,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,101,160,150,90,90,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,85,133,28,188,72,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,97,144,112,92,102,125,86,100,101,41,58,75,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,101,149,40,188,89,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,101,149,40,188,89,125,86,100,113,100,143,75,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,94,159,47,190,93,125,86,100,109,101,144,75,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,102,149,39,190,103,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,107,160,147,53,121,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(125,65,100,105,160,10,190,75,125,86,100,126,75,144,83,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,96,146,30,190,89,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(33)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,88,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(22)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748408960590'] = function(block) {
  let code = "base_action.action('没迈上去')\n";
  return code;
}

Blockly.Blocks['1748411580683'] = {
  init: function() {
    this.jsonInit({
      "type": "1748411580683",
      "message0": "前躺起身",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748411580683'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,98,97,145,41,99,120,170,100,100,98,53,159,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,100,98,97,145,40,99,122,109,100,100,98,53,159,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(32)\nMOTOmove19(85,80,100,100,140,150,60,100,115,109,100,100,60,50,140,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(100,10,185,100,165,145,35,100,100,190,15,100,35,55,165,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,89,190,100,140,90,40,100,129,108,10,100,60,110,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(57,79,131,100,140,90,40,100,138,131,66,100,60,110,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(44,69,190,100,26,100,146,100,162,134,10,100,174,105,52,100,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(68)\nMOTOmove19(47,56,190,100,26,100,146,100,160,131,10,100,174,105,52,100,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(37)\nMOTOmove19(115,176,127,101,51,150,35,101,85,24,78,99,153,50,165,102,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(37)\nMOTOmove19(116,177,160,101,51,150,35,101,84,24,43,99,153,50,165,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,100,98,97,145,40,99,119,80,100,100,98,53,159,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(97,25,170,100,102,149,61,100,122,164,29,100,104,50,148,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(37)\nMOTOmove19(69,64,100,101,100,144,33,101,121,130,99,99,100,56,165,102,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(83,28,98,100,123,152,44,103,115,169,89,103,78,46,161,100,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(85,30,102,99,107,150,44,100,115,162,96,99,94,50,159,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(85,30,102,102,110,73,116,101,115,162,96,106,91,122,84,99,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748411580683'] = function(block) {
  let code = "base_action.action('前躺起身')\n";
  return code;
}

Blockly.Blocks['1748411589688'] = {
  init: function() {
    this.jsonInit({
      "type": "1748411589688",
      "message0": "前躺起身（2）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748411589688'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 98, 97, 145, 41, 99, 120, 170, 100, 100, 98, 53, 159, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 80, 100, 98, 97, 145, 40, 99, 122, 109, 100, 100, 98, 53, 159, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(32)\nMOTOmove19(85, 80, 100, 100, 140, 150, 60, 100, 115, 109, 100, 100, 60, 50, 140, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(100, 10, 185, 100, 160, 145, 35, 100, 100, 190, 15, 100, 40, 55, 165, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75, 89, 190, 100, 140, 90, 40, 100, 129, 108, 10, 100, 60, 110, 160, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(57, 79, 131, 100, 140, 90, 40, 100, 138, 131, 66, 100, 60, 110, 160, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(44, 69, 190, 100, 26, 100, 146, 100, 162, 134, 10, 100, 174, 105, 52, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(68)\nMOTOmove19(47, 56, 190, 100, 26, 100, 146, 100, 160, 131, 10, 100, 174, 105, 52, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(37)\nMOTOmove19(115, 176, 127, 101, 51, 150, 35, 101, 85, 24, 78, 99, 153, 50, 165, 102, 0, 0, 100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(37)\nMOTOmove19(116, 177, 160, 101, 51, 150, 35, 101, 84, 24, 43, 99, 153, 50, 165, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 80, 100, 98, 97, 145, 40, 99, 119, 80, 100, 100, 98, 53, 159, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(97, 25, 170, 100, 102, 149, 61, 100, 122, 164, 29, 100, 104, 50, 148, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(37)\nMOTOmove19(69, 64, 100, 101, 100, 144, 35, 101, 121, 130, 99, 99, 100, 56, 165, 102, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(83, 28, 98, 100, 123, 150, 44, 103, 115, 169, 89, 103, 78, 50, 161, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(85, 30, 102, 99, 107, 150, 44, 100, 115, 162, 96, 99, 94, 50, 159, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(85, 30, 102, 102, 110, 73, 116, 101, 115, 162, 96, 106, 91, 122, 84, 99, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748411589688'] = function(block) {
  let code = "base_action.action('前躺起身（2）')\n";
  return code;
}

Blockly.Blocks['1748414147922'] = {
  init: function() {
    this.jsonInit({
      "type": "1748414147922",
      "message0": "前躺起立",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748414147922'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(57,79,131,100,140,90,40,100,138,131,66,100,60,110,160,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(44,69,190,100,26,100,146,100,162,134,10,100,174,105,52,100,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(68)\nMOTOmove19(47,56,190,100,26,100,146,100,160,131,10,100,174,105,52,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(37)\nMOTOmove19(115,176,127,101,51,150,35,101,85,24,78,99,153,50,165,102,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(37)\nMOTOmove19(116,177,160,101,51,150,35,101,84,24,43,99,153,50,165,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(37)\nMOTOmove19(69,64,100,101,100,144,35,101,121,130,99,99,100,56,165,102,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(85,30,102,102,110,73,116,101,115,162,96,106,91,122,84,99,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748414147922'] = function(block) {
  let code = "base_action.action('前躺起立')\n";
  return code;
}

Blockly.Blocks['1748414158325'] = {
  init: function() {
    this.jsonInit({
      "type": "1748414158325",
      "message0": "前躺起立（2）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748414158325'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(57, 79, 131, 100, 140, 90, 40, 100, 138, 131, 66, 100, 60, 110, 160, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(44, 69, 190, 100, 26, 100, 146, 100, 162, 134, 10, 100, 174, 105, 52, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(68)\nMOTOmove19(47, 56, 190, 100, 26, 100, 146, 100, 160, 131, 10, 100, 174, 105, 52, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(37)\nMOTOmove19(115, 176, 127, 101, 51, 150, 35, 101, 85, 24, 78, 99, 153, 50, 165, 102, 0, 0, 100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(37)\nMOTOmove19(116, 177, 160, 101, 51, 150, 35, 101, 84, 24, 43, 99, 153, 50, 165, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(37)\nMOTOmove19(69, 64, 100, 101, 100, 144, 35, 101, 121, 130, 99, 99, 100, 56, 165, 102, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(15)\nMOTOmove19(85, 30, 102, 102, 110, 73, 116, 101, 115, 162, 96, 106, 91, 122, 84, 99, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748414158325'] = function(block) {
  let code = "base_action.action('前躺起立（2）')\n";
  return code;
}

Blockly.Blocks['1748395055671'] = {
  init: function() {
    this.jsonInit({
      "type": "1748395055671",
      "message0": "金鸡6（2）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748395055671'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50,0,0,0)\nMOTOsetspeed(22)\nMOTOmove19(100, 100, 100, 90, 91, 48, 129, 88, 100, 100, 100, 92, 107, 146, 76, 88, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(20)\nMOTOmove19(100, 100, 100, 85, 115, 95, 102, 90, 100, 100, 100, 93, 102, 145, 74, 87, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(100, 99, 100, 84, 115, 95, 102, 88, 100, 100, 99, 93, 102, 143, 74, 85, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 99, 100, 84, 115, 95, 102, 88, 100, 100, 99, 93, 102, 143, 74, 85, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 90, 115, 145, 47, 85, 100, 100, 100, 103, 102, 145, 74, 88, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 90, 115, 145, 47, 110, 100, 100, 100, 103, 102, 145, 74, 88, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 70, 115, 95, 102, 110, 100, 100, 100, 140, 102, 145, 74, 88, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 70, 115, 95, 102, 110, 100, 100, 100, 140, 102, 145, 74, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(125, 65, 100, 70, 115, 95, 102, 60, 125, 86, 100, 103, 102, 145, 74, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(25)\nMOTOmove19(125, 65, 100, 70, 115, 95, 102, 60, 125, 86, 100, 103, 102, 145, 74, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(30)\nMOTOmove19(125, 65, 100, 83, 107, 150, 39, 100, 125, 86, 100, 88, 85, 62, 142, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125, 65, 100, 70, 115, 95, 102, 110, 125, 86, 100, 103, 102, 145, 74, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125, 65, 100, 70, 115, 95, 102, 110, 125, 86, 100, 90, 102, 60, 150, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125, 65, 100, 90, 115, 145, 47, 110, 125, 86, 100, 90, 102, 60, 150, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125, 65, 100, 70, 115, 150, 46, 60, 125, 86, 100, 103, 102, 145, 74, 88, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(33)\nMOTOmove19(100, 100, 100, 85, 115, 95, 102, 90, 100, 100, 100, 93, 102, 145, 74, 88, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(22)\nMOTOmove19(100, 100, 100, 90, 91, 48, 129, 88, 100, 100, 100, 92, 107, 146, 76, 88, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748395055671'] = function(block) {
  let code = "base_action.action('金鸡6（2）')\n";
  return code;
}

Blockly.Blocks['1748416796897'] = {
  init: function() {
    this.jsonInit({
      "type": "1748416796897",
      "message0": "翻一半（2）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748416796897'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50,0,0,0)\nMOTOsetspeed(22)\nMOTOmove19(100, 100, 100, 90, 91, 48, 129, 88, 100, 100, 100, 92, 107, 146, 76, 88, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(20)\nMOTOmove19(100, 100, 100, 85, 115, 95, 102, 90, 100, 100, 100, 93, 102, 145, 74, 87, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 90, 115, 145, 47, 85, 100, 100, 100, 103, 102, 145, 74, 88, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 90, 115, 145, 47, 110, 100, 100, 100, 103, 102, 145, 74, 88, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 65, 115, 100, 102, 60, 100, 100, 100, 140, 102, 145, 74, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(125, 65, 100, 70, 115, 95, 102, 60, 125, 86, 100, 103, 102, 145, 74, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(25)\nMOTOmove19(125, 65, 100, 70, 115, 95, 102, 60, 125, 86, 100, 103, 102, 145, 74, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(30)\nMOTOmove19(81, 65, 100, 70, 115, 95, 102, 60, 125, 86, 100, 103, 102, 145, 74, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(81, 65, 100, 76, 115, 94, 101, 60, 125, 86, 100, 128, 89, 50, 164, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(81, 65, 100, 76, 115, 94, 101, 60, 125, 86, 100, 122, 89, 173, 47, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(81, 65, 100, 83, 114, 33, 154, 111, 125, 86, 100, 122, 89, 173, 47, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 64, 100, 86, 115, 67, 127, 107, 125, 18, 99, 103, 102, 145, 74, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748416796897'] = function(block) {
  let code = "base_action.action('翻一半（2）')\n";
  return code;
}

Blockly.Blocks['1748418706546'] = {
  init: function() {
    this.jsonInit({
      "type": "1748418706546",
      "message0": "永远上不去",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748418706546'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50)\nMOTOsetspeed(22)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(20)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,87,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,103,102,145,74,88,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,145,47,110,100,100,100,103,102,145,74,88,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,65,115,100,102,60,100,100,100,140,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(125,65,100,70,115,95,102,60,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,74,128,150,46,84,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,69,114,98,102,121,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,70,115,95,102,60,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,87,160,150,101,95,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(90,28,99,87,160,150,101,95,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(90,28,99,88,141,150,66,107,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,87,160,150,101,95,69,19,100,93,40,50,105,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,80,160,150,93,83,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,97,160,150,84,122,125,86,100,99,85,128,73,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(81,65,100,70,115,95,102,60,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(81,65,100,76,115,94,101,60,125,86,100,128,89,50,164,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(81,65,100,76,115,94,101,60,125,86,100,122,89,173,47,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(81,65,100,83,114,33,154,111,125,86,100,122,89,173,47,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,64,100,86,115,67,127,107,125,18,99,103,102,145,74,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748418706546'] = function(block) {
  let code = "base_action.action('永远上不去')\n";
  return code;
}

Blockly.Blocks['1748419588049'] = {
  init: function() {
    this.jsonInit({
      "type": "1748419588049",
      "message0": "这辈子都迈不上去",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748419588049'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50)\nMOTOsetspeed(22)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(20)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,87,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,103,102,145,74,88,128,71,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(25)\nMOTOmove19(125,65,100,90,115,145,47,90,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,89,160,145,46,89,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,101,160,150,90,90,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,101,160,150,42,90,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,101,160,143,106,89,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,101,160,60,184,87,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,101,156,36,190,88,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,85,133,28,188,72,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,97,144,112,92,102,125,86,100,101,41,58,75,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,101,149,40,188,89,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,101,149,40,188,89,125,86,100,113,100,143,75,104,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,94,159,47,190,93,125,86,100,109,101,144,75,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,102,149,39,190,103,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,107,160,147,53,121,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(125,65,100,105,160,10,190,75,125,86,100,126,75,144,83,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(125,65,100,96,146,30,190,89,125,86,100,103,102,145,74,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(33)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,88,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(22)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748419588049'] = function(block) {
  let code = "base_action.action('这辈子都迈不上去')\n";
  return code;
}

Blockly.Blocks['1748430536069'] = {
  init: function() {
    this.jsonInit({
      "type": "1748430536069",
      "message0": "倒了没起来",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748430536069'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(79,29,188,98,88,10,112,98,120,169,20,99,107,179,94,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,28,112,94,86,10,112,94,120,173,87,95,107,179,94,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,28,112,98,106,55,117,102,120,173,87,99,91,142,86,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(92,78,112,29,88,60,190,94,118,113,86,174,110,150,10,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(38,151,10,41,63,14,190,94,164,45,190,174,110,150,10,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(38,151,10,46,39,117,41,99,164,45,190,170,116,62,146,82,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(37,153,10,37,83,36,51,91,164,45,190,167,104,150,158,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,185,26,36,133,29,105,95,118,29,182,176,46,149,99,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,183,26,102,160,11,130,100,142,20,181,100,40,190,63,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(130,181,22,102,160,11,130,100,71,18,181,100,40,190,63,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,185,26,100,160,135,40,101,150,20,184,101,40,64,161,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(129,184,14,100,160,135,40,101,75,19,184,101,40,64,161,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(129,184,14,100,140,150,56,100,75,19,184,100,61,50,143,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,185,14,101,158,150,73,99,84,28,186,101,40,64,161,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,185,14,102,144,150,58,97,84,28,186,101,55,50,143,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,185,14,101,125,89,62,96,84,28,186,101,78,111,141,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85,27,117,101,125,89,62,96,122,172,81,101,78,111,141,98,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748430536069'] = function(block) {
  let code = "base_action.action('倒了没起来')\n";
  return code;
}

Blockly.Blocks['1748430578423'] = {
  init: function() {
    this.jsonInit({
      "type": "1748430578423",
      "message0": "前倒地起身smart",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748430578423'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 90, 101, 101, 93, 57, 124, 101, 131, 100, 98, 102, 107, 143, 77, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(74, 95, 101, 100, 92, 47, 46, 100, 134, 101, 98, 101, 106, 154, 157, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(37, 92, 182, 100, 92, 68, 44, 100, 153, 107, 19, 101, 106, 129, 158, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(82, 33, 169, 100, 157, 150, 43, 100, 130, 161, 35, 101, 45, 50, 161, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(90, 15, 155, 100, 160, 150, 35, 100, 110, 185, 45, 100, 40, 50, 165, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(53)\nMOTOmove19(90, 15, 155, 100, 160, 150, 35, 100, 110, 185, 45, 100, 40, 50, 165, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(42)\nMOTOmove19(90, 15, 140, 100, 160, 150, 50, 100, 110, 185, 60, 100, 40, 50, 150, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 100, 155, 150, 62, 100, 120, 170, 87, 100, 45, 50, 138, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 100, 155, 150, 62, 100, 120, 170, 87, 100, 45, 50, 138, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 100, 135, 150, 62, 100, 120, 170, 87, 100, 65, 50, 138, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 100, 135, 150, 62, 100, 120, 170, 87, 100, 65, 50, 138, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(25)\nMOTOmove19(80, 30, 113, 84, 136, 150, 60, 88, 120, 170, 87, 102, 64, 50, 139, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80, 30, 113, 95, 116, 61, 135, 94, 120, 170, 87, 109, 82, 124, 77, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\n";
  return code;
}

Blockly.Python['1748430578423'] = function(block) {
  let code = "base_action.action('前倒地起身smart')\n";
  return code;
}

Blockly.Blocks['1748432241368'] = {
  init: function() {
    this.jsonInit({
      "type": "1748432241368",
      "message0": "11",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748432241368'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(79,29,188,98,88,10,112,98,120,169,20,99,107,179,94,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,28,112,98,106,55,117,102,120,173,87,99,91,142,86,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(92,78,112,29,88,60,190,94,118,113,86,174,110,150,10,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(38,151,10,46,39,117,41,99,164,45,190,170,116,62,146,82,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(37,153,10,37,83,36,51,91,164,45,190,167,104,150,158,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,185,26,36,133,29,105,95,118,29,182,176,46,149,99,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,183,26,102,160,11,130,100,142,20,181,100,40,190,63,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(130,181,22,102,160,11,130,100,71,18,181,100,40,190,63,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,185,26,100,160,135,40,101,150,20,184,101,40,64,161,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(129,184,14,100,160,135,40,101,75,19,184,101,40,64,161,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(122,183,10,100,160,135,40,101,74,18,190,101,40,64,161,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(129,184,14,100,140,150,56,100,75,19,184,100,61,50,143,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,185,14,101,158,150,73,99,84,28,186,101,40,64,161,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,185,14,102,144,150,58,97,84,28,186,101,55,50,143,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,185,14,101,125,89,62,96,84,28,186,101,78,111,141,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85,27,117,101,125,89,62,96,122,172,81,101,78,111,141,98,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748432241368'] = function(block) {
  let code = "base_action.action('11')\n";
  return code;
}

Blockly.Blocks['1748484726035'] = {
  init: function() {
    this.jsonInit({
      "type": "1748484726035",
      "message0": "123",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748484726035'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(79,29,188,98,88,10,112,98,120,169,20,99,107,179,94,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,28,112,94,86,10,112,94,120,173,87,95,107,179,94,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,28,112,98,106,55,117,102,120,173,87,99,91,142,86,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(92,78,112,29,88,60,190,94,118,113,86,174,110,150,10,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(38,151,10,41,63,14,190,94,164,45,190,174,110,150,10,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(38,151,10,46,39,117,41,99,164,45,190,170,116,62,146,82,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(37,153,10,37,83,36,51,91,164,45,190,167,104,150,158,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,185,26,36,133,29,105,95,118,29,182,176,46,149,99,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,183,26,102,160,11,130,100,142,20,181,100,40,190,63,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(130,181,22,102,160,11,130,100,71,18,181,100,40,190,63,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,185,26,100,160,135,40,101,150,20,184,101,40,64,161,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(129,184,14,100,160,135,40,101,75,19,184,101,40,64,161,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(129,184,14,100,140,150,56,100,75,19,184,100,61,50,143,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,185,14,101,158,150,73,99,84,28,186,101,40,64,161,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,185,14,102,144,150,58,97,84,28,186,101,55,50,143,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,185,14,101,125,89,62,96,84,28,186,101,78,111,141,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85,27,117,101,125,89,62,96,122,172,81,101,78,111,141,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(74,95,101,100,92,47,46,100,134,101,98,101,106,154,157,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(37,92,182,100,92,68,44,100,153,107,19,101,106,129,158,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(82,33,169,100,157,150,43,100,130,161,35,101,45,50,161,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(90,15,155,100,160,150,35,100,110,185,45,100,40,50,165,100,0,0,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(53)\nMOTOmove19(90,15,155,100,160,150,35,100,110,185,45,100,40,50,165,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(42)\nMOTOmove19(90,15,140,100,160,150,50,100,110,185,60,100,40,50,150,100,0,0,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,155,150,62,100,120,170,87,100,45,50,138,100,0,0,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,155,150,62,100,120,170,87,100,45,50,138,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,135,150,62,100,120,170,87,100,65,50,138,100,0,0,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,135,150,62,100,120,170,87,100,65,50,138,100,0,0,100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(25)\nMOTOmove19(80,30,113,84,136,150,60,88,120,170,87,102,64,50,139,106,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80,30,113,95,116,61,135,94,120,170,87,109,82,124,77,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\n";
  return code;
}

Blockly.Python['1748484726035'] = function(block) {
  let code = "base_action.action('123')\n";
  return code;
}

Blockly.Blocks['1748484766213'] = {
  init: function() {
    this.jsonInit({
      "type": "1748484766213",
      "message0": "123456",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748484766213'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(79,29,188,98,88,10,112,98,120,169,20,99,107,179,94,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,28,112,94,86,10,112,94,120,173,87,95,107,179,94,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,28,112,98,106,55,117,102,120,173,87,99,91,142,86,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(92,78,112,29,88,60,190,94,118,113,86,174,110,150,10,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(38,151,10,41,63,14,190,94,164,45,190,174,110,150,10,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(38,151,10,46,39,117,41,99,164,45,190,170,116,62,146,82,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(37,153,10,37,83,36,51,91,164,45,190,167,104,150,158,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,185,26,36,133,29,105,95,118,29,182,176,46,149,99,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,183,26,102,160,11,130,100,142,20,181,100,40,190,63,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(130,181,22,102,160,11,130,100,71,18,181,100,40,190,63,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,185,26,100,160,135,40,101,150,20,184,101,40,64,161,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(129,184,14,100,160,135,40,101,75,19,184,101,40,64,161,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(129,184,14,100,140,150,56,100,75,19,184,100,61,50,143,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,185,14,101,158,150,73,99,84,28,186,101,40,64,161,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,185,14,102,144,150,58,97,84,28,186,101,55,50,143,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,185,14,101,125,89,62,96,84,28,186,101,78,111,141,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85,27,117,101,125,89,62,96,122,172,81,101,78,111,141,98,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748484766213'] = function(block) {
  let code = "base_action.action('123456')\n";
  return code;
}

Blockly.Blocks['1748484837260'] = {
  init: function() {
    this.jsonInit({
      "type": "1748484837260",
      "message0": "wqnmb",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748484837260'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(79, 29, 188, 98, 88, 10, 112, 98, 120, 169, 20, 99, 107, 179, 94, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79, 28, 112, 94, 86, 10, 112, 94, 120, 173, 87, 95, 107, 179, 94, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 28, 112, 98, 106, 55, 117, 102, 120, 173, 87, 99, 91, 142, 86, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(92, 78, 112, 29, 88, 60, 190, 94, 118, 113, 86, 174, 110, 150, 10, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(38, 151, 10, 41, 63, 14, 190, 94, 164, 45, 190, 174, 110, 150, 10, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(38, 151, 10, 46, 39, 117, 41, 99, 164, 45, 190, 170, 116, 62, 146, 82, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(37, 153, 10, 37, 83, 36, 51, 91, 164, 45, 190, 167, 104, 150, 158, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 185, 26, 36, 133, 29, 105, 95, 118, 29, 182, 176, 46, 149, 99, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 183, 26, 102, 160, 11, 130, 100, 142, 20, 181, 100, 40, 190, 63, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(130, 181, 22, 102, 160, 11, 130, 100, 71, 18, 181, 100, 40, 190, 63, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 185, 26, 100, 160, 135, 40, 101, 150, 20, 184, 101, 40, 64, 161, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(129, 184, 14, 100, 160, 135, 40, 101, 75, 19, 184, 101, 40, 64, 161, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(129, 184, 14, 100, 140, 150, 56, 100, 75, 19, 184, 100, 61, 50, 143, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98, 185, 14, 101, 158, 150, 73, 99, 84, 28, 186, 101, 40, 64, 161, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98, 185, 14, 102, 144, 150, 58, 97, 84, 28, 186, 101, 55, 50, 143, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98, 185, 14, 101, 125, 89, 62, 96, 84, 28, 186, 101, 78, 111, 141, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85, 27, 117, 101, 125, 89, 62, 96, 122, 172, 81, 101, 78, 111, 141, 98, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 90, 101, 101, 93, 57, 124, 101, 131, 100, 98, 102, 107, 143, 77, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(74, 95, 101, 100, 92, 47, 46, 100, 134, 101, 98, 101, 106, 154, 157, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(37, 92, 182, 100, 92, 68, 44, 100, 153, 107, 19, 101, 106, 129, 158, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(82, 33, 169, 100, 157, 150, 43, 100, 130, 161, 35, 101, 45, 50, 161, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(90, 15, 155, 100, 160, 150, 35, 100, 110, 185, 45, 100, 40, 50, 165, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(53)\nMOTOmove19(90, 15, 155, 100, 160, 150, 35, 100, 110, 185, 45, 100, 40, 50, 165, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(42)\nMOTOmove19(90, 15, 140, 100, 160, 150, 50, 100, 110, 185, 60, 100, 40, 50, 150, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 100, 155, 150, 62, 100, 120, 170, 87, 100, 45, 50, 138, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 100, 155, 150, 62, 100, 120, 170, 87, 100, 45, 50, 138, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 100, 135, 150, 62, 100, 120, 170, 87, 100, 65, 50, 138, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 100, 135, 150, 62, 100, 120, 170, 87, 100, 65, 50, 138, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(25)\nMOTOmove19(80, 30, 113, 84, 136, 150, 60, 88, 120, 170, 87, 102, 64, 50, 139, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80, 30, 113, 95, 116, 61, 135, 94, 120, 170, 87, 109, 82, 124, 77, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\n";
  return code;
}

Blockly.Python['1748484837260'] = function(block) {
  let code = "base_action.action('wqnmb')\n";
  return code;
}

Blockly.Blocks['1748486451844'] = {
  init: function() {
    this.jsonInit({
      "type": "1748486451844",
      "message0": "789",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748486451844'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(79,29,188,98,88,10,112,98,120,169,20,99,107,179,94,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,28,112,94,86,10,112,94,120,173,87,95,107,179,94,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,28,112,98,106,55,117,102,120,173,87,99,91,142,86,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(92,78,112,29,88,60,190,94,118,113,86,174,110,150,10,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(38,151,10,41,63,14,190,94,164,45,190,174,110,150,10,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(38,151,10,46,39,117,41,99,164,45,190,170,116,62,146,82,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(37,153,10,37,83,36,51,91,164,45,190,167,104,150,158,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,185,26,36,133,29,105,95,118,29,182,176,46,149,99,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,183,26,102,160,11,130,100,142,20,181,100,40,190,63,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(130,181,22,102,160,11,130,100,71,18,181,100,40,190,63,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(129,184,14,100,160,135,40,101,75,19,184,101,40,64,161,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(129,184,14,100,140,150,56,100,75,19,184,100,61,50,143,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,185,14,101,158,150,73,99,84,28,186,101,40,64,161,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,185,14,102,144,150,58,97,84,28,186,101,55,50,143,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,185,14,101,125,89,62,96,84,28,186,101,78,111,141,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85,27,117,101,125,89,62,96,122,172,81,101,78,111,141,98,0,0,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,90,101,101,93,57,124,101,131,100,98,102,107,143,77,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(74,95,101,100,92,47,46,100,134,101,98,101,106,154,157,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(37,92,182,100,92,68,44,100,153,107,19,101,106,129,158,99,0,0,100)\nMOTOwait()\n\n\n-- 改\nMOTOsetspeed(30)\nMOTOmove19(103,174,21,100,92,68,44,100,104,17,181,101,106,129,158,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(82,33,169,100,157,150,43,100,130,161,35,101,45,50,161,99,0,0,100)\nMOTOwait()\n\n\n-- 改\nMOTOsetspeed(30)\nMOTOmove19(91,183,10,100,157,150,43,100,98,18,190,101,45,50,161,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(90,15,155,100,160,150,35,100,110,185,45,100,40,50,165,100,0,0,100)\nMOTOwait()\n\n\n-- 改\nMOTOsetspeed(30)\nMOTOmove19(90,183,10,100,160,150,35,100,106,17,189,100,40,50,165,100,0,0,100)\nMOTOwait()\n\n\n-- 改\nMOTOsetspeed(30)\nMOTOmove19(94,10,130,100,160,150,35,100,106,17,189,100,40,50,165,100,0,0,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(53)\nMOTOmove19(90,15,155,100,160,150,35,100,110,185,45,100,40,50,165,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(90,15,140,100,160,150,50,100,110,185,60,100,40,50,150,100,0,0,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(150)\nMOTOmove19(80,30,113,100,155,150,62,100,120,170,87,100,45,50,138,100,0,0,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,155,150,62,100,120,170,87,100,45,50,138,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,135,150,62,100,120,170,87,100,65,50,138,100,0,0,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,135,150,62,100,120,170,87,100,65,50,138,100,0,0,100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(25)\nMOTOmove19(80,30,113,84,136,150,60,88,120,170,87,102,64,50,139,106,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80,30,113,95,116,61,135,94,120,170,87,109,82,124,77,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\n";
  return code;
}

Blockly.Python['1748486451844'] = function(block) {
  let code = "base_action.action('789')\n";
  return code;
}

Blockly.Blocks['1748486635059'] = {
  init: function() {
    this.jsonInit({
      "type": "1748486635059",
      "message0": "WC",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748486635059'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,90,101,101,93,57,124,101,131,100,98,102,107,143,77,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(74,95,101,100,92,47,46,100,134,101,98,101,106,154,157,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(37,92,182,100,92,68,44,100,153,107,19,101,106,129,158,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(82,33,169,100,157,150,43,100,130,161,35,101,45,50,161,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(90,15,155,100,160,150,35,100,110,185,45,100,40,50,165,100,0,0,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(53)\nMOTOmove19(90,15,155,100,160,150,35,100,110,185,45,100,40,50,165,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(42)\nMOTOmove19(90,15,140,100,160,150,50,100,110,185,60,100,40,50,150,100,0,0,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,155,150,62,100,120,170,87,100,45,50,138,100,0,0,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,135,150,62,100,120,170,87,100,65,50,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,155,150,62,100,120,170,87,100,45,50,138,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,135,150,62,100,120,170,87,100,65,50,138,100,0,0,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,135,150,62,100,120,170,87,100,65,50,138,100,0,0,100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(25)\nMOTOmove19(80,30,113,84,136,150,60,88,120,170,87,102,64,50,139,106,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80,30,113,95,116,61,135,94,120,170,87,109,82,124,77,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\n";
  return code;
}

Blockly.Python['1748486635059'] = function(block) {
  let code = "base_action.action('WC')\n";
  return code;
}

Blockly.Blocks['1748487459233'] = {
  init: function() {
    this.jsonInit({
      "type": "1748487459233",
      "message0": "我就迈一条腿",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748487459233'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50)\nMOTOsetspeed(22)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(20)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,87,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,103,102,145,74,88,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,90,115,145,47,110,100,100,100,103,102,145,74,88,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,65,115,100,102,60,100,100,100,140,102,145,74,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(125,65,100,70,115,95,102,60,125,86,100,103,102,145,74,100,0,0,100)\nMOTOwait()\nDelayMs(1000)\n";
  return code;
}

Blockly.Python['1748487459233'] = function(block) {
  let code = "base_action.action('我就迈一条腿')\n";
  return code;
}

Blockly.Blocks['1748487969796'] = {
  init: function() {
    this.jsonInit({
      "type": "1748487969796",
      "message0": "000",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748487969796'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOrigid16(60,60,60,60,70,70,70,60,60,60,60,60,70,70,70,60)\nMOTOsetspeed(52)\nMOTOmove19(80,30,100,100,97,55,124,100,120,170,100,100,103,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(52)\nMOTOmove19(140,150,105,100,137,140,83,100,60,50,95,100,63,60,117,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(52)\nMOTOmove19(145,155,105,85,137,140,83,118,55,45,95,105,75,85,117,117,128,71,100)\nMOTOwait()\nMOTOsetspeed(52)\nMOTOmove19(190,157,103,70,145,136,83,120,10,49,97,115,60,60,117,111,128,71,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(190,157,103,50,142,140,83,116,10,49,97,150,65,60,117,111,128,71,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(190,157,103,30,143,140,83,114,10,49,97,170,65,60,117,80,128,71,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(190,157,103,15,140,140,83,120,10,49,97,183,65,60,117,80,128,71,100)\nMOTOwait()\nDelayMs(700)\nMOTOsetspeed(49)\nMOTOmove19(145,120,105,15,130,140,83,130,55,80,95,168,62,60,117,80,128,71,100)\nMOTOwait()\n\n\n-- 改\nMOTOsetspeed(30)\nMOTOmove19(145,120,105,20,130,140,83,125,55,80,95,180,190,115,116,78,0,0,100)\nMOTOwait()\n\n\n-- 改\nMOTOsetspeed(30)\nMOTOmove19(145,120,105,20,32,112,68,106,55,80,95,180,190,115,116,78,0,0,100)\nMOTOwait()\n\n\n-- 改\nMOTOsetspeed(30)\nMOTOmove19(145,120,105,20,130,140,83,125,55,80,95,91,190,163,150,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(42)\nMOTOmove19(135,120,105,100,127,127,83,86,65,80,95,183,65,60,117,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,50,105,100,120,110,83,82,120,150,95,113,68,62,117,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80,50,100,98,132,140,83,97,120,150,100,102,68,60,117,103,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748487969796'] = function(block) {
  let code = "base_action.action('000')\n";
  return code;
}

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

Blockly.Blocks['1748488181013'] = {
  init: function() {
    this.jsonInit({
      "type": "1748488181013",
      "message0": "awa",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748488181013'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(145,120,105,15,130,140,83,130,55,80,95,180,66,64,117,124,128,71,100)\nMOTOwait()\n\n\n-- 改\nMOTOsetspeed(30)\nMOTOmove19(145,120,105,20,130,140,83,125,55,80,95,180,190,115,116,78,0,0,100)\nMOTOwait()\n\n\n-- 改\nMOTOsetspeed(30)\nMOTOmove19(145,120,105,20,32,112,68,106,55,80,95,180,190,115,116,78,0,0,100)\nMOTOwait()\n\n\n-- 改\nMOTOsetspeed(30)\nMOTOmove19(145,120,105,20,130,140,83,125,55,80,95,91,190,163,150,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(42)\nMOTOmove19(135,120,105,100,127,127,83,86,65,80,95,183,65,60,117,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,50,105,100,120,110,83,82,120,150,95,113,68,62,117,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80,50,100,98,132,140,83,97,120,150,100,102,68,60,117,103,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748488181013'] = function(block) {
  let code = "base_action.action('awa')\n";
  return code;
}

Blockly.Blocks['1748489236582'] = {
  init: function() {
    this.jsonInit({
      "type": "1748489236582",
      "message0": "NM",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748489236582'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(145,120,105,15,130,140,83,130,55,80,95,180,66,64,117,124,128,71,100)\nMOTOwait()\n\n\n-- 改\nMOTOsetspeed(30)\nMOTOmove19(145,120,105,20,32,112,68,106,55,80,95,180,190,115,116,78,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(145,120,105,15,130,140,83,130,55,80,95,180,178,74,116,123,128,71,100)\nMOTOwait()\nMOTOsetspeed(42)\nMOTOmove19(135,120,105,100,127,127,83,86,65,80,95,183,65,60,117,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,50,105,100,120,110,83,82,120,150,95,113,68,62,117,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80,50,100,98,132,140,83,97,120,150,100,102,68,60,117,103,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748489236582'] = function(block) {
  let code = "base_action.action('NM')\n";
  return code;
}

Blockly.Blocks['1748494971534'] = {
  init: function() {
    this.jsonInit({
      "type": "1748494971534",
      "message0": "I",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748494971534'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(79,29,188,101,85,13,114,100,120,169,20,99,112,190,79,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,28,112,99,86,10,111,94,120,173,87,97,106,179,94,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,28,112,98,106,55,117,102,120,173,87,99,91,142,86,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(92,78,112,29,88,60,190,94,118,113,86,174,110,150,10,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(38,151,10,20,72,13,190,94,164,45,190,180,109,150,10,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(38,151,10,20,39,117,41,98,164,45,190,179,149,76,156,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(37,153,10,37,83,36,51,91,164,45,190,167,104,150,158,99,0,0,100)\nMOTOwait()\n\n\n-- 改\nMOTOsetspeed(30)\nMOTOmove19(107,185,12,41,82,38,64,60,88,17,190,179,105,149,143,140,0,0,100)\nMOTOwait()\n\n\n-- 改\nMOTOsetspeed(30)\nMOTOmove19(107,185,12,20,82,38,63,60,88,17,190,180,104,149,142,140,0,0,100)\nMOTOwait()\n\n\n-- 改\nMOTOsetspeed(30)\nMOTOmove19(106,184,12,100,93,55,124,100,87,17,189,100,107,145,76,100,0,0,100)\nMOTOwait()\n\n\n-- 改\nMOTOsetspeed(30)\nMOTOmove19(106,184,12,98,159,124,56,97,87,17,189,100,107,145,76,100,0,0,100)\nMOTOwait()\n\n\n-- 改\nMOTOsetspeed(30)\nMOTOmove19(106,184,12,97,155,123,54,97,87,17,189,99,51,76,153,99,0,0,100)\nMOTOwait()\n\n\n-- 改\nMOTOsetspeed(10)\nMOTOmove19(106,184,12,20,89,61,103,60,87,17,189,179,92,140,89,139,0,0,100)\nMOTOwait()\n\n\n-- 改1\nMOTOsetspeed(30)\nMOTOmove19(106,184,12,20,123,150,141,60,87,17,189,180,91,50,72,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,185,26,36,133,29,105,95,118,29,182,176,46,149,99,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,183,26,102,160,11,130,100,142,20,181,100,40,190,63,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(130,181,22,102,160,11,130,100,71,18,181,100,40,190,63,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,185,26,100,160,135,40,101,150,20,184,101,40,64,161,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(129,184,14,100,160,135,40,101,75,19,184,101,40,64,161,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(129,184,14,100,140,150,56,100,75,19,184,100,61,50,143,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,185,14,101,158,150,73,99,84,28,186,101,40,64,161,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,185,14,102,144,150,58,97,84,28,186,101,55,50,143,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(98,185,14,101,125,89,62,96,84,28,186,101,78,111,141,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85,27,117,101,125,89,62,96,122,172,81,101,78,111,141,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748494971534'] = function(block) {
  let code = "base_action.action('I')\n";
  return code;
}

Blockly.Blocks['1748495924791'] = {
  init: function() {
    this.jsonInit({
      "type": "1748495924791",
      "message0": "未完成",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748495924791'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(79,13,190,103,160,51,190,99,120,186,10,99,40,145,10,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,13,190,99,158,84,45,99,120,186,10,98,46,113,155,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(122,177,177,99,158,84,45,99,84,21,24,98,46,113,155,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(122,176,190,20,151,91,44,99,83,20,10,180,51,112,155,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748495924791'] = function(block) {
  let code = "base_action.action('未完成')\n";
  return code;
}

Blockly.Blocks['Front_fall_dance'] = {
  init: function () {
    this.jsonInit({
      type: 'Front_fall_dance',
      message0: '%{BKY_FRONT_FALL_DANCE}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Front_fall_dance'] = function (block) {
  const code = [
    'MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)',
    'MOTOsetspeed(30)',
    'MOTOmove16(85, 50, 130, 100, 100, 145, 44, 99, 115, 150, 70, 100, 100, 55, 155, 100)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(78, 27, 180, 93, 155, 130, 60, 99, 115, 178, 20, 101, 49, 70, 140, 96)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(28, 69, 188, 93, 102, 77, 42, 97, 178, 110, 16, 100, 101, 122, 159, 93)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(118, 58, 187, 93, 95, 74, 119, 98, 116, 113, 18, 99, 104, 118, 83, 92)',
    'MOTOwait()',
    'MOTOsetspeed(31)',
    'MOTOmove16(10, 160, 125, 100, 80, 80, 70, 100, 190, 40, 75, 100, 120, 120, 130, 100)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(33)',
    'MOTOmove16(70, 45, 115, 100, 93, 55, 124, 100, 130, 155, 85, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(33)',
    'MOTOmove16(70, 45, 130, 100, 20, 125, 75, 100, 130, 155, 70, 100, 180, 80, 125, 100)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(70, 45, 170, 100, 57, 71, 108, 100, 130, 155, 30, 100, 143, 129, 92, 100)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(70, 45, 172, 100, 55, 31, 136, 100, 130, 155, 25, 100, 145, 169, 62, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(25)',
    'MOTOmove16(70, 45, 172, 40, 60, 31, 136, 42, 130, 155, 25, 160, 140, 169, 64, 158)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(70, 45, 172, 97, 60, 31, 136, 100, 130, 155, 25, 105, 140, 169, 64, 100)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(70, 45, 172, 40, 60, 31, 136, 42, 130, 155, 25, 160, 140, 169, 64, 158)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(70, 45, 172, 97, 60, 31, 136, 100, 130, 155, 25, 105, 140, 169, 64, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(70, 45, 172, 100, 65, 71, 111, 100, 130, 155, 25, 100, 135, 129, 89, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(70, 45, 160, 100, 20, 125, 75, 100, 130, 155, 40, 100, 180, 80, 125, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(70, 45, 110, 100, 10, 135, 75, 100, 130, 155, 90, 100, 190, 65, 125, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 143, 189, 69, 142, 113, 46, 94, 189, 65, 16, 127, 51, 86, 157, 109)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 143, 189, 50, 150, 115, 45, 80, 189, 66, 16, 150, 50, 85, 155, 120)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(90, 15, 190, 63, 162, 145, 33, 75, 110, 185, 10, 137, 38, 55, 167, 125)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(90, 15, 190, 63, 162, 145, 33, 67, 110, 185, 10, 137, 38, 55, 167, 133)',
    'MOTOwait()',
    'MOTOsetspeed(45)',
    'MOTOmove16(103, 39, 113, 74, 162, 145, 62, 74, 97, 161, 87, 126, 38, 55, 138, 126)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(85, 50, 130, 100, 121, 155, 45, 100, 115, 150, 70, 100, 88, 40, 155, 100)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(79, 41, 101, 99, 105, 145, 45, 99, 116, 150, 111, 101, 94, 55, 160, 101)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Front_fall_dance'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['FRONT_FALL_DANCE'] + "')\n";
  return code;
}

Blockly.Blocks['1748497163490'] = {
  init: function() {
    this.jsonInit({
      "type": "1748497163490",
      "message0": "王土",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748497163490'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\nMOTOsetspeed(30)\nMOTOmove19(85,50,130,100,100,145,44,99,115,150,70,100,100,55,155,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(78,27,180,93,155,130,60,99,115,178,20,101,49,70,140,96,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(28,69,188,93,102,77,42,97,178,110,16,100,101,122,159,93,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(118,58,187,93,95,74,119,98,116,113,18,99,104,118,83,92,128,71,100)\nMOTOwait()\nMOTOsetspeed(31)\nMOTOmove19(10,160,125,100,80,80,70,100,190,40,75,100,120,120,130,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(42)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(33)\nMOTOmove19(70,45,115,100,93,55,124,100,130,155,85,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(33)\nMOTOmove19(70,45,130,100,20,125,75,100,130,155,70,100,180,80,125,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(21)\nMOTOmove19(70,45,170,100,57,71,108,100,130,155,30,100,143,129,92,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(21)\nMOTOmove19(70,45,172,100,55,31,136,100,130,155,25,100,145,169,62,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(70,45,172,40,60,31,136,42,130,155,25,160,140,169,64,158,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(70,45,172,97,60,31,136,100,130,155,25,105,140,169,64,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(70,45,172,40,60,31,136,42,130,155,25,160,140,169,64,158,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(70,45,172,97,60,31,136,100,130,155,25,105,140,169,64,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(70,45,172,100,65,71,111,100,130,155,25,100,135,129,89,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(70,45,160,100,20,125,75,100,130,155,40,100,180,80,125,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(70,45,110,100,10,135,75,100,130,155,90,100,190,65,125,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(50)\nMOTOmove19(10,143,189,69,142,113,46,94,189,65,16,127,51,86,157,109,128,71,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(10,143,189,50,150,115,45,80,189,66,16,150,50,85,155,120,128,71,100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(90,15,190,63,162,145,33,75,110,185,10,137,38,55,167,125,128,71,100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(90,15,190,63,162,145,33,67,110,185,10,137,38,55,167,133,128,71,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(103,39,113,74,162,145,62,74,97,161,87,126,38,55,138,126,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85,50,130,100,121,155,45,100,115,150,70,100,88,40,155,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,41,101,99,105,145,45,99,116,150,111,101,94,55,160,101,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748497163490'] = function(block) {
  let code = "base_action.action('王土')\n";
  return code;
}

Blockly.Blocks['1748497471907'] = {
  init: function() {
    this.jsonInit({
      "type": "1748497471907",
      "message0": "王土土",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748497471907'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(50)\nMOTOmove19(10, 143, 189, 69, 142, 113, 46, 94, 189, 65, 16, 127, 51, 86, 157, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(10, 143, 189, 50, 150, 115, 45, 80, 189, 66, 16, 150, 50, 85, 155, 120, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(90, 15, 190, 63, 160, 145, 35, 75, 110, 185, 10, 137, 40, 55, 165, 125, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(90, 15, 190, 63, 160, 145, 35, 67, 110, 185, 10, 137, 40, 55, 165, 133, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(103, 39, 113, 74, 160, 145, 62, 74, 97, 161, 87, 126, 40, 55, 138, 126, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85, 50, 130, 100, 121, 150, 45, 100, 115, 150, 70, 100, 88, 50, 155, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 41, 101, 99, 105, 145, 45, 99, 116, 150, 111, 101, 94, 55, 160, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(79, 29, 188, 98, 88, 10, 112, 98, 120, 169, 20, 99, 107, 179, 94, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79, 28, 112, 94, 86, 10, 112, 94, 120, 173, 87, 95, 107, 179, 94, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 28, 112, 98, 106, 55, 117, 102, 120, 173, 87, 99, 91, 142, 86, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(92, 78, 112, 29, 88, 60, 190, 94, 118, 113, 86, 174, 110, 150, 10, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(38, 151, 10, 41, 63, 14, 190, 94, 164, 45, 190, 174, 110, 150, 10, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(38, 151, 10, 46, 39, 117, 41, 99, 164, 45, 190, 170, 116, 62, 146, 82, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(37, 153, 10, 37, 83, 36, 51, 91, 164, 45, 190, 167, 104, 150, 158, 99, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748497471907'] = function(block) {
  let code = "base_action.action('王土土')\n";
  return code;
}

Blockly.Blocks['1748497563587'] = {
  init: function() {
    this.jsonInit({
      "type": "1748497563587",
      "message0": "王土土（2）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748497563587'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(79, 29, 188, 98, 88, 10, 112, 98, 120, 169, 20, 99, 107, 179, 94, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79, 28, 112, 94, 86, 10, 112, 94, 120, 173, 87, 95, 107, 179, 94, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 28, 112, 98, 106, 55, 117, 102, 120, 173, 87, 99, 91, 142, 86, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(92, 78, 112, 29, 88, 60, 190, 94, 118, 113, 86, 174, 110, 150, 10, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(38, 151, 10, 41, 63, 14, 190, 94, 164, 45, 190, 174, 110, 150, 10, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(38, 151, 10, 46, 39, 117, 41, 99, 164, 45, 190, 170, 116, 62, 146, 82, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(37, 153, 10, 37, 83, 36, 51, 91, 164, 45, 190, 167, 104, 150, 158, 99, 0, 0, 100)\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(50)\nMOTOmove19(10, 143, 189, 69, 142, 113, 46, 94, 189, 65, 16, 127, 51, 86, 157, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(10, 143, 189, 50, 150, 115, 45, 80, 189, 66, 16, 150, 50, 85, 155, 120, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(90, 15, 190, 63, 160, 145, 35, 75, 110, 185, 10, 137, 40, 55, 165, 125, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(90, 15, 190, 63, 160, 145, 35, 67, 110, 185, 10, 137, 40, 55, 165, 133, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(103, 39, 113, 74, 160, 145, 62, 74, 97, 161, 87, 126, 40, 55, 138, 126, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85, 50, 130, 100, 121, 150, 45, 100, 115, 150, 70, 100, 88, 50, 155, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 41, 101, 99, 105, 145, 45, 99, 116, 150, 111, 101, 94, 55, 160, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n";
  return code;
}

Blockly.Python['1748497563587'] = function(block) {
  let code = "base_action.action('王土土（2）')\n";
  return code;
}

Blockly.Blocks['1748498688456'] = {
  init: function() {
    this.jsonInit({
      "type": "1748498688456",
      "message0": "王土土土",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748498688456'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(79,29,188,98,88,10,112,98,120,169,20,99,107,179,94,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,28,112,94,86,10,112,94,120,173,87,95,107,179,94,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,28,112,98,106,55,117,102,120,173,87,99,91,142,86,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(92,78,112,29,88,60,190,94,118,113,86,174,110,150,10,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,143,189,41,63,14,190,94,189,65,16,174,110,150,10,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,143,189,46,39,117,41,99,189,65,16,170,116,62,146,82,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,143,189,37,83,36,51,91,189,65,16,167,104,150,158,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(90,15,190,63,160,145,35,75,110,185,10,137,40,55,165,125,0,0,100)\nMOTOwait()\nDelayMs(800)\nMOTOsetspeed(70)\nMOTOmove19(90,15,190,63,160,145,35,67,110,185,10,137,40,55,165,133,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(103,39,113,74,160,145,62,74,97,161,87,126,40,55,138,126,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85,50,130,100,121,150,45,100,115,150,70,100,88,50,155,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,41,101,99,105,145,45,99,116,150,111,101,94,55,160,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748498688456'] = function(block) {
  let code = "base_action.action('王土土土')\n";
  return code;
}

Blockly.Blocks['1748498967068'] = {
  init: function() {
    this.jsonInit({
      "type": "1748498967068",
      "message0": "王垚",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748498967068'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(79,29,188,98,88,10,112,98,120,169,20,99,107,179,94,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,28,112,94,86,10,112,94,120,173,87,95,107,179,94,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,28,112,98,106,55,117,102,120,173,87,99,91,142,86,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(92,78,112,29,88,60,190,94,118,113,86,174,110,150,10,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,143,189,41,63,14,190,94,189,65,16,174,110,150,10,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,143,189,46,39,117,41,99,189,65,16,170,116,62,146,82,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,129,189,37,83,36,51,91,190,68,15,167,104,150,158,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(90,15,190,63,160,145,35,75,110,185,10,137,40,55,165,125,0,0,100)\nMOTOwait()\nDelayMs(800)\nMOTOsetspeed(70)\nMOTOmove19(90,15,190,63,160,145,35,67,110,185,10,137,40,55,165,133,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(103,39,113,74,160,145,62,74,97,161,87,126,40,55,138,126,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85,50,130,100,121,150,45,100,115,150,70,100,88,50,155,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,41,101,99,105,145,45,99,116,150,111,101,94,55,160,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748498967068'] = function(block) {
  let code = "base_action.action('王垚')\n";
  return code;
}

Blockly.Blocks['1748500326396'] = {
  init: function() {
    this.jsonInit({
      "type": "1748500326396",
      "message0": "王土土土1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748500326396'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(79,29,188,98,88,10,112,98,120,169,20,99,107,179,94,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,28,112,94,86,10,112,94,120,173,87,95,107,179,94,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,28,112,98,106,55,117,102,120,173,87,99,91,142,86,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(92,78,112,29,88,60,190,94,118,113,86,174,110,150,10,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,143,189,41,63,14,190,94,189,65,16,174,110,150,10,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,143,189,46,39,117,41,99,189,65,16,170,116,62,146,82,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,129,189,37,83,36,51,91,190,68,15,167,104,150,158,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(90,10,181,63,160,145,35,75,109,190,25,137,40,55,165,125,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(70)\nMOTOmove19(90,15,190,63,160,145,35,67,110,185,10,137,40,55,165,133,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(103,39,113,74,160,145,62,74,97,161,87,126,40,55,138,126,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85,50,130,100,121,150,45,100,115,150,70,100,88,50,155,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,41,101,99,105,145,45,99,116,150,111,101,94,55,160,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748500326396'] = function(block) {
  let code = "base_action.action('王土土土1')\n";
  return code;
}

Blockly.Blocks['1748502343155'] = {
  init: function() {
    this.jsonInit({
      "type": "1748502343155",
      "message0": "后倒地起身smart",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748502343155'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35, 130, 20, 101, 131, 126, 170, 100, 165, 70, 180, 99, 69, 74, 30, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21, 105, 21, 101, 131, 126, 170, 100, 179, 95, 180, 99, 69, 74, 30, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 16, 46, 100, 80, 150, 60, 100, 108, 184, 154, 100, 120, 50, 140, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 18, 58, 100, 73, 150, 40, 100, 108, 182, 142, 100, 127, 50, 160, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(92, 23, 114, 100, 124, 150, 62, 100, 108, 176, 81, 100, 76, 50, 137, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 100, 93, 55, 127, 100, 120, 170, 100, 100, 107, 145, 69, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748502343155'] = function(block) {
  let code = "base_action.action('后倒地起身smart')\n";
  return code;
}

Blockly.Blocks['1748516150805'] = {
  init: function() {
    this.jsonInit({
      "type": "1748516150805",
      "message0": "CNB2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748516150805'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(112,75,190,100,93,55,124,100,104,109,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(112,75,190,76,97,150,48,77,104,109,10,123,103,50,157,124,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(45,67,148,53,111,123,50,60,146,132,60,137,76,61,156,139,0,0,99)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(45,31,153,53,111,123,50,60,144,184,53,137,76,61,156,139,0,0,99)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,62,117,150,52,60,147,177,47,150,91,50,153,140,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,98,91,76,105,99,147,177,47,98,109,123,97,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748516150805'] = function(block) {
  let code = "base_action.action('CNB2')\n";
  return code;
}

Blockly.Blocks['1748521433946'] = {
  init: function() {
    this.jsonInit({
      "type": "1748521433946",
      "message0": "B抱块后退",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748521433946'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 100, 147, 187, 17, 100, 107, 145, 70, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 105, 93, 55, 130, 108, 147, 187, 17, 111, 102, 136, 70, 112, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 105, 93, 55, 134, 107, 147, 187, 17, 108, 125, 145, 94, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 92, 106, 55, 144, 85, 147, 187, 17, 95, 117, 145, 76, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 92, 75, 55, 106, 95, 147, 187, 17, 95, 107, 145, 66, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 105, 83, 55, 124, 107, 147, 187, 17, 108, 94, 141, 56, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 98, 147, 187, 17, 100, 107, 145, 70, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 147, 187, 17, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748521433946'] = function(block) {
  let code = "base_action.action('B抱块后退')\n";
  return code;
}

Blockly.Blocks['1748566556171'] = {
  init: function() {
    this.jsonInit({
      "type": "1748566556171",
      "message0": "放块",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748566556171'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 98, 132, 187, 10, 100, 107, 145, 70, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 99, 90, 150, 38, 100, 132, 187, 10, 101, 111, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(59, 14, 148, 99, 122, 150, 39, 100, 134, 188, 56, 101, 79, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(72, 14, 147, 99, 122, 150, 39, 100, 130, 176, 57, 101, 79, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(72, 14, 147, 99, 98, 150, 40, 100, 130, 176, 57, 100, 105, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748566556171'] = function(block) {
  let code = "base_action.action('放块')\n";
  return code;
}

Blockly.Blocks['1748567468096'] = {
  init: function() {
    this.jsonInit({
      "type": "1748567468096",
      "message0": "测试抱块前",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748567468096'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,99,83,54,122,90,147,177,47,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46,29,159,99,105,99,103,100,147,177,47,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,100,74,121,100,147,177,47,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,100,61,126,104,147,177,47,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46,29,159,99,81,66,111,102,147,177,47,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,76,63,111,100,147,177,47,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,90,73,106,100,147,177,47,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46,29,159,99,105,99,103,100,147,177,47,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,100,74,121,100,147,177,47,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,100,61,126,104,147,177,47,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46,29,159,99,81,66,111,102,147,177,47,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,76,63,111,100,147,177,47,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,90,73,106,100,147,177,47,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46,29,159,99,105,99,103,100,147,177,47,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,100,74,121,100,147,177,47,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,100,61,126,104,147,177,47,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46,29,159,99,81,66,111,102,147,177,47,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,76,63,111,100,147,177,47,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,90,73,106,100,147,177,47,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(46,29,159,96,85,70,110,100,147,177,47,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(46,29,159,100,93,55,124,100,147,177,47,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748567468096'] = function(block) {
  let code = "base_action.action('测试抱块前')\n";
  return code;
}

Blockly.Blocks['1748567577955'] = {
  init: function() {
    this.jsonInit({
      "type": "1748567577955",
      "message0": "测试抱块前（2）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748567577955'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(46, 29, 159, 99, 83, 54, 122, 90, 147, 177, 47, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46, 29, 159, 99, 105, 99, 103, 100, 147, 177, 47, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46, 29, 159, 99, 100, 74, 121, 100, 147, 177, 47, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46, 29, 159, 99, 100, 61, 126, 104, 147, 177, 47, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46, 29, 159, 99, 81, 66, 111, 102, 147, 177, 47, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46, 29, 159, 99, 76, 63, 111, 100, 147, 177, 47, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46, 29, 159, 99, 90, 73, 106, 100, 147, 177, 47, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46, 29, 159, 99, 105, 99, 103, 100, 147, 177, 47, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46, 29, 159, 99, 100, 74, 121, 100, 147, 177, 47, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46, 29, 159, 99, 100, 61, 126, 104, 147, 177, 47, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46, 29, 159, 99, 81, 66, 111, 102, 147, 177, 47, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46, 29, 159, 99, 76, 63, 111, 100, 147, 177, 47, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46, 29, 159, 99, 90, 73, 106, 100, 147, 177, 47, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46, 29, 159, 99, 105, 99, 103, 100, 147, 177, 47, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46, 29, 159, 99, 100, 74, 121, 100, 147, 177, 47, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46, 29, 159, 99, 100, 61, 126, 104, 147, 177, 47, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46, 29, 159, 99, 81, 66, 111, 102, 147, 177, 47, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46, 29, 159, 99, 76, 63, 111, 100, 147, 177, 47, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46, 29, 159, 99, 90, 73, 106, 100, 147, 177, 47, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(46, 29, 159, 96, 85, 70, 110, 100, 147, 177, 47, 102, 119, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(46, 29, 159, 100, 93, 55, 124, 100, 147, 177, 47, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748567577955'] = function(block) {
  let code = "base_action.action('测试抱块前（2）')\n";
  return code;
}

Blockly.Blocks['1748568654420'] = {
  init: function() {
    this.jsonInit({
      "type": "1748568654420",
      "message0": "测试抱块3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748568654420'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,99,83,54,122,90,147,177,47,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46,29,159,99,105,99,103,100,147,177,47,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,100,74,121,100,147,177,47,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,100,61,126,104,147,177,47,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46,29,159,99,81,66,111,102,147,177,47,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,76,63,111,100,147,177,47,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,90,73,106,100,147,177,47,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46,29,159,99,105,99,103,100,147,177,47,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,100,74,121,100,147,177,47,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,100,61,126,104,147,177,47,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46,29,159,99,81,66,111,102,147,177,47,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,76,63,111,100,147,177,47,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,90,73,106,100,147,177,47,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46,29,159,99,105,99,103,100,147,177,47,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,100,74,121,100,147,177,47,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,100,61,126,104,147,177,47,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46,29,159,99,81,66,111,102,147,177,47,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,76,63,111,100,147,177,47,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,90,73,106,100,147,177,47,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(46,29,159,96,85,70,110,100,147,177,47,102,119,146,75,96,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748568654420'] = function(block) {
  let code = "base_action.action('测试抱块3')\n";
  return code;
}

Blockly.Blocks['1748568960093'] = {
  init: function() {
    this.jsonInit({
      "type": "1748568960093",
      "message0": "测试抱块前4",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748568960093'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,99,83,54,122,90,147,177,47,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46,29,159,99,105,99,103,100,147,177,47,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,100,74,121,100,147,177,47,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,100,61,126,104,147,177,47,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46,29,159,99,81,66,111,102,147,177,47,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,76,63,111,100,147,177,47,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,90,73,106,100,147,177,47,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46,29,159,99,105,99,103,100,147,177,47,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,100,74,121,100,147,177,47,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,100,61,126,104,147,177,47,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46,29,159,99,81,66,111,102,147,177,47,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,76,63,111,100,147,177,47,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,90,73,106,100,147,177,47,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46,29,159,99,105,99,103,100,147,177,47,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,100,74,121,100,147,177,47,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,100,61,126,104,147,177,47,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(46,29,159,99,81,66,111,102,147,177,47,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,76,63,111,100,147,177,47,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,90,73,106,100,147,177,47,101,100,139,74,96,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748568960093'] = function(block) {
  let code = "base_action.action('测试抱块前4')\n";
  return code;
}

Blockly.Blocks['1748569291936'] = {
  init: function() {
    this.jsonInit({
      "type": "1748569291936",
      "message0": "抱块一步测试1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748569291936'] = function(block) {
  let code = "MOTOrigid16(25,25,25,75,75,90,80,70,25,25,25,75,75,90,80,70)\nMOTOsetspeed(45)\nMOTOmove19(46,29,159,99,93,54,122,90,147,177,47,98,107,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,115,99,103,100,147,177,47,101,109,134,91,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(46,29,159,99,110,74,121,100,147,177,47,101,114,137,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(46,29,159,99,110,61,126,104,147,177,47,101,100,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(46,29,159,99,91,66,109,102,147,177,47,101,85,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(46,29,159,99,86,63,110,100,147,177,47,101,90,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(46,29,159,99,100,73,106,100,147,177,47,101,90,139,74,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(46,29,159,96,95,70,110,100,147,177,47,102,109,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(46,29,159,99,93,54,122,90,147,177,47,98,107,146,75,95,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748569291936'] = function(block) {
  let code = "base_action.action('抱块一步测试1')\n";
  return code;
}

Blockly.Blocks['1748569448759'] = {
  init: function() {
    this.jsonInit({
      "type": "1748569448759",
      "message0": "抱块一步测试2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748569448759'] = function(block) {
  let code = "MOTOrigid16(25,25,25,75,75,90,80,70,25,25,25,75,75,90,80,70)\nMOTOsetspeed(45)\nMOTOmove19(46,29,159,99,93,54,122,90,147,177,47,98,107,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(46,29,159,99,115,99,103,100,147,177,47,101,109,134,91,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(46,29,159,99,110,74,121,100,147,177,47,101,114,137,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(46,29,159,99,110,61,126,104,147,177,47,101,100,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(46,29,159,99,91,66,109,102,147,177,47,101,85,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(46,29,159,99,86,63,110,100,147,177,47,101,90,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(46,29,159,99,100,73,106,100,147,177,47,101,90,139,74,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(46,29,159,96,95,70,110,100,147,177,47,102,109,146,75,96,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748569448759'] = function(block) {
  let code = "base_action.action('抱块一步测试2')\n";
  return code;
}

Blockly.Blocks['1748569896576'] = {
  init: function() {
    this.jsonInit({
      "type": "1748569896576",
      "message0": "抱块后测试1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748569896576'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,55,130,100,147,187,17,100,107,145,70,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,105,93,55,130,108,147,187,17,111,102,136,70,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,105,93,55,134,107,147,187,17,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,92,106,55,144,85,147,187,17,95,117,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,92,75,55,106,95,147,187,17,95,107,145,66,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,105,83,55,124,107,147,187,17,108,94,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,130,98,147,187,17,100,107,145,70,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748569896576'] = function(block) {
  let code = "base_action.action('抱块后测试1')\n";
  return code;
}

Blockly.Blocks['1748570929724'] = {
  init: function() {
    this.jsonInit({
      "type": "1748570929724",
      "message0": "抱块最终版",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748570929724'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(88,76,190,100,93,55,124,100,104,109,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(88,76,190,76,97,150,48,77,104,109,10,123,103,50,157,124,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(45,67,148,53,111,123,50,60,146,132,60,137,76,61,156,139,0,0,99)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(45,31,153,53,111,123,50,60,144,184,53,137,76,61,156,139,0,0,99)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,62,117,150,52,60,147,177,47,150,91,50,153,140,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,98,91,76,105,99,147,177,47,98,109,123,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,98,91,76,105,99,154,176,47,98,109,123,97,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748570929724'] = function(block) {
  let code = "base_action.action('抱块最终版')\n";
  return code;
}

Blockly.Blocks['1748571025214'] = {
  init: function() {
    this.jsonInit({
      "type": "1748571025214",
      "message0": "抱块真正的最终版",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748571025214'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(88,76,190,100,93,55,124,100,104,109,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(88,76,190,76,97,150,48,77,104,109,10,123,103,50,157,124,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(45,67,148,53,111,123,50,60,146,132,60,137,76,61,156,139,0,0,99)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(45,31,153,53,111,123,50,60,144,184,53,137,76,61,156,139,0,0,99)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(46,29,159,62,117,150,52,60,147,177,47,150,91,50,153,140,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,98,91,76,105,99,154,176,47,98,109,123,97,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748571025214'] = function(block) {
  let code = "base_action.action('抱块真正的最终版')\n";
  return code;
}

Blockly.Blocks['1748571154402'] = {
  init: function() {
    this.jsonInit({
      "type": "1748571154402",
      "message0": "抱块前移最终版",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748571154402'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,99,83,54,122,90,154,176,47,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(42,29,158,99,105,99,103,100,154,176,47,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(42,29,158,99,100,74,121,100,154,176,47,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(42,29,158,99,100,61,126,104,154,176,47,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(42,29,158,99,81,66,111,102,154,176,47,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(42,29,158,99,76,63,111,100,154,176,47,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(42,29,158,99,90,73,106,100,154,176,47,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(42,29,158,99,105,99,103,100,154,176,47,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(42,29,158,99,100,74,121,100,154,176,47,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(42,29,158,99,100,61,126,104,154,176,47,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(42,29,158,99,81,66,111,102,154,176,47,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(42,29,158,99,76,63,111,100,154,176,47,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(42,29,158,99,90,73,106,100,154,176,47,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(42,29,158,99,105,99,103,100,154,176,47,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(42,29,158,99,100,74,121,100,154,176,47,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(42,29,158,99,100,61,126,104,154,176,47,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(42,29,158,99,81,66,111,102,154,176,47,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(42,29,158,99,76,63,111,100,154,176,47,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(42,29,158,99,90,73,106,100,154,176,47,101,100,139,74,96,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748571154402'] = function(block) {
  let code = "base_action.action('抱块前移最终版')\n";
  return code;
}

Blockly.Blocks['1748571472253'] = {
  init: function() {
    this.jsonInit({
      "type": "1748571472253",
      "message0": "抱块左移测试1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748571472253'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(42,29,158,85,112,90,110,90,154,176,47,110,107,146,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(42,29,158,95,93,53,126,105,154,176,47,120,116,160,63,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,100,93,54,129,98,154,176,47,103,107,146,71,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(42,29,158,100,93,55,129,95,154,176,47,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(42,29,158,100,93,55,129,100,154,176,47,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748571472253'] = function(block) {
  let code = "base_action.action('抱块左移测试1')\n";
  return code;
}

Blockly.Blocks['1748574002069'] = {
  init: function() {
    this.jsonInit({
      "type": "1748574002069",
      "message0": "抱块右移最终版",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748574002069'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(42,29,158,90,93,54,129,100,154,176,47,115,83,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(42,29,158,80,84,40,137,70,154,176,47,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,87,83,39,136,69,154,176,47,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,97,93,54,129,95,154,176,47,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(42,29,158,100,93,55,129,95,154,176,47,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(42,29,158,100,93,55,129,100,154,176,47,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748574002069'] = function(block) {
  let code = "base_action.action('抱块右移最终版')\n";
  return code;
}

Blockly.Blocks['1748574736092'] = {
  init: function() {
    this.jsonInit({
      "type": "1748574736092",
      "message0": "抱块右移真正的最终版",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748574736092'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(42,29,158,90,93,54,129,100,154,176,47,115,83,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(42,29,158,80,84,40,137,70,154,176,47,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,87,83,39,136,69,154,176,47,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,97,93,54,129,95,154,176,47,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(42,29,158,100,93,55,129,95,154,176,47,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,100,93,54,128,100,154,176,47,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748574736092'] = function(block) {
  let code = "base_action.action('抱块右移真正的最终版')\n";
  return code;
}

Blockly.Blocks['1748574929257'] = {
  init: function() {
    this.jsonInit({
      "type": "1748574929257",
      "message0": "抱块右移真正的最终版plus",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748574929257'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(42,29,158,90,93,54,129,100,154,176,47,115,83,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(42,29,158,80,84,40,137,70,154,176,47,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,87,83,39,136,69,154,176,47,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,97,93,54,129,95,154,176,47,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(42,29,158,100,93,55,129,95,154,176,47,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(42,29,158,100,93,55,129,100,154,176,47,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748574929257'] = function(block) {
  let code = "base_action.action('抱块右移真正的最终版plus')\n";
  return code;
}

Blockly.Blocks['1748575132244'] = {
  init: function() {
    this.jsonInit({
      "type": "1748575132244",
      "message0": "抱块右边",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748575132244'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(42,29,158,90,93,54,129,100,154,176,47,115,83,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(42,29,158,80,84,40,137,70,154,176,47,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,87,83,39,136,69,154,176,47,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,97,93,54,129,95,154,176,47,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(42,29,158,100,93,55,129,95,154,176,47,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,100,93,55,129,100,154,176,47,100,106,144,71,103,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748575132244'] = function(block) {
  let code = "base_action.action('抱块右边')\n";
  return code;
}

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

Blockly.Blocks['1748575687642'] = {
  init: function() {
    this.jsonInit({
      "type": "1748575687642",
      "message0": "右侧抱块",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748575687642'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(42,29,158,90,93,54,129,100,154,176,47,115,83,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(42,29,158,80,84,40,137,70,154,176,47,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,87,83,39,136,69,154,176,47,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,97,93,54,129,95,154,176,47,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(42,29,158,100,93,55,129,95,154,176,47,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1748575687642'] = function(block) {
  let code = "base_action.action('右侧抱块')\n";
  return code;
}

Blockly.Blocks['1748575829751'] = {
  init: function() {
    this.jsonInit({
      "type": "1748575829751",
      "message0": "左侧抱块",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748575829751'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(42,29,158,85,112,90,110,90,154,176,47,110,107,146,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(42,29,158,95,93,53,126,105,154,176,47,120,116,160,63,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,100,93,54,129,98,154,176,47,103,107,146,71,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(42,29,158,100,93,55,129,95,154,176,47,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1748575829751'] = function(block) {
  let code = "base_action.action('左侧抱块')\n";
  return code;
}

Blockly.Blocks['1748575999155'] = {
  init: function() {
    this.jsonInit({
      "type": "1748575999155",
      "message0": "左",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748575999155'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(42,29,158,85,112,90,110,90,154,176,47,110,107,146,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(42,29,158,95,93,53,126,105,154,176,47,120,116,160,63,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,100,93,54,129,98,154,176,47,103,107,146,71,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(42,29,158,100,93,55,129,95,154,176,47,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(42,29,158,100,93,55,129,95,154,176,47,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1748575999155'] = function(block) {
  let code = "base_action.action('左')\n";
  return code;
}

Blockly.Blocks['1748576278789'] = {
  init: function() {
    this.jsonInit({
      "type": "1748576278789",
      "message0": "左转最终版",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748576278789'] = function(block) {
  let code = "MOTOrigid16(20,20,20,75,65,65,65,65,30,20,20,65,75,65,65,65)\nMOTOsetspeed(24)\nMOTOmove19(42,29,159,95,63,55,94,95,154,176,47,105,77,145,46,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(42,29,159,95,63,55,94,93,154,176,47,105,77,145,46,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(42,29,159,100,93,55,124,100,154,176,47,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1748576278789'] = function(block) {
  let code = "base_action.action('左转最终版')\n";
  return code;
}

Blockly.Blocks['1748576363617'] = {
  init: function() {
    this.jsonInit({
      "type": "1748576363617",
      "message0": "右转最终版",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748576363617'] = function(block) {
  let code = "MOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65)\nMOTOsetspeed(24)\nMOTOmove19(42,29,158,95,123,55,154,95,154,176,47,105,137,145,106,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,95,123,55,154,93,154,176,47,105,137,145,106,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,100,93,55,124,100,154,176,47,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1748576363617'] = function(block) {
  let code = "base_action.action('右转最终版')\n";
  return code;
}

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

Blockly.Blocks['1748742000787'] = {
  init: function() {
    this.jsonInit({
      "type": "1748742000787",
      "message0": "放块1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748742000787'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,100,93,55,130,98,154,176,47,100,107,145,70,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,99,90,150,38,100,154,176,47,101,111,50,163,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(42,29,158,99,122,150,39,100,154,176,47,101,79,50,163,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(72,14,147,99,122,150,39,100,130,176,57,101,79,50,163,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(72,14,147,99,98,150,40,100,130,176,57,100,105,50,163,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748742000787'] = function(block) {
  let code = "base_action.action('放块1')\n";
  return code;
}

Blockly.Blocks['1748742378147'] = {
  init: function() {
    this.jsonInit({
      "type": "1748742378147",
      "message0": "放块最终版",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748742378147'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,100,93,55,130,98,154,176,47,100,107,145,70,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,99,90,150,38,100,154,176,47,101,111,50,163,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(42,29,158,99,122,150,39,100,154,176,47,101,79,50,163,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(72,31,146,99,122,150,39,100,129,160,56,101,79,50,163,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(72,31,146,99,98,150,40,100,129,160,56,100,105,50,163,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748742378147'] = function(block) {
  let code = "base_action.action('放块最终版')\n";
  return code;
}

Blockly.Blocks['1748744703270'] = {
  init: function() {
    this.jsonInit({
      "type": "1748744703270",
      "message0": "后移promax",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748744703270'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,100,93,55,130,100,157,176,47,100,107,145,70,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(42,29,158,105,93,55,130,108,157,176,47,111,102,136,70,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,105,93,55,134,107,157,176,47,106,147,151,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(42,29,158,92,106,55,144,85,157,176,47,95,117,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,92,63,58,106,94,157,176,47,95,107,145,66,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(42,29,158,105,83,55,124,107,157,176,47,108,94,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(42,29,158,100,93,55,130,98,157,176,47,100,107,145,70,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748744703270'] = function(block) {
  let code = "base_action.action('后移promax')\n";
  return code;
}

Blockly.Blocks['1748744862892'] = {
  init: function() {
    this.jsonInit({
      "type": "1748744862892",
      "message0": "测试1后移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748744862892'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,100,93,55,130,100,157,176,47,100,107,145,70,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(42,29,158,105,93,55,130,108,157,176,47,111,102,136,70,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,105,93,55,134,107,157,176,47,106,147,151,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(42,29,158,92,106,55,144,85,157,176,47,95,117,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,92,63,58,106,94,157,176,47,95,107,145,66,93,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(15)\nMOTOmove19(42,29,158,105,83,55,124,107,157,176,47,108,94,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(42,29,158,100,93,55,130,98,157,176,47,100,107,145,70,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748744862892'] = function(block) {
  let code = "base_action.action('测试1后移')\n";
  return code;
}

Blockly.Blocks['1748745592954'] = {
  init: function() {
    this.jsonInit({
      "type": "1748745592954",
      "message0": "测试2后移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748745592954'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,100,93,55,130,100,157,176,47,100,107,145,70,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(42,29,158,105,93,55,130,108,157,176,47,111,102,136,70,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,105,93,55,134,107,157,176,47,106,147,151,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(42,29,158,92,106,55,144,85,157,176,47,95,117,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,87,63,57,110,88,157,176,47,95,107,145,66,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(42,29,158,105,83,55,124,107,157,176,47,108,94,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(42,29,158,100,93,55,130,98,157,176,47,100,107,145,70,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748745592954'] = function(block) {
  let code = "base_action.action('测试2后移')\n";
  return code;
}

Blockly.Blocks['1749010512872'] = {
  init: function() {
    this.jsonInit({
      "type": "1749010512872",
      "message0": "上高台11111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1749010512872'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 100, 100, 106, 93, 54, 124, 110, 120, 145, 100, 115, 107, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 100, 100, 106, 93, 54, 124, 110, 120, 130, 100, 130, 105, 54, 161, 108, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80, 100, 100, 106, 93, 54, 124, 110, 120, 130, 100, 153, 105, 54, 161, 107, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80, 100, 100, 104, 92, 54, 123, 90, 120, 130, 30, 164, 106, 74, 153, 135, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80, 100, 100, 86, 103, 102, 79, 84, 120, 130, 30, 127, 106, 73, 157, 119, 0, 0, 100)\nMOTOwait()\n\n\n-- s\nMOTOsetspeed(20)\nMOTOmove19(50, 50, 30, 72, 78, 26, 125, 94, 100, 100, 100, 127, 106, 73, 157, 119, 0, 0, 100)\nMOTOwait()\n\n\n-- 转移重心前\nMOTOsetspeed(30)\nMOTOmove19(50, 50, 30, 42, 77, 50, 126, 68, 100, 100, 100, 89, 98, 50, 158, 111, 0, 0, 100)\nMOTOwait()\n\n\n-- 转移1t\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 72, 76, 65, 105, 84, 100, 100, 100, 89, 98, 50, 158, 111, 0, 0, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 61, 75, 32, 138, 74, 100, 100, 100, 88, 105, 50, 162, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 47, 96, 31, 144, 66, 100, 100, 100, 88, 80, 50, 159, 108, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(100, 153, 99, 63, 95, 30, 156, 112, 130, 135, 150, 88, 79, 50, 152, 80, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(50)\nMOTOmove19(100, 153, 99, 60, 142, 113, 136, 112, 99, 135, 99, 88, 79, 50, 152, 80, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 153, 99, 77, 159, 150, 89, 92, 99, 135, 99, 88, 78, 50, 151, 78, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 153, 99, 101, 115, 150, 39, 103, 99, 135, 99, 99, 84, 50, 164, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 战力\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1749010512872'] = function(block) {
  let code = "base_action.action('上高台11111')\n";
  return code;
}

Blockly.Blocks['1749011170453'] = {
  init: function() {
    this.jsonInit({
      "type": "1749011170453",
      "message0": "左移测试1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1749011170453'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(42,29,158,85,112,90,110,90,154,176,47,110,107,146,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(42,29,158,95,93,53,126,105,154,176,47,120,116,160,63,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,100,93,54,129,98,154,176,47,103,107,146,71,105,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1749011170453'] = function(block) {
  let code = "base_action.action('左移测试1')\n";
  return code;
}

Blockly.Blocks['1749011390514'] = {
  init: function() {
    this.jsonInit({
      "type": "1749011390514",
      "message0": "右移测试1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1749011390514'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(42,29,158,90,93,54,129,100,154,176,47,115,83,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(42,29,158,80,84,40,137,70,154,176,47,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(42,29,158,87,83,39,136,69,154,176,47,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(42,29,158,100,93,55,129,95,154,176,47,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1749011390514'] = function(block) {
  let code = "base_action.action('右移测试1')\n";
  return code;
}

Blockly.Blocks['1749011526918'] = {
  init: function() {
    this.jsonInit({
      "type": "1749011526918",
      "message0": "侧上高台1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1749011526918'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(80,100,100,106,93,54,124,110,120,145,100,115,107,146,76,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,100,100,106,93,54,124,110,120,130,100,130,105,54,161,108,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80,100,100,106,93,54,124,110,120,130,100,153,105,54,161,107,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80,100,100,104,92,54,123,90,120,130,30,164,106,74,153,135,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80,100,100,86,103,102,79,84,120,130,30,127,106,73,157,119,0,0,100)\nMOTOwait()\n\n\n-- s\nMOTOsetspeed(20)\nMOTOmove19(50,50,30,72,78,26,125,94,100,100,100,127,106,73,157,119,0,0,100)\nMOTOwait()\n\n\n-- 转移重心前\nMOTOsetspeed(30)\nMOTOmove19(50,50,30,42,77,50,126,68,100,100,100,89,98,50,158,111,0,0,100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 转移1t\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,72,76,65,105,84,100,100,100,89,98,50,158,111,0,0,100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,61,75,32,138,74,100,100,100,88,105,50,162,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,47,96,31,144,66,100,100,100,88,80,50,159,108,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(100,153,99,63,95,30,156,112,130,135,150,88,79,50,152,80,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(50)\nMOTOmove19(100,153,99,60,142,113,136,112,99,135,99,88,79,50,152,80,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,153,99,77,159,150,89,92,99,135,99,88,78,50,151,78,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,153,99,101,115,150,39,103,99,135,99,99,84,50,164,100,0,0,100)\nMOTOwait()\n\n\n-- 战力\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1749011526918'] = function(block) {
  let code = "base_action.action('侧上高台1')\n";
  return code;
}

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

Blockly.Blocks['1749012346531'] = {
  init: function() {
    this.jsonInit({
      "type": "1749012346531",
      "message0": "爬台子",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1749012346531'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(79, 39, 188, 98, 88, 10, 112, 98, 120, 179, 20, 99, 107, 179, 94, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79, 28, 112, 94, 86, 10, 112, 94, 120, 175, 87, 96, 107, 179, 94, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79, 28, 112, 99, 106, 55, 120, 105, 120, 175, 87, 100, 90, 140, 94, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(90, 80, 115, 30, 90, 60, 190, 90, 120, 110, 87, 170, 110, 150, 10, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10, 140, 190, 40, 65, 15, 190, 90, 190, 65, 15, 170, 110, 150, 10, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10, 140, 190, 44, 40, 146, 39, 99, 190, 65, 15, 170, 109, 50, 145, 79, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10, 130, 190, 35, 80, 30, 55, 90, 190, 65, 15, 170, 109, 155, 160, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 190, 70, 160, 150, 35, 75, 110, 190, 15, 140, 40, 50, 160, 130, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(60)\nMOTOmove19(90, 15, 190, 60, 160, 150, 35, 75, 110, 150, 10, 140, 40, 55, 160, 130, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(100, 40, 110, 75, 160, 145, 60, 75, 95, 160, 90, 125, 40, 55, 140, 130, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85, 50, 130, 100, 120, 145, 45, 100, 115, 150, 110, 100, 90, 55, 160, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 40, 100, 100, 105, 145, 45, 100, 115, 150, 110, 100, 90, 55, 160, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 90, 55, 124, 100, 120, 170, 110, 100, 110, 145, 87, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1749012346531'] = function(block) {
  let code = "base_action.action('爬台子')\n";
  return code;
}

Blockly.Blocks['1778759320347'] = {
  init: function() {
    this.jsonInit({
      "type": "1778759320347",
      "message0": "小阶梯",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1778759320347'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30,0,0,0)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94, 79, 100, 85, 106, 79, 113, 80, 106, 100, 100, 94, 107, 145, 76, 88, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97, 105, 100, 85, 132, 127, 85, 89, 103, 100, 100, 94, 107, 145, 76, 88, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100, 150, 100, 85, 160, 50, 180, 95, 100, 100, 100, 95, 85, 100, 99, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 100, 160, 78, 155, 100, 100, 100, 100, 100, 145, 150, 99, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(100, 10, 180, 105, 160, 78, 135, 112, 100, 190, 20, 110, 130, 190, 40, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 115, 65, 125, 112, 100, 190, 20, 115, 155, 180, 105, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 105, 65, 125, 112, 100, 190, 20, 115, 70, 110, 95, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 180, 105, 98, 55, 124, 112, 100, 100, 20, 115, 90, 110, 95, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60,0,0,0)\n\n\n-- 2右腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97, 100, 100, 106, 93, 55, 124, 112, 103, 95, 100, 115, 68, 73, 115, 111, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60,0,0,0)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100, 100, 100, 105, 115, 100, 101, 110, 100, 50, 100, 115, 49, 150, 10, 111, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 100, 65, 50, 101, 100, 100, 25, 100, 104, 40, 122, 45, 98, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 100, 55, 50, 101, 100, 100, 100, 100, 100, 40, 122, 45, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(100, 10, 180, 90, 70, 10, 160, 90, 100, 190, 20, 95, 40, 122, 65, 88, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 85, 45, 20, 95, 100, 100, 190, 20, 95, 85, 135, 75, 88, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 85, 130, 90, 105, 100, 100, 190, 20, 95, 95, 135, 75, 88, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100, 150, 100, 85, 160, 50, 180, 95, 100, 100, 100, 95, 85, 100, 99, 90, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100, 150, 100, 100, 160, 78, 155, 100, 100, 100, 100, 100, 135, 150, 99, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 100, 160, 78, 155, 100, 100, 100, 100, 100, 145, 150, 99, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(100, 10, 180, 105, 160, 78, 135, 112, 100, 190, 20, 110, 130, 190, 40, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 115, 65, 125, 112, 100, 190, 20, 115, 155, 180, 105, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 105, 65, 125, 112, 100, 190, 20, 115, 70, 110, 95, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 180, 105, 98, 55, 124, 112, 100, 100, 20, 115, 90, 110, 95, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 15\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 180, 102, 79, 32, 137, 108, 100, 100, 20, 108, 121, 165, 70, 108, 0, 0, 100)\nMOTOwait()\n\n\n-- 14\nMOTOsetspeed(25)\nMOTOmove19(80, 30, 100, 100, 95, 55, 123, 100, 120, 170, 100, 100, 105, 145, 77, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1778759320347'] = function(block) {
  let code = "base_action.action('小阶梯')\n";
  return code;
}

Blockly.Blocks['1778763127131'] = {
  init: function() {
    this.jsonInit({
      "type": "1778763127131",
      "message0": "zzzzzz",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1778763127131'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(79,29,188,98,88,10,112,98,120,169,20,99,107,179,94,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,28,112,94,86,10,112,94,120,173,87,95,107,179,94,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,28,112,98,106,55,117,102,120,173,87,99,91,142,86,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(92,78,112,29,88,60,190,94,118,113,86,174,110,150,10,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,143,189,41,63,14,190,94,189,65,16,174,110,150,10,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,143,189,46,39,117,41,99,189,65,16,170,116,62,146,82,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,129,189,37,83,36,51,91,190,68,15,167,104,150,158,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(90,10,181,63,160,145,35,75,109,190,25,137,40,55,165,125,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(70)\nMOTOmove19(90,15,190,63,160,145,35,67,110,185,10,137,40,55,165,133,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(103,39,113,74,160,145,62,74,97,161,87,126,40,55,138,126,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85,50,130,100,121,150,45,100,115,150,70,100,88,50,155,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,41,101,99,105,145,45,99,116,150,111,101,94,55,160,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1778763127131'] = function(block) {
  let code = "base_action.action('zzzzzz')\n";
  return code;
}

Blockly.Blocks['1779501639147'] = {
  init: function() {
    this.jsonInit({
      "type": "1779501639147",
      "message0": "放",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1779501639147'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 93, 55, 127, 100, 140, 190, 50, 100, 107, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 111, 150, 54, 102, 140, 190, 50, 100, 88, 51, 142, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 101, 150, 42, 102, 140, 190, 50, 100, 99, 51, 158, 101, 0, 0, 100)\nMOTOwait()\nDelayMs(400)\n\n\n-- 放\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 101, 107, 149, 43, 100, 140, 190, 50, 101, 92, 51, 157, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(30)\nMOTOmove19(80, 33, 130, 101, 107, 149, 43, 100, 120, 165, 66, 101, 92, 51, 157, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 33, 130, 100, 111, 150, 54, 102, 120, 165, 66, 100, 88, 51, 142, 101, 0, 0, 100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1779501639147'] = function(block) {
  let code = "base_action.action('放')\n";
  return code;
}

