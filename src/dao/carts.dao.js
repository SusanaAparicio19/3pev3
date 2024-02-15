import { randomUUID } from 'crypto';
import { dbCarts } from './models/carts.model.js';

export class CartsDAO {
    static async createCart(cartData) {
        cartData._id = randomUUID();
        const cart = await dbCarts.create(cartData);
        return cart.toObject();
    }

    static async findAll() {
        return await dbCarts.find().lean();
    }

    static async getCartById(cartId) {
        const cart = await dbCarts.findById(cartId).populate('products').lean();
        if (!cart) {
            throw new Error('Cart not found');
        }
        return cart;
    }

    static async updateCart(cartId, updatedCart) {
        return await dbCarts.findByIdAndUpdate(cartId, updatedCart, { new: true }).lean();
    }

    static async deleteCartById(cartId) {
        return await dbCarts.findByIdAndDelete(cartId);
    }

    static async getProductsFromCart(cartId) {
        const cart = await dbCarts.findById(cartId).populate('products.id').lean();
        return cart ? cart.products : [];
    }
}