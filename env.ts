import {requireEnv} from "@/utils/helpers.ts";

export const ollamaWebsite = requireEnv({
    name: 'https://ollama.com/download',
});  

export const downloadLink  = requireEnv({
    name : "https://drive.google.com/file/d/1cGOYg6gVwGGVz5cDTZph8FTPzYyRzQ57/view?usp=sharing"
})
