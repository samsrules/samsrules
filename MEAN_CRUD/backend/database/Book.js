let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let bookSchema = new Schema({
		  isbn:String,
		  title:String,
		  author:String,
		  description:String,
		  published_year:String,
		  publisher:String
})
module.exports = mongoose.model('book', bookSchema);
