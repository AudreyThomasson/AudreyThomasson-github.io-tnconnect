import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import TuneIcon from '@material-ui/icons/Tune';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import getCategories from './NestedDrawerCategories';
import NestedMenu01 from './NestedMenu01';
import OneCard from './Card';
import { LandingPage } from './LandingPage';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        // position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },

    
    appBar: {
        zIndex: theme.zIndex.modal + 2,
        
        
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    
    filterButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    
    bar: {
        borderBottom: 10,
        borderBlockColor: '#1976D2',
    },
    
    title: {
        flexGrow: 1,
        paddingTop: 6,
        paddingLeft: 5,
    },
    
    logo: {
        height: '45px',
    },
    
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    
    drawer: {
        [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
        },
    },


    drawerContainer: {
        overflow: 'auto',
      },

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },

}));

// function ScrollTop(props) {
//     const { children } = props;
//     const classes = useStyles();
  
//     const trigger = useScrollTrigger({
//       disableHysteresis: true,
//       threshold: 100,
//     });
  
//     const handleClick = (event) => {
//       const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
  
//       if (anchor) {
//         anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
//       }
//     };
  
//     return (
//       <Zoom in={trigger}>
//         <div onClick={handleClick} role="presentation" className={classes.root}>
//           {children}
//         </div>
//       </Zoom>
//     );
// }

export const ResponsiveClippedDrawer = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar} style={{backgroundColor: "white"}}>
                <Toolbar>
                    <IconButton
                        color="secondary"
                        aria-label="open drawer"
                        edge="start"
                        onClick={props.handleDrawerToggle}
                        className={classes.filterButton}
                    >
                        <TuneIcon />
                    </IconButton>

                    <Typography variant="h6" className={classes.title} >
                    <img src="/images/TNConnect-FULL-Logo.svg" className={classes.logo} alt='Logo with hour outlines of people in circle forming a plus sign'/>
                    </Typography>

                    <IconButton color="secondary">
                        <SearchIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />

        {/* -------DRAWER FOR MOBILE SIZE SCREEN------- */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={props.mobileOpen}
            onClose={props.handleDrawerToggle}
            className={classes.drawer}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {/* NestedMenu01 is the function that renders all the
              categories listed in getCategories on the drawer */}
            <Toolbar />
            <div className={classes.drawerContainer}/>
            <List
                component="nav"
                aria-labelledby="category-subheader"
                subheader={
                    <ListSubheader component="div" id="category-subheader">
                    Click a category to view:
                    </ListSubheader>
                }>

                <NestedMenu01 menus={getCategories()} selectedKeys={['button']} mobileOpen={props.mobileOpen} handleDrawerToggle={props.handleDrawerToggle}/>
            </List>
          </Drawer>
        </Hidden>
        
        {/* --------DRAWER FOR LARGER SCREENS-------- */}
        {/* The permanent drawer is hidden on xs screens and replaced
        by the sliding out drawer from above */}
        <Hidden xsDown implementation="css">
            <Drawer
                className={classes.drawer}
                classes={{
                paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
            >
               {/* NestedMenu01 is the function that renders all the
              categories listed in getCategories on the drawer */}
                <Toolbar />
                <div className={classes.drawerContainer}/>
                <List
                    component="nav"
                    aria-labelledby="category-subheader"
                    subheader={
                        <ListSubheader component="div" id="category-subheader">
                        Click a category to view:
                        </ListSubheader>
                    }>
                    <NestedMenu01 menus={getCategories()} selectedKeys={['button']} />
                </List>
            </Drawer>
        </Hidden>
     

            {/* <main className={classes.content}>
                <Toolbar /> */}

                    {/* <OneCard /> */}
                    {/* <LandingPage /> */}
                    {/* <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                    facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                    tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                    consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                    vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                    hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                    tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                    nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                    </Typography> */}
            {/* </main> */}

            {/* <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop> */}
        </div>
    );
}
