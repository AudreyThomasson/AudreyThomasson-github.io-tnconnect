import React from 'react';
import { createMuiTheme, ThemeProvider, Button } from '@material-ui/core';
import BackToTopBar from './components/TopBar';
import { ResponsiveDrawer } from './components/Drawer';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1976D2"
    },
    secondary: {
      main: "#8bc34e"
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <BackToTopBar/> */}
      <ResponsiveDrawer />
    </ThemeProvider>
  );
}

export default App;
