export default [
  {
    validInputs: '🍦🍺🍄',
    target: '🍦🐋',
    transforms: [
      ['🍦🍺', '🍄'],
      ['🍺🍦🍄', '🐋'],
      ['🍄🍦', '🍉'],
      ['🍉🍄', '🍺🐓🍦'],
      ['🍄🐓', '🍦🐪🍺']
    ]
  }
];
