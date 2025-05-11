import dotenv from 'dotenv'
import OpenAI from "openai";
import {SupportAgent} from "./src/agents/support-agent";
import {ConclusionAgent} from "./src/agents/conclusion-agent";
import {buildHtmlFileAndOpen} from "./src/utils/html";
import {TrainerAgent} from "./src/agents/Trainer-agent";

dotenv.config()

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

const run = async (userPrompt: string) => {
    console.log('Thinking about the Trainer...')
    const trainerAgent = new TrainerAgent(client)
    const TrainerResponse = await trainerAgent.askQuestion(userPrompt)

    
    console.log('Suggest another suggestion...')
    const supportAgent = new SupportAgent(client)
    const supportResponse = await supportAgent.optionalSuggestion(TrainerResponse)

    console.log('Concluding the decision...')
    const conclusionAgent = new ConclusionAgent(client)
    const conclusionResponse = await conclusionAgent.conclude(TrainerResponse, supportResponse)

    buildHtmlFileAndOpen(TrainerResponse, supportResponse, conclusionResponse )
}

run("วางแผนการกินให้หน่อย").then(() => {
    console.log("---------------------------------------------------------------------------------")
})