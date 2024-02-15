import { ProductService } from '../service/products.service.js'
//import { responseFailed } from '../middlewares/responseFailed.js';
//import { responseSuccessfull } from '../middlewares/responseSuccessfull.js';

const productService = new ProductService();

export async function getProductById(req, res) {
    const id = parseInt(req.params.pid);    
    try {
        const prdId = await productService.getProductById(id);
        res.successfullGet(prdId);
    } catch (error) {
        console.log(error);
        res.serverError(`Error al recibir el producto con Id ${id}`);
    }
}

export async function addProduct(req, res) {
    const { category, object, title, description, code, stock, status, price } = req.body;
    try {
        const newProduct = await productService.addProduct({
            category,
            object,
            title,
            description,
            code,
            stock,
            status,
            price,
        });
        res.successfullPost(newProduct);
    } catch (error) {
        console.log(error);
        res.serverError('Error al agregar el producto');
    }
}

export async function updateProduct(req, res) {
    const id = parseInt(request.params.pid);    
    try {
        const { category, object, title, description, code, stock, status, price } = req.body;
        const prodUpDate = await productService.updateProduct(id, {category, object, title, description, code, stock, status, price});
        res.updated(prodUpDate);
    } catch (error) {
        console.log(error);
        res.serverError(`Error al editar el producto con Id ${id}`);
    }
}

export async function deleteProduct(req, res) {
    const id = parseInt(req.params.pid);    
    try {
        await productService.deleteProduct(id);
        res.deleted();
    } catch (error) {
        console.log(error);
        res.serverError(`Error al eliminar el producto con Id ${id}`);
    }
}