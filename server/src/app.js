
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const tourRoutes = require("./routes/tourRoutes");
const musicRoutes = require("./routes/musicRoutes");
const merchRoutes = require("./routes/merchRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// API routes
app.use("/api/tours", tourRoutes);
app.use("/api/music", musicRoutes);
app.use("/api/merch", merchRoutes);
app.use("/api/contact", contactRoutes);

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
    