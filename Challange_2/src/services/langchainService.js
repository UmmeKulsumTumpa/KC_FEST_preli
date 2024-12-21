const axios = require("axios");

const huggingfaceApiKey = process.env.HUGGINGFACE_API_KEY; 
const model = "google/flan-t5-large"; 
// const model = "rautaditya/llama-3.2-1b-4bit-gptq"; 

exports.queryChatbot = async (userInput) => {
 try {
   const prompt = `Given the user's query: "${userInput}", suggest a recipe based on common ingredients.`;

   const response = await axios.post(
     `https://api-inference.huggingface.co/models/${model}`,
     { inputs: prompt },
     {
       headers: {
         Authorization: `Bearer ${huggingfaceApiKey}`,
       },
     }
   );

   if (response.data.error) {
     throw new Error(response.data.error);
   }

   return response.data; 
 } catch (error) {
   console.error("Error querying Hugging Face API:", error.message);
   throw error;
 }
};
