// Task 1
let calculateAverage = function () {
  const array = [
    "3",
    6,
    "Алексей, ты уволен!",
    null,
    undefined,
    1.5,
    34,
    0,
    NaN,
    { name: "Alexey", job: undefined },
  ];

  let sum = 0;
  let avg = 0;

  const filteredArray = array.filter(
    (element) => typeof element === "number" && !isNaN(element)
  );

  for (i = 0; i < filteredArray.length; i++) {
    sum += filteredArray[i];
    avg = sum / filteredArray.length;
  }
  return avg;
};

console.log(calculateAverage());

// Task 2
const operators = ["+", "-", "*", "/", "%", "^"];

const doMath = function (znak, x, y) {
  let result = 0;

  switch (znak) {
    case "+": {
      result = x + y;
      break;
    }

    case "-": {
      result = x - y;
      break;
    }

    case "*": {
      result = x * y;
      break;
    }

    case "/": {
      result = x / y;
      break;
    }

    case "%": {
      result = x % y;
      break;
    }

    case "^": {
      result = x ** y;
      break;
    }
  }

  return result;
};

let znak = function (znak) {
  znak = prompt(`Choose the operator: ${operators.join(" ")}`);
  while (!operators.includes(znak)) {
    znak = prompt("Invalid data: please enter a valid operator");
  }
  return znak;
};

let x = function (x) {
  x = prompt("Enter the first number: ");
  while (!Number(x) || isNaN(x) || x === null || x.trim() === "") {
    x = prompt("Invalid data: please enter a valid first number: ");
  }
  return parseFloat(x);
};

let y = function (y) {
  y = prompt("Enter the second number: ");
  while (!Number(y) || isNaN(y) || y === null || y.trim() === "") {
    y = prompt("Invalid data: please enter a valid second number: ");
  }
  return parseFloat(y);
};

console.log(doMath(znak(), x(), y()));

// Task 3
function userArray() {
  const array = [];

  // Валидация + определение длины внешного массива
  let userOuterArrayLength = function (length) {
    length = prompt("Задайте длину внешнего массива: ");

    while (
      !Number.isInteger(Number(length)) ||
      isNaN(length) ||
      length === null ||
      length.trim() === ""
    ) {
      length = prompt("Ошибка. Задайте длину массива: ");
    }

    return length;
  };

  // Валидация + определение длины внутреннего массива
  let userInnerArrayLength = function (length) {
    length = prompt("Задайте длину внутреннего массива: ");

    while (
      !Number.isInteger(Number(length)) ||
      isNaN(length) ||
      length === null ||
      length.trim() === ""
    ) {
      length = prompt("Ошибка. Задайте длину массива: ");
    }

    return length;
  };

  // Вызываем и присваиваем значение длины внешнего массива
  const outerArrayLength = userOuterArrayLength();

  // Добавляем элементы во внешний и во внутренний массивы
  for (let i = 0; i < outerArrayLength; i++) {
    let element = prompt("Добавьте элемент во внешний массив: ");

    if (null) {
      element = prompt("Ошибка. Добавьте элемент в массив: ");
    } else if (element === "array") {
      array.push([]);

      let innerArrayLength = userInnerArrayLength();

      for (let j = 0; j < innerArrayLength; j++) {
        let element = prompt("Добавьте элемент во внутренний массив: ");

        if (null) {
          element = prompt("Ошибка. Добавьте элемент в массив: ");
        } else {
          array[i].push(element);
        }
      }
    } else {
      array.push(element);
    }
  }

  return array;
}

console.log(userArray());

// Task 4
function removeChar(string, toDelete) {
  let newString = string.replaceAll(toDelete, "");

  return newString;
}

let string = function (userPrompt) {
  userPrompt = prompt("Введите строку: ");

  while (null) {
    userPrompt = prompt("Ошибка. Введите строку: ");
  }

  return userPrompt;
};

let toDelete = function (userPrompt, replaced, regExp) {
  userPrompt = prompt("Введите символы в формате [a, b, c, etc...]");

  while (!userPrompt.startsWith("[") && !userPrompt.endsWith("]")) {
    userPrompt = prompt("Ошибка. Введите символы в формате [a, b, c, etc...]");
  }

  replaced = userPrompt.replace(/, /g, "");

  regExp = new RegExp(replaced, "g");

  return regExp;
};

console.log(removeChar(string(), toDelete()));
