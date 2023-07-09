//Exercise 1
//destructureExample

const destructureExample = (obj, arr) => {
    let { name, age } = obj
    let [indexZero, , indexTwo] = arr
    return { name, age }
}

const obj = { name: 'John', age: 30, city: 'New York' };
const arr = [10, 20, 30, 40];
console.log(destructureExample(obj, arr))



//Exercise 2:
//sumNumbers
const sumNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0)
console.log(sumNumbers(1, 2, 3, 4, 5));



//Exercise 3:
//createGreeting
const createGreeting = name => `Hello, ${name}! Welcome to our website.`

console.log(createGreeting('Alice'))



//Exercise 4:
//isEven
const isEven = number => number % 2 === 0 ? "Even" : "Odd"

console.log(isEven(5))



//Exercise 5:
//arrow function:
const multiply = (a, b) => a * b

console.log(multiply(2, 3))



//Exercise 6: 
//getLargestNumber
const getLargestNumber = (numOne, numTwo) => (numOne >= numTwo && numOne)  ||  (numTwo>=numOne && numTwo)

console.log(getLargestNumber(10, 15))
console.log(getLargestNumber(-10, -15))



//Exercise 7
//getAddressCity

const getAddressCity = address => address?.city ?? "Unknown";

console.log(getAddressCity({ street: '123 Main St', country: 'USA' }))
console.log(getAddressCity({ street: '123 Main St', city: "New Work", country: 'USA' }))



//Exercise 8: 
//doubleNumbers

const doubleNumbers = numbers => numbers.map(number => number * 2)

console.log(doubleNumbers([1, 2, 3, 4, 5]))




//Exercise 9: 
//filterEvenNumbers
const filterEvenNumbers = numbers => numbers.filter(number => number % 2 === 0)
console.log(filterEvenNumbers([1, 2, 3, 4, 5]))



//Exercise 10:  
//sumArray 
const sumArray = numbers => numbers.reduce((sum, number) => sum + number, 0)
console.log(sumArray([1, 2, 3, 4, 5]))




//Exercise 11:  
//sortNumbers  
const sortNumbers = numbers => numbers.sort((x, y) => x - y)
console.log(sortNumbers([5, 2, 8, 1, 4]))