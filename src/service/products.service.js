import { ProductRepository } from '../repository/product.repository.js';

const productRepository = new ProductRepository();

export class ProductService {
    async getAllProducts() {
        return await productRepository.getAllProducts();
    }

    async getProductById(productId) {
        return await productRepository.getProductById(productId);
    }

    async addProduct(productData) {
        return await productRepository.addProduct(productData);
    }

    async updateProduct(productId, updatedProductData) {
        return await productRepository.updateProduct(productId, updatedProductData);
    }

    async deleteProduct(productId) {
        return await productRepository.deleteProduct(productId);
    }
}
