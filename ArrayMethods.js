// ---------------------------------------- Question 1

class ArrayMethods {
  constructor() {
    this.list = [];
  }

  receiveString(string) {
    this.list.push(string);
    console.log(`${string} was added to the list!`);
  }

  countWordsWithVowels() {
    let count = 0;

    for (let word of this.list) {
      let firstLetter = word[0].toLowerCase();
      if (
        firstLetter === "a" ||
        firstLetter === "e" ||
        firstLetter === "i" ||
        firstLetter === "o" ||
        firstLetter === "u"
      ) {
        count++;
      }
    }

    console.log(`Number of words that start with a vowel: ${count}`);
  }
}

const arrayMethods = new ArrayMethods();

arrayMethods.receiveString("Potato");
arrayMethods.receiveString("Grape");
arrayMethods.receiveString("Lemon");
arrayMethods.receiveString("Hand");
arrayMethods.receiveString("Tomorrow");

arrayMethods.countWordsWithVowels();

// ---------------------------------------- Question 2
let numbersList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function showNumbers(numbersArray, n) {
  if (n > numbersArray.length || n === 0) {
    return console.log(`Choose a value between 1 and 10`);
  } else {
    return numbersArray.slice(0, n);
  }
}

console.log(showNumbers(numbersList, 4));

// ----------------------------------------- Question 3

function findAndRemoveNumber(list, n) {
  let index = list.indexOf(n);

  if (index !== -1) {
    list.splice(index, 1);
    console.log(`The number ${n} was removed from the list.`);
  } else {
    console.log(`The number ${n} is not in the list.`);
  }
}

// Function test
let numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

findAndRemoveNumber(numberList, 15);
findAndRemoveNumber(numberList, 5);
console.log(numberList);

// ----------------------------------------- Question 4
function primeNumbers(list) {
  let primes = [];

  for (let number of list) {
    if (isPrime(number)) {
      primes.push(number);
    }
  }
  return primes;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Function test
let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 17, 19];
console.log(primeNumbers(numberArray));
