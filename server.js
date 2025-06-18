const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

//
const users = [
    {username: 'admin', password: 'password'},
    {username: 'lucas', password: 'password'}
];

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/logon.html');
});