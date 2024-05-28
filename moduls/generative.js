import { GoogleGenerativeAI } from "@google/generative-ai";
import appConfig from "../src/config/appConfig.js";


class Generative {

    constructor(){
        this.ai = new GoogleGenerativeAI(appConfig.GEMINI_API_KEY)
    }

    async sendPrompt(opportunitiesData){
        const model = this.ai.getGenerativeModel({ model: "gemini-1.5-flash"})
        const prompt = `add a summary filed in opportunitiesData items with summary \n
        ${opportunitiesData.toString()}`;
        const result = await model.generateContent(prompt)
        console.log(result.response.text());
        return result.response;
    }

}

export default new Generative();