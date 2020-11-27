// 1. Write a map function to reverse this array:
const start = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const reversed = (start) => start.map((_, index, array) => start[start.length-1 - index])


const reversed_second = (start) => start.map(el => el).reverse();
// expected output: Array [10, 9, 8, 7, 6, 5, 4


// 2. Write a map function to print the Job: Name:
const shipMates = [["Mal", "Captain"], ["Wash", "Pilot"], ["Zoey", "1st Mate"], ["Jayne", "Public Relations"]]

// your code
const jobNames = (shipMates) => shipMates.map((el,index) => el[1])
// expected output: Array ["Captain: Mal", etc...]

// 3. Use Object.keys with the map method to print "This character has a(n) [property-name]" for each property

const character = {
    id: '12mn18udcbv9823',
    name: 'Chewbacca',
    race: 'Wookie',
    planet: 'Kashyyyk',
    job: 'First Mate'
};

console.log(Object.keys(character));

// Expected Output:
// This character has a(n) id.
// This character has a(n) name.
// This character has a(n) race.
// This character has a(n) planet.
// This character has a(n) job.
// [ 'This character has a(n) id',  'This character has a(n) name',  'This character has a(n) race', 'This character has a(n) planet', 'This character has a(n) job'



Object.keys(character).map(key => {
    console.log(`This character has a(n) ${key}`)
    return `This character has a(n) ${key}`
})


