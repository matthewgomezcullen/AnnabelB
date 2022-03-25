import { CssBaseline } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {
  MuiThemeProvider,
  createTheme,
} from '@material-ui/core/styles';

import Header from './components/Header';
import HeadingGallery from './components/HeadingGallery';
import Bio from './components/Bio';
import ProductGallery from './components/ProductGallery';

// steel blue: #4682B4
// light steel blue: #B0C4DE
// grey 500: #9e9e9e
// grey 300: #e0e0e0

const theme = createTheme({
  palette: {
    primary: {
      main: '#4682B4',
    },
    secondary: {
      main: '#9e9e9e',
    },
  },
  typography: {
    fontFamily: ['Courier', 'monospace'],
  },
});

const App = () => {

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <HeadingGallery />
              </>
            }
          ></Route>
          <Route
            exact
            path="/heading/:headingID"
            element={
              <>
                <ProductGallery />
              </>
            }
          ></Route>
        </Routes>
        <Bio />
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
