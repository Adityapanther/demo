import express from 'express';
import { config } from 'dotenv';
config()

config({path: `${process.env.NODE_ENV}.env`})
console.log(process.env.PORT);
import appConfig from './config/appConfig.js';
import bodyParser from 'body-parser';


class Server {

    constructor(){
        this.app = express();
        this.initPlugins();
    }

    initPlugins(){
        this.app.use(bodyParser.json({
            type: 'application/*+json'
        }))
    }

    start(){
        this.app.listen(appConfig.PORT, () => {
            console.info("server listing on PORT:", appConfig.PORT)
        })
    }

}


export default Server;
