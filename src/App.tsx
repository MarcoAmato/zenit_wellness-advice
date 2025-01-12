// src/App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContent from './components/MainContent/AppContent';
import { LoadingProvider } from './utils/LoadingContext/LoadingContext';

const App: React.FC = () => {
  return (
    <Router>
      <LoadingProvider>
        <AppContent />
      </LoadingProvider>
    </Router>
  );
};

export default App;
