const usersRouter = require("express").Router();
const { getAllUsers } = require("../control/users-controller");

usersRouter.get("/users", () => {
  console.log("router working");
  getAllUsers();
});
// router.post("/users", userController);
// router.get("/users/:id", userController);
// router.delete("/users/:id", userController);

module.exports = usersRouter;
