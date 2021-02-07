// fetches from the API 
// slices the array 
import React, { useState, createContext } from "react"

import {keys} from "../Settings.js";

let help = [];
const weatherKey = keys.weatherKey;


/*
    The context is imported and used by individual components
    that need data
*/
export const HelpContext = createContext()
/*
 This component establishes what data can be used.
 */

export const HelpProvider = (props) => {
    const [help, setHelp] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const getHelp = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?&units=imperial&zip=${zipCode}&appid=${weatherKey}`)
    .then(response => response.json())
    .then(setHelp)
    }



    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
    return (
        <HelpContext.Provider value={{
            help, getHelp, searchTerms, setSearchTerms
        }}>
            {props.children}
        </HelpContext.Provider>
    )
}