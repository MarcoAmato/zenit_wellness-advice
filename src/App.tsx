// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import SpecificSection from './components/SpecificSection';
import ArticleDetails from './components/ArticleDetails';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/specificsection" element={<SpecificSection />} />
          <Route path="/article-details" element={<ArticleDetails />} /> {/* Updated route */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
