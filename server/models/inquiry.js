const {Schema, model} = require('mongoose')
const mongoose = require('mongoose')

const inquirySchema = new Schema({
  message: {
    type: String,
    minlength: 1,
    maxlength: 280,
  },
  email: { type: String},
  name: { type: String },
  }
)

const Inquiry = mongoose.model('inquiry', inquirySchema);


module.exports = Inquiry;