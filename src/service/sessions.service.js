import { autenticarUsuario } from '../middlewares/autenticar.js';
import { SessionsDAO } from '../dao/sessions.dao.js';
//import { responseFailed } from '../middlewares/responseFailed.js';

const sessionsDAO = new SessionsDAO();

export class SessionsService {
    async login({ email, password }) {
        try {
            const datosUsuario = await autenticarUsuario(email, password);
            return datosUsuario;
        } catch (error) {
            return res.failedLogin(); 
        }
    }

    async crearSesion(userData) {
        try {
            return await sessionsDAO.create({ userData });
        } catch (error) {
            return res.failedCreateSession(); 
        }
    }

    async eliminarSesion(criteria) {
        try {
            return await sessionsDAO.deleteOne(criteria);
        } catch (error) {
            return res.failedDeleteSession(); 
        }
    }
}
