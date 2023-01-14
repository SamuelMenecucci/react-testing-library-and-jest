import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName: string) {
  return colorName.replace(/\B([A-Z])\B/g, " $1"); //if find a capital letter in the middle of a word, and even finds multiple times, do this for every time you find it. I want to replace it with whatever letter was found preceded by space.
}

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
