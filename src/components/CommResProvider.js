import React, { useState, createContext, useEffect } from "react"
import { keys } from "../Settings.js";

/*
    The context is imported and used by individual components that need data
*/
export const CommResContext = createContext()
/*
 This component establishes what data can be used.
 */


export const CommResProvider = (props) => {
    const [ searchTerms, setSearchTerms ] = useState("")
// the following is directly from the API and used for the search terms
    const [commRes, setCommRes] = useState([])

// makes all the category arrays available in state
    const [childcare, setChildcare] = useState([])
    const [children, setChildren] = useState([])
    const [christmas, setChristmas] = useState([])
    const [clothing, setClothing] = useState([])
    const [counseling, setCounseling] = useState([])
    const [crisis, setCrisis] = useState([])
    const [disability, setDisability] = useState([])
    const [esl, setESL] = useState([])
    const [food, setFood] = useState([])
    const [ged, setGED] = useState([])
    const [health, setHealth] = useState([])
    const [housing, setHousing] = useState([])
    const [imgref, setImgRef] = useState([])
    const [training, setTraining] = useState([])
    const [lawyerD, setLawyerD] = useState([])
    const [lawyerI, setLawyerI] = useState([])
    const [legal, setLegal] = useState([])
    const [medical, setMedical] = useState([])
    const [mens, setMens] = useState([])
    const [pet, setPet] = useState([])
    const [phone, setPhone] = useState([])
    const [rehab, setRehab] = useState([])
    const [rent, setRent] = useState([])
    const [sdHousing, setSDHousing] = useState([])
    const [tax, setTax] = useState([])
    const [teen, setTeen] = useState([])
    const [transport, setTransport] = useState([])

// goes to the community resource api
    const getCommRes = () => {
        return fetch(`https://data.nashville.gov/resource/ekvg-j2ns.json?$$app_token=${keys.AppToken}`)
        .then(response => response.json())
        .then(parsedResponse => {
            const newCommRes = parsedResponse.map(x => {
                const newObj = {...x}
                newObj.name = x.contact
            return newObj
        });
            setCommRes(newCommRes)
            return newCommRes
        })
    }
    
    // splits the results from the community resource api into categories
    const newChildcare = commRes.filter(help => help.contact_type === "Childcare")
        setChildcare(newChildcare)
    const newChildren = commRes.filter(help => help.contact_type === "Children's Services")
        setChildren(newChildren)
    const newChristmas = commRes.filter(help => help.contact_type === "Christmas")
        setChristmas(newChristmas)
    const newClothing = commRes.filter(help => help.contact_type === "Clothing")
        setClothing(newClothing)
    const newCounseling = commRes.filter(help => help.contact_type === "Counseling")
        setCounseling(newCounseling)
    const newCrisis = commRes.filter(help => help.contact_type === "Crisis Info Resources")
        setCrisis(newCrisis)
    const newDisability = commRes.filter(help => help.contact_type === "Disability")
        setDisability(newDisability)
    const newESL = commRes.filter(help => help.contact_type === "ESL Classes")
        setESL(newESL)
    const newFood = commRes.filter(help => help.contact_type === "Food")
        setFood(newFood)
    const newGED = commRes.filter(help => help.contact_type === "GED/Education")
        setGED(newGED)
    const newHealth = commRes.filter(help => help.contact_type === "Health Insurance")
        setHealth(newHealth)
    const newHousing = commRes.filter(help => help.contact_type === "Housing")
        setHousing(newHousing)
    const newImgRef = commRes.filter(help => help.contact_type === "Immigrant/Refugee")
        setImgRef(newImgRef)
    const newTraining = commRes.filter(help => help.contact_type === "Job Training")
        setTraining(newTraining)
    const newLawyerD = commRes.filter(help => help.contact_type === "Lawyers (Divorce)")
        setLawyerD(newLawyerD)
    const newLawyerI = commRes.filter(help => help.contact_type === "Lawyer (Immigration)")
        setLawyerI(newLawyerI)
    const newLegal = commRes.filter(help => help.contact_type === "Legal Assistance")
        setLegal(newLegal)
    const newMedical = commRes.filter(help => help.contact_type === "Medical/Dental")
        setMedical(newMedical)
    const newMens = commRes.filter(help => help.contact_type === "Men's Resources")
        setMens(newMens)
    const newPet = commRes.filter(help => help.contact_type === "Pet Resources")
        setPet(newPet)
    const newPhone = commRes.filter(help => help.contact_type === "Phone")
        setPhone(newPhone)
    const newRehab = commRes.filter(help => help.contact_type === "Rehab - Drug/Alcohol")
        setRehab(newRehab)
    const newRent = commRes.filter(help => help.contact_type === "Rent/Mortgage/Utility Help")
        setRent(newRent)
    const newSDHousing = commRes.filter(help => help.contact_type === "Senior/Disabled Housing")
        setSDHousing(newSDHousing)
    const newTax = commRes.filter(help => help.contact_type === "Tax Prep")
        setTax(newTax)
    const newTeen = commRes.filter(help => help.contact_type === "Teen Services")
        setTeen(newTeen)
    const newTransport = commRes.filter(help => help.contact_type === "Transportation Services")
        setTransport(newTransport)
   
        
    // useEffect(() => {
    //     getCommRes()
    // }, [])


    /*
    This allows any child elements to access them.
    */
    return (
        <CommResContext.Provider value={{
            getCommRes, commRes, childcare, children, christmas, clothing, counseling, crisis, disability, esl, food,
            ged, health, housing, imgref, training, lawyerD, lawyerI, legal, medical, mens, pet, phone, rehab, rent,
            sdHousing, tax, teen, transport
        }}>
            {/* searchTerms, setSearchTerms */}
            {props.children}
        </CommResContext.Provider>
    )
}