const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("admin/home", {title: "admin homepage"});
});

module.exports = router;