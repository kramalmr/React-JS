import { User, UserProfile, Message } from "./utils";

const person = {
  name: "AKRAM",
  age: 15,
  country: "UK",
};

export default function App() {
  // PRAKTEK
  Message("AKRAM", "Selamat pagi");
  const userInfo = {
    username: "johndoe",
    age: 25,
    location: "New York",
  };
  return (
    <div>
      <div>
        <h1 style={{ color: "red" }}>User</h1>
        <User {...person} />
      </div>
      <p style={{ color: "red" }}>LATIHAN</p>
      <UserProfile {...userInfo} />
    </div>
  );
}