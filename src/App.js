
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/scss/style.scss';
import LandingPage from "pages/LandingPage";
import DetailPage from "pages/DetailPage";
function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
