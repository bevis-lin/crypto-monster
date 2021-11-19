import React, { createContext, useContext } from "react";
import useUserMonsters from "../hooks/use-user-monsters.hook";
import useFUSD from "../hooks/use-fusd.hook";
import useCollection from "../hooks/use-collection.hook";
import { useAuth } from "./AuthProvider";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const { user } = useAuth();
  const { hasCollection, createCollection, deleteCollection } =
    useCollection(user);
  const { data: balance, createFUSDVault, getFUSDBalance } = useFUSD(user);
  const {
    data: userMonsters,
    addMonster,
    batchAddMonsters,
    mintMonster,
  } = useUserMonsters(user, hasCollection, getFUSDBalance);

  return (
    <UserContext.Provider
      value={{
        userMonsters,
        addMonster,
        batchAddMonsters,
        mintMonster,
        balance,
        createFUSDVault,
        getFUSDBalance,
        hasCollection,
        createCollection,
        deleteCollection,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  return useContext(UserContext);
};
