// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import TuneIcon from '@material-ui/icons/Tune';
// import SearchIcon from '@material-ui/icons/Search';
// import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
// import Fab from '@material-ui/core/Fab';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import Zoom from '@material-ui/core/Zoom';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         position: 'fixed',
//         bottom: theme.spacing(2),
//         right: theme.spacing(2),
//     },

//     bar: {
//         borderBottom: 10,
//         borderBlockColor: '#1976D2',

//     },

//     title: {
//         flexGrow: 1,
//         paddingTop: 6,
//         paddingLeft: 5,
//     },

//     logo: {
//         height: '45px',
//     },

// }));

// function ScrollTop(props) {
//   const { children } = props;
//   const classes = useStyles();

//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   const handleClick = (event) => {
//     const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

//     if (anchor) {
//       anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//   };

//   return (
//     <Zoom in={trigger}>
//       <div onClick={handleClick} role="presentation" className={classes.root}>
//         {children}
//       </div>
//     </Zoom>
//   );
// }


// export default function BackToTopBar(props) {
//     const classes = useStyles();
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <AppBar style={{backgroundColor: "white"}} borderBottom={5} borderColor="primary.main">
//         <Toolbar >
//             <IconButton edge="start" color="secondary" aria-label="open drawer">
//                 <TuneIcon />
//             </IconButton>

//             <Typography variant="h6" className={classes.title} >
//                 <img src="/images/TNConnect-FULL-Logo.svg" className={classes.logo} alt='Logo with hour outlines of people in circle forming a plus sign'/>
//             </Typography>
            
//             <IconButton color="secondary">
//                 <SearchIcon />
//             </IconButton>

//         </Toolbar>

//       </AppBar>
//       <Toolbar id="back-to-top-anchor" />
//       <Container>
//         <Box my={2} >
//           {[...new Array(12)]
//             .map(
//               () => `Cras mattis consectetur purus sit amet fermentum.
// Cras justo odio, dapibus ac facilisis in, egestas eget quam.
// Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
// Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
//             )
//             .join('\n')}
//         </Box>
//       </Container>
//       <ScrollTop {...props}>
//         <Fab color="secondary" size="small" aria-label="scroll back to top">
//           <KeyboardArrowUpIcon />
//         </Fab>
//       </ScrollTop>
//     </React.Fragment>
//   );
// }
