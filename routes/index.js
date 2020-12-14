const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
<<<<<<< HEAD
router.use(function (req, res) {
  console.log('req.user');
  console.log(req.user);
  // res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
=======
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });
>>>>>>> 8c19cd5d3049ea2468db710823865a1bf4b09b5d

module.exports = router;
