const yourName = prompt("Введите ваше имя")
const yourFamname = prompt("Введите вашу фамилию")
const yourNikname = prompt("Введите ваш никнейм")

if (yourName && yourFamname && yourNikname) {
    alert(`Привет, ${yourName} ${yourFamname}`)
} else if(yourName && yourFamname){
    alert(`Привет, ${yourName} ${yourFamname}`)
} else if(yourFamname && yourNikname){
    alert(`Привет, ${yourFamname}`)
} else if(yourName && yourNikname){
    alert(`Привет, ${yourName}`)
} else{
    alert(`Привет, Naname`)
}