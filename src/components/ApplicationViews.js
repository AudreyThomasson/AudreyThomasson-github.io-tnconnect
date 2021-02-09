import React from 'react'
import { Route } from "react-router-dom"
import { ResponsiveClippedDrawer } from './AppBarDrawer'
import  { LandingPage } from './LandingPage'
import { PoliceFireMap } from './PoliceFireMap'
import { ResourceMap } from './ResourceMap'

export const ApplicationViews = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

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
            <Route exact path="/help">
                <ResponsiveClippedDrawer />
                
            </Route>


        </>
    )
}