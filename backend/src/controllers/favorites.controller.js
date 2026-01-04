const pool = require("../config/db");

exports.addFavorite = async (req, res) => {
  const userId = req.user.id;
  const gameId = req.params.gameId;

  try {
    await pool.query(
      "INSERT INTO favorites(user_id, game_id) VALUES($1,$2)",
      [userId, gameId]
    );
    res.status(201).json({ message: "Added to favorites" });
  } catch {
    res.status(400).json({ message: "Already favorited" });
  }
};

exports.removeFavorite = async (req, res) => {
  await pool.query(
    "DELETE FROM favorites WHERE user_id=$1 AND game_id=$2",
    [req.user.id, req.params.gameId]
  );
  res.json({ message: "Removed" });
};

exports.getFavorites = async (req, res) => {
  const result = await pool.query(
    `SELECT g.* FROM games g
     JOIN favorites f ON g.id=f.game_id
     WHERE f.user_id=$1`,
    [req.user.id]
  );
  res.json(result.rows);
};
