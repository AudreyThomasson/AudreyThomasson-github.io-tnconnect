import React, { useState, createContext } from "react"
import { keys } from "../Settings.js";

let commRes = [];
let fire = [];
let library = [];
let police = [];
let wifi = [];

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
    const [commRes, setCommRes] = useState([])
    const [fire, setFire] = useState([])
    const [library, setLibrary] = useState([])
    const [police, setPolice] = useState([])
    const [wifi, setWifi] = useState([])

    const [ searchTerms, setSearchTerms ] = useState("")

    const getCommRes = () => {
    return fetch(`https://data.nashville.gov/resource/ekvg-j2ns.json?$$app_token=${key}`)
    .then(response => response.json())
    .then(setCommRes)
    }

    const getFire = () => {
        return fetch(`https://data.nashville.gov/resource/frq9-a5iv.json?$$app_token=${key}`)
        .then(response => response.json())
        .then(parsedResponse => {
            const newFire = parsedResponse.map(x => {
                x['name']= x.station_number
            });
            setFire(newFire)
        })  
    }

    const getLibrary = () => {
        return fetch(`https://data.nashville.gov/resource/vn5u-d69i.json?$$app_token=${key}`)
        .then(response => response.json())
        .then(parsedResponse => {
            const newLibrary = parsedResponse.map(x => {
                x['name']= x.library_name
                x['address']= x.location
            });
            setLibrary(newLibrary)
        })
    }

    const getPolice = () => {
        return fetch(`https://data.nashville.gov/resource/y5ik-ut5s.json?$$app_token=${key}`)
        .then(response => response.json())
        .then(parsedResponse => {
            const newPolice = parsedResponse.map(x => {
                x['name']= x.precinct_name
            });
            setPolice(newPolice)
        })
    }

    const getWifi = () => {
        return fetch(`https://data.nashville.gov/resource/4ugp-s85t.json?$$app_token=${key}`)
        .then(response => response.json())
        .then(parsedResponse => {
            const newWifi = parsedResponse.map(x => {
                x['name']= x.site_name
            });
            setWifi(newWifi)
        })
    }



    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
    return (
        <HelpContext.Provider value={{
            getCommRes, fire, getFire, library, getLibrary, police, getPolice, wifi, getWifi, searchTerms, setSearchTerms
        }}>
            {props.children}
        </HelpContext.Provider>
    )
}