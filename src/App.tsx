// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Import Header
import HeroSection from './components/HeroSection';
import PillarArticlesSection from './components/PillarArticlesSection';
import ArticleDetails from './components/ArticleDetails';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header /> {/* Add Header */}
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/pillar-articles" element={<PillarArticlesSection />} />
          <Route path="/article-details" element={<ArticleDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
