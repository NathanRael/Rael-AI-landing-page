import {requireEnv} from "@/utils/helpers.ts";

export const ollamaWebsite = requireEnv({
    name: 'https://ollama.com/download',
});  

export const downloadLink  = requireEnv({
    name : "https://drive.google.com/file/d/1CNTDz43reYWJJDYcVYvfxuslQ5ioIa3p/view?usp=drive_link"
})