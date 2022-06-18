import express from 'express'
import mongoose from "mongoose";
import 'dotenv/config';

/**Si no existe la DB la crea */
async function onInit(){
    try{
        const MONGO_USER = process.env.MONGO_USER;
        const MONGO_PASS = process.env.MONGO_PASS;
        const DB_NAME = process.env.DB_NAME;
        /**Conexion con DB */
        mongoose.connect(
            `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.cyfup.mongodb.net/${DB_NAME}?retryWrites=true&w=majority `,
            { useNewUrlParser: true ,
              useUnifiedTopology: true 
            });
        
        mongoose.connection.on("connected", () => {
            console.log("connected to mongoDB");
        });   
    }catch(err){
        console.log(err);
    }
}


onInit();