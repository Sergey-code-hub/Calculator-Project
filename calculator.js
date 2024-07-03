// Получение элементов DOM
const display = document.getElementById('display');
const numButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');

// Переменные для хранения данных
let num1 = null;
let operator = null;
let num2 = null;

// Обработчик событий для кнопок с числами
numButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Добавление числа на дисплей
    display.value += button.value;
  });
});

// Обработчик событий для кнопок с операторами
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Сохранение первого числа и оператора
    num1 = parseFloat(display.value);
    operator = button.value;
    display.value += operator;
  });
});

// Обработчик событий для кнопки "равно"
equalsButton.addEventListener('click', () => {
  // Сохранение второго числа
  num2 = parseFloat(display.value.slice(display.value.lastIndexOf(operator) + 1));

  // Выполнение операции в зависимости от выбранного оператора
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '^':
      result = Math.pow(num1, num2);
      break;
    case '√':
      result = Math.sqrt(num1);
      break;
  }

  // Отображение результата на дисплее
  display.value = result;
});

// Обработчик событий для кнопки "очистить"
clearButton.addEventListener('click', () => {
  // Очистка поля ввода
  display.value = '';
  num1 = null;
  operator = null;
  num2 = null;
});
