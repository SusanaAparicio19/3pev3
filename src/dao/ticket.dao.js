import { randomUUID } from 'crypto';
import { dbTickets } from '../models/ticket.model.js'

export class TicketDAO {
    static async createTicket(ticketData) {
        ticketData.code = randomUUID(); 
        const ticket = await dbTickets.create(ticketData);
        return ticket.toObject();
    }

    static async findAllTickets() {
        return await dbTickets.find().lean();
    }

    static async findTicketById(ticketId) {
        const ticket = await dbTickets.findById(ticketId).lean();
        if (!ticket) {
            throw new Error('Ticket not found');
        }
        return ticket;
    }

    static async updateTicket(ticketId, updatedTicket) {
        return await dbTickets.findByIdAndUpdate(ticketId, updatedTicket, { new: true }).lean();
    }

    static async deleteTicketById(ticketId) {
        return await dbTickets.findByIdAndDelete(ticketId);
    }

}
