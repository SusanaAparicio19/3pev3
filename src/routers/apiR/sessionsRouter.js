import { Router } from 'express'
import { postSessionsController, getCurrentSessionsController, deleteCurrentSessionsController } from '../../controllers/apiR.controllers/sessionsRouter.controller.js'

export const sessionsRouter = Router()

sessionsRouter.post('/', postSessionsController);


sessionsRouter.get('/current', getCurrentSessionsController);



sessionsRouter.delete('/current', deleteCurrentSessionsController);


