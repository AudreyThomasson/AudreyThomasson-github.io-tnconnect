import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    city: {
        width: "350px",
        height: "250px",
    }
}));

export const ResourceMap = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.city}>
            <script type="text/javascript" charset="UTF-8" data-locale="en" data-socrata-domain="data.nashville.gov" src="https://data.nashville.gov/component/visualization/v1/socrata-visualizations-loader.js"></script>
        </div>
    )
}