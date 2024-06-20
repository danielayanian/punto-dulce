import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Function to render the App component once the DOM is fully loaded
function renderApp() {
  const root = document.getElementById('root');
  if (root) {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  } else {
    console.error('DOM element with id "root" not found.');
  }
}

if (document.readyState!== 'loading'){
  renderApp();
} else {
  // Document is still loading, listen for "DOMContentLoaded" event
  document.addEventListener('DOMContentLoaded', renderApp);
}
