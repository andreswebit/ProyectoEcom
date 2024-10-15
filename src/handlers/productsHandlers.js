// Función para obtener productos
// const getProducts = (req, res) => {
//   res.send('Aquí están los productos');
// };

// module.exports = { getProducts };


const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productControllers');

const getProducts = (req, res) => {
  const products = getAllProducts();
  res.json(products);
};

const getProduct = (req, res) => {
  const product = getProductById(parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
};

const addProduct = (req, res) => {
  const newProduct = req.body;
  const product = createProduct(newProduct);
  res.status(201).json(product);
};

const editProduct = (req, res) => {
  const updatedProduct = updateProduct(parseInt(req.params.id), req.body);
  if (updatedProduct) {
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
};

// const removeProduct = (req, res) => {
//   const deletedProduct = deleteProduct(parseInt(req.params.id));
//   if (deletedProduct) {
//     res.json({ message: 'Producto eliminado' });
//   } else {
//     res.status(404).json({ message: 'Producto no encontrado' });
//   }
// };

const removeProduct = (req, res) => {
  const deletedProduct = deleteProduct(parseInt(req.params.id)); // Convierte el ID a número
  if (deletedProduct) {
    res.json({ message: 'Producto eliminado' });
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
};


module.exports = {
  getProducts,
  getProduct,
  addProduct,
  editProduct,
  removeProduct
};
