import axios from "axios";

import samConfig from "../config/samConfig.js";
import appConfig from "../config/appConfig.js";
import generative from "../../moduls/generative.js";


class OpportunityController {
   async get(req, res){
        try {
            let {from, to, limit} = req.query;
            if(!limit) limit = 10;
            // fetching opportunity from sam api based on query
            const apiResult = await axios.get(`${samConfig.OPP_API}?api_key=${appConfig.SAM_API_KEY}&postedFrom=${from}&postedTo=${to}&limit=${limit}`)
            const promFunc = []
            apiResult.data.opportunitiesData.forEach((el) => {
                promFunc.push(generative.sendPrompt(el))
            })

            const result = await Promise.all(promFunc)
            res.status(200).send({data: result});
        } catch (error) {
            console.log(error);
            res.status(400).send(error.response.data)
        }
    };

}


export default new OpportunityController();

