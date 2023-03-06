"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const randomArray = [];

for (let i = 0; i < 5; i++) {
    randomArray[i] = Math.floor(Math.random() * 10);
}

console.log(randomArray);

let sumArray = 0;

for (let i = 0; i < randomArray.length; i++) {
    sumArray = sumArray + randomArray[i];
}

console.log(sumArray);

let minNumber = randomArray[0];

for (let i = 1; i < randomArray.length; i++) {
    if (minNumber > randomArray[i]) {
        minNumber = randomArray[i];
    }
}

console.log(minNumber);

const thArray = [];
for (let i = 0; i < randomArray.length; i++) {
    if (randomArray[i] === 3) {
        thArray.push(i);
    }
}

console.log(thArray);