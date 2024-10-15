const { products } = require('../baseDatos');

// Obtener todos los productos
const getAllProducts = () => {
    return products;
};

// Obtener un producto por ID
const getProductById = (id) => {
    return products.find((product) => product.id === id);
};

// Crear un nuevo producto
const createProduct = (newProduct) => {
    products.push(newProduct);
    return newProduct;
};

// Actualizar un producto
const updateProduct = (id, updatedData) => {
    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) {
        products[index] = { ...products[index], ...updatedData };
        return products[index];
    }
    return null;
};

// // Eliminar un producto
// const deleteProduct = (id) => {
//     const index = products.findIndex((product) => product.id === id);
//     if (index !== -1) {
//         return products.splice(index, 1);
//     }
//     return null;
// };

// Eliminar un producto
// const deleteProduct = (id) => {
//     const productIndex = products.findIndex(product => product.id === id);
//     if (productIndex !== -1) {
//         const deletedProduct = products[productIndex];
//         products.splice(productIndex, 1);
//         return deletedProduct;
//     }
//     return null;
// };

// Función para eliminar producto
const deleteProduct = (id) => {
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex !== -1) {
        const deletedProduct = products.splice(productIndex, 1);
        return deletedProduct[0];
    } else {
        return null; // Si no encuentra el producto
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
