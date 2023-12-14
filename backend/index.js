// import express
const express = require('express');

const userRouter = require('./Routers/userRouter');
const esportRouter = require('./Routers/esportRouter');
const registerRouter = require('./Routers/registerRouter');
const utilRouter = require('./Routers/utils');
const cors = require('cors');

// initialize express
const app = express();
const port = 5000;

// middlewares
app.use(express.json());
app.use(cors({
    origin: [ 'http://localhost:3000', 'https://esportarena.onrender.com/' ]
}));

app.use('/user', userRouter);
app.use('/esport', esportRouter);
app.use('/register', registerRouter);
app.use('/utils', utilRouter);

app.use(express.static('./uploads'));

// Routes

app.get('/', (req, res) => {
    res.send('Response from Express')
});

app.get('/home', (req, res) => {
    res.send("Response from Home");
});

app.get('/add', (req, res) => {
    res.send("Response from Add");
});

app.get('/getall', (req, res) => {
    res.send("Response from GetAll");
});


// home
// add
// getall

// starting the server 
app.listen( port, () => { console.log('express server started') } );

