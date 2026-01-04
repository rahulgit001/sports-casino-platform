require("dotenv").config();
const pool = require("../config/db");

const games = [
  {
    sport: "Cricket",
    league: "IPL",
    teams: "CSK vs MI",
    start_time: new Date(),
  },
  {
    sport: "Football",
    league: "Premier League",
    teams: "Arsenal vs Chelsea",
    start_time: new Date(),
  },
  {
    sport: "Basketball",
    league: "NBA",
    teams: "Lakers vs Warriors",
    start_time: new Date(),
  },
];

(async () => {
  try {
    for (const game of games) {
      await pool.query(
        `INSERT INTO games (sport, league, teams, start_time)
         VALUES ($1, $2, $3, $4)`,
        [game.sport, game.league, game.teams, game.start_time]
      );
    }

    console.log("✅ Games inserted successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  }
})();
