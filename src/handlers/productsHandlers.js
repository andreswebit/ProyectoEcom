// Función para obtener productos
// const getProducts = (req, res) => {
//   res.send('Aquí están los productos');
// };

// module.exports = { getProducts };

// const {
//   getAllProducts,
//   getProductById,
//   createProduct,
//   updateProduct,
//   deleteProduct,
// } = require("../controllers/productControllers");

// const getProducts = (req, res) => {
//   const products = getAllProducts();
//   res.json(products);
// };

// const getProduct = (req, res) => {
//   const product = getProductById(parseInt(req.params.id));
//   if (product) {
//     res.json(product);
//   } else {
//     res.status(404).json({ message: "Producto no encontrado" });
//   }
// };

// const addProduct = (req, res) => {
//   const newProduct = req.body;
//   const product = createProduct(newProduct);
//   res.status(201).json(product);
// };

// const editProduct = (req, res) => {
//   const updatedProduct = updateProduct(parseInt(req.params.id), req.body);
//   if (updatedProduct) {
//     res.json(updatedProduct);
//   } else {
//     res.status(404).json({ message: "Producto no encontrado" });
//   }
// };

// // const removeProduct = (req, res) => {
// //   const deletedProduct = deleteProduct(parseInt(req.params.id));
// //   if (deletedProduct) {
// //     res.json({ message: 'Producto eliminado' });
// //   } else {
// //     res.status(404).json({ message: 'Producto no encontrado' });
// //   }
// // };

// const removeProduct = (req, res) => {
//   const deletedProduct = deleteProduct(parseInt(req.params.id)); // Convierte el ID a número
//   if (deletedProduct) {
//     res.json({ message: "Producto eliminado" });
//   } else {
//     res.status(404).json({ message: "Producto no encontrado" });
//   }
// };

// module.exports = {
//   getProducts,
//   getProduct,
//   addProduct,
//   editProduct,
//   removeProduct,
// };
// /------------------------------------------------------------- CONSIGNA 5-------------------------------------------

const Joi = require("joi");
const {
  getAllProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController,
} = require("../controllers/productControllers");

// Esquema de validación para los productos
const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.number().min(0).required(),
});

// Handler para obtener todos los productos
const getProducts = (req, res) => {
  try {
    const products = getAllProductsController(); // Llamada al controlador
    res.json(products); // Respuesta con los productos
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Ocurrió un error al obtener los productos.");
  }
};

// Handler para obtener un producto por ID
const getProduct = (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = getProductByIdController(productId); // Llamada al controlador

    if (product) {
      res.json(product); // Respuesta con el producto
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Ocurrió un error al obtener el producto.");
  }
};

// Handler para agregar un nuevo producto
const addProduct = (req, res) => {
  try {
    // Validar los datos recibidos en la solicitud
    const { error } = productSchema.validate(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message); // Error de validación
    }

    const { name, price } = req.body;
    const newProduct = createProductController({ name, price }); // Llamada al controlador

    console.log("Producto creado con éxito:", newProduct); // Mensaje en consola
    res.status(201).json({ message: "Producto creado con éxito", product: newProduct }); // Respuesta
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Ocurrió un error al agregar el producto.");
  }
};


// Handler para editar un producto existente
const editProduct = (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const updatedProduct = updateProductController(productId, req.body); // Llamada al controlador

    if (updatedProduct) {
      res.json(updatedProduct); // Respuesta con el producto actualizado
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Ocurrió un error al editar el producto.");
  }
};

// Handler para eliminar un producto
const removeProduct = (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const deletedProduct = deleteProductController(productId); // Llamada al controlador

    if (deletedProduct) {
      res.json({ message: "Producto eliminado" }); // Respuesta confirmando la eliminación
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Ocurrió un error al eliminar el producto.");
  }
};

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  editProduct,
  removeProduct,
};
