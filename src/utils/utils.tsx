import { json } from "node:stream/consumers";


localStorage.clear();

export function addToLocalStorage(key:string,value:string)
{
    localStorage.setItem(key,JSON.stringify(value))
}

export function GetFromLocalStorage(key:string)
{
    const data=localStorage.getItem(key);
    return data?JSON.parse(data) : null
}