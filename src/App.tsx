import React from 'react';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { OAuthSignInPage } from './pages/OAuthSignInPage';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<OAuthSignInPage />} />
          </Routes>
      </Router>
  );
}

export default App;
