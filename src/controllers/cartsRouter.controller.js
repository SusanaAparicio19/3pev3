//import { responseFailed } from '../middlewares/responseFailed.js';
//import { responseSuccessfull } from "../middlewares/responseSuccessfull.js";
import { ProductService } from '../service/products.service.js'
import { TicketService } from '../service/ticket.service.js';

export async function getAllCarts(req, res, next) {
    try {
        const carts = await CartsController.getAllCarts();
        res.successfullGet(carts);
    } catch (error) {
        res.serverError('Error al obtener los carritos'); 
    }
}

export async function createCart(req, res, next) {
    try {
        const cart = await CartsController.createCart(req.body);
        res.successfullPost(cart);
    } catch (error) {
        res.serverError('Error al crear el carrito'); 
    }
}

export async function getCartById(req, res, next) {
    try {
        const { cid } = req.params;
        const cart = await CartsController.getCartById(cid);
        res.successfullGet(cart);
    } catch (error) {
        res.serverError('Error al obtener el carrito por ID'); 
    }
}

export async function updateCart(req, res, next) {
    try {
        const { cid } = req.params;
        const updatedCart = await CartsController.updateCart(cid, req.body);
        res.updated(updatedCart);
    } catch (error) {
        res.serverError('Error al actualizar el carrito');
    }
}

export async function deleteCartById(req, res, next) {
    try {
        const { cid } = req.params;
        await CartsController.deleteCartById(cid);
        res.deleted();
    } catch (error) {
        res.serverError('Error al eliminar el carrito'); 
    }
}

export async function getProductsFromCart(req, res, next) {
    try {
        const { cid } = req.params;
        const products = await CartsController.getProductsFromCart(cid);
        res.successfullGet(products);
    } catch (error) {
        res.serverError('Error al obtener los productos del carrito'); 
    }
}

export async function purchaseCart(req, res, next) {
    const { cid } = req.params;
    const { products } = req.body;

    try {
        const productsWithInsufficientStock = await ProductService.checkStock(products);

        if (productsWithInsufficientStock.length > 0) {
            await CartsService.removeProductsFromCart(cid, productsWithInsufficientStock);
            return res.status(400).json({ error: 'Algunos productos no tienen suficiente stock', unavailableProducts: productsWithInsufficientStock });
        }

        const ticket = await TicketService.generateTicket(req.user.email, products);
        await CartsService.purchaseCart(cid, products);

        return res.status(200).json({ message: 'Compra realizada con éxito', ticket });
    } catch (error) {
        return res.status(500).json({ error: 'Error al procesar la compra', message: error.message });
    }
}