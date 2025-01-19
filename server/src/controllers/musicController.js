const pool = require("../config/db");

const getMusic = async (req, res) => {
  try {
    const result = await pool.query("SELECT 3 FROM songs");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tours" });
  }
};

module.exports = { getMusic };
