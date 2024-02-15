import { CartsDAO } from './carts.dao.js';

export class CartsRepository {
    static async create(cartData) {
        return await CartsDAO.createCart(cartData);
    }

    static async findById(cartId) {
        return await CartsDAO.getCartById(cartId);
    }

    static async update(cartId, updatedCart) {
        return await CartsDAO.updateCart(cartId, updatedCart);
    }

    static async deleteById(cartId) {
        return await CartsDAO.deleteCartById(cartId);
    }

    static async findAll() {
        return await CartsDAO.findAll();
    }

    static async getProducts(cartId) {
        return await CartsDAO.getProductsFromCart(cartId);
    }
}