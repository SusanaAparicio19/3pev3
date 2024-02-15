//import { Command } from "commander";
import dotenv from "dotenv";
dotenv.config()

//export const PRODUCTS_JASON = './db/products.json';
export const PORT = process.env.PORT;
//export const MONGODB_CNX_STR = 'mongodb://127.0.0.1/ecommerce'
export const MONGODB_CNX_STR = process.env.MONGODB_CNX_STR //'mongodb+srv://msusanainfo:Susana1831@46soles.tn88qqs.mongodb.net/ecommerse'

export const SESSION_SECRET = process.env.SESSION_SECRET

export const githubAppId = process.env.githubAppId
export const githubClienteId = process.env.githubClienteId
export const githubClientSecret = process.env.githubClientSecret
export const githubCallbackUrl = process.env.githubCallbackUrl

/*
export const PRODUCTS_JSON = './db/products.json';
export const SESSION_SECRET = 'MySecret';

// Configuraciones para MongoDB local y remoto
export const CNX_STR_LOCAL = 'mongodb://127.0.0.1/ecommerce';
export const CNX_STR_REMOTE = 'mongodb+srv://msusanainfo:Susana1831@46soles.tn88qqs.mongodb.net/ecommerce';

export const githubAppId = '726396'
export const githubClienteId = 'Iv1.3ed92726cccd28c9'
export const githubClientSecret = '7b86cd670b1e47dcb9e23808e8fb07c2e46f1fd4'
export const githubCallbackUrl = 'http://localhost:8080/githubcallback'

// Configuración de variables de entorno
const program = new Command();
program
    .option('-p, --prod', 'entorno de ejecucion', false)
    .parse();
const { prod } = program.opts();

dotenv.config({
    path: prod ? './config/prod.env' : './config/dev.env'
});

// Puerto y modo de ejecución
export const PORT = process.env.PORT || 8080;
export const MODE = process.env.MODE || 'dev';
export const CNX_STR = prod ? process.env.CNX_STR_REMOTE : process.env.CNX_STR_LOCAL;

*/

/*
//import { Command } from "commander";
import dotenv from "dotenv";

export const PRODUCTS_JASON = './db/products.json';
//export const PORT = 8080;
//export const MONGODB_CNX_STR = 'mongodb://127.0.0.1/ecommerce'
//export const MONGODB_CNX_STR = 'mongodb+srv://msusanainfo:Susana1831@46soles.tn88qqs.mongodb.net/ecommerse'
export const CNX_STR_LOCAL = 'mongodb://127.0.0.1/ecommerce'
export const CNX_STR_REMOTO = 'mongodb+srv://msusanainfo:Susana1831@46soles.tn88qqs.mongodb.net/ecommerce'
export const SESSION_SECRET = 'MySecret'

export const githubAppId = '726396'
export const githubClienteId = 'Iv1.3ed92726cccd28c9'
export const githubClientSecret = '7b86cd670b1e47dcb9e23808e8fb07c2e46f1fd4'
export const githubCallbackUrl = 'http://localhost:8080/githubcallback'
/*
const program = new Command()
program
    .option('-p, --prod', 'entorno de ejecucion', false)
    .parse()
const { prod } = program.opts()

dotenv.config({
    path: prod ? './config/prod.env' : './config/dev.env'
})


export const PORT = process.env.PORT
export const MODE = process.env.MODE
export const CNX_STR = process.env.CNX_STR*/