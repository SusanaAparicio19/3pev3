import { ProductDAO } from '../dao/product.dao.js';

const productDAO = new ProductDAO();

export class ProductRepository {
    async getAllProducts() {
        return await productDAO.getAllProducts();
    }

    async getProductById(productId) {
        return await productDAO.getProductById(productId);
    }

    async addProduct(productData) {
        return await productDAO.addProduct(productData);
    }

    async updateProduct(productId, updatedProductData) {
        return await productDAO.updateProduct(productId, updatedProductData);
    }

    async deleteProduct(productId) {
        return await productDAO.deleteProduct(productId);
    }
}
