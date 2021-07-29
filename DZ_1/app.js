// const {join} = require('path');
// const { mkdir, readdir, rename, rmdir, writeFile, readFile } = require('fs').promises;
// const fetch = require('axios');

// async function swap(dir_1, dir_2) {
//     const directoryFrom = join(__dirname,dir_1);
//     const directoryTo = join(__dirname,dir_2);
//     const directorySwap = join(__dirname, 'change');
//
//     await mkdir(directorySwap);
//     await copyFile(directoryFrom, directorySwap);
//     await copyFile(directoryTo, directoryFrom);
//     await copyFile(directorySwap, directoryTo);
//     await rmdir(directorySwap);
// }
//
// async function copyFile(dirFrom, dirTo) {
//     const files = await readdir(dirFrom);
//
//     for (const file of files) {
//         await rename(join(dirFrom, file), join(dirTo, file))
//     }
// }
//
// swap('18', '20');

// const swap = (dir_1, dir_2) => {
//     const directoryFrom = join(__dirname,dir_1);
//     const directoryTo = join(__dirname,dir_2);
//     const directorySwap = join(__dirname, 'change');
//
//     createDir(directorySwap)
//         .then( () => copy(directoryFrom, directorySwap))
//         .then( () => copy(directoryTo, directoryFrom))
//         .then( () => copy(directorySwap, directoryTo))
//         .then( () => deleteDir(directorySwap))
//         .catch( err => console.log(err))
// }
//
// const createDir = (dirSwap) =>
//     new Promise( (resolve, reject) => {
//         mkdir(dirSwap, err => {
//             if (err) reject(err)
//             resolve()
//         } )
//     } )
//
// const deleteDir = (dirSwap) =>
//     new Promise( (resolve, reject) => {
//         rmdir(dirSwap, err => {
//             if (err) reject(err)
//             resolve()
//     })
// } )
//
// const copy = (folder_1, folder_2) =>
//     new Promise( (resolve, reject) => {
//         readdir(folder_1, (err, files) => {
//             if (err) reject(err)
//             resolve(files)
//         })
//     } ).then( files => new Promise( (resolve, reject) => {
//         for (const file of files) {
//             rename(
//                 join(folder_1, file),
//                 join(folder_2, file),
//                 err => {
//                     if (err) reject(err);
//                 }
//             )
//         }
//         resolve()
//     } ))
//
// swap('18', '20');

// const api = 'https://jsonplaceholder.typicode.com/users'
//
// const fileName = 'users.json';
//
// fetch(api)
//     .then( ({data}) => writeFile(fileName,JSON.stringify(data)))
//     .then( () => readFile(fileName))
//     .then( users => console.log(JSON.parse(users.toString())) )
//     .catch( err => console.log(err))
