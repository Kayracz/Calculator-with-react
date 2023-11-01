import React, { useState } from "react";
import "./styles/calculator.css";

function Calculator() {
  const [number, setNumber] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setNumber(eval(number).toString());
      } catch (error) {
        setNumber("Error");
      }
    } else if (value === "C") {
        setNumber("");
    } else if (value === "←") {
        setNumber(number.slice(0, -1));
    } else {
        setNumber(number + value);
    }
  };

  const Buttons = () => {
    const buttonValues = [
      "C", "←", "/", 
      7, 8,  9,
      "+", 4, 5, 
      6, "-", 1, 
      2, 3, "*",
      0, ".",  "="
    ];

    return buttonValues.map((value) => (
      <button key={value} onClick={() => handleButtonClick(value)}
      className={
        value === "C" ? "delete" :
        value === 0 ? "zero" :
        typeof value === "string" ? "number" :
        "button"
      }>
        {value}
      </button>
    ));
  };

  return (
    <div className="calculator-page">
      <span className="title-banner">Made with Reactjs + vite</span>
      <span className="title-banner by">By: Kay</span>
      <h1 className="calculator-nav">🤖 My Calculator</h1>
      <span>Calculate your answers</span>
      <div className="calculator-container">
        <div className="screen">
          <input type="text" id="display" disabled value={number} />
        </div>
        <div className="numbers">{Buttons()}</div>
      </div>
    </div>
  );
}

export default Calculator;
