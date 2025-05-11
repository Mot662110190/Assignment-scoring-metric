import OpenAI from "openai";
import process from "node:process";

export class ConclusionAgent {
    constructor(private readonly client: OpenAI){}

    conclude = async (TrainerResponse: string,supportResponse: string): Promise<string> => {
        const response = await this.client.chat.completions.create({
            model: process.env.OPENAI_MODEL_NAME ?? 'gpt-4o-mini',
            messages: [
                {
                    role: 'system', content: 'You are a decision critic. trainer all suggestions and pick the best one. Justify your reasoning.'
                },
              
                { role: 'user', content: `Trainer information: ${TrainerResponse}` }
            ],

            
            temperature: 0.8,
        })

        return response.choices[0].message.content ?? "I support your decision"
    }
}

