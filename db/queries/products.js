const Query = require("./models");

const getAllProducts = async () => {
    return Query("SELECT * FROM products");
};

const getOneProduct = async () => {
    return Query("SELECT * FROM products WHERE ProductId = ?, [id]");
};

const insertOneProduct = async (product) => {
    return Query("INSERT INTO products SET?", [product]);
} 
const updateOneProduct = async (product, id) => {
    return Query("UPDATE products SET? WHERE ProductId = ?", [product, id]);
} 
const deleteOneProduct = async (id) => {
    return Query("DELETE FROM products WHERE ProductId = ?", [id]);
} 


module.exports = {
    getAllProducts,
    getOneProduct,
    insertOneProduct,
    updateOneProduct,
    deleteOneProduct,
}