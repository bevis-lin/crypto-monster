import React from "react";
export default function Header({ title, subtitle }) {
  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}/assets/all.png`}
        width="300px"
        height="150px"
        alt="Monster"
      />
      <h1 className="app__title">{title}</h1>
      <h3 className="app__subtitle">{subtitle}</h3>
    </>
  );
}
