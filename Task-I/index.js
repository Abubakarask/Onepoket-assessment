const express = require("express");
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 3000;

const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// Define a route that responds with "Hello, World!"
app.get("/", (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Hello, World!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
