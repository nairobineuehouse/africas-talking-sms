const express = require("express");
const cors = require("cors");
const smsservice = require("./smsservice");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3004;


// Route for sending SMS
app.post("/send", async (req, res) => {
  const { to, message } = req.body;

  try {
    const result = await smsservice.sendSMS(to, message); 

    return res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.error("Error:", error.message); 

    if (error.message.includes("required")) {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: "Unknown error occurred" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
