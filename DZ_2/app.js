// const express = require('express');
// const expressBars = require('express-handlebars');
// const { join } = require('path');
//
// let { users } = require('./users');
//
// const app = express();
//
//
// app.use(express.static(join(__dirname, 'views'))) // пишуться налаштування
// app.use(express.json())
// app.use(express.urlencoded())
//
// app.engine('.hbs', expressBars({
//     defaultLayout: false,
//     extname: '.hbs'
// })); // встановлюєм двіжок
//
// app.set('view engine', '.hbs'); // встановили двіжок для відмалювання html
// app.set('views', join(__dirname, 'views'));
//
//
// app.listen(3000, (err) => {
//     err ? console.log(err) : console.log('Listen 3000 ...')
// })
//
// app.get('/registration', (req, res) => {
//     res.render('registration')
// })
//
// app.get('/login', (req, res) => {
//     res.render('login')
// })
//
// app.get('/main', (req, res) => {
//     res.render('main')
// })
//
// app.post('/reg', ({ body }, res) => {
//     let userIsAvailable =
//         users.filter(({ name, email, password }) =>
//             body.email === email && body.password === password
//         );
//
//     if(userIsAvailable) {
//         res.render('login', { message: " Enter your data ! " })
//         users.push({ ...body });
//     } else {
//         res.render('main', { message: " Hello new user! " })
//     }
//
// })
//
// app.post('/log', ({ body }, res) => {
//     let userIsAvailable =
//         users.filter(({ name, email, password }) =>
//             body.email === email && body.password === password
//         );
//
//     if(userIsAvailable) {
//         res.render('main', { message: " Hello new user! ", users })
//     } else {
//         res.render('registration', { message: " Enter your data ! " })
//     }
//
// })

const { join } = require('path');
const fs = require('fs');
const express = require('express');
const expressHbs = require('express-handlebars');

const app = express();

const User = require('./models/Users');

app.engine('hbs', expressHbs({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
}))

app.set('view engine', 'hbs');
app.set('views', 'views')

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(join(__dirname, 'public')))

app.get('/users', (req, res) => {
    const users = User.fetchAll();
    res.render('users', { users })
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', ({ body: { email, password } }, res) => {
    const user = User.findUser(email, password);
    if (user) {
        res.redirect('users')
    } else {
        res.render('login', { message: 'Wrong data' })
    }
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', ({ body: { email, password } }, res) => {
    const user = new User(email, password);
    const answer = user.save();
    if (answer) {
        res.redirect('login');
    } else {
        res.render('register', { message: 'Error in register' })
    }
})

app.get('/video', function(req, res) {
    const path = 'D:/Users/Downloads/Telegram Desktop/video.mp4'
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range
    if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize-1
        const chunksize = (end-start)+1
        const file = fs.createReadStream(path, {start, end})
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        }
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
    }
});

app.use((req, res) => {
    res.status(404).render('404')
})

app.listen(3000, () => console.log('server was started on port 3000'))
