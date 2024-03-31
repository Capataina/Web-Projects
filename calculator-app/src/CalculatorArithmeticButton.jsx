import { motion } from "framer-motion";

export default function CalculatorArithmeticButton({ button }) {
  return (
    <>
      <motion.button type="button" className="button arithmeticButton">
        {button}
      </motion.button>
    </>
  );
}
