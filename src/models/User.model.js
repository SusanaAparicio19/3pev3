//listo
import mongoose from 'mongoose';
import { randomUUID } from "node:crypto";

const { Schema, model } = mongoose;

const userSchema = new Schema({
    _id: { type: String, default: randomUUID },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true }
}, {
    strict: 'throw',
    versionKey: false,
    methods: {
        infoPublica: function () {
            return {
                email: this.email,
                nombre: this.nombre,
                apellido: this.apellido,
            };
        }
    },
});

export const UserModel = model('usuarios', userSchema);

