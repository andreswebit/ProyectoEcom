const express = require("express");
const {
  getUsers,
  getUser,
  addUser,
  editUser,
  removeUser,
} = require("../handlers/usersHandlers");
const verifyToken = require("../middleware/authMiddleware");
const authorizeAdmin = require("../middleware/authorizeAdmin");

const router = express.Router();

// Obtener todos los usuarios
router.get("/", getUsers);

// Obtener un usuario por ID
router.get("/:id", getUser);

// Agregar un usuario (solo admin)
router.post("/", addUser);

// Actualizar un usuario por ID (solo admin)
router.put("/:id", verifyToken, authorizeAdmin, editUser);

// Eliminar un usuario por ID (solo admin)
router.delete("/:id", verifyToken, authorizeAdmin, removeUser);

module.exports = router;
