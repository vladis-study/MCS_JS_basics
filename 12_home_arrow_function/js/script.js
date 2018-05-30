let money = parseFloat(prompt('Сколько у вас денег?'));
let apple = parseInt(prompt('Сколько яблок Вы купили?'));
let bread = parseFloat(prompt('Сколько батонов хлеба Вы купили?'));
let apple_cost = parseFloat(prompt('Сколько стоит одно яблоко?'));
let bread_cost = parseFloat(prompt('Сколько стоит один батон хлеба?'));
let haveEnough = (money, apple, bread, apple_cost, bread_cost) => {
    let apple_cost_total = apple_cost * 1 * apple;
    let bread_cost_total = bread_cost * bread;
    let bool = money >= (apple_cost_total + bread_cost_total);
    return (bool) ? 'Вам хватает денег на покупки' : 'Вам не хватает денег'
};
console.log(haveEnough(money, apple, bread, apple_cost, bread_cost));