import mongoose from "mongoose";

const articuloSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        default: 0
    }
});

export const articuloModel = mongoose.model("Articulos", articuloSchema);