import React from 'react';
import { createMuiTheme, ThemeProvider, Button } from '@material-ui/core';


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
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        SEcondary
      </Button>
    </ThemeProvider>
  );
}

export default App;
