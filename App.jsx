import React, { useState } from "react";
import './App.css'

const Slots = () => {
  
  const [symbols, setSymbols] = useState(["🍎", "🍇", "🍊", "🍋", "🍉", "🍓", "🍒", "🍑", "🍍"]);
  const [balance, setBalance] = useState(100);
  const [spinning, setSpinning] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleModalClick = () => {
    setShowModal(true);
    console.log("click")
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSpinClick = () => {
   //winning logic goes here
  };
    
 

  return (
  <div className="container">
    <div className="reels-container">
      <div className={`reels${spinning ? " spin" : ""}`}>
        <div>{symbols[0]}</div>
        <div>{symbols[1]}</div>
        <div>{symbols[2]}</div>
        <div>{symbols[3]}</div>
        <div>{symbols[4]}</div>
        <div>{symbols[5]}</div>
        <div>{symbols[6]}</div>
        <div>{symbols[7]}</div>
        <div>{symbols[8]}</div>
      </div>
    </div>
    <p className="balance">Balance: {balance}</p>
    <button className="button" onClick={handleSpinClick}>Spin</button>
    <div className="balance" id="result"></div>
    <div>
    </div>
  </div>
);
  }

export default Slots;

