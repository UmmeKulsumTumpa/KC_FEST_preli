const { HuggingFaceHub } = require("langchain/llms/huggingface");

const llm = new HuggingFaceHub({
  repoId: "google/flan-t5-base",
  model_kwargs: { temperature: 0.5 },
});

exports.queryChatbot = async (userInput) => {
  const prompt = `Given the user's query: "${userInput}", suggest a recipe based on common ingredients.`;
  const response = await llm.call(prompt);
  return response;
};
