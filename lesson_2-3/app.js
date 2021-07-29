// const { EventEmitter } = require('events');
// const fs = require('fs');
// const { join } = require('path');
//
// const ee = new EventEmitter; // можна обробляти події
//
// ee.on('hello',() => {
//     console.log('hello')
// })
//
// ee.once( 'test', () => {  // виконає подію тільки один раз
//     console.log('test')
// } )
//
// ee.emit('hello')
// ee.emit('hello')
// ee.emit('test')
// ee.emit('test')
//
// зчитування файлів робиться через стріми ( ділимо файл на чанки (маленьки частинки по 2кбайти) )
// під капотом stream це той самий eventEmitter
//
// let writeStream = fs.createWriteStream(join(__dirname,"data_3.txt"));
//
// for (let i = 0; i < 100; i++) {
//     writeStream.write('Hello World');
// }
//
// let readStream = fs.createReadStream(join(__dirname,'data.txt'));
//
// readStream.on('data', chunk => {
//     console.log(chunk);
//     console.log('________________________')
// })
//
// readStream.on('end', () => {
//     console.log('end');
// })
//
// колхозний метод як написати дупекс (write і read stream)
// readStream.on('data', chunk => {
//     writeStream.write(chunk.toString())
// })
//
// нормальний метод
// readStream.pipe(writeStream)
//
// http methods
// get - викор для того щоб взяти щось із сервака
// post - викор для того щоб щось створити, передати
// put - викор для того щоб замінити інформацію про якийсь запис повністю ( для оновлення викор)

const express = require('express')
const expressBars = require('express-handlebars');
const { join } = require('path');
// const { getUsers, createUser } = require('./service/user.service');
// const userRouter = require('./routes/userRouter/user.router'); // підключаю user роутер
// const productRouter = require('./routes/productRouter/product.router') // підключаю product роутер
// const userPath = join(__dirname,'users.txt')
const { userRouter, productRouter } = require('./routes')

const app = express();


app.use(express.static(join(__dirname, 'views'))) // пишуться налаштування
app.use(express.json())
app.use(express.urlencoded())

app.engine('.hbs', expressBars({
    defaultLayout: false,
    extname: '.hbs'
})); // встановлюєм двіжок

app.set('view engine', '.hbs'); // встановили двіжок для відмалювання html
app.set('views', join(__dirname, 'views'));

// app.get('/', (req, res) => {
//     // req - інформація що до нас прийшла
//     // res - це то що ми віддаємо
//     // res.end('Node')
//
//     res.render('main', { name: 'Ura', showed: true })
// })
//
// app.get('/users', async (req, res) => {
//     // res.write('Hello \n')
//     // res.write('Hello World')
//     // res.end();
//     const users = await getUsers();
//
//     res.render('users', { users });
// })
//
// app.get('/register',((req, res) => {
//     res.render('register')
// }))
//
// app.get('/login', ((req, res) => {
//     res.render('login');
// }))
//
// app.post('/auth', (req, res) => {
//     const { email, password } = req.body;
//     const user = users.find( user => user.email === email );
//
//     if (!user) {
//         return res.render('error', { message: "User not found" })
//     }
//
//     if ( user.password !== password ) {
//         return res.render('error', { message: "User not found" })
//     }
//
//     res.json({email, name: user.name})
//
//     res.end()
// })
//
// app.post('/reg', async (req, res) => {
//     // console.log(req.body);
//     // const { email } = req.body;
//     // const userIndex = users.findIndex( user => user.email === email )
//     //
//     // if (userIndex > -1) {
//     //     return res.render('error', { message: 'Email already present' })
//     // }
//     await createUser(req.body)
//     // const user = JSON.stringify(req.body);
//
//     res.redirect('/users')
// })

// app.get('/user', (req, res) => {
//     res.json('Get User');
// })
// app.post('/user', (req, res) => {
//     console.log(req.body);
//     res.json('Post User');
// })
// app.put('/user', (req, res) => {
//     res.json('Put User');
// })
// app.delete('/user/:userId', (req, res) => {
//     const params = req.params;
//     const query = req.query;
//     res.json({params, query});
// })

app.get('/register',((req, res) => {
    res.render('register')
}))

app.get('/login', ((req, res) => {
    res.render('login');
}))

// app.all() // відпрацьовує на юрл всіх видів
app.use('/users', userRouter); // userRouter приймає '/user' і дальше прописуючи шлях в user.router ми маємо розуміти що ми на юрл '/user'
app.use('/products', productRouter);


app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Listen 3000 ...');
    }
})

// middleware - проміжний обробник
