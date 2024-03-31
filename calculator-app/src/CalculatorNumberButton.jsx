import "./App.css";

export default function CalculatorNumberButton({ button }) {
  return (
    <>
      <button type="button" className="button numberButton">
        {button}
      </button>
    </>
  );
}
