import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

export type SocialProvider = 'apple' | 'facebook' | 'google';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  loginWithSocial: (provider: SocialProvider) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Login simulation
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser({
      id: '1',
      name: 'Demo User',
      email: email
    });
  };

  const loginWithSocial = async (provider: SocialProvider) => {
    // Social login simulation
    await new Promise(resolve => setTimeout(resolve, 500));

    const providerDisplayName = {
      apple: 'Apple',
      facebook: 'Facebook',
      google: 'Google',
    }[provider];

    setUser({
      id: `social-${provider}`,
      name: `${providerDisplayName} User`,
      email: `${provider}.user@techstore.dev`,
    });
  };

  const register = async (name: string, email: string, password: string) => {
    // Registration simulation
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser({
      id: '1',
      name: name,
      email: email
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, loginWithSocial, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}