
export const requireEnv = ({name, errorMessage} : {name : string | undefined, errorMessage?: string}) => {
    const envVar = name;
    
    if (!envVar)
        throw new Error(errorMessage || `Environment variable ${name} not found`);
    
    return envVar
}

