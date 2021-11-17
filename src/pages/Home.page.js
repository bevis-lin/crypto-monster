import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import "./Home.page.css";

export default function Home() {
  const history = useHistory();

  return (
    <>
      <Header
        title={
          <>
            <span className="highlight">Crypto</span>Dappy
          </>
        }
        subtitle={
          <>
            The brand new <span className="highlight">collectible game</span> on
            the blockchain
          </>
        }
      />
      <div
        style={{ display: "inline-block" }}
        className="btn btn-bg rounded"
        onClick={() => history.push("/monsters")}
      >
        See all
      </div>
    </>
  );
}
