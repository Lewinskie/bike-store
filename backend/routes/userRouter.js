const router = require("express").Router();
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/token", userController.accessToken);
router.get("/logout", userController.logout);
router.get("/info", auth, authAdmin, userController.getUser);
router.get("/all_users", auth, authAdmin, userController.getAllUsers);

module.exports = router;
