let money = parseFloat(prompt('Сколько у вас денег?'));
let apple = parseInt(prompt('Сколько яблок Вы купили?'));
let bread = parseFloat(prompt('Сколько батонов хлеба Вы купили?'));
let apple_cost = parseFloat(prompt('Сколько стоит одно яблоко?')) * apple;
let bread_cost = parseFloat(prompt('Сколько стоит один батон хлеба?')) * bread;
let bool = money >= (apple_cost + bread_cost);
document.write('<h1>' + bool + '</h1>');