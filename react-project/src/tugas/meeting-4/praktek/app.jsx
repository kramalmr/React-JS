import FormLogin from "./login/form.jsx";
import FormRegister from "./register/form.jsx";

export default function App() {
  return (
    <div>
      <SectionLogin />
      <SectionRegister />
    </div>
  );
}
function SectionLogin() {
  return (
    <div className="login">
      <h2>Login</h2>
      <p>Welcome to our Website!</p>
      <FormLogin />
    </div>
  );
}

function SectionRegister() {
  return (
    <div className="register">
      <h2>Register</h2>
      <p>Welcome to our Website!</p>
      <FormRegister />
    </div>
  );
}
