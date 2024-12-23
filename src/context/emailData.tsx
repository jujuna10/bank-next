'use client'
import { useEffect, useState, createContext, ReactNode, FC } from "react";

interface UserContextType {
  email: string;
  setEmail: (email: string) => void;
}

export const UserContext = createContext<UserContextType>({
  email: "",
  setEmail: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [email, setEmail] = useState<string>("");

   

  return (
    <UserContext.Provider value={{ email, setEmail }}>
      {children}
    </UserContext.Provider>
  );
};
