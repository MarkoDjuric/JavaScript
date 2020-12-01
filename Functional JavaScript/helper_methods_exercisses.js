
// FLAT EXERCISE
// ----------------------------------------------------------
// This short list of some marvel characters is abitrarily nested. Experiment with the effect of flattening to various depths.


const characters = [
    ['Starlord', 'Gamora', 'Groot'],
    ['Dr. Strange', ['Captain America', 'Bucky Barnes'], ['Thor', 'Hulk', ['Loki']], 'Thanos']
    ['Iron Man', 'Ultron'],
    ['Spider Man', ['Venom']],
    ['Professor X', 'Wolverine', 'Quicksilver', ['Magneto']]
]

const results = characters.flat()


// ----------------------------------------------------------
// FIND EXERCISE
// ----------------------------------------------------------
// Best use cases for FIND are when you want to cast a wider net, because you get to create your own criteria that can be either very specific or more generic.

// Determine whether any of the following have a value that contains the characters 'ABC'

const ids = [
    'ADHKE',
    'ANFKM',
    'QIMVU',
    'PQMFU',
    'ABCKO',
    'IUABC'
]

var findStr = ids.find(el => el.includes("ABC"))
