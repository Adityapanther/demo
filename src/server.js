import express from 'express';
import bodyParser from 'body-parser';
import router from './routers/index.js'
import appConfig from './config/appConfig.js';


class Server {

    constructor(){
        this.app = express();
        this.initPlugins();
    }

    initPlugins(){
        this.app.use(bodyParser.json({
            type: 'application/*+json'
        }))
        this.app.use(router)
    }

    start(){
        this.app.listen(appConfig.PORT, () => {
            console.info("server listing on PORT:", appConfig.PORT)
        })
    }

}


export default Server;
