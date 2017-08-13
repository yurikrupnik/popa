import mongoose, { Schema } from 'mongoose';
import shortid from 'shortid';
import { model } from './config';

const PaymentSchema = Schema({
    id: {
        type: String,
        default: shortid.generate,
        index: true
    },
    title: {
        type: String,
        default: 'default title',
        required: [true, 'must have title']
    },
    company: {
        type: String,
        required: [true, 'must have company'],
        default: 'default comoany'
    },
    amount: {
        type: Number,
        required: [true, 'must be in range of 1 and 100'],
        min: [1, 'No amount selected'],
        max: [100, 'Maximum amount is 100 for regular customer'],
        default: 1,
        step: 1
    },
    payDate: {
        type: Date,
        default: Date.now
    }
});

const Model = mongoose.model(model, PaymentSchema);

export default Model;
