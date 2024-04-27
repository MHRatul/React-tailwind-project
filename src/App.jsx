import React from "react"
import Analytics from './components/Analytics';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
    </div>
  );
}

export default App;
