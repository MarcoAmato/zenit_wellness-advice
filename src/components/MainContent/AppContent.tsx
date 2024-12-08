import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PillarSelectionSection from '../PillarSelection';
import PillarArticlesSection from '../PillarArticlesSection/PillarArticlesSection';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import Loader from '../Loader/Loader';

const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 1000); // Simulate a delay

    return () => clearTimeout(timeout); // Clear the timeout
  }, [location.pathname]);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<PillarSelectionSection />} />
            <Route path="/pillar-articles" element={<PillarArticlesSection />} />
            <Route path="/article-details" element={<ArticleDetails />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

export default AppContent;