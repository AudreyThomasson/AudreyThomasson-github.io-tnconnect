import React from "react";
// import classNames from "classnames";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from '@material-ui/core/Toolbar';

import Parallax from "./Kit/Parallax.js";
import GridContainer from "./Kit/GridContainer.js";
import GridItem from "./Kit/GridItem.js";

const useStyles = makeStyles((theme) => ({
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
    
    zIndex: "12",
    color: "#FFFFFF",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    },
}));
// const dashboardRoutes = [];


export const LandingPage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <main className={classes.content}>
      <Toolbar />
      <Parallax filter image={require("../images/TNConnect-HumaaansGroup.png")} />
  
      
    </main>
  );
}
