// import React from "react";

const person = {
  name: "AKRAM",
  age: 15,
  country: "UK",
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
}
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