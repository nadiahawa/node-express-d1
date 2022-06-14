
const express = require('express');

const app = express();
const port = 3000;



app.listen(port, ()=>{
    console.log(`Hello!. This is port ${port}`);
});

app.set('view engine', 'ejs');

app.use((req, res, next)=> {
    console.log(`Request recieved at: ${Date()}`);
    next();
});

const characters = {
    main: 'Master Chief',
    ai: 'Cortana',
    covenant: 'Arbiter'
}

app.get('/', (req, res)=>{
    //res.send('Main Page');
    res.render('pages/index', characters);
});


app.get('/home', (req, res) =>{
    res.send('This is the homepage');
});



app.use('/:username/profile/:name', (req, res, next) =>{
    console.log(req.params);
    next();
});


app.get('/:username/profile/:name', (req, res) =>{
    console.log(req.params);
    res.render('pages/users', req.params)
});
