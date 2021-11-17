import React from "react";
import MonsterCard from "./MonsterCard";
import "./DappyList.css";

export default function MonsterList({ monsters }) {
  console.log(monsters);
  var arr = [];
  Object.keys(monsters).forEach(function (key) {
    arr.push(monsters[key]);
  });
  return (
    <div className="dappy-list__wrapper">
      {arr.map((monster, i) => (
        <MonsterCard key={i} monster={monster} />
      ))}
    </div>
  );
}
