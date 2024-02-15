import { TicketService } from '../service/ticket.service.js';
//import { responseFailed } from '../middlewares/responseFailed.js';
//import { responseSuccessfull } from "../middlewares/responseSuccessfull.js";

export class TicketController {
    static async generateTicket(req, res) {
        try {
            const { code, amount, purchaser, products } = req.body;
            const ticket = await TicketService.generateTicket(code, amount, purchaser, products);
            res.created(ticket); 
        } catch (error) {
            console.error(error);
            res.serverError('No se pudo generar el ticket. Por favor, inténtalo de nuevo más tarde.'); 
        }
    }
}



