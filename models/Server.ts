import express from "express";
import index from  "../routes/public";
import api from  "../routes/api";

import cors from "cors";
//import path from 'path';

export default class Server {

    app; port; paths;

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        this.paths = {
            index:       '/*',
            api : '/api'
        }


        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        //await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

        
    }

    routes() {
        this.app.use( this.paths.api, api);
        this.app.use( this.paths.index, index);
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port, process.env.NODE_ENV );
        });
    }

}
