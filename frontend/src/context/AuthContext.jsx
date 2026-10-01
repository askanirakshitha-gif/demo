import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('th26_user');
    return saved ? JSON.parse(saved) : {
      name: 'Aryan Sharma',
      email: 'aryan.sharma@example.com',
      phone: '+91 98765 12345',
      college: 'Acharya Institute of Technology',
      usn: '1AY22CS045',
      branch: 'Computer Science & Engineering',
      year: '3rd Year / 6th Sem',
      role: 'STUDENT'
    };
  });

  const [isAdmin, setIsAdmin] = useState(() => {
    const saved = localStorage.getItem('th26_is_admin');
    return saved === 'true';
  });

  const login = (userData, asAdmin = false) => {
    setUser(userData);
    setIsAdmin(asAdmin);
    localStorage.setItem('th26_user', JSON.stringify(userData));
    localStorage.setItem('th26_is_admin', asAdmin ? 'true' : 'false');
  };

  const logout = () => {
    setUser(null);
    setIsAdmin(false);
    localStorage.removeItem('th26_user');
    localStorage.removeItem('th26_is_admin');
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
