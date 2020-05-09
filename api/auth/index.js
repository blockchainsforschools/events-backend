const router = require("express").Router();

router.use("/signup", require("./signup"));
router.use("/login", require("./login"));
router.use("/logout", require("./logout"));
router.use("/oauthlogin", require("./oauthlogin"));

module.exports = router;
