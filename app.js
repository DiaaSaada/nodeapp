const _ = require('lodash');
const express = require('express');
const path = require('path');
const Joi = require('joi');
const bodyParser = require('body-parser');
const { method } = require('lodash');

const app = express();
app.use('/public', express.static(path.join(__dirname, 'static')));
app.use((req, res, next) => { // custom middleware
    //console.log(req.url, req, method)
    req.username = 'DIAA22' // pass value via middleware
    next();
})
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    // static file =>
    res.sendFile(path.join(__dirname, 'static/index.html'));


});

app.get('/:userQuery', (req, res) => {

    console.log(req.params.userQuery)
        // render dynamic file with EJS
    res.render('index', {
            data: {
                userQuery: req.params.userQuery,
                searchResults: ['book1', 'book2', 'book3', 'book4'],
                loggedIn: true,
                username: req.username
            }
        }) // render index.ejs
});


app.get('/exmaple', (req, res) => {
    res.send(`example express ${req.query}`);
})

app.get('/exmaple/:name/:age', (req, res) => {
    res.send(`example express ${req.params.name}`);
})

app.post('/', (req, res) => {
    console.log(req.body)
    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().trim().min(5).max(10).required(),
    })


    const validation = schema.validate(req.body);
    res.send(validation);
    console.log(va)
    res.json({ success: true });
})
app.listen(3000);