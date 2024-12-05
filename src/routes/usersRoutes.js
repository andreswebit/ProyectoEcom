const express = require("express");
const {
  getUsers,
  getUser,
  addUser,
  editUser,
  removeUser,
} = require("../handlers/usersHandlers");
// Ruta para manejar solicitudes POST a "/users
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", addUser);
router.put("/:id", editUser);
router.delete("/:id", removeUser);

module.exports = router;
