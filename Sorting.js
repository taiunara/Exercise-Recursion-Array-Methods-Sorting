function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

let list = [10, 2, 7, 4, 9, 6, 7, 5.6, 3, 10, 9, 7, 6.7, 8.5, 6];
console.log(bubbleSort(list));

let taskList = [
  { task: "create website", priority: 3 },
  { task: "talk to clients", priority: 1 },
  { task: "collect feedback", priority: 2 },
  { task: "create post for Instagram", priority: 2 },
  { task: "daily with the CEO", priority: 1 },
];

let displayTasks = quickSort(taskList, 0, taskList.length - 1);

for (let task of displayTasks) {
  console.log(task);
}

function quickSort(array, left, right) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right);
    if (left < index - 1) {
      quickSort(array, left, index - 1);
    }
    if (index < right) {
      quickSort(array, index, right);
    }
  }
  return array;
}

function partition(array, left, right) {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (array[i].priority < pivot.priority) {
      i++;
    }
    while (array[j].priority > pivot.priority) {
      j--;
    }
    if (i <= j) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    }
  }
  return i;
}

function mergeSort(array, direction) {
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  const sortedLeft = mergeSort(left, direction);
  const sortedRight = mergeSort(right, direction);
  return merge(sortedLeft, sortedRight, direction);
}

function merge(left, right, direction) {
  let result = [];
  let i = 0, j = 0;
  if (direction === "ascending") {
    while (i < left.length && j < right.length) {
      if (left[i].price < right[j].price) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  } else if (direction === "descending") {
    while (i < left.length && j < right.length) {
      if (left[i].price > right[j].price) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

let objectArray = [
  { name: "paçoquinha", price: 0.25 },
  { name: "jujuba", price: 1.00 },
  { name: "babalu", price: 0.50 },
];

let sortedObjectArrayDesc = mergeSort(objectArray, "descending");

console.log("Descending");
for (let name of sortedObjectArrayDesc) {
  console.log(name);
}

let sortedObjectArrayAsc = mergeSort(objectArray, "ascending");

console.log("Ascending");
for (let name of sortedObjectArrayAsc) {
  console.log(name);
}
