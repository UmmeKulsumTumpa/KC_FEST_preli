// const express = require("express");
// const { addRecipe, getRecipes } = require("../controllers/recipeController");

// const router = express.Router();

// router.post("/", addRecipe);
// router.get("/", getRecipes);

// module.exports = router;


const express = require("express");
const { saveRecipeText } = require("../controllers/recipeController");
// const { saveRecipeText } = require("../controllers/recipeController");

const router = express.Router();

router.post("/", saveRecipeText); // Save new favorite recipe text

module.exports = router;
