import { createContext, useState } from "react";
 export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {

  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (credentials) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        setUsername(data.user)
      } else {
        throw new Error("algo está incorrecto");
      }
    } catch (error) {
      return error.message;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUsername(null);
  };

  return (
    <SessionContext.Provider value={{ username, login, logout, loading }}>
      {children}
    </SessionContext.Provider>
  );
};

