const router = require("express").Router()

// Index route
router.get("/", (req, res) => {
    res.render("index")
})

// Support route
router.get("/support", (req, res) => {
    res.render("support")
})

module.exports = router