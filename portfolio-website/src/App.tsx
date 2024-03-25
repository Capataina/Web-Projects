import React from "react";
import { motion } from "framer-motion";
import "./App.scss";
import PortfolioCard from "./PortfolioCard";

const App: React.FC = () => {
  return (
    <div className="app bg-gray-800">
      <div className="background">
        <div className="rectangle top-left bg-green-500"></div>
        <div className="rectangle top-right bg-blue-500"></div>
        <div className="rectangle bottom-left bg-yellow-500"></div>
        <div className="rectangle bottom-right bg-red-500"></div>
      </div>
      <PortfolioCard /> {/* Add the PortfolioCard component */}
    </div>
  );
};

export default App;
