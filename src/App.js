import React from 'react';
import { createMuiTheme, ThemeProvider, Button } from '@material-ui/core';
import BackToTopBar from './components/TopBar';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1976D2"
    },
    secondary: {
      main: "#7cb342"
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BackToTopBar/>
    </ThemeProvider>
  );
}

export default App;
