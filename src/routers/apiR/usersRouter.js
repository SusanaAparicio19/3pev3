//LISTO
import { Router } from 'express';
import { autenticarUsuario } from '../../middlewares/autenticar.js';
import { soloRoles } from '../../middlewares/autorizar.js';
import { postUserController, getUserController, getCurrentUserController, putUserResetPasswordController, getUsersByRolesController, deleteUserController } from '../../controllers/apiR.controllers/usersRouter.controller.js';


export const usersRouter = Router();



usersRouter.post('/', autenticarUsuario, soloRoles(['usuario']), postUserController);
usersRouter.get('/', autenticarUsuario, soloRoles(['admin']), getUserController);
usersRouter.put('/', autenticarUsuario, soloRoles(['usuario']), putUserResetPasswordController);
usersRouter.get('/current', autenticarUsuario, soloRoles(['usuario']), getCurrentUserController);
usersRouter.get('/roles', soloRoles(['admin']), getUsersByRolesController);
usersRouter.delet('/', soloRoles(['admin']), deleteUserController);

export default usersRouter;

