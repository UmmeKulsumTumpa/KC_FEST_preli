const express = require("express");
const { addIngredient, getIngredients } = require("../controllers/ingredientController");

const router = express.Router();

router.post("/", addIngredient);
router.get("/", getIngredients);

module.exports = router;
