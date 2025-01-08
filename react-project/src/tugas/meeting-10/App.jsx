import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Efek Dijalankan!");
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
};

const CountLogger = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count berubah menjadi " + count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
};

const TextLogger = () => {
  const [text, setText] = useState("");
  const [shownText, setShownText] = useState("");

  useEffect(() => {
    console.log("Text berubah menjadi " + text);
  }, [text]);

  return (
    <div>
      <p>Text: {shownText}</p>
      <input type="text" onChange={e => setText(e.target.value)}/>
      <button onClick={() => setShownText(text)}>Update Teks</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>SOAL 1</h1>
      <Counter />

      <h1>SOAL 2</h1>
      <CountLogger />

      <h1>SOAL 3</h1>
      <TextLogger />
    </div>
  );
};

export default App;
