const Recipe = require("../models/recipeModel");
const { sendResponse } = require("../helpers/responseHelper");

exports.addRecipe = async (req, res, next) => {
  const { name, ingredients, instructions, tags } = req.body;
  try {
    const recipe = new Recipe({ name, ingredients, instructions, tags });
    await recipe.save();
    sendResponse(res, 201, true, "Recipe added successfully", recipe);
  } catch (error) {
    next(error);
  }
};

exports.getRecipes = async (req, res, next) => {
  const { availableIngredients } = req.query; // Array of ingredient names
  try {
    const recipes = await Recipe.find();
    const matchingRecipes = recipes.filter((recipe) =>
      recipe.ingredients.every((ingredient) => availableIngredients.includes(ingredient.name))
    );
    sendResponse(res, 200, true, "Matching recipes fetched successfully", matchingRecipes);
  } catch (error) {
    next(error);
  }
};
