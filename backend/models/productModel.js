const { model, Schema } = require('../connection');

const mySchema = new Schema({
    title : String,
    category : String,
    image : String,
    price : Number,
    review : Number,
    rating : Number
});

module.exports =  model( 'product', mySchema );