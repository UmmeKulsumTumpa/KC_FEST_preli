require("dotenv").config();
const express = require("express");
const connectDB = require("./database");
const ingredientRoutes = require("./routes/ingredientRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const chatbotRoutes = require("./routes/chatbotRoutes");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();
app.use(express.json());

connectDB();

app.use("/ingredients", ingredientRoutes);
app.use("/recipes", recipeRoutes);
app.use("/chatbot", chatbotRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
