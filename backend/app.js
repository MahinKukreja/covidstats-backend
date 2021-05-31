// Define required constants
const express = require("express");
const app = express();

// Load environment variables
require("dotenv").config();

const PORT = process.env.PORT;

// Start the application on the defined port
app.listen(PORT, () => {
  console.log(`Server listening on Port: ${PORT}`);
});
