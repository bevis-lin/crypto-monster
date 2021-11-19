import React from "react";
import { useUser } from "../providers/UserProvider";
import "./DappyCard.css";

export default function MonsterCard({ monster }) {
  const { userMonsters, mintMonster } = useUser();
  const { id, dna, name, price } = monster;
  const owned = userMonsters.some((d) => d?.id === monster?.id);

  const MonsterButton = () => (
    <div
      onClick={() => mintMonster(id, price)}
      className="btn btn-bordered btn-light btn-dappy"
    >
      <i className="ri-shopping-cart-fill btn-icon"></i> {parseInt(price)} FUSD
    </div>
  );

  const OwnedMonsterButton = () => (
    <div className="btn btn-bordered btn-light btn-dappy">
      <i className="ri-shopping-cart-fill btn-icon"></i>You Owned
    </div>
  );

  return (
    <div className="dappy-card__border">
      <img
        src={`${process.env.PUBLIC_URL}/assets/${dna}.png`}
        alt="Pack"
        width="100px"
        height="100px"
      />
      <h3 className="dappy-card__title">{name}</h3>
      {owned ? <OwnedMonsterButton /> : <MonsterButton />}
    </div>
  );
}
