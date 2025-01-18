
const pool = require("../config/db");

const getTours = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tours");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tours" });
  }
};

module.exports = { getTours };
    