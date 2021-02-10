import React, { useContext, useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import OneCard from "./Card"
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/styles';
import { HelpContext } from './ApiProvider'
import { CommResContext } from "./CommResProvider";


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

    const { fire, police, wifi, library } = useContext(HelpContext)
    // const { commRes, childcare, children, christmas, clothing, counseling, crisis, disability, esl, food,
    //     ged, health, housing, imgref, training, lawyerD, lawyerI, legal, medical, mens, pet, phone, rehab, rent,
    //     sdHousing, tax, teen, transport } = useContext(CommResContext)
    // Sets the array that will be passed to the Cards and rendered based on what is chosen in the 
    // drawer menus or the search bar
    const [ filteredHelp, setFiltered ] = useState([])

   


    // useEffect dependency array with dependencies - will run if dependency changes (state)
    // Filters for searchTerms or a selection on the drawer menus
    // searchTerms will cause a change
    useEffect(() => {
        // if (searchTerms !== "") {
        //     // If the search field is being used, display matching help
        //     const subset = commRes.filter(place => place.notes.toLowerCase().includes(searchTerms.toLowerCase())
        //          || place.name.toLowerCase().includes(searchTerms.toLowerCase()))
        //     setFiltered(subset)
        // } else  if ((searchTerms !== "") && (searchTerms.toLowerCase() === 'fire')) {
        //     setFiltered(fire)
        
        // } else if ((searchTerms !== "") && (searchTerms.toLowerCase() === 'police')) {
        //     setFiltered(police)
         
        // } else if ((searchTerms !== "") && (searchTerms.toLowerCase() === 'library')) {
        //     setFiltered(library)
         
        // } else  if ((searchTerms !== "") && (searchTerms.toLowerCase() === 'wifi')) {
        //     setFiltered(wifi)
        
        
        if (key === "fire") {
            // If the search field is blank and selected category is Fire, setFiltered to Fire
            setFiltered(fire)
        
        } else if (key === "police") {
            setFiltered(police)
        
        } else if ((key === "library") || (key === "library-main")) {
            setFiltered(library)
       
        } else if ((key === "wifi") || (key === "wifi-main")) {
            setFiltered(wifi)
        }

        // } else if (key === "childcare") {
        //     setFiltered(childcare)
        // } else if (key === "children") {
        //     setFiltered(children)
        // } else if (key === "christmas") {
        //     setFiltered(christmas)
        // } else if (key === "clothing") {
        //     setFiltered(clothing)
        // } else if (key === "counseling") {
        //     setFiltered(counseling)
        // } else if (key === "crisis") {
        //     setFiltered(crisis)
        // } else if (key === "disability") {
        //     setFiltered(disability)
        // } else if (key === "esl") {
        //     setFiltered(esl)
        // } else if (key === "food") {
        //     setFiltered(food)
        // } else if (key === "ged") {
        //     setFiltered(ged)
        // } else if (key === "health") {
        //     setFiltered(health)
        // } else if (key === "housing") {
        //     setFiltered(housing)
        // } else if (key === "img-ref") {
        //     setFiltered(imgref)
        // } else if (key === "training") {
        //     setFiltered(training)
        // } else if (key === "lawyer-d") {
        //     setFiltered(lawyerD)
        // } else if (key === "lawyer-i") {
        //     setFiltered(lawyerI)
        // } else if (key === "legal") {
        //     setFiltered(legal)
        // } else if (key === "medical") {
        //     setFiltered(medical)
        // } else if ((key === "mens") || (key === "mens-main")) {
        //     setFiltered(mens)
        // } else if (key === "pet") {
        //     setFiltered(pet)
        // } else if (key === "phone") {
        //     setFiltered(phone)
        // } else if (key === "rehab") {
        //     setFiltered(rehab)
        // } else if (key === "rent") {
        //     setFiltered(rent)
        // } else if (key === "s-d-housing") {
        //     setFiltered(sdHousing)
        // } else if (key === "tax") {
        //     setFiltered(tax)
        // } else if (key === "teen") {
        //     setFiltered(teen)
        // } else if ((key === "transport") || (key === "transport-main")) {
        //     setFiltered(transport)
        // }
    }, [key])
// }, [searchTerms, key])

 


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