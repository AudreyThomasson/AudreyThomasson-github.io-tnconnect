import React, { useState, createContext } from "react"
import { keys } from "../Settings.js";

let CommRes = [];
let Fire = [];
let Library = [];
let Police = [];
let Wifi = [];

const key = keys.AppToken;


/*
    The context is imported and used by individual components
    that need data
*/
export const HelpContext = createContext()
/*
 This component establishes what data can be used.
 */

export const HelpProvider = (props) => {
    const [CommRes, setCommRes] = useState([])
    const [Fire, setFire] = useState([])
    const [Library, setLibrary] = useState([])
    const [Police, setPolice] = useState([])
    const [Wifi, setWifi] = useState([])

    const [ searchTerms, setSearchTerms ] = useState("")

    const getCommRes = () => {
    return fetch(`https://data.nashville.gov/resource/ekvg-j2ns.json?$$app_token=${key}`)
    .then(response => response.json())
    .then(setCommRes)
    }

    const getFire = () => {
        return fetch(`https://data.nashville.gov/resource/frq9-a5iv.json?$$app_token=${key}`)
        .then(response => response.json())
        .then(setFire)
    }

    const getLibrary = () => {
        return fetch(`https://data.nashville.gov/resource/vn5u-d69i.json?$$app_token=${key}`)
        .then(response => response.json())
        .then(setLibrary)
    }

    const getPolice = () => {
        return fetch(`https://data.nashville.gov/resource/y5ik-ut5s.json?$$app_token=${key}`)
        .then(response => response.json())
        .then(setPolice)
    }

    const getWifi = () => {
        return fetch(`https://data.nashville.gov/resource/4ugp-s85t.json?$$app_token=${key}`)
        .then(response => response.json())
        .then(setWifi)
    }



    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
    return (
        <HelpContext.Provider value={{
            Fire, getFire, Library, getLibrary, Police, getPolice, Wifi, getWifi, searchTerms, setSearchTerms
        }}>
            {props.children}
        </HelpContext.Provider>
    )
}