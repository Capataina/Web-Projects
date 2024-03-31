import { motion } from "framer-motion";

export default function CalculatorResultsButton({ button }) {
  return (
    <>
      <motion.button type="button" className="button resultsButton">
        {button}
      </motion.button>
    </>
  );
}
