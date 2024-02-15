import { dbProducts } from '../models/products.model.js';

export class ProductDAO {
    async getAllProducts() {
        return await dbProducts.find().lean();
    }

    async getProductById(productId) {
        return await dbProducts.findById(productId).lean();
    }

    async addProduct(productData) {
        productData._id = randomUUID();
        const product = await dbProducts.create(productData);
        return product.toObject();
    }

    async updateProduct(productId, updatedProductData) {
        const modifiedProduct = await dbProducts.findByIdAndUpdate(productId, { $set: updatedProductData }, { new: true }).lean();
        if (!modifiedProduct) {
            throw new Error(`Producto no encontrado`);
        }
        return modifiedProduct;
    }

    async deleteProduct(productId) {
        const deletedProduct = await dbProducts.findByIdAndDelete(productId).lean();
        if (!deletedProduct) {
            throw new Error(`Producto no encontrado`);
        }
        return deletedProduct;
    }
}
