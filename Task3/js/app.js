const youName = prompt("Введите ваше имя");
const youAge = +prompt("Введите ваш возраст");
const message = youAge > 17
    ? alert(`Добро пожаловать ${youName}`)
    : youAge < 18 && youAge >= 1
    ? alert(`Простите ${youName} доступ закрыт`)
    : alert(`${youName}, Возраст введён не правильно `);
