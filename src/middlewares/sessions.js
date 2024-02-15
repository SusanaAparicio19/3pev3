
/*
// sessions.js
import session from 'express-session';
import connectMongo from 'connect-mongo';
import { MONGODB_CNX_STR } from '../config.js';

// Importa directamente MongoStore desde connect-mongo
const MongoStore = new connectMongo(session);

// Crea el almacenamiento de sesiones utilizando la cadena de conexión seleccionada
const store = new MongoStore({
  mongoUrl: MONGODB_CNX_STR, // Utiliza la cadena de conexión seleccionada
  ttl: 60 * 60 * 24 // 1 día de tiempo de vida para las sesiones
});

// Exporta el middleware de sesiones configurado
export const sessions = session({
  store,
  secret: 'MySecret',
  resave: false,
  saveUninitialized: true
});

*/

/*
// sessions.js
import session from 'express-session';
import connectMongo from 'connect-mongo';
import { CNX_STR } from '../config.js';

// Crea el almacenamiento de sesiones utilizando la cadena de conexión seleccionada
const store = connectMongo.create({
  mongoUrl: CNX_STR, // Utiliza la cadena de conexión seleccionada
  ttl: 60 * 60 * 24 // 1 día de tiempo de vida para las sesiones
});

// Exporta el middleware de sesiones configurado
export const sessions = session({
  store,
  secret: 'MySecret',
  resave: false,
  saveUninitialized: true
});
*/



import session from 'express-session'
import connectMongo from 'connect-mongo'
import { MONGODB_CNX_STR} from '../config.js'
//import { CNX_STR } from '../config.js'


const store = connectMongo.create({
  mongoUrl: MONGODB_CNX_STR,
  //mongoUrl: CNX_STR,
  ttl: 60 * 60 * 24 // 1d
})

export const sessions = session({
  store,
  secret: 'MySecret',
  resave: false,
  saveUninitialized: true
})
