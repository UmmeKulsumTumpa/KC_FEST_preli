const langchainService = require("../services/langchainService");
const { sendResponse } = require("../helpers/responseHelper");

exports.getChatbotResponse = async (req, res, next) => {
  const { userInput } = req.body;
  try {
    const response = await langchainService.queryChatbot(userInput);
    sendResponse(res, 200, true, "Chatbot response", response);
  } catch (error) {
    next(error);
  }
};
