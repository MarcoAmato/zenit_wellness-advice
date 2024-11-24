// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'; // Import Header
import PillarSelectionSection from './components/PillarSelection';
import PillarArticlesSection from './components/PillarArticlesSection/PillarArticlesSection';
import ArticleDetails from './components/ArticleDetails/ArticleDetails';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header /> {/* Add Header */}
        <Routes>
          <Route path="/" element={<PillarSelectionSection />} />
          <Route path="/pillar-articles" element={<PillarArticlesSection />} />
          <Route path="/article-details" element={<ArticleDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
