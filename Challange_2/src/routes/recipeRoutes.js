const express = require("express");
const { addRecipe, getRecipes } = require("../controllers/recipeController");

const router = express.Router();

router.post("/", addRecipe);
router.get("/", getRecipes);

module.exports = router;
