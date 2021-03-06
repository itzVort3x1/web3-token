import React, { useState } from "react";
import { token } from '../../../declarations/token';

function Faucet() {

  const [isDisabled, setDisable] = useState(false);
  const [buttonText, setButtonText] = useState("Claim Tokens");

  async function handleClick(event) {
    setDisable(true);
    const results = await token.payOut();
    setButtonText(results);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DVort3x tokens here! Claim 10,000 DVOR coins to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
