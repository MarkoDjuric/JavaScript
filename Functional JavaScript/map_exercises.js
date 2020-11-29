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


// 4. Write a map function that prints the name: even|odd
const awayTeam = ["Picard", "Riker", "Troy", "Data"]

// your code


let even_or_odd = (awayTeam) => awayTeam.map(el => {
  if (el.length % 2 == 0) {
      return  `${el}: even`
  }else {
     return  `${el}: odd`
  }
})

console.log(even_or_odd(awayTeam))
// expected output: Array: ["Picard: even", "Riker: odd", etc...]



// 5. Create a multidimensional array of each item and its index in the original Array.

const sci_fi_shows = ['Manedlorian', 'Enterprise', 'Firefly', 'Battlestar Galactica']

createArray = (el, index) => {
  return [el, index]
}

let multiarray = (sci_fi_shows) => sci_fi_shows.map((el, index)=> createArray(el, index));


multiarray(sci_fi_shows)

// expected output: Array [['Manedlorian', 0], ['Enterprise', 1], ['Firefly', 2], ['Battlestar Galactica', 3]]

var index = [
    {key: 1, sector: 10, t_score: 18, id: '1236n7e8', value: 'Klingon'},
    {key: 4, sector: 145, t_score: 12, id: '293847hs8', value: 'Minbari'},
    {key: 8, sector: 214, t_score: 5, id: '283hy8347', value: 'Cylon'},
    {key: 3, sector: 8346, t_score: 10, id: 'n9837ks857', value: 'Jawa'},
]


// One common thing we use map for in real life is to reformat objects to have a shape that is better for our purposes. For instance, we only care about the name and first three characters of the id for the races below. Use map to grab those values and create a new array with them.


var mapedObject = (index) => index.map(el => [el.id.slice(0,3), el.value])

mapedObject(index)


// 1. Find all the words with more than 7 characters
const words = ['tardis', 'grok', 'frak', 'blaster', 'klingon', 'shepherd']

// Your Code
words.filter(el => el.length > 7)
// expected output: Array ['shepherd']


// 2. Find all even values
const words = [12, 13, 14, 15, 16, 17]

// Your Code
words.filter(el => el % 2 == 0)
// expected output: Array [12, 14, 16]


// REAL LIFE EXAMPLE
// We often use filter to quickly pull all the items that share a status or other characteristic. For instance,
// create a list of all the active bounty hunters from the array below:

const hunters = [
    {
        name: 'Greedo',
        universe: 'Star Wars',
        status: 'active',
    },
    {
        name: 'Boba Fett',
        universe: 'Star Wars',
        status: 'inactive',
    },
    {
        name: 'Asajj Ventress',
        universe: 'Star Wars',
        status: 'unknown',
    },
    {
        name: 'Zam Wesell',
        universe: 'Star Wars',
        status: 'inactive',
    },
    {
        name: 'Jango Fett',
        universe: 'Star Wars',
        status: 'active',
    },
]

// Your code
hunters.filter(el => el.status == 'active')

// expected output: Array [
//     {
//         name: 'Greedo',
//         universe: 'Star Wars',
//         status: 'active',
//     },
//     {
//         name: 'Jango Fett',
//         universe: 'Star Wars',
//         status: 'active',
//     },
// ]


// 1. Take this disjointed sentence and turn it into a single string
const text = ['The ships', 'hung in the sky,', 'much the way', 'that bricks don`t']

// Your Code Here
text.reduce((total, tempValue) => total + tempValue)

// expected output: "The ships hung in the sky, much the way that bricks don't"

// 2. Return the winning team
const scores = [
    {
        team: 'A',
        score: 20
    },
    {
        team: 'B',
        score: 17
    },
    {
        team: 'C',
        score: 23
    },
    {
        team: 'D',
        score: 13
    }
]

const high = scores.reduce((highValue, currentValue) => {
   if (currentValue.score > highValue.score)
     return currentValue;
   else
     return highValue;
})

console.log(high.team)


const ships = [
    {
        name: 'Serenity',
        speed: '4.2G',
    },
    {
        name: 'Cylon Raider',
        speed: '7.5G',
    },
    {
        name: 'Swordfish II',
        speed: '50G',
    },
    {
        name: 'Tie Fighters',
        speed: '4100G',
    }
]

const result = ships.reduce((previous, current) => {
    const speed = parseInt(current.speed.slice(0, -1))
    const previousSpeed = parseInt(previous.speed.slice(0, -1))
    if (speed > previousSpeed) {
        return current
    }
    return previous
}, { name: "none", speed: "0G"})


console.log(result.name)
