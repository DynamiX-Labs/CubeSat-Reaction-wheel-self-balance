import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.tsx'
import './index.css'

// Initialize theme from localStorage or default to dark
const savedTheme = localStorage.getItem('cubedynamics-theme');
let initialTheme = 'dark';

try {
  if (savedTheme) {
    const parsed = JSON.parse(savedTheme);
    initialTheme = parsed.state?.theme || 'dark';
  }
} catch (error) {
  console.warn('Failed to parse theme from localStorage:', error);
  initialTheme = 'dark';
}

document.documentElement.setAttribute('data-theme', initialTheme);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
