import { Router } from 'express';
import { getAllCarts, createCart, getCartById, updateCart, deleteCartById, getProductsFromCart, purchaseCart } from '../controllers/cartsRouter.controller.js'

const cartsRouter = Router();

cartsRouter.get('/', getAllCarts);
cartsRouter.post('/', createCart);
cartsRouter.get('/:cid', getCartById);
cartsRouter.put('/:cid', updateCart);
cartsRouter.delete('/:cid', deleteCartById);
cartsRouter.get('/:cid/products', getProductsFromCart);
cartsRouter.post('/:cid/purchase', purchaseCart);

export default cartsRouter;


