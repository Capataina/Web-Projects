import CalculatorArithmeticButton from "./CalculatorArithmeticButton";

export default function ArithmeticPad() {
  return (
    <div className="ArithmeticPad">
      <CalculatorArithmeticButton button="+"></CalculatorArithmeticButton>
      <CalculatorArithmeticButton button="-"></CalculatorArithmeticButton>
      <CalculatorArithmeticButton button="*"></CalculatorArithmeticButton>
      <CalculatorArithmeticButton button="%"></CalculatorArithmeticButton>
    </div>
  );
}
