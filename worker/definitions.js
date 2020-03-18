const definitions = [
  // --------------------------------------
  {
    domainesIds: ['c'],
    typesIds: ['ap'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['c'],
    typesIds: ['ar'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['c'],
    typesIds: ['pc'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['c'],
    typesIds: ['ap'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['c'],
    typesIds: ['ar'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['c'],
    typesIds: ['pc'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['c'],
    typesIds: ['ap'],
    statutsIds: ['ech']
  },
  {
    domainesIds: ['c'],
    typesIds: ['ar'],
    statutsIds: ['ech']
  },
  {
    domainesIds: ['c'],
    typesIds: ['pc'],
    statutsIds: ['ech']
  },
  // --------------------------------------
  {
    domainesIds: ['f'],
    typesIds: ['cx'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['f'],
    typesIds: ['pr'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['f'],
    typesIds: ['cx'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['f'],
    typesIds: ['pr'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['f'],
    typesIds: ['cx'],
    statutsIds: ['ech']
  },
  {
    domainesIds: ['f'],
    typesIds: ['pr'],
    statutsIds: ['ech']
  },
  // --------------------------------------
  {
    domainesIds: ['g'],
    typesIds: ['ar'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['g'],
    typesIds: ['cx'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['g'],
    typesIds: ['pr'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['g'],
    typesIds: ['px'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['g'],
    typesIds: ['ar'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['g'],
    typesIds: ['cx'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['g'],
    typesIds: ['pr'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['g'],
    typesIds: ['px'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['g'],
    typesIds: ['ar'],
    statutsIds: ['ech']
  },
  {
    domainesIds: ['g'],
    typesIds: ['cx'],
    statutsIds: ['ech']
  },
  {
    domainesIds: ['g'],
    typesIds: ['pr'],
    statutsIds: ['ech']
  },
  {
    domainesIds: ['g'],
    typesIds: ['px'],
    statutsIds: ['ech']
  },
  // --------------------------------------
  {
    domainesIds: ['h'],
    typesIds: ['ap'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['h'],
    typesIds: ['cx'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['h'],
    typesIds: ['pr'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['h'],
    typesIds: ['px'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['h'],
    typesIds: ['ap'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['h'],
    typesIds: ['cx'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['h'],
    typesIds: ['pr'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['h'],
    typesIds: ['px'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['h'],
    typesIds: ['ap'],
    statutsIds: ['ech']
  },
  {
    domainesIds: ['h'],
    typesIds: ['cx'],
    statutsIds: ['ech']
  },
  {
    domainesIds: ['h'],
    typesIds: ['pr'],
    statutsIds: ['ech']
  },
  {
    domainesIds: ['h'],
    typesIds: ['px'],
    statutsIds: ['ech']
  },
  // --------------------------------------
  {
    domainesIds: ['m'],
    typesIds: ['ap'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['m'],
    typesIds: ['ar'],
    statutsIds: ['val']
  },
  {
    domainesIds: ['m'],
    typesIds: ['ax'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['m'],
    typesIds: ['cx'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['m'],
    typesIds: ['pr'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['m'],
    typesIds: ['px'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['m'],
    typesIds: ['ap'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['m'],
    typesIds: ['ax'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['m'],
    typesIds: ['cx'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['m'],
    typesIds: ['pr'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['m'],
    typesIds: ['px'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['m'],
    typesIds: ['ap'],
    statutsIds: ['ech']
  },
  {
    domainesIds: ['m'],
    typesIds: ['ar'],
    statutsIds: ['ech']
  },
  {
    domainesIds: ['m'],
    typesIds: ['ax'],
    statutsIds: ['ech']
  },
  {
    domainesIds: ['m'],
    typesIds: ['cx'],
    statutsIds: ['ech']
  },
  {
    domainesIds: ['m'],
    typesIds: ['pr'],
    statutsIds: ['ech']
  },
  {
    domainesIds: ['m'],
    typesIds: ['px'],
    statutsIds: ['ech']
  },
  {
    domainesIds: ['m'],
    typesIds: ['ar'],
    statutsIds: ['dmc']
  },
  // --------------------------------------
  {
    domainesIds: ['s'],
    typesIds: ['cx'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['s'],
    typesIds: ['pr'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['s'],
    typesIds: ['cx'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['s'],
    typesIds: ['pr'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['s'],
    typesIds: ['cx'],
    statutsIds: ['ech']
  },
  {
    domainesIds: ['s'],
    typesIds: ['pr'],
    statutsIds: ['ech']
  },
  // --------------------------------------
  {
    domainesIds: ['w'],
    typesIds: ['ap'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['w'],
    typesIds: ['cx'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['w'],
    typesIds: ['pr'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['w'],
    typesIds: ['ar'],
    statutsIds: ['mod', 'val']
  },
  {
    domainesIds: ['w'],
    typesIds: ['ap'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['w'],
    typesIds: ['cx'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['w'],
    typesIds: ['pr'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['w'],
    typesIds: ['ar'],
    statutsIds: ['dmi']
  },
  {
    domainesIds: ['w'],
    typesIds: ['ap'],
    statutsIds: ['ech']
  },
  {
    domainesIds: ['w'],
    typesIds: ['cx'],
    statutsIds: ['ech']
  },
  {
    domainesIds: ['w'],
    typesIds: ['pr'],
    statutsIds: ['ech']
  },
  {
    domainesIds: ['w'],
    typesIds: ['ar'],
    statutsIds: ['ech']
  }
]

module.exports = definitions
