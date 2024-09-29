import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '/src/components/App/App.jsx';

import '/src/assets/reset.css';
import '/src/assets/styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
