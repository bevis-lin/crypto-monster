import React from "react";
//import DappyList from '../components/DappyList'
import Header from "../components/Header";
import MonsterList from "../components/MonsterList";
import { useUser } from "../providers/UserProvider";

export default function Collection() {
  const { hasCollection, createCollection, deleteCollection, userMonsters } =
    useUser();

  return (
    <>
      <Header
        title={
          <>
            My<span className="highlight">Monsters</span>
          </>
        }
        subtitle={
          <>
            Here are the <span className="highlight">Dappies and Packs</span>{" "}
            you have collected
          </>
        }
      />

      {!hasCollection ? (
        <div className="btn btn-round" onClick={() => createCollection()}>
          Enable Collection
        </div>
      ) : (
        <>
          <div>Your collection has been created</div>
          <div className="btn btn-round" onClick={() => deleteCollection()}>
            Delete Collection
          </div>
          <MonsterList monsters={userMonsters} />
        </>
      )}
    </>
  );
}
