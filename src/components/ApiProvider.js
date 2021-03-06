import React, { useState, createContext, useEffect } from "react"
import { keys } from "../Settings.js";

/*
    The context is imported and used by individual components that need data
*/
export const HelpContext = createContext()
/*
 This component establishes what data can be used.
 */

export const HelpProvider = (props) => {
// the following come directly from the APIs
    const [fire, setFire] = useState([])
    const [library, setLibrary] = useState([])
    const [police, setPolice] = useState([])
    const [wifi, setWifi] = useState([])



    const getFire = () => {
        return fetch(`https://data.nashville.gov/resource/frq9-a5iv.json?$$app_token=${keys.AppToken}`)
        .then(response => response.json())
        .then(parsedResponse => {
            const newFire = parsedResponse.map(x => {
                const newObj = {...x}
                newObj.name = x.station_number
            return newObj
        });
            setFire(newFire)
            return newFire
        })  
    }

    const getLibrary = () => {
        return fetch(`https://data.nashville.gov/resource/vn5u-d69i.json?$$app_token=${keys.AppToken}`)
        .then(response => response.json())
        .then(parsedResponse => {
            const newLibrary = parsedResponse.map((x, index) => {
                const newObj = {...x}
                if (index === 0) {
                    newObj.name= "none"
                } else {
                    newObj.name= x.library_name

                }
                newObj.street_address= x.location.human_address
                
            return newObj
        });
            setLibrary(newLibrary)
            return newLibrary
        })
    }

    const getPolice = () => {
        return fetch(`https://data.nashville.gov/resource/y5ik-ut5s.json?$$app_token=${keys.AppToken}`)
        .then(response => response.json())
        .then(parsedResponse => {
            const newPolice = parsedResponse.map(x => {
                const newObj = {...x}
                newObj.name = x.precinct_name
            return newObj
        });
            setPolice(newPolice)
            return newPolice
        })
    }

    const getWifi = () => {
        return fetch(`https://data.nashville.gov/resource/4ugp-s85t.json?$$app_token=${keys.AppToken}`)
        .then(response => response.json())
        .then(parsedResponse => {
            const newWifi = parsedResponse.map(x => {
                const newObj = {...x}
                newObj.name= x.site_name
            return newObj
        });
            setWifi(newWifi)
            return newWifi
        })
    }

    // useEffect(() => {
    //     getFire()
    //     getPolice()
    //     getWifi()
    //     getLibrary()

    // }, [])
    

    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
    return (
        <HelpContext.Provider value={{
            getFire, fire, getLibrary, library, getPolice, police, getWifi, wifi
        }}>
            {props.children}
        </HelpContext.Provider>
    )
}