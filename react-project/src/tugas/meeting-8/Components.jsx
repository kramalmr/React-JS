import { useState } from "react";
export { Counter, LoginStatus, SimpleCalculator };

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <button onClick={() => setCount(count - 1)}>Kurang</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

function LoginStatus() {
  const [isLogin, setIsLogin] = useState(false);

  function handleLogin() {
    setIsLogin(!isLogin);
  }

  return (
    <div>
      <h2>Status : {isLogin ? "Logged In" : "Logged Out"}</h2>
      <button onClick={handleLogin}>{isLogin ? "Logout" : "Login"}</button>
    </div>
  );
}

function SimpleCalculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  function getNum1() {
    setNum1(document.getElementById("num1").value);
    return Number(num1);
  }

  function getNum2() {
    setNum2(document.getElementById("num2").value);
    return Number(num2);
  }

  function handleAdd() {
    setResult(getNum1() + getNum2());
  }

  function handleSubtract() {
    setResult(getNum1() - getNum2());
  }

  function handleMultiply() {
    setResult(getNum1() * getNum2());
  }

  function handleDivide() {
    setResult(getNum1() / getNum2());
  }

  return (
    <div>
      <input type="text" id="num1" />
      <input type="text" id="num2" />
      <button onClick={handleAdd}>Tambah</button>
      <button onClick={handleSubtract}>Kurang</button>
      <button onClick={handleMultiply}>Kali</button>
      <button onClick={handleDivide}>Bagi</button>
      <p>Hasil: {result}</p>
    </div>
  );
}
