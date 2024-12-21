const langchainService = require("../services/langchainService");

exports.getChatbotResponse = async (req, res) => {
  const { userInput } = req.body;
  try {
    const response = await langchainService.queryChatbot(userInput);
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
