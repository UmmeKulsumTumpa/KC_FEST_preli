// const langchainService = require("../services/langchainService");
// const { sendResponse } = require("../helpers/responseHelper");

// exports.getChatbotResponse = async (req, res, next) => {
//   const { userInput } = req.body;
//   try {
//     const response = await langchainService.queryChatbot(userInput);
//     // res.status(200).json({ "message": "Hello" });
//     sendResponse(res, 200, true, "Chatbot response", response);
//   } catch (error) {
//     next(error);
//   }
// };


// const fs = require("fs");
// const axios = require("axios");
// const Ingredient = require("../models/ingredientModel");

// const OLLAMA_API_URL = "http://localhost:11434/api/chat";

// exports.chatbotInteract = async (req, res) => {
//   const { userInput } = req.body;

//   if (!userInput) {
//     return res.status(400).json({ success: false, message: "User input is required" });
//   }

//   try {
//     // Load available ingredients
//     const ingredients = await Ingredient.find();
//     const ingredientNames = ingredients.map((ing) => ing.name);
//     console.log("Hello");
//     // Read recipes from the text file
//     const recipes = fs.readFileSync("my_fav_recipes.txt", "utf-8");
//     console.log(recipes);

//     // Construct the prompt
//     const prompt = `
//       You are a cooking assistant chatbot powered by Llama 3.2.
//       - User input: ${userInput}
//       - Available ingredients: ${ingredientNames.join(", ")}
//       - Recipe database: ${recipes}
      
//       Based on the available ingredients and user input, suggest a recipe or provide cooking guidance.
//     `;

//     // Send prompt to Ollama API
//     const response = await axios.post(OLLAMA_API_URL, {
//       model: "llama3.2",
//       messages: [{ role: "system", content: prompt }],
//     });

//     // Parse response from Ollama
//     const message = response.data.messages[0].content;

//     res.status(200).json({ success: true, message });
//   } catch (error) {
//     console.error("Error interacting with Ollama:", error.message);
//     res.status(500).json({ success: false, message: "Error processing request" });
//   }
// };


const fs = require("fs");
const axios = require("axios");

const huggingfaceApiKey = process.env.HUGGINGFACE_API_KEY; 
const model = "google/flan-t5-large"; 
// const { pipeline } = require("@huggingface/transformers");
const Ingredient = require("../models/ingredientModel");

// Load the model and tokenizer once when the server starts
// let chatbotPipeline;

// (async () => {
//   try {
//     console.log("Loading Hugging Face model...");
//     chatbotPipeline = await pipeline("text-generation", "gpt2"); // Replace "gpt2" with your desired Hugging Face model
//     console.log("Model loaded successfully.");
//   } catch (error) {
//     console.error("Error loading model:", error.message);
//   }
// })();

exports.chatbotInteract = async (req, res) => {
  const { userInput } = req.body;

  if (!userInput) {
    return res.status(400).json({ success: false, message: "User input is required" });
  }

  try {
    // Load available ingredients
    const ingredients = await Ingredient.find();
    const ingredientNames = ingredients.map((ing) => ing.name);

    // Read recipes from the text file
    const recipes = fs.readFileSync("my_fav_recipes.txt", "utf-8");

    // Construct the prompt
    const prompt = `
      You are a cooking assistant chatbot.
      - User input: ${userInput}
      - Available ingredients: ${ingredientNames.join(", ")}
      - Recipe database: ${recipes}
      
      Based on the available ingredients and user input, suggest a recipe or provide cooking guidance.
    `;

    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${model}`,
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${huggingfaceApiKey}`,
        },
      }
    );

    console.log(response.data);
 
    if (response.data.error) {
      throw new Error(response.data.error);
    }

    const message = response.data[0]?.generated_text || "Sorry, I couldn't process your request.";

    res.status(200).json({ success: true, message });
  } catch (error) {
    console.error("Error interacting with Hugging Face model:", error.message);
    res.status(500).json({ success: false, message: "Error processing request." });
  }
};
