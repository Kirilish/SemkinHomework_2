let arg = prompt("Введите число от о до 9");
switch (arg) {
  case "0":
    alert("Ноль");
    break;
  case "1":
    alert("Один");
    break;
  case "2":
    alert("Два");
    break;
  case "3":
    alert("Три");
    break;
  case "4":
    alert("Четыри");
    break;
  case "5":
    alert("Пять");
    break;
  case "6":
    alert("Шесть");
    break;
  case "7":
    alert("Семь");
    break;
  case "8":
    alert("Восемь");
    break;
  case "9":
    alert("Девять");
    break;
  case !isNaN(arg) || arg:
    alert("Вы ввели не число");
    break;
  default:
    alert("Вы ввели число меньше или больше 10");
    break;
}
