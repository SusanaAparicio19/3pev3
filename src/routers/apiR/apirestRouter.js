import { Router } from 'express'
import { usersRouter } from './usersRouter.js'
//import { responseSuccessfull } from '../../middlewares/responseSuccessfull.js'
//import { responseFailed } from '../../middlewares/responseFailed.js'
import { sessionsRouter } from './sessionsRouter.js'
export const apiRouter = Router()

//apiRouter.use(responseSuccessfull)

apiRouter.use('/sessions', sessionsRouter)
apiRouter.use('/users', usersRouter)

//apiRouter.use(responseFailed)

