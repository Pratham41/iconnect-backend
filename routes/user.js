const router = require("express").Router();
const {
  loginUser,
  registerUser,
  listUser
} = require("../controller/user");
// MIDDLEWARES
const { protect } = require("../middleware/auth");

router.route("/").get(protect,listUser);
router.route("/login").post(loginUser);
router.route("/register").post(registerUser);


module.exports = router;