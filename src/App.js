import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { ApplicationViews } from './components/ApplicationViews';

import { CommResProvider } from './components/CommResProvider'
import { HelpProvider } from './components/ApiProvider';


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
      <HelpProvider>
        {/* <CommResProvider> */}
          <ApplicationViews />
        {/* </CommResProvider> */}
      </HelpProvider>
    </ThemeProvider>
  );
}

export default App;
