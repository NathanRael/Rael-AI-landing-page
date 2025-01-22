import {twMerge} from "tailwind-merge";
import {ClassValue, clsx} from "clsx";


export const cn = (...items : ClassValue[]) : string => {
    return twMerge(clsx(items));
}