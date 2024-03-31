import CalculatorNumberButton from "./CalculatorNumberButton";
import CalculatorResetButton from "./CalculatorResetButton";
import "./App.css";

export default function NumberPad() {
  return (
    <div className="NumberPad">
      <CalculatorNumberButton button={1}></CalculatorNumberButton>
      <CalculatorNumberButton button={2}></CalculatorNumberButton>
      <CalculatorNumberButton button={3}></CalculatorNumberButton>
      <CalculatorNumberButton button={4}></CalculatorNumberButton>
      <CalculatorNumberButton button={5}></CalculatorNumberButton>
      <CalculatorNumberButton button={6}></CalculatorNumberButton>
      <CalculatorNumberButton button={7}></CalculatorNumberButton>
      <CalculatorNumberButton button={8}></CalculatorNumberButton>
      <CalculatorNumberButton button={9}></CalculatorNumberButton>
      <CalculatorResetButton button={"C"}></CalculatorResetButton>
      <CalculatorNumberButton button={0}></CalculatorNumberButton>
    </div>
  );
}
