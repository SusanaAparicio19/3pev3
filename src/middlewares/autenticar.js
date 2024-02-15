//import mongoose from 'mongoose';
//import { Schema, model } from 'mongoose'
//import { randomUUID } from "node:crypto"
import { hashear, hasheadasSonIguales } from "../utils/cripto.js"
//import { responseFailed } from '../middlewares/responseFailed.js';
//import { responseSuccessfull } from "../middlewares/responseSuccessfull.js";
import { UserModel } from '../models/User.model.js';


export async function autenticarUsuario(username, password) {
  let datosUsuario;

  if (username === 'adminCoder@coder.com' && password === 'adminCod3r123') {
    datosUsuario = {
      email: 'admin',
      nombre: 'admin',
      apellido: 'admin',
      rol: 'admin'
    };
    return datosUsuario;
  } else {
    const usuario = await User.findOne({ email: username }).lean();

    if (!usuario) {
      return null;
    }
    
    if (!hasheadasSonIguales(password, usuario.password)) {
      return null;
    }

    datosUsuario = {
      email: usuario.email,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      rol: 'usuario'
    };
  }
  return datosUsuario;
}

