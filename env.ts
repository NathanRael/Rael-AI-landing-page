import {requireEnv} from "@/utils/helpers.ts";

export const ollamaWebsite = requireEnv({
    name: 'https://ollama.com/download',
});  

export const downloadLink  = requireEnv({
    name : "https://drive.google.com/file/d/1omZ5IfCFZIb2QrDZq2TyQWoItm3KscsV/view?usp=sharing"
})
