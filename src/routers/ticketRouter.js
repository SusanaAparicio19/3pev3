import { Router } from 'express';
import { TicketController } from '../controllers/ticketRouter.controller.js'

const ticketsRouter = Router();

ticketsRouter.post('/generate', TicketController.generateTicket);

export default ticketsRouter;
