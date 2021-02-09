import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ScriptTag from 'react-script-tag';
import GridItem from "./Kit/GridItem.js";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
  
    container: {
        background: "#63a4ff",
        width: "100%",
       
    },
    mainRounded: {
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
        background: "#FFFFFF",
        margin: "40px 30px 0px",
        padding: "20px 0px 20px",
        borderRadius: "6px",
        // boxShadow:
        //     "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
   
}));

export const ResourceMap = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.mainRounded}>
        <Grid justify="center">
            <GridItem xs={12} sm={12} md={8} >
                <div >
                    <ScriptTag
                        type="text/javascript"
                        charset="UTF-8" 
                        data-locale="en" 
                        data-socrata-domain="data.nashville.gov" 
                        src="https://data.nashville.gov/component/visualization/v1/socrata-visualizations-loader.js" />
                    <a 
                        class="socrata-visualization-embed" 
                        data-embed-version="1" 
                        data-height="400" 
                        data-socrata-domain="data.nashville.gov" 
                        data-vizcan-uid="wfmh-wtaw" 
                        data-vif="{&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;mapCenterAndZoom&quot;:{&quot;center&quot;:{&quot;lng&quot;:-86.76827256197106,&quot;lat&quot;:36.15826293250541},&quot;zoom&quot;:10.43175225720158},&quot;basemapOptions&quot;:{&quot;basemapOpacity&quot;:1,&quot;navigationControl&quot;:true,&quot;basemapStyle&quot;:&quot;https://a.tiles.mapbox.com/v3/socrata-apps.3ecc65d4/{z}/{x}/{y}.png&quot;,&quot;geoCoderControl&quot;:true,&quot;geoLocateControl&quot;:true},&quot;mapPitchAndBearing&quot;:{&quot;bearing&quot;:0,&quot;pitch&quot;:0},&quot;datasetMetadata&quot;:false,&quot;panAndZoom&quot;:true,&quot;locateUser&quot;:false},&quot;series&quot;:[{&quot;unit&quot;:{&quot;other&quot;:&quot;Resources&quot;,&quot;one&quot;:&quot;Resource&quot;},&quot;visible&quot;:true,&quot;color&quot;:{&quot;palette&quot;:&quot;categorical2&quot;,&quot;primary&quot;:&quot;#ba001e&quot;},&quot;mapOptions&quot;:{&quot;pointSize&quot;:12,&quot;simplificationLevel&quot;:&quot;2&quot;,&quot;colorByQuantificationMethod&quot;:&quot;category&quot;,&quot;mapFlyoutTitleColumnName&quot;:&quot;contact&quot;,&quot;mapType&quot;:&quot;pointMap&quot;,&quot;pointOpacity&quot;:80,&quot;additionalFlyoutColumns&quot;:[&quot;contact_type&quot;,&quot;phone_number&quot;,&quot;notes&quot;],&quot;colorPointsBy&quot;:&quot;contact_type&quot;},&quot;showLegend&quot;:true,&quot;type&quot;:&quot;map&quot;,&quot;dataSource&quot;:{&quot;measure&quot;:{&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;name&quot;:&quot;Community Resource Information&quot;,&quot;filters&quot;:[{&quot;function&quot;:&quot;noop&quot;,&quot;isHidden&quot;:false,&quot;columnName&quot;:&quot;contact_type&quot;,&quot;arguments&quot;:null}],&quot;type&quot;:&quot;socrata.soql&quot;,&quot;dimension&quot;:{&quot;columnName&quot;:&quot;geocoded_column&quot;,&quot;aggregationFunction&quot;:null},&quot;datasetUid&quot;:&quot;8zc7-2afq&quot;},&quot;primary&quot;:true,&quot;label&quot;:null}],&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:3},&quot;description&quot;:&quot;Mapped locations of community contacts for citizens seeking assistance. Can be filtered by type of resource.&quot;,&quot;id&quot;:&quot;beadf651-8659-da57-f6ca-b3a6943104b7&quot;,&quot;title&quot;:&quot;Community Resource Information (Map)&quot;}" 
                        data-width="300" 
                        href="https://data.nashville.gov/Police/Community-Resource-Information/ekvg-j2ns?referrer=embed" 
                        rel="external" target="_blank">View the data</a>
                </div>
            </GridItem>
        </Grid>
        </div>
        </div>
    )
}