export default [
  {
    validInputs: 'abcd',
    target: 'e',
    transforms: [
      ['ab', 'e'],
      ['cd', 'f'],
      ['db', 'g'],
    ]
  },
  {
    validInputs: 'abcd',
    target: 'f',
    transforms: [
      ['ab', 'e'],
      ['cd', 'f'],
      ['db', 'g'],
    ]
  },
  {
    validInputs: 'abcdfgitl',
    target: 'bhi',
    transforms: [
      ['ab', 'e'],
      ['cd', 'f'],
      ['db', 'g'],
      ['fe', 'bhi'],
      ['gi', 'jkl'],
      ['tl', 's'],
    ]
  },
  {
    validInputs: 'abcdfgitl',
    target: 'ghi',
    transforms: [
      ['ab', 'e'],
      ['cd', 'f'],
      ['db', 'g'],
      ['fe', 'bhi'],
      ['gi', 'jkl'],
      ['tl', 's'],
    ]
  },
  {
    validInputs: 'abcdfghimpqtlz',
    target: 'in',
    transforms: [
      ['ab', 'e'],
      ['cd', 'f'],
      ['db', 'g'],
      ['fe', 'bhi'],
      ['gi', 'jkl'],
      ['tl', 's'],
      ['him','in'],
      ['hip','iq'],
      ['hiq','ir'],
      ['snz','sz'],
      ['sqz','sz'],
      ['srz','sz'],
    ]
  },
  {
    validInputs: 'abcdfghimpqtlz',
    target: 'ir',
    transforms: [
      ['ab', 'e'],
      ['cd', 'f'],
      ['db', 'g'],
      ['fe', 'bhi'],
      ['gi', 'jkl'],
      ['tl', 's'],
      ['him','in'],
      ['hip','iq'],
      ['hiq','ir'],
      ['snz','sz'],
      ['sqz','sz'],
      ['srz','sz'],
    ]
  },
  {
    validInputs: 'abcdfghimpqtlzo',
    target: 'ir',
    transforms: [
      ['ab', 'e'],
      ['cd', 'f'],
      ['db', 'g'],
      ['fe', 'bhi'],
      ['gi', 'jkl'],
      ['tl', 's'],
      ['him','in'],
      ['hip','iq'],
      ['hiq','ir'],
      ['snz','sz'],
      ['sqz','sz'],
      ['srz','sz'],
      ['ojk', ''],
    ]
  },
  {
    validInputs: 'abcdfghimpqtlszo',
    target: 'efy',
    transforms: [
      ['ab', 'e'],
      ['cd', 'f'],
      ['db', 'g'],
      ['fe', 'bhi'],
      ['gi', 'jkl'],
      ['tl', 's'],
      ['him','in'],
      ['hip','iq'],
      ['hiq','ir'],
      ['snz','sz'],
      ['sqz','sz'],
      ['srz','sz'],
      ['ojk', ''],
      ['sza','dy'],
      ['szb','csz'],
      ['szc','bsz'],
      ['szd','asz'],
    ]
  },
];
