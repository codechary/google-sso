import React from 'react';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { OAuthSignInPage } from './pages/OAuthSignInPage';
import {Profile} from "./pages/Profile";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<OAuthSignInPage />} />
              <Route path="/profile" element={<Profile />} />
          </Routes>
      </Router>
  );
}

export default App;
