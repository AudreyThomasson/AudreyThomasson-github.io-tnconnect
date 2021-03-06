import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
  },
  
  container: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "1.5rem",
    paddingLeft: "1.5rem",
    paddingBottom: "2.5rem",
    flexBasis: "auto",


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
  
  },
  
  mainRaised: {
    margin: "20px 30px 20px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
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
    color: '#1976D2',
    textAlign: "center",
    paddingTop: ".4rem",
  },

  description: { 
    color: "#5e5e5e",
    marginTop: "-10px",
  },
  
}));



export const LandingPage = (props) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Toolbar />
      <div   className={classes.humaaans} alt='colorful illustration of group of people'/>
  
      <div className={classes.mainRaised}  >
        <div className={classes.container} >
              <Grid container xs={12} style={{justifyContent: 'center'}}>

                <h1 className={classes.title} >We are here to help!</h1>
                <h4 className={classes.description}>
                  Don't struggle alone. Nashville.gov maintains a list of resources available to help residents.
                  Click on the button below to filter by category.
                </h4>
                
                <Button
                  variant="contained"
                  color="secondary"
                  aria-label="open drawer"
                  open={props.mobileOpen}
                  onClick={props.handleDrawerToggle}
                  disableElevation
                >
                Search by Category
                </Button>
                              
            </Grid>
        </div>
      </div>
    </main>
  );
}
