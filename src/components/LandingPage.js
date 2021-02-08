import React from "react";
// import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";


import Parallax from "./Kit/Parallax.js";
import GridContainer from "./Kit/GridContainer.js";
import GridItem from "./Kit/GridItem.js";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    },

  container: {
    "@media (min-width: 576px)": {
      maxWidth: "540px"
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px"
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1140px"
    },
    
    // zIndex: "12",
    // color: "#FFFFFF",
  },
  // main: {
  //   background: "#FFFFFF",
  //   position: "relative",
  //   zIndex: "3"
  // },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },

  humaaans: {
    backgroundImage: "url(/images/TNConnect-HumaaansGroup.svg)",
    height: "30vh",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    
  },

  title: {
    color: '#E51111'
  
  } 
}));



export const LandingPage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <main className={classes.content}>
      <Toolbar />
      <div   className={classes.humaaans} alt='colorful illustration of group of people'/>
      {/* <Parallax filter image={require("../images/TNConnect-HumaaansGroup.png")} /> */}
  
      <div className={classes.mainRaised}>
        <div className={classes.container, classes.section}>
        
            <Grid justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h1 className={classes.title} >We are here to help!</h1>
                <h4 className={classes.description}>
                  Don't struggle alone. Nashville.gov maintains a list of resources available to help residents.
                  Click on the button below to filter by category.
                </h4>
                <Button
                  variant="contained"
                  open={props.mobileOpen}
                  color="primary"
                  aria-label="open drawer"
                  onClick={props.handleDrawerToggle}
                  disableElevation
                >
                Search by Category
                </Button>
                
              </GridItem>
            </Grid>
        </div>
      </div>
    </main>
  );
}
