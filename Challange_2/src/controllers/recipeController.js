const Recipe = require("../models/recipeModel");

exports.addRecipe = async (req, res) => {
  const { name, ingredients, instructions, tags } = req.body;
  try {
    const recipe = new Recipe({ name, ingredients, instructions, tags });
    await recipe.save();
    res.status(201).json({ message: "Recipe added", recipe });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRecipes = async (req, res) => {
  const { availableIngredients } = req.query; // Array of ingredient names
  try {
    const recipes = await Recipe.find();
    const matchingRecipes = recipes.filter((recipe) => {
      const recipeIngredients = recipe.ingredients.map((ing) => ing.name);
      return recipeIngredients.every((ing) => availableIngredients.includes(ing));
    });
    res.status(200).json(matchingRecipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
