import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Hardware from './components/Hardware';
import Developers from './components/Developers';
import Tech from './components/Tech';
import Footer from './components/Footer';
import './App.css';
import './index.css';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Hardware />
        <Developers />
        <Tech />
      </main>
      <Footer />
    </>
  );
}

export default App;
