/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const person = {
  name: "AKRAM",
  age: 15,
  country: "UK",
};

function User({ name, age, country }) {
  return (
    <div>
      <h4 style={{ color: "red" }}>User info</h4>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
    </div>
  );
}

// PRAKTEK

// SOAL 1
function Message(name, message) {
  console.log("Name :" + { name }, "Message:" + { message });
}

// SOAL 2

function UserProfile({ username, age, location }) {
  return (
    <div>
      <p>Name: {username}</p>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

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

// PROP VALIDATION

User.propTypes = {
  name: PropTypes.string.isRequired, // 'name' harus berupa string dan wajib ada
  age: PropTypes.number.isRequired, // 'age' harus berupa number dan wajib ada
  country: PropTypes.string.isRequired, // 'country' harus berupa string dan wajib ada
};
