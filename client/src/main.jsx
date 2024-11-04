import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa el módulo correcto para React 18+
import App from './App'; // Asegúrate de que esta ruta sea correcta
import { SessionProvider } from './context/SessionProvider'; // Asegúrate de que esta ruta sea correcta

// Crea la raíz del renderizado con createRoot()
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <SessionProvider>
      <App />
    </SessionProvider>
  </React.StrictMode>
);
