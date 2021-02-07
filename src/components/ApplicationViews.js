import React from 'react'
import { Route } from "react-router-dom"
import { ResponsiveClippedDrawer } from './AppBarDrawer'

export const ApplicationViews = () => {
    return (
        <>
            {/* Home / Main Screen*/}
            <Route exact path="/">
                <ResponsiveClippedDrawer />
                
            </Route>

            {/* Jump to About Page */}
            <Route exact path="/help">
                <ResponsiveClippedDrawer />
                
            </Route>


        </>
    )
}