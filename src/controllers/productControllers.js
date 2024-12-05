// const { products } = require('../baseDatos');

// // Obtener todos los productos
// const getAllProducts = () => {
//     return products;
// };

// // Obtener un producto por ID
// const getProductById = (id) => {
//     return products.find((product) => product.id === id);
// };

// // Crear un nuevo producto
// const createProduct = (newProduct) => {
//     products.push(newProduct);
//     return newProduct;
// };

// // Actualizar un producto
// const updateProduct = (id, updatedData) => {
//     const index = products.findIndex((product) => product.id === id);
//     if (index !== -1) {
//         products[index] = { ...products[index], ...updatedData };
//         return products[index];
//     }
//     return null;
// };

// // // Eliminar un producto
// // const deleteProduct = (id) => {
// //     const index = products.findIndex((product) => product.id === id);
// //     if (index !== -1) {
// //         return products.splice(index, 1);
// //     }
// //     return null;
// // };

// // Eliminar un producto
// // const deleteProduct = (id) => {
// //     const productIndex = products.findIndex(product => product.id === id);
// //     if (productIndex !== -1) {
// //         const deletedProduct = products[productIndex];
// //         products.splice(productIndex, 1);
// //         return deletedProduct;
// //     }
// //     return null;
// // };

// // Función para eliminar producto
// const deleteProduct = (id) => {
//     const productIndex = products.findIndex(product => product.id === id);
//     if (productIndex !== -1) {
//         const deletedProduct = products.splice(productIndex, 1);
//         return deletedProduct[0];
//     } else {
//         return null; // Si no encuentra el producto
//     }
// };

// module.exports = {
//     getAllProducts,
//     getProductById,
//     createProduct,
//     updateProduct,
//     deleteProduct,
// };

// --------------------------------CONSIGNA 5 --------------------------------------------------------

// controllers/productControllers.js
const { products } = require("../baseDatos");

const getAllProductsController = () => {
  return products;
};

const getProductByIdController = (id) => {
  return products.find((product) => product.id === id);
};

const createProductController = (newProductData) => {
  const newProduct = { id: products.length + 1, ...newProductData };
  products.push(newProduct);
  return newProduct;
};

const updateProductController = (id, updatedProductData) => {
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex !== -1) {
    products[productIndex] = {
      ...products[productIndex],
      ...updatedProductData,
    };
    return products[productIndex];
  }
  return null;
};

const deleteProductController = (id) => {
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex !== -1) {
    return products.splice(productIndex, 1);
  }
  return null;
};

module.exports = {
  getAllProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController,
};
