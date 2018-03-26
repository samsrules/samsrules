let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let adminSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    pass: String,
    time: {
        type: Date,
        default: Date.now
          }
})
module.exports = mongoose.model('admin', adminSchema);