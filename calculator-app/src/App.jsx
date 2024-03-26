import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Calculator from "./Calculator.jsx";
import ResultsBar from "./ResultsBar.jsx"
import NumberPad from "./NumberPad.jsx"
import ArithmeticPad from "./ArithmeticPad.jsx"


function App() {
  return (
    <div className="pageBackground">
      <Calculator>
        <ResultsBar></ResultsBar>
        <NumberPad></NumberPad>
        <ArithmeticPad></ArithmeticPad>
      </Calculator>
    </div>
  );
}

export default App;
