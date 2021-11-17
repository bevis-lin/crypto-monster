import React, { createContext, useContext } from 'react';

import useFUSD from '../hooks/use-fusd.hook';
import { useAuth } from './AuthProvider';

const UserContext = createContext();

export default function UserProvider({ children }) {
  const { user } = useAuth();
  const { data: balance, createFUSDVault, getFUSDBalance } = useFUSD(user);

  return (
    <UserContext.Provider
      value={{
        balance,
        createFUSDVault,
        getFUSDBalance,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  return useContext(UserContext);
};
