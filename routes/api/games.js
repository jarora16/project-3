const router = require("express").Router();
const gamesController = require("../../controllers/gamesControllers");

// Matches with "/api/games"
router.route("/")
  .post(gamesController.create);

module.exports = router;
