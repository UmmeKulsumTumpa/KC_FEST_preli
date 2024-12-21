const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  ingredients: [
    {
      name: { type: String, required: true },
      quantity: { type: Number },
    },
  ],
  instructions: { type: String, required: true },
  tags: [String], // Array of tags
});

module.exports = mongoose.model("Recipe", recipeSchema);
