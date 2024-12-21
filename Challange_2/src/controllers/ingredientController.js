const Ingredient = require("../models/ingredientModel");

exports.addIngredient = async (req, res) => {
  const { name, quantity, unit } = req.body;
  try {
    const ingredient = await Ingredient.findOneAndUpdate(
      { name },
      { $set: { name, unit }, $inc: { quantity } },
      { upsert: true, new: true }
    );
    res.status(201).json({ message: "Ingredient added/updated", ingredient });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.status(200).json(ingredients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
