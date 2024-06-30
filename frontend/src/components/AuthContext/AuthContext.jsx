import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    const email = localStorage.getItem("userEmail");
    if (jwt && email) {
      setIsAuthenticated(true);
      setUserEmail(email);
    } else {
      setIsAuthenticated(false);
      setUserEmail(null);
    }
  }, []);

  const login = (email, token) => {
    setIsAuthenticated(true);
    setUserEmail(email);
    localStorage.setItem("jwt", token);
    localStorage.setItem("userEmail", email);
  };

  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("userEmail");
    setIsAuthenticated(false);
    setUserEmail(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
