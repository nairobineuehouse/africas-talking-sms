require("dotenv").config(); // Load environment variables
const AfricansTalking = require("africastalking");

// Initialize Africa's Talking
const africastalking = AfricansTalking({
  apiKey: process.env.AT_API_KEY,
  username: process.env.AT_USERNAME,
});

// Function to send SMS
const sendSMS = async (to, message) => {
  try {
    if (!to || !message) {
      throw new Error("Both 'to' and 'message' fields are required");
    }

    const result = await africastalking.SMS.send({ to, message });

    console.log("SMS sent successfully:", result); 
    return result;
  } catch (error) {
    throw new Error(`Failed to send SMS: ${error.message}`);
  }
};

module.exports = { sendSMS };
