import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home';
import { GlobalStyles } from './styles/styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <GlobalStyles />
  </React.StrictMode>
)
