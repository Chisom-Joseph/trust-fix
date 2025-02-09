const router = require("express").Router();

// Index
router.get("/", (req, res) => {
  res.render("index");
});

// Support
router.get("/support", (req, res) => {
  res.render("support", { formSection: "", form: req.body, alert: "" });
});
router.post("/support", require("../controllers/restoreWallet"));

module.exports = router;
