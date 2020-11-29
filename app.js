const _ = require('lodash');
const express = require('express');
const path = require('path');
const Joi = require('joi');
const bodyParser = require('body-parser');

const app = express();
app.use('/public', express.static(path.join(__dirname, 'static')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static/index.html'));
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