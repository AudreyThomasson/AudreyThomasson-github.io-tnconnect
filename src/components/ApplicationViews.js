import React, { useContext, useEffect, useState } from 'react'
import { Route } from "react-router-dom"
import { ResponsiveClippedDrawer } from './AppBarDrawer'
import  { LandingPage } from './LandingPage'
import { PoliceFireMap } from './PoliceFireMap'
import { ResourceMap } from './ResourceMap'
import { HelpContext } from "./HelpProvider"
import { CardList } from './CardList'


export const ApplicationViews = () => {
    
    // global handling of the drawer sliding open and closed
    const [mobileOpen, setMobileOpen] = React.useState(false); 
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    
    // handle activating the api calls and setting the arrays of information
    const { Fire, Police, Wifi, Library, searchTerms } = useContext(HelpContext)
    
    useEffect(() => {
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

            {/* Jump to About Page */}
            <Route exact path="/resources">
                <ResponsiveClippedDrawer />
                <CardList />
                
            </Route>


        </>
    )
}