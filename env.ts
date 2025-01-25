import {requireEnv} from "@/utils/helpers.ts";

export const ollamaWebsite = requireEnv({
    name: 'https://ollama.com/download',
});  

export const downloadLink  = requireEnv({
    name : 'https://drive.google.com/file/d/1Xj0clS1OnsGR8abOj-HWcHQa7Bn1nkXF/view?usp=drive_link'
})