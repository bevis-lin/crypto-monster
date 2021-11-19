import { useEffect, useReducer } from "react";
import { mutate, query, tx } from "@onflow/fcl";

import { LIST_USER_MONSTERS } from "../flow/list-user-monsters.script";
import { MINT_MONSTER } from "../flow/mint-monster.tx";
import { userMonsterReducer } from "../reducer/userMonsterReducer";
import { useTxs } from "../providers/TxProvider";
import MonsterClass from "../utils/MonsterClass";

export default function useUserMonsters(user, collection, getFUSDBalance) {
  const [state, dispatch] = useReducer(userMonsterReducer, {
    loading: false,
    error: false,
    data: [],
  });
  const { addTx, runningTxs } = useTxs();

  useEffect(() => {
    const fetchUserMonsters = async () => {
      dispatch({ type: "PROCESSING" });
      try {
        let res = await query({
          cadence: LIST_USER_MONSTERS,
          args: (arg, t) => [arg(user?.addr, t.Address)],
        });
        let mappedMonsters = [];

        for (let key in res) {
          const element = res[key];
          let monster = new MonsterClass(
            element.templateID,
            element.dna,
            element.name,
            element.price,
            key
          );
          mappedMonsters.push(monster);
        }

        dispatch({ type: "SUCCESS", payload: mappedMonsters });
      } catch (err) {
        dispatch({ type: "ERROR" });
      }
    };
    fetchUserMonsters();
    //eslint-disable-next-line
  }, []);

  const mintMonster = async (templateID, amount) => {
    if (!collection) {
      alert(
        "You need to enable the collection first. Go to the tab Collection"
      );
      return;
    }
    if (runningTxs) {
      alert(
        "Transactions are still running. Please wait for them to finish first."
      );
      return;
    }
    try {
      let res = await mutate({
        cadence: MINT_MONSTER,
        limit: 55,
        args: (arg, t) => [arg(templateID, t.UInt32), arg(amount, t.UFix64)],
      });
      addTx(res);
      await tx(res).onceSealed();
      await addMonster(templateID);
      await getFUSDBalance();
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const addMonster = async (templateID) => {
    try {
      let res = await query({
        cadence: LIST_USER_MONSTERS,
        args: (arg, t) => [arg(user?.addr, t.Address)],
      });
      const monsters = Object.values(res);
      const monster = monsters.find((d) => d?.templateID === templateID);
      const newMonster = new MonsterClass(
        monster.templateID,
        monster.dna,
        monster.name
      );
      dispatch({ type: "ADD", payload: newMonster });
    } catch (err) {
      console.log(err);
    }
  };

  const batchAddMonsters = async (monsters) => {
    try {
      let res = await query({
        cadence: LIST_USER_MONSTERS,
        args: (arg, t) => [arg(user?.addr, t.Address)],
      });
      const allMonsters = Object.values(res);
      const monsterToAdd = allMonsters.filter((d) =>
        monsters.includes(d?.templateID)
      );
      const newMonsters = monsterToAdd.map(
        (d) => new MonsterClass(d.templateID, d.dna, d.name)
      );
      for (let index = 0; index < newMonsters.length; index++) {
        const element = newMonsters[index];
        dispatch({ type: "ADD", payload: element });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    ...state,
    mintMonster,
    addMonster,
    batchAddMonsters,
  };
}
