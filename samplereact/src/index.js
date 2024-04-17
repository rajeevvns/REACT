import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// ReactDOM.render(<App/> , document.getElementById('root')); // upto react 17 version

// ReactDOM.render is no longer supported in React 18. Use createRoot instead.