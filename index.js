import { config } from "dotenv"
config()

import { Configuration, OpenAIApi } from "openai";

const myConfiguration = new Configuration({
    apiKey: process.env.API_KEY,
    organization: process.env.ORG_ID,
})

const openai = new OpenAIApi(myConfiguration)

const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
        { role: "user", content: "Hello Chat" }
    ]
})

console.log(completion.data.choices[0].message.content)