/*1.Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
b.Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
c.Use a loop to iterate through the array and calculate the average age.*/


const ages = [3, 9, 23, 64, 2, 8, 28, 93];

let ageChange = ages[ages.length - 1] - ages[0]

console.log(ageChange)


ages.push(10);// added another age to array using .push()
console.log(ages)

//c) iterating through the array to calculate average age
//created a function that takes in an array, 
//then declared sum to hold the sum of all items in the array added together
//count will be holding the length of the array(), looping through to add all ages together then dividing by array length.

const ageAverage = (array) => {
    let sum = 0
    let length = array.length

    for(let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum / length;

}
console.log(ageAverage(ages));




/* 2.Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.*/

//a.
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let count = 0


function countLetters(array) {
    for(let i = 0; i < array.length;i++) {
        count += array[i].length
    }
    return count;
}
console.log(countLetters(names))


let seperateNames = ''

for (let i = 0; i < names.length; i++){
    seperateNames += names[i] + ' '
}

console.log(seperateNames)


//3.How do you access the last element of any array?
//array.length - 1




//4.How do you access the first element of any array?
//array[0];




//5.Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array
let nameLengths = []

for(let i = 0; i < names.length; i++){
    nameLengths += names[i].length + ","
    
}

console.log(nameLengths)




//6.Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.





//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function repeatWord(word, n) {
    return word.repeat(n)
}
console.log(repeatWord('bob', 3))



//8.Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space
let firstName = `Gaby`
let lastName = `Gomez`

const fullName = (firstName, lastName) => `My fullname is ${firstName} ${lastName}`;

console.log(fullName(firstName, lastName));



//9.Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
const crazyNumbers = [105, 3, 70, 12, 4];
let sum = 0

function greaterThan (array) {
    //looping through array and adding everything together and pushing to "sum"
    for( let i = 0; i < array.length; i++){
        sum += array[i];
        if( sum > 100) { //checking to see if"sum" is > || < 100 and returning a boolean
            return true
        }else {
            return false
        }
    }
}
console.log(greaterThan(crazyNumbers))



//10.Write a function that takes an array of numbers and returns the average of all the elements in the array.

const oddNumbers = [3, 5, 7, 9]
let total = 0
//created a function that uses a for loop to loop through the numbers
//in array, continues to add it to "total", then we divide the "total" by array length(4)

function average (array) {
    for(let i = 0; i < array.length; i++){
        total += array[i]
    }
    return total / array.length;
}
console.log(average(oddNumbers))




//11.Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array
const smallNumbers = [2, 4, 6 ,8]
const largeNumbers = [1000, 2000, 3000, 4000, 5000];
let total1 = 0
let total2 = 0

function isItTrue(array1, array2) {
    for(let i = 0; i < array1.length; i++){
        total1 += array1[i] / array1.length;
    }
    for(let i = 0; i < array2.length; i++){
        total2 += array2[i] / array2.length
    }
    if(total1 > total2){
        return true
    }else {
        return false
    }
}
console.log(isItTrue(smallNumbers, largeNumbers))


//12.Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
const isHotOutside = true;
const moneyInPocket = 2.50

function willBuyDrink(boolean, n) {
    if( isHotOutside && moneyInPocket > 10.50) {
        return true
    }else {
        return false
    }

}
console.log(willBuyDrink(isHotOutside, moneyInPocket))


//13.Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

let winningTeam = "Alpine"
let otherTeam = "RedBull"
//made a function to figure out who is winning the race
function whoWon(string, string) {
    if( winningTeam === "Alpine") {
        return " We're winning!!"
    }else if( otherTeam === "RedBull"){
        return "BOOO!!"
    }else {
        return "I hope Ferrari wins"
    }
}
console.log(whoWon(winningTeam, otherTeam))






    
  
