const Ingredient = require("../models/ingredientModel");
const { sendResponse } = require("../helpers/responseHelper");

exports.addIngredient = async (req, res, next) => {
  const { name, quantity, unit } = req.body;
  try {
    const ingredient = await Ingredient.findOneAndUpdate(
      { name },
      { $set: { unit }, $inc: { quantity } },
      { upsert: true, new: true }
    );
    sendResponse(res, 201, true, "Ingredient added/updated", ingredient);
  } catch (error) {
    next(error);
  }
};

exports.getIngredients = async (req, res, next) => {
  try {
    const ingredients = await Ingredient.find();
    sendResponse(res, 200, true, "Ingredients fetched successfully", ingredients);
  } catch (error) {
    next(error);
  }
};
