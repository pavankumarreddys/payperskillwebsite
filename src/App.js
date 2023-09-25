import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
const Home = lazy(() => import('./components/Home/Home'));
const About = lazy(() => import('./components/About/About'));
const Features = lazy(() => import('./components/Features/Features'));
const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
