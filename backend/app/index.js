require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation');
const accountRouter = require('./api/account');

const GenerationEngine = require('./models/generation/engine');

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/account', accountRouter);
app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        type: 'error',
        message: err.message
    })
})

const ENV = process.env.NODE_ENV;
const path = require('path');

console.log(process.env.NODE_ENV)

if(ENV === 'production'){
    console.log(ENV)
    app.use(express.static(path.join(__dirname, '../../frontend/build')));
    app.use((req,res)=>{
        res.sendFile(path.join(__dirname,'../../frontend/build/index.html'))
    })
}

engine.start();

module.exports = app;