import { GoogleGenerativeAI } from "@google/generative-ai";
import appConfig from "../src/config/appConfig.js";


class Generative {

    constructor(){
        this.ai = new GoogleGenerativeAI(appConfig.GEMINI_API_KEY)
    }

    async sendPrompt(oppoObject){
        const model = this.ai.getGenerativeModel({ model: "gemini-1.5-flash"})
        const prompt = `could please write a summary of given opportunity \n${oppoObject.title}`;
        const result = await model.generateContent(prompt)
        oppoObject.summary = result.response.text()
        return oppoObject;
    }

}

export default new Generative();