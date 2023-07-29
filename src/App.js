import React from 'react';
import './App.css'; // Make sure you have some CSS styles in App.css

import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Main />
      </div>
      <footer>
        copy right for fatima muhammed
      </footer>
    </>
  );
}

export default App;
