// const express = require("express");
// const { getChatbotResponse } = require("../controllers/chatbotController");

// const router = express.Router();

// router.post("/", getChatbotResponse);

// module.exports = router;


const express = require("express");
const { chatbotInteract } = require("../controllers/chatbotController");

const router = express.Router();

router.post("/", chatbotInteract);

module.exports = router;
