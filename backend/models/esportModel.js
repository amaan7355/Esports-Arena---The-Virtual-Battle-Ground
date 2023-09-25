const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name : String,
    category : String,
    teamsize : Number,
    venue : String,
    description : String,
    schedule : String,
    createdAt: Date
});

module.exports =  model( 'esports', mySchema );