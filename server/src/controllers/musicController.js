const pool = require("../config/db");

const getMusic = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM songs");
    // return res.json(result.rows);
    return { id: 1, title: "Cover: Dove Cameron: Boyfriend", url: "" };
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tours" });
  }
};

module.exports = { getMusic };
