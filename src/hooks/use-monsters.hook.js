import { mutate, query, tx } from "@onflow/fcl";
import { useEffect, useReducer } from "react";
import { LIST_MONSTERS } from "../flow/list-monsters.script";
import { defaultReducer } from "../reducer/defaultReducer";
import MonsterClass from "../utils/MonsterClass";

export default function useMonsters() {
  const [state, dispatch] = useReducer(defaultReducer, {
    loading: true,
    error: false,
    data: [],
  });

  useEffect(() => {
    const fetchMonsters = async () => {
      dispatch({ type: "PROCESSING" });
      try {
        const res = await query({
          cadence: LIST_MONSTERS,
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
    fetchMonsters();
  }, []);

  return {
    ...state,
  };
}
