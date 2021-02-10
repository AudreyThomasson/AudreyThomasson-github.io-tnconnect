import React, { useContext, useEffect, useState } from 'react'
import { Route } from "react-router-dom"
import { ResponsiveClippedDrawer } from './AppBarDrawer'
import  { LandingPage } from './LandingPage'
import { PoliceFireMap } from './PoliceFireMap'
import { ResourceMap } from './ResourceMap'
import { CardList } from './CardList'
import { HelpContext } from './ApiProvider'
import { CommResContext } from './CommResProvider'

export const ApplicationViews = () => {
    
    // global handling of the drawer sliding open and closed
    const [mobileOpen, setMobileOpen] = useState(false); 
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    
    // handle activating the api calls and setting the arrays of information
    const { getFire, getPolice, getWifi, getLibrary } = useContext(HelpContext)
    const { getCommRes } = useContext(CommResContext)

    useEffect(() => {
        getCommRes()
        getFire()
        getPolice()
        getWifi()
        getLibrary()

    }, [])

    return (
        <>

            {/* Home / Main Screen*/}
            <Route exact path="/">
                <ResponsiveClippedDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
                <LandingPage mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
                <ResourceMap />
                <PoliceFireMap />
                
            </Route>

            {/* Jump to Resources as Cards Page */}
           
                <Route exact path="/resources/:(\d+)">
                    <ResponsiveClippedDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
                    <CardList />  
                </Route>
            

        </>
    )
}