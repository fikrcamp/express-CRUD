const express = require("express");
const userController = require("../Controllers/userController");

const router = express.Router();

router.route("/").get(userController.getUsers).post(userController.saveUser);

router
  .route("/:id")
  .get(userController.getOneUser)
  .put(userController.editUser);

module.exports = router;
