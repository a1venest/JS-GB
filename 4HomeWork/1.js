"use strict";

/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

const arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function write(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) console.log('это ноль');
        else if (arr[i] % 2 == 0) {
            console.log("четное число");
        } else if (arr[i] % 2 != 0) {
            console.log('нечетное число');
        }
    }
}

write(arrNum);