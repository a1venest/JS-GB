let day = prompt('Введите число от 1 до 31');

(day <= 10) ? console.log("первая декада месяца."): (10 < day <= 20) ? console.log("вторая декада месяца") : console.log("третья декада месяца");