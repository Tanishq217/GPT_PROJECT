import React from 'react';
import ReactDOM from 'react-dom/client'; // 👈 use 'react-dom/client' for React 18+
import App from './App';
import './index.css'; // 👈 import your CSS file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
