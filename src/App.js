import express from 'express';
import mongoose from 'mongoose';
import { engine } from 'express-handlebars';
//import { ProductManagerMongo } from './ProductManagerMongo.js';
import { PORT, MONGODB_CNX_STR } from './config.js';
//import { PORT, CNX_STR } from './config.js';
import { productsRouter } from './routers/productsRouter.js';
import { webRouter } from "./routers/webR/webRouter.js"
//import sfs from 'session-file-store'
import { apiRouter } from './routers/apiR/apirestRouter.js';
import { sessions } from './middlewares/sessions.js'
import { autenticacion } from './middlewares/passport.js';
import { responseFailed } from './middlewares/responseFailed.js'
import { responseSuccessfull } from './middlewares/responseSuccessfull.js';
import cartsRouter  from './routers/cartsRouter.js';
import ticketsRouter from './routers/ticketRouter.js';
import { autenticarUsuario } from './middlewares/autenticar.js';


//export const ProdMan = new ProductManagerMongo({ path: './db/products.json' });
//@ts-ignore
//await mongoose.connect(CNX_STR)
await mongoose.connect(MONGODB_CNX_STR)
  //console.log(`Base de Datos Conectada ${CNX_STR}`)
  console.log(`Base de Datos Conectada "${MONGODB_CNX_STR}"`)

const app = express()

app.engine('handlebars', engine())

app.listen(PORT, async () => {
  console.log(`Conectado al puerto ${PORT}`);
});


app.set('views', './views')
app.set(`view engine`, 'handlebars')

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use('/static', express.static('./static'))
app.use(responseFailed);
app.use(responseSuccessfull);


app.use(sessions)
app.use(autenticarUsuario)
app.use('/', webRouter)
app.use('/api',apiRouter)
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use('/api/tickets', ticketsRouter);





