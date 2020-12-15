const router = require("express").Router();
const bookRoutes = require("./games");

// Games routes
router.use("/games", gameRoutes);

module.exports = router;
