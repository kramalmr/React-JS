import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Help.css";

function Help() {
  const navigate = useNavigate();
  function handleCreate() {
    navigate("/help/create");
  }

  function handleRead() {
    navigate("/help/read");
  }

  return (
    <div>
        <button onClick={() => navigate(-1)}>Back</button>
      <h1>Help Page</h1>
      <div className="help-content">
        <button onClick={handleCreate}>CREATE USER</button>
        <button onClick={handleRead}>READ USER</button>
        <button>UPDATE USER</button>
        <button>DELETE USER</button>
      </div>
    </div>
  );
}

function CreateUser() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //     role: "costumer",
  //     avatar: "https://i.imgur.com/LD004Qs.jpeg",
  //   });

  //   const handleChange = (e) => {
  //     const { id, value } = e.target;
  //     setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  //   };

  const handleCreateUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      email: email,
      password: password,
    //   role: "costumer",
      avatar: "https://i.imgur.com/LD004Qs.jpeg",
    //   creationAt: new Date().toISOString(),
    //   updatedAt: new Date().toISOString(),
    };

    console.log(newUser);
    axios
      .post("https://api.escuelajs.co/api/v1/users/", newUser)
      .then((response) => {
        setMessage(`${name} created successfully! `);
        alert("User created successfully!" + response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setName("");
    setEmail("");
    setPassword("");
    // setFormData({
    //   name: "",
    //   email: "",
    //   password: "",
    //   role: "costumer",
    //   avatar: "https://i.imgur.com/LD004Qs.jpeg",
    // });
  };
  return (
    <div id="create-user" className="create-user-form">
      <form action="" onSubmit={handleCreateUser}>
        <h1>Create User</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Create User</button>
        <p>{message && <p>{message}</p>}</p>
      </form>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

const UserProfile = (user) => {
  return (
    <div className="user-profile">
      <img src={user.avatar} alt="" width="40px" height="40px" />
      <div>
        <div>{user.name}</div>
        <div>{user.email}</div>
      </div>
    </div>
  );
};

const ReadUser = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Read User</h1>

      <button onClick={() => navigate(-1)}>Back</button>
      <div className="user-list">
        {users.map((user) => (
          <UserProfile key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default Help;
export { CreateUser, ReadUser };
