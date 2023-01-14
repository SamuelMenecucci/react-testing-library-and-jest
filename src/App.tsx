import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isDisabled}
        style={{ backgroundColor: buttonColor }}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        name=""
        id="disable-button-checkbox"
        onChange={(e) => {
          setIsDisabled(e.target.checked);
        }}
      />
    </div>
  );
}

export default App;
