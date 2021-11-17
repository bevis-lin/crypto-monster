import { mutate, query, tx } from "@onflow/fcl";
import { useEffect, useReducer } from "react";
import { LIST_MONSTERS } from "../flow/list-monsters.script";
import { defaultReducer } from "../reducer/defaultReducer";

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
        dispatch({ type: "SUCCESS", payload: res });
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
