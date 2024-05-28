// Завдання 1
/**
 * Функція `checkData` перевіряє наявність даних.
 * У випадку помилки, викликається помилка з причиною (cause).
 *
 *  data - вхідні дані.
 */
function checkData(data) {
  if (Object.keys(data).length === 0) {
    return "Об'єкт пустий";
  } else {
    return data;
  }
}


console.log("Завдання: 1 ==============================");

console.log(checkData({}));
// Виведе Об'єкт пустий
console.log(checkData({ name: "John", age: 30, city: "New York" }));
// Виведе { name: 'John', age: 30, city: 'New York' }

// Завдання 2
/**
 * Функція `parseJson` намагається аналізувати вхідний JSON-рядок.
 * Якщо рядок має невірний формат, генерується помилка з відповідним текстом.
 *
 *  jsonStr - JSON-рядок для аналізу.
 */
function parseJson(jsonStr) {
  try {
    return JSON.parse(jsonStr);
  } catch (error) {
    return error.message;
  }
}

console.log("Завдання: 2 ==============================");

// Вхідний JSON-рядок з правильним форматом.
let validJson = '{"name":"John","age":30,"city":"New York"}';
// Вхідний JSON-рядок з неправильним форматом.
let invalidJson = '{"name":"John,"age":30,"city":"New York"}'; // Пропущена закриваюча лапка після "John".

// Спробуємо аналізувати JSON-рядки.
console.log(parseJson(validJson));
// Виведе { name: 'John', age: 30, city: 'New York' }
console.log(parseJson(invalidJson));
// Виведе Unexpected token a in JSON at position 15

// Завдання 3

/**
 * Функція `getAge` отримує вік користувача.
 * Якщо вік користувача менше 0, генерується помилка з відповідним текстом.
 *
 *  age - вік користувача.
 */
function getAge(age) {
  if (age < 0) {
    const error = new Error('Вік не може бути менше 0!');
    error.error = 'Вік не може бути менше 0!';
    error.name = 'AgeError';
    throw error;
  } else {
    return `Вік користувача: ${age}`;
  }
}


console.log("Завдання: 3 ==============================");

// Виклик функції з від'ємним віком.
console.log(getAge(-1));
// Виведе { error: 'Вік не може бути менше 0!', name: 'AgeError' }
// Виклик функції з віком 20.
console.log(getAge(20));
// Виведе Вік користувача: 20

// Завдання 4
/**
 * Функція `getBookById` отримує книгу за її ID.
 * Якщо книги з таким ID не існує, генерується TypeError.
 *
 *  books - масив книг.
 *  id - ID книги.
 */
function getBookById(books, id) {
  const book = books.find(book => book.id === id);
  if (!book) {
    throw new TypeError(`Книга з ID ${id} не знайдена!`);
  } else {
    return `Книга: ${book.title}`;
  }
}

console.log("Завдання: 4 ==============================");

// Виклик функції з неіснуючим ID.

console.log(
  getBookById(
    [
      { id: 1, title: "Книга 1" },
      { id: 2, title: "Книга 2" },
    ],
    3
  )
);
// Виведе TypeError: Книга з ID 3 не знайдена!
console.log(
  getBookById(
    [
      { id: 1, title: "Книга 1" },
      { id: 2, title: "Книга 2" },
    ],
    2
  )
);
// Виведе Книга: Книга 2

// Завдання 5

/**
 * Функція `decodeURIComponentWrapper` виконує декодування рядка `encodedString`
 * з використанням функції `decodeURIComponent`. Якщо сталася помилка URIError,
 * вона перехоплюється та виводиться повідомлення про помилку.
 *
 *  encodedString - Рядок для декодування.
 */
function decodeURIComponentWrapper(encodedString) {
  try {
    return decodeURIComponent(encodedString);
  } catch (error) {
    if (error instanceof URIError) {
      return `Помилка декодування URI: ${error.message}`;
    } else {
      return error.toString();
    }
  }
}


console.log("Завдання: 5 ==============================");

console.log(decodeURIComponentWrapper("Hello%20World")); // виведе 'Hello World'
console.log(decodeURIComponentWrapper("%E0%A4%A")); // виведе інформацію про помилку URIError

// Завдання 6
/**
 * Функція `findEvenNumber` знаходить перше число, що ділиться на 2 без остачі в масиві.
 * Якщо такого числа немає, вона кидає помилку.
 *
 *  numbers - Масив чисел для пошуку.
 */
function findEvenNumber(numbers) {
  const evenNumber = numbers.find(number => number % 2 === 0);
  if (evenNumber === undefined) {
    throw new Error('У масиві немає чисел, що діляться на 2 без остачі!');
  } else {
    return evenNumber;
  }
}


console.log("Завдання: 6 ==============================");
// Виклик функції з масивом чисел.
console.log(findEvenNumber([1, 3, 5]));
// Виведе
// [ 1, 3, 5 ]
// Error: У масиві немає чисел, що діляться на 2 без остачі!;
console.log(findEvenNumber([1, 4, 5]));
// Виведе
// [ 1, 4, 5 ]
// 4

// Завдання 7
function validateUser(user) {
  if (!user) {
    throw new Error("Об'єкт користувача не вказано!");
  } else if (!user.name) {
    throw new Error(`Ім'я користувача не вказано! ${JSON.stringify(user)}`);
  } else if (!user.email) {
    throw new Error(`Email користувача не вказано! ${JSON.stringify(user)}`);
  } else {
    console.log("Об'єкт користувача відповідає всім вимогам.");
  }
}

console.log("Завдання: 7 ==============================");
try {
  validateUser({ name: "John Doe" });
} catch (error) {
  console.error(error.message);
}

// Завдання 8
function calculateSquareRoot(number) {
  if (typeof number !== "number") {
    throw new TypeError("Аргумент має бути числом!");
  } else if (number < 0) {
    throw new RangeError("Число не повинно бути від'ємним!");
  } else {
    return Math.sqrt(number);
  }
}

console.log("Завдання: 8 ==============================");
try {
  console.log(calculateSquareRoot(9));
  console.log(calculateSquareRoot(-9));
  console.log(calculateSquareRoot("abc"));
} catch (error) {
  console.error(error.message);
}

// Завдання 9
function processData(data) {
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] !== "number") {
      throw new TypeError(`Елемент з індексом ${i} має бути числом!`);
    }
  }
  return "Дані успішно оброблені";
}

console.log("Завдання: 9 ==============================");
try {
  console.log(processData([1, 2, 3]));
  console.log(processData([1, "two", 3]));
} catch (error) {
  console.error(error.message);
}

// Завдання 10
function evaluateExpression(expression) {
  try {
    return eval(expression);
  } catch (error) {
    throw error;
  }
}

console.log("Завдання: 10 ==============================");
try {
  console.log(evaluateExpression("2 + 2"));
  console.log(evaluateExpression("10 / hello"));
} catch (error) {
  console.error(error.message);
}

