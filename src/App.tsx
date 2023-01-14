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
        style={{ backgroundColor: isDisabled ? "gray" : buttonColor }}
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
      <label htmlFor="disable-button-checkbox">Disable checkbox</label>
    </div>
  );
}

export default App;
