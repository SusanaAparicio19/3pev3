export function responseSuccessfull(req, res, next) {
    res['successfullPost'] = function (payload){
        res
            .status(201)
            .json({
                status: 'success', 
                payload,
                message: 'login OK'
            })
        }
    res['successfullGet'] = function (payload){
         res
            .status(201)
            .json({
               status: 'success', 
               payload
            })
        }
    res['ticketCreated'] = function (payload) {
         res
            .status(201)
            .json({
                status: 'success',
                payload,
                message: 'Ticket generado exitosamente'
            });
        };            
    res['successfullDelete'] = function (){
         res
            .status(204)
            .json({
               status: 'success', 
               message: 'Recurso eliminado exitosamente'
            })
        }
    res['successfullLogout'] = function (){
         res
            .status(201)
            .json({
               status: 'success',
               message: 'logout OK' 
            })
        }
    res['created'] = function (payload) {
        res
            .status(201)
            .json({
                status: 'success',
                payload,
                message: 'Recurso creado exitosamente'
            });
        };
    res['updated'] = function (payload) {
        res
            .status(200)
            .json({
                status: 'success',
                payload,
                message: 'Recurso actualizado exitosamente'
            });
        };
    res['deleted'] = function () {
        res
            .status(204)
            .json({
                status: 'success',
                message: 'Recurso eliminado exitosamente'
            });
        };
                
    next()
}