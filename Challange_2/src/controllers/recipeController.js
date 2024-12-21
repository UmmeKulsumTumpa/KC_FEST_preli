
const fs = require("fs");

// Parse recipe text and store in a file
exports.saveRecipeText = (req, res) => {
  const {recipeText} = req.body;

  console.log(recipeText);

  if (!recipeText) {
    return res.status(400).json({ success: false, message: "Recipe text is required" });
  }

  try {
    fs.appendFileSync("my_fav_recipes.txt", `${recipeText}\n\n`);
    res.status(201).json({ success: true, message: "Recipe saved successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};