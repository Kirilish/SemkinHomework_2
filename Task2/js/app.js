function moreLess(num) {
  return num > 100 ? "больше 100" : num < 100 ? "меньше 100" : "равно 100";
}

function evenOdd(num) {
  return num & 1 ? "не чётное," : "чётное,";
}

function fractional(num) {
  return Number.isInteger(num) ? "не дробное," : "дробное,";
}

function positiveNegative(num) {
  return num > 0 ? "положителное." : "отрицательное.";
}

function language(num) {
  return /[а-я]/i.test(num)
    ? "Язык русский"
    : /[a-z]/i.test(num)
    ? "Язык английский"
    : "Другой";
}

const num = prompt("Введите число", "100");

if (isNaN(num)) {
  console.log("Это строчка");
  console.log(language(num));
} else {
  console.log(
    `Ваше число - ${num}.`,
    `Чило ${moreLess(num)},`,
    evenOdd(num),
    fractional(num),
    positiveNegative(num)
  );
}
