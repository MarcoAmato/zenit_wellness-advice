// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header'; // Import Header
import PillarSelectionSection from './components/PillarSelection';
import PillarArticlesSection from './components/PillarArticlesSection/PillarArticlesSection';
import ArticleDetails from './components/ArticleDetails/ArticleDetails';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';

const App: React.FC = () => {

  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    // Quando cambia il percorso, mostra il loader
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 1000); // Simula un ritardo

    return () => clearTimeout(timeout); // Pulisce il timeout
  }, [location.pathname]);

  return (
    <div className="App">
      {isLoading && <Loader />}
      {!isLoading && (
        <Router>
          <Header /> {/* Add Header */}
          <Routes>
            <Route path="/" element={<PillarSelectionSection />} />
            <Route path="/pillar-articles" element={<PillarArticlesSection />} />
            <Route path="/article-details" element={<ArticleDetails />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
};

export default App;
