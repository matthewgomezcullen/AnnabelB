import { CssBaseline } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import HeadingGallery from './components/HeadingGallery';
import Bio from './components/Bio';
import ProductGallery from './components/ProductGallery';

const App = () => {
  return (
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
  );
};

export default App;
