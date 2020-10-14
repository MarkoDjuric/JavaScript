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
