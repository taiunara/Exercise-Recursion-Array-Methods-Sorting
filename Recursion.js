// ------------------------------ Question 5

function Fibonacci(n) {
  if (n < 1) {
    return 0;
  } else if (n <= 2) {
    return 1;
  } else if (n > 2) {
    return Fibonacci(n - 1) + Fibonacci(n - 2);
  }
}

function setup() {
  console.log(Fibonacci(7));
}

// -------------------------------- Question 6

function ReverseString(string) {
  if (string.length < 2) {
    return string;
  }
  return string[string.length - 1] + ReverseString(string.slice(0, -1));
}

function setup() {
  console.log(ReverseString("Hello Tainara"));
}

// -------------------------------- Question 7

function SumOfDigits(n) {
  if (n < 10) {
    return n; // BASE CASE
  }
  return (n % 10) + SumOfDigits(parseInt(n / 10));
}

function setup() {
  console.log(SumOfDigits(15));
  console.log(SumOfDigits(1234));
  console.log(SumOfDigits(987));
}

// -------------------------------- Question 8

function findAnagrams(string) {
  // Base case
  if (string.length < 1) {
    return [string];
  }

  let result = [];

  function processCharacters(i) {
    if (i >= string.length) {
      return;
    }

    let letter = string[i];
    let remaining = string.slice(0, i) + string.slice(i + 1);
    let anagrams = findAnagrams(remaining);

    for (let anagram of anagrams) {
      result.push(letter + anagram);
    }

    processCharacters(i + 1);
  }
  processCharacters(0);
  return result;
}

console.log(findAnagrams("Tai"));

// -------------------------------- Question 9

const fileSystem = {
  folder1: {
    file1: "Lorem ipsum",
    file2: "Lorem ipsum",
    subfolder1: {
      file3: "Lorem ipsum",
    },
  },
  folder2: {
    file4: "Lorem ipsum",
  },
};

function countFiles(folder) {
  let counter = 0;

  for (let key in folder) {
    if (typeof folder[key] === "string") {
      counter++;
    } else if (typeof folder[key] === "object") {
      counter += countFiles(folder[key]); // Recursive call for subfolders
    }
  }

  return counter;
}

console.log(countFiles(fileSystem));
