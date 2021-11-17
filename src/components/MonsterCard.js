import React from "react";

export default function MonsterCard({ monster }) {
  const { id, dna, name, price } = monster;

  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/${dna}.png`}
        alt="Pack"
        width="100px"
        height="100px"
      />
      <div>{name}</div>
      <div>Pirce:{parseInt(price)}</div>
    </div>
  );
}
