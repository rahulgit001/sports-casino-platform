const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const ctrl = require("../controllers/favorites.controller");

router.post("/:gameId", auth, ctrl.addFavorite);
router.delete("/:gameId", auth, ctrl.removeFavorite);
router.get("/", auth, ctrl.getFavorites);

module.exports = router;
