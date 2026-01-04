const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const ctrl = require("../controllers/games.controller");

router.get("/", auth, ctrl.getGames);

module.exports = router;
