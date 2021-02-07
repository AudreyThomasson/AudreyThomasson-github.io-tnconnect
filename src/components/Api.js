// fetches from the API 
// slices the array 

import {keys} from "../Settings.js";

let help = [];
const weatherKey = keys.weatherKey;

export const getHelp = (zipCode) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?&units=imperial&zip=${zipCode}&appid=${weatherKey}`)
    .then(response => response.json())
    .then(parsedResponse => {
        help = parsedResponse.list;
    })
}

export const useHelp = () => {
    return help.slice();
}