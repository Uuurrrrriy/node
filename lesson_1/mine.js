// Нода підтримує модульну систему

function calculate(a,b) {
    return a + b;
}

let z = 10;

// Якщо треба імпортити  щось більше одного ( через об'єкт )
module.exports = {
    calculate,
    z
};

// Якщо треба імпортити  щось одне то
// module.exports = () => {
//     return 10 + 20
// }
