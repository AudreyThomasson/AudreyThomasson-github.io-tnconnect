import React, { useContext, useEffect, useState } from "react"
// import { HelpContext } from "./HelpProvider"
import { OneCard } from "./Card"

const useStyles = makeStyles((theme) => ({
    title: {
        color: '#1976D2',
        textAlign: "center",
        paddingTop: "20px",
    
    },
}));

export const CardList = (key) => {
    const classes = useStyles();
    // const { Fire, Police, Wifi, Library, searchTerms } = useContext(HelpContext)

    // Since you are no longer ALWAYS displaying all of the help
    const [ filteredHelp, setFiltered ] = useState([])

    // Empty dependency array - useEffect only runs after first render
    // useEffect(() => {
    //     getFire()
    //     getPolice()
    //     getWifi()
    //     getLibrary()
    // }, [])


    // useEffect dependency array with dependencies - will run if dependency changes (state)
    // Filters for searchTerms and that the help belong to the activeUser
    // searchTerms will cause a change
    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is being used, display matching help
            const subset = allHelp.filter(place => place.notes.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)
        
        } else if (key === Fire) {
            // If the search field is blank and selected category is Fire, setFiltered to Fire
            setFiltered(Fire)
        
        } else if (key === Police) {
            setFiltered(Police)
        
        } else if (key === Library) {
            setFiltered(Library)
       
        } else if (key === Wifi) {
            setFiltered(Wifi)
        }
        
    }, [searchTerms, help])

 


    return (
        <>

                        
            <h1 className='classes.title'>Community Resources</h1>
            <br/>
            <Card.Group itemsPerRow={4} stackable className='cardHolder'>
            <>
                {
                filteredHelp.map(help => {
                    return <OneCard key={help.id} help={help} />
                })
                }
            </>
            </Card.Group>


        </>
    )
}