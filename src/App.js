import React from 'react';
import Background from './components/Background';
import Header from './components/Header';
import Works from './components/Works';
import Stacks from './components/Stacks';
import Footer from './components/Footer';
import Features from './components/Features';
import FramerMotion from './components/FramerMotion';

const App = () => {
  return (
    <div className="relative overflow-hidden bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#020509_57.38%,#0F1A29_88.16%)]">
      <FramerMotion />
      <Background />
      <Header />
      <Works />
      <Features />
      <Stacks />
      <Footer />
    </div>
  );
};

export default App;
