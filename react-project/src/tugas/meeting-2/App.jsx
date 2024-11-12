// import React from "react";
import person from "./object";
export default function App() {
  return (
    <div>
      <h1 style={{ color: "red" }}>
        App
      </h1>
    <p>Halo {person.name}, dari {person.country}</p>
    </div>
  );
}