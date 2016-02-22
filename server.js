"use strict";

const bodyParser = require('body-parser');
const app = require("express")();
const methodOverride = require("method-override");
const mongoose = require("mongoose");

const route = require('./routes/routes');

const port = process.env.PORT || 3000;

app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride('_method'));

app.get('/', (request, response) => {
    response.send("Server is running");
});

//routes
app.use(route);


mongoose.connect('mongodb://localhost:27017/investmentapp', (err) => {
    if (err) throw err;

    app.listen(port, () => {
        console.log(`App is running on port ${port}`);
    });
});