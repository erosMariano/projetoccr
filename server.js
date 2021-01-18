var express = require('express');
const app = express()
const router = require("./routes")
const axios = require("axios").default;
const path = require("path");
const bodyParser = require("body-parser");


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client

app.use(express.static(path.join(__dirname, 'public')));

app.use(router)


const url_base = "http://localhost:5000/"

app.listen(8080,function(){
    console.log("Servidor ativo no porto 8080");
});