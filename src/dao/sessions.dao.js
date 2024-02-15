import { SessionModel } from '../models/sessions.model.js';
import { responseFailed } from '../middlewares/responseFailed.js';

export class SessionsDAO {
    async create(sessionData) {
        try {
            return await SessionModel.create(sessionData);
        } catch (error) {
            responseFailed.failedCreateSession();
        }
    }

    async findOne(criteria) {
        try {
            return await SessionModel.findOne(criteria);
        } catch (error) {
            responseFailed.failedFindSession();
        }
    }

    async deleteOne(criteria) {
        try {
            return await SessionModel.deleteOne(criteria);
        } catch (error) {
            responseFailed.failedDeleteSession();
        }
    }
}
/* TRAIDO DE USER MODEL ESTABA MAL UBICADO VER COMO IMPLEMENTARLO ACA
        buscarSession: function (req, res) {
            if (req.session['user']) {
                return res.json(req.session['user']);
            }
            res.failedGet();
        },

        deleteSession: function (req, res) {
            req.session.destroy(err => {
                if (err) {
                    return res.failedDeleteSession();
                }
                res.successfullLogout();
            });
        }*/