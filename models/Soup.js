const mongoose = require("mongoose");
const { Schema } = mongoose;

const soupSchema = new Schema({
  name: String,
  type: String,
  isDaily: Boolean,
  isOut: Boolean,
  isLow: Boolean,
  ingredients: [String],
  description: String
});

mongoose.model("soups", soupSchema);
