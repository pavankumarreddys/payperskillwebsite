import React, { lazy, Suspense } from 'react';

const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Home = lazy(() => import('./components/Home/Home'));
const About = lazy(() => import('./components/About/About'));
const Features = lazy(() => import('./components/Features/Features'));
const Contact = lazy(() => import('./components/Contact/Contact'))

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Home />
        <About />
        <Features />
        <Contact/>
      </Suspense>
    </div>
  );
}

export default App