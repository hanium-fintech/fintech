// Clicker.jsx

import React, { useState } from "react";
import Show from "./Show";
import "./Clicker.css";

export default function Clicker({ input, value }) {
  const [showClick, setShowClick] = useState(false);
  const [amount, setAmount] = useState(null);
  const [deadlines, setDeadlines] = useState(null);

  const handleButtonClick = () => {
    setShowClick(true);
    setAmount(input);
    setDeadlines(value);
  };

  return (
    <div>
      <div className="clicker-container">
        <button className="clicker" onClick={handleButtonClick}>
          <p className="text">금융상품 검색 -&gt;</p>
        </button>
        <br/><br/>      {showClick && (
        <Show input={amount} deadline={deadlines} />
      )}
        
      </div>
      
      <p>{deadlines}</p>
      
    </div>
  );
}