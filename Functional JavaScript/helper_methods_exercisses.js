
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
