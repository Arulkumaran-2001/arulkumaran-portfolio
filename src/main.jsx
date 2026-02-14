import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';


// Note: removed slick-carousel CSS imports because the project doesn't list
// `slick-carousel` in dependencies. Add the package and re-add these imports
// if you need the carousel.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)