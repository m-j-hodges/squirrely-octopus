const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const inquirySchema = new Schema({
  message: {
    type: String,
    minlength: 1,
    maxlength: 280,
  },
  email: { type: String },
  name: { type: String },
  recordDate: {type: Date}
});

const Inquiry = mongoose.model("Inquiry", inquirySchema);

module.exports = Inquiry;
