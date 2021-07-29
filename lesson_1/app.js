// const { calculate } = require('./mine');
// // const calculate = require('./mine');
//
// let number = calculate(10, 4);
//
// console.log(number);
// // console.log(z);

// вбудовані з коробки модулі ноди
// ХОРОШИЙ СИНТАКСИС БІБЛІОТЕКИ ПИСАТИ ЗВЕРХУ
const path = require('path'); // модуль для роботи зі шляхами до папок
const fs = require('fs'); //модуль для роботи з файловою системою ( може створювати, стирати, читати ...)
const os = require('os'); // модуль для роботи з операційною системою

// let s = path.resolve(`${process.cwd()}//../../React_js`)  //бере наш будьякий шлях ( наприклад якийсь поломаний) і фіксить
// console.log(s);
//
// let s1 = path.join(__dirname, 'files', 'data.txt') //приєднує до себе шляхи
// console.log(s1);
//
// console.log('----------------------------')
// console.log(process.cwd()); // вказує директорію до головного файлу
// console.log(__dirname); // вказує директорію де я знаходжуся
// console.log(__filename); // вказує файл де я знаходжуся
// console.log('----------------------------')

// fs.writeFile(path.join(__dirname,'files','data.txt'),
//     'Hello World \n',
//     err => {
//         console.log(err);
//     }
// )

// fs.appendFile(path.join(__dirname,'files','data.txt'),
//     'Hello World \n',
//     { flag: 'a' }, // flag: 'a' - добавляє, flag: 'w' - перезаписує
//     err => {
//         console.log(err);
//     }
// )

// fs.readFile(path.join(__dirname,'files','data.txt'),(err, data) => {
//     console.log(data);
// })

// fs.stat(path.join(__dirname,'files','data.txt'),(err, stats) => {
//     console.log(stats);
// })

// fs.unlink()  // стирає файли
