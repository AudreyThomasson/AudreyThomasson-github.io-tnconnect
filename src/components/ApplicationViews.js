import React, { useContext, useEffect, useState } from 'react'
import { Route } from "react-router-dom"
import { ResponsiveClippedDrawer } from './AppBarDrawer'
import  { LandingPage } from './LandingPage'
import { PoliceFireMap } from './PoliceFireMap'
import { ResourceMap } from './ResourceMap'
import { CardList } from './CardList'

export const ApplicationViews = () => {
    // global handling of the search Modal
    // const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };
    // const handleClose = () => {
    //     setOpen(false);
    // };
    // global handling of the drawer sliding open and closed
    const [mobileOpen, setMobileOpen] = useState(false); 
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    

    return (
        <>

            {/* Home / Main Screen*/}
            <Route exact path="/">
                <ResponsiveClippedDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
                <LandingPage mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
                {/* <ResponsiveClippedDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}/>
                <LandingPage mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}/> */}
                <ResourceMap />
                <PoliceFireMap />
                
            </Route>

            {/* Jump to Resources as Cards Page */}
           
                <Route exact path="/resources/:(\d+)">
                    <ResponsiveClippedDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
                    {/* <ResponsiveClippedDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}/> */}

                    <CardList />  
                </Route>
            

        </>
    )
}