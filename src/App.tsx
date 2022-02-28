import React from 'react';

import "./globals/reset.css";
import "./globals/globals.css";

import Header from './components/Header';
import Menu from './components/Menu';
import Routers from './routes';

function App() {
  return (
    <div style={{height: "100vh"}}>
      <Header />
      <Menu />
      <Routers />
    </div>
  );
}

export default App;
