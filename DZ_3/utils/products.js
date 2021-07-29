const { join } = require('path');
const { writeFile, readFile } = require('fs').promises;

const pathToProducts = join(process.cwd(),'data','products.json');

const readProductsFile = async () => {
    const fileData = await readFile(pathToProducts);

    return  JSON.parse(fileData);
}

const writeProductsFile = async (products) => {
    await writeFile(pathToProducts, JSON.stringify(products))
}

module.exports = {
    readProductsFile,
    writeProductsFile
}
