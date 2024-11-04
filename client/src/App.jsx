// TestComponent.jsx
import React from 'react';
import useSession from './hooks/useSession'; // Asegúrate de que esta ruta sea correcta
import Home from './components/Home';
import Login from './components/Login.jsx';

const TestComponent = () => {
  const { username } = useSession();

  return (
    <div>
      {username ? (
        <Home />
      ) : (
        <Login/>
      )}
    </div>
  );
};

export default TestComponent;
