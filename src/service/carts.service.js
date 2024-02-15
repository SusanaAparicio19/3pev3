import { CartsDAO } from './carts.dao.js';

export class CartsService {
    static async createCart(cartData) {
        return await CartsDAO.createCart(cartData);
    }

    static async findAllCarts() {
        return await CartsDAO.findAll();
    }

    static async findCartById(cartId) {
        return await CartsDAO.getCartById(cartId);
    }

    static async updateCart(cartId, updatedCart) {
        return await CartsDAO.updateCart(cartId, updatedCart);
    }

    static async deleteCartById(cartId) {
        return await CartsDAO.deleteCartById(cartId);
    }

    static async getProductsFromCart(cartId) {
        return await CartsDAO.getProductsFromCart(cartId);
    }
}