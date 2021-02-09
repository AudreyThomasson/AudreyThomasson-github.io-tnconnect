import React, { useContext, useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
// import { HelpContext } from "./HelpProvider"
import OneCard from "./Card"
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/styles';
import { HelpProvider, HelpContext } from './ApiProvider'


const useStyles = makeStyles((theme) => ({
    title: {
        color: '#1976D2',
        textAlign: "center",
        paddingTop: "20px",
    
    },
}));

export const CardList = () => {
    const classes = useStyles();
    const { key } = useParams();
    const { fire, police, wifi, library, searchTerms } = useContext(HelpContext)

    // Sets the array that will be passed to the Cards and rendered based on what is chosen in the 
    // drawer menus or the search bar
    const [ filteredHelp, setFiltered ] = useState([])

    // Empty dependency array - useEffect only runs after first render
    // useEffect(() => {
    //     getFire()
    //     getPolice()
    //     getWifi()
    //     getLibrary()
    // }, [])


    // useEffect dependency array with dependencies - will run if dependency changes (state)
    // Filters for searchTerms or a selection on the drawer menus
    // searchTerms will cause a change
    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is being used, display matching help
            const subset = allHelp.filter(place => place.notes.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)
        
        } else if (key === "fire") {
            // If the search field is blank and selected category is Fire, setFiltered to Fire
            setFiltered(fire)
        
        } else if (key === "police") {
            setFiltered(police)
        
        } else if (key === "library") {
            setFiltered(library)
       
        } else if (key === "wifi") {
            setFiltered(wifi)
        }
        
    }, [searchTerms, key])

 


    return (
        <>

            <Grid justify="center" >           
                <h1 className='classes.title'>Community Resources</h1>
                <br/>
                
                <>
                    {
                    filteredHelp.map(help => {
                        return <OneCard key={help.id} help={help} />
                    })
                    }
                </>
            </Grid>


        </>
    )
}