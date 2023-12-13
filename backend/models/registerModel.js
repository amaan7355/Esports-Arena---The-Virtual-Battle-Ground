const { model, Schema } = require('../connection');

const mySchema = new Schema({
    teamname : String,
    email : String,
    teamleadername : String,
    teamleadercontact : Number
});

module.exports =  model( 'register', mySchema );