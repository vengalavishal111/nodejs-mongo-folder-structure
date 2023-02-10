const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sample_schema = new Schema({
  sample_id: { type: Number },
  sample_1: { type: String},
  sample_2: { type: String },
 
});

const sample = mongoose.model("sample", sample_schema);

module.exports = sample;
