import styles from "./app.module.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const erase = () => {
    setInput(input.slice(0, -1));
  };

  const handleClick = (event) => {
    setInput(input + event.target.value);
  };
  return (
    <div className={styles.background}>
      <div className={styles.buttonBack}>
        <span>{input}</span>
        <button onClick={handleClick} value={"+"}>
          +
        </button>
        <button onClick={handleClick} value={1}>
          1️⃣
        </button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button>9</button>
        <button>0</button>
        <button onClick={erase}>erase</button>
      </div>
    </div>
  );
}
export default App;
