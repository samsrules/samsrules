let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let listSchema = new Schema({
    _id    : String,
	name: String,
	age   : String
})

module.exports = mongoose.model('admin', listSchema);