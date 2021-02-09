import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
        margin: "20px 30px 0px",
        borderRadius: "6px",
        // boxShadow:
        //     "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
        },
}));

export const PoliceFireMap = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
        <div className={classes.mainRounded}>
        <Grid justify="center">
            <GridItem xs={12} sm={12} md={8}>
                <div >
                    <script 
                        type="text/javascript" 
                        charset="UTF-8" 
                        data-locale="en" 
                        data-socrata-domain="data.nashville.gov" 
                        src="https://data.nashville.gov/component/visualization/v1/socrata-visualizations-loader.js">
                    </script>
                    <a 
                        class="socrata-visualization-embed"
                        data-embed-version="1" 
                        data-height="225" 
                        data-socrata-domain="data.nashville.gov" 
                        data-vizcan-uid="3acx-575e" 
                        data-vif="{&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;mapCenterAndZoom&quot;:{&quot;center&quot;:{&quot;lng&quot;:-86.7553535667443,&quot;lat&quot;:36.18976060442722},&quot;zoom&quot;:10.055873958219882},&quot;basemapOptions&quot;:{&quot;searchBoundaryLowerRightLongitude&quot;:-86.599401,&quot;searchBoundaryUpperLeftLongitude&quot;:-86.934168,&quot;searchBoundaryUpperLeftLatitude&quot;:36.322277,&quot;navigationControl&quot;:true,&quot;basemapStyle&quot;:&quot;mapbox://styles/mapbox/basic-v9&quot;,&quot;geoCoderControl&quot;:true,&quot;geoLocateControl&quot;:true,&quot;searchBoundaryLowerRightLatitude&quot;:36.039834},&quot;mapPitchAndBearing&quot;:{&quot;bearing&quot;:0,&quot;pitch&quot;:0},&quot;datasetMetadata&quot;:false,&quot;panAndZoom&quot;:true,&quot;locateUser&quot;:false},&quot;series&quot;:[{&quot;unit&quot;:{&quot;other&quot;:&quot;Locations&quot;,&quot;one&quot;:&quot;Location&quot;},&quot;visible&quot;:true,&quot;color&quot;:{&quot;palette&quot;:&quot;custom&quot;,&quot;customPalette&quot;:{&quot;resource_type&quot;:{&quot;Police Precinct&quot;:{&quot;dashed&quot;:false,&quot;color&quot;:&quot;#1e489f&quot;,&quot;index&quot;:1,&quot;charmName&quot;:&quot;&quot;,&quot;id&quot;:&quot;Police Precinct&quot;,&quot;label&quot;:&quot;Police Precinct&quot;},&quot;Fire Station&quot;:{&quot;dashed&quot;:false,&quot;color&quot;:&quot;#ba001e&quot;,&quot;index&quot;:0,&quot;charmName&quot;:&quot;&quot;,&quot;id&quot;:&quot;Fire Station&quot;,&quot;label&quot;:&quot;Fire Station&quot;}}},&quot;primary&quot;:&quot;#eb6900&quot;},&quot;mapOptions&quot;:{&quot;pointSize&quot;:15,&quot;simplificationLevel&quot;:&quot;1&quot;,&quot;colorByQuantificationMethod&quot;:&quot;category&quot;,&quot;mapFlyoutTitleColumnName&quot;:&quot;resource_name_number&quot;,&quot;mapType&quot;:&quot;pointMap&quot;,&quot;additionalFlyoutColumns&quot;:[&quot;resource_type&quot;,&quot;street_address&quot;,&quot;city&quot;,&quot;zip_code&quot;],&quot;colorPointsBy&quot;:&quot;resource_type&quot;},&quot;showLegend&quot;:true,&quot;type&quot;:&quot;map&quot;,&quot;dataSource&quot;:{&quot;measure&quot;:{&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;name&quot;:&quot;Public Safety Resource Locations&quot;,&quot;type&quot;:&quot;socrata.soql&quot;,&quot;dimension&quot;:{&quot;columnName&quot;:&quot;mapped_location&quot;,&quot;aggregationFunction&quot;:null},&quot;datasetUid&quot;:&quot;uexy-gzdy&quot;,&quot;filters&quot;:[]},&quot;primary&quot;:true,&quot;label&quot;:null}],&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:3},&quot;description&quot;:&quot;&quot;,&quot;id&quot;:&quot;218dbe7d-c0d3-48bd-a0ff-a8ebaaa29aee&quot;,&quot;title&quot;:&quot;&quot;}" data-width="300" href="https://data.nashville.gov/Public-Safety/Public-Safety-Resource-Locations/5ac5-37sv?referrer=embed" 
                        rel="external" 
                        target="_blank">View the data
                    </a>
                </div>
            </GridItem>
        </Grid>
        </div>
        </div>
    )
}