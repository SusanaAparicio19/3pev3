export function responseFailed(req, res, next) {
    res['failedPost'] = function (payload){
        res
            .status(401)
            .json({
                status: 'error', 
                payload,
                message: 'login failed'
            })
        }
    res['failedGet'] = function (payload){
         res
            .status(400)
            .json({
               status: 'error', 
               payload,
               message: 'No hay sesión iniciada aun'
            })
        } 
    res['failedTicket'] = function (message) {
         res
            .status(500)
            .json({
                status: 'error',
                message: message || 'Error relacionado con el ticket'
            });
        };    
           
    res['failedDelete'] = function (){
         res
            .status(500)
            .json({
               status: 'logout error', 
               body: err
            })
        }
    res['failedValidation'] = function (message) {
        res
            .status(422)
            .json({
                status: 'error',
                message: message || 'Error de validación de entrada'
            });
        };
    res['unauthorized'] = function (message) {
        res
            .status(401)
            .json({
                status: 'error',
                message: message || 'No autorizado'
            });
        };
    res['forbidden'] = function (message) {
        res
            .status(403)
            .json({
                status: 'error',
                message: message || 'Acceso prohibido'
            });
        };
    res['serverError'] = function (message) {
        res
            .status(500)
            .json({
                status: 'error',
                message: message || 'Error interno del servidor'
            });
        };
    res['failedCreateSession'] = function () {
        res
            .status(500)
            .json({
                status: 'error',
                message: 'Error al crear sesión en la base de datos'
            });
        };

    res['failedFindSession'] = function () {
        res
            .status(500)
            .json({
                status: 'error',
                message: 'Error al buscar sesión en la base de datos'
            });
        };

    res['failedDeleteSession'] = function () {
        res
            .status(500)
            .json({
                status: 'error',
                message: 'Error al eliminar sesión de la base de datos'
            });
        }; 
    res['failedLogin'] = function () {
        res
            .status(401)
            .json({
                status: 'error',
                message: 'Error al iniciar sesión'
            });
        };

    next()
}