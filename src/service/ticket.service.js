import { TicketDAO } from '../dao/ticket.dao.js';
import { ProductService } from './products.service.js';

export class TicketService {
    static async generateTicket(purchaser, products) {
        try {
            const amount = await ProductService.calculateTotal(products);

            const ticketData = { code: generateUniqueTicketCode(), purchase_datetime: new Date(), amount, purchaser, products };
            const ticket = await TicketDAO.createTicket(ticketData);

            return ticket;
        } catch (error) {
            throw error;
        }
    }
}

