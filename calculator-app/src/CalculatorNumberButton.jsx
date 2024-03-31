import "./App.css";
import { motion, useAnimation } from "framer-motion";

export default function CalculatorNumberButton({ button }) {
  const controls = useAnimation();

  const buttonVariants = {
    tap: {
      scale: [1, 0.8, 1],
      transition: "0.1",
    },
  };

  const handleTap = async () => {
    await controls.start("tap");
    controls.stop();
  };

  return (
    <motion.div
      className="buttonHolder"
      variants={buttonVariants}
      animate={controls}
      onTap={handleTap}
    >
      <button type="button" className="button numberButton">
        {button}
      </button>
    </motion.div>
  );
}
