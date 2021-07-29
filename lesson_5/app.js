const express = require('express')
const expressBars = require('express-handlebars');
const { join } = require('path');

const { userRouter, productRouter } = require('./routes')

const db = require('./dataBase').getInstance();
db.setModels();

const app = express();


app.use(express.static(join(__dirname, 'views'))) // пишуться налаштування
app.use(express.json())
app.use(express.urlencoded())

app.engine('.hbs', expressBars({
    defaultLayout: false,
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', join(__dirname, 'views'));

app.get('/register',((req, res) => {
    res.render('register')
}))

app.get('/login', ((req, res) => {
    res.render('login');
}))


app.use('/users', userRouter);
app.use('/products', productRouter);


app.use('*',(err, req, res, next) => {
    res
        .status(err.status || 400)
        .json({
            message: err.message,
            code: err.customCode
        })
})


app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Listen 3000 ...');
    }
})

process.on("unhandledRejection", reason => {
    console.log(reason);

    process.exit(0)
})
