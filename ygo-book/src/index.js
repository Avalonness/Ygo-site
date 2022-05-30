import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import Header from './Components/Header';
import StyleGlobal from './Other/styles/reset';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <StyleGlobal />
  <Header />
    <Home />
  </React.StrictMode>
);

