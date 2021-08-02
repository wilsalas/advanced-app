const router = require("express").Router();
const controller = require("./controller");
const { auth } = require("../../middlewares/authorization");
const {
  USER_TYPE: { ADMIN, PERSON, TESTER },
} = require("../../config/constants");
const { properties } = require("./validator");

router.post("/login", [properties.login], controller.loginUser);
router.post("/create", controller.createUser);
router.get("/logout", [auth(ADMIN, PERSON, TESTER)], controller.logoutUser);
router.get("/data", [auth(ADMIN, PERSON)], (req, res) => {
  res.send(req.user);
});

module.exports = router;
