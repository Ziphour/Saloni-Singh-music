const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { musicRouter } = require("./routes/musicRoutes");
const { contactRoutes } = require("./routes/contactRoutes");

const app = express();
app.use(cors());

// API routes
app.use("/api/music", musicRouter);
// app.use("/api/contact", contactRoutes);

// Server listening
const PORT = process.env.PORT || 50;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
