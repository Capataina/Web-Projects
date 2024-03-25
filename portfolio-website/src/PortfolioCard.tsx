import { useState } from "react";
import { motion } from "framer-motion";
import PortfolioContent from "./Content/PortfolioContent.tsx";
import CVInfo from "./Content/CVContent.tsx";

export default function PortfolioCard() {
  const [isNotExpanded, setIsNotExpanded] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const toggleExpansion = () => {
    setIsNotExpanded(!isNotExpanded);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const cardVariants = {
    expanded: {
      width: "45%",
      height: "70%",
      borderRadius: "10px",
    },
    collapsed: {
      width: "20%",
      height: "30%",
      borderRadius: "5px",
    },
    hidden: {
      width: "50%",
      height: "50%",
    },
  };

  return (
    <motion.div
      className={`portfolio-card ${isNotExpanded ? "collapsed" : "expanded"} ${
        isVisible ? "visible" : "hidden"
      }`}
      animate={
        isVisible
          ? isNotExpanded
            ? cardVariants.collapsed
            : cardVariants.expanded
          : cardVariants.hidden
      }
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {isVisible ? (
        <div className="card-content">
          {isNotExpanded ? <PortfolioContent /> : <CVInfo />}
        </div>
      ) : (
        <>
          <h1>This is hidden</h1>
        </>
      )}

      <button className="toggle-button" onClick={toggleExpansion}>
        {isNotExpanded ? "Expand" : "Collapse"}
      </button>

      <button className="visibility-button" onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"}
      </button>
    </motion.div>
  );
}
