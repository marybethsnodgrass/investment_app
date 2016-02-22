'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.model('Portfolio',
    mongoose.Schema({
    symbol: String,
    company: String,
    price:number,
    quantity: number
}));