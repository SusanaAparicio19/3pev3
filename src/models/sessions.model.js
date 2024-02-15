import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const sessionSchema = new Schema({
    userData: {
        type: Object,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const SessionModel = model('Session', sessionSchema);
