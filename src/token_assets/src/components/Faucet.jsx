import React from "react";

function Faucet() {

  async function handleClick(event) {

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
        <button id="btn-payout" onClick={handleClick}>
          Claim Reward
        </button>
      </p>
    </div>
  );
}

export default Faucet;
