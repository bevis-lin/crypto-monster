import React from "react";
import useMonsters from "../hooks/use-monsters.hook";
import MonsterList from "../components/MonsterList";
import Header from "../components/Header";
import ErrorLoadingRenderer from "../components/ErrorLoadingRenderer";
import "../config/config";

export default function Monsters() {
  const { loading, error, data: monsters } = useMonsters();

  return (
    <>
      <Header
        title={
          <>
            <span className="highlight">Crypto</span>Monsters
          </>
        }
        subtitle={
          <>
            Choose a <span className="highlight">moster</span> to add to your
            collection
          </>
        }
      />
      <ErrorLoadingRenderer loading={loading} error={error}>
        <MonsterList monsters={monsters} />
      </ErrorLoadingRenderer>
    </>
  );
}
