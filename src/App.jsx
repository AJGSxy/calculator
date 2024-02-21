import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const erase = () => {
    setInput(input.slice(0, -1));
  };
  return (
    <div>
      <span>{input}</span>
      <button
        onClick={() => {
          setInput(input + "+");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setInput(input + "1");
        }}
      >
        1
      </button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>0</button>
      <button onClick={erase}>erase</button>
    </div>
  );
}
export default App;
