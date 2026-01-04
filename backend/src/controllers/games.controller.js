const pool = require("../config/db");

exports.getGames = async (req, res) => {
  const { sport } = req.query;
  const query = sport
    ? pool.query("SELECT * FROM games WHERE sport=$1", [sport])
    : pool.query("SELECT * FROM games");

  const result = await query;
  res.json(result.rows);
};
