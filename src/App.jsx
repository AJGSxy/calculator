import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
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
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
    </div>
  );
}
export default App;
