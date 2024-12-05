const express = require("express");

const {
  getProducts,
  addProduct,
  removeProduct,
  editProduct,
  getProduct,
} = require("../handlers/productsHandlers");
//const { getProductById } = require('../controllers/productControllers');
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);

// Ruta para manejar solicitudes POST a "/products"
router.post("/", addProduct);

router.put("/:id", editProduct);

//borrar

router.delete("/:id", removeProduct);

module.exports = router;
