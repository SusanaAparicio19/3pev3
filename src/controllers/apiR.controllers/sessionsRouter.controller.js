import { SessionsService } from '../../service/sessions.service.js';
//import { responseSuccessfull } from '../../middlewares/responseSuccessfull.js';
//import { responseFailed } from '../../middlewares/responseFailed.js';

const sessionsService = new SessionsService();

export async function postSessionsController(req, res) {
    try {
        const { email, password } = req.body;
        const datosUsuario = await sessionsService.login(email, password);
        if (datosUsuario) {
            req.session.user = datosUsuario;
            return res.successfullPost(datosUsuario);
        } else {
            return res.failedLogin();
        }
    } catch (error) {
        return res.failedLogin();
    }
}

/*
export async function postSessionsController(req, res) {
    try {
        const { email, password } = req.body;
        const datosUsuario = await sessionsService.login({ email, password });
        req.session.user = datosUsuario;
        res.successfullPost(datosUsuario); 
    } catch (error) {
        res.failedLogin(); 
    }
}*/

export async function deleteCurrentSessionsController(req, res) {
    try {
        await sessionsService.eliminarSesion({ userData: req.session.user });
        req.session.destroy(err => {
            if (err) {
                return res.failedDelete(); 
            }
            return res.successfullDelete(); 
        });
    } catch (error) {
        res.failedDelete(); 
    }
}

export function getCurrentSessionsController(req, res, next) {
    try {
        if (req.session.user) {
            res.successfullGet(req.session.user); 
        } else {
            res.failedGet(); 
        }
    } catch (error) {
        next(error);
    }
}



