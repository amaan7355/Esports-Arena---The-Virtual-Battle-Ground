const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name : String,
    category : String,
    teamsize : Number,
    prize : Number,
    venue: String,
    logo: String,
    description : String,
    schedule : String,
    createdAt: Date
});

module.exports =  model( 'esports', mySchema );