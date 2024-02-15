//LISTO
import { UserService } from '../../service/user.service.js';


export async function postUserController(req, res, next) {
    try {
            const usuario = await UserService.create(req.body);
            res.successfullPost(usuario);
        } catch (error) {
            next(error);
        }
    }

export async function getUserController(req, res, next) {
    try {
            if (req.params._id) {
                res.json(await UserService.findOneUser({ _id: req.params._id }))
            } else {
                res.json(await UserService.findManyUser(req.query))
            }
        } catch (error) {
            next(error);
        }
    }

export async function putUserResetPasswordController(req, res, next) {
    try {
            const { email, password } = req.body;   
            const updatedPassword = await UserService.resetPassword(email, password);
            res.json(updatedPassword);
        } catch (error) {
            next(error); 
        }
    }

export async function getUsersByRolesController(req, res) {
    try {
            const usersByRole = await UserService.usersByRoles(req.query.roles);
            res.successfullGet(usersByRole);
        } catch (error) {
            next(error);
        }
    }
 
export async function putUserUpdateByEmailController(req, res, next) {
    try {
            const { email, newData } = req.body;   
            const updatedNewData = await UserService.updateUserByEmail(email, newData);
            res.json(updatedNewData);
        } catch (error) {
            next(error); 
        }
    }


export async function getCurrentUserController(req, res, next) {
    try {
            const userCurrentId = req.session.userId;
            const userCurrent = await UserService.findOneUser(userCurrentId);
            res.json(userCurrent);
        } catch (error) {
            next(error);
        }
    }

export async function deleteUserController (req, res) {
    try {
            const userId = req.params.userId; 
            const deletedUser = await UserService.deleteUserById(userId);
            res.json(deletedUser);
            
        } catch (error) {
            next(error);
        }
    }









