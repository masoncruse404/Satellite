import openai from "./chatgpt.js"
import dotenv from "dotenv";
dotenv.config();
const apiKey = process.env.OPENAI_API_KEY
async function imageGen(){
    const prompt = 'a dog'
    try{
    const response = await openai.Image.create(
        {
            prompt:prompt,
            n:1,
            size:"1024x1024",
        }) 
      
    }catch(e){
        
    }

    image_url = response['data'][0]['url']

    
}

export default imageGen;