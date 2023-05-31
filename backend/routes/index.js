const router = require("express").Router();
const auth = require("../middlewares/auth");
const { createUser, login } = require("../controllers/users");
const { createUserValidation, loginValidation } = require("../validation/userValidation");
const NotFoundError = require("../errors/not-found-error");

router.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("Сервер сейчас упадёт");
  }, 0);
});

router.post("/signin", loginValidation, login);
router.post("/signup", createUserValidation, createUser);

router.use(auth);

router.use("/users", require("./users"));
router.use("/cards", require("./cards"));

router.use(() => {
  throw new NotFoundError("Запрашиваемая информация не найдена");
});

module.exports = router;
