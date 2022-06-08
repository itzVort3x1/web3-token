import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import { token } from '../../../declarations/token';

function Transfer() {

  const [toAccount, setToAccount] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [transactionResult, setTransactionResult] = useState("");
  const [isDisabled, setDisable] = useState(false);

  async function handleClick() {
    setDisable(true);
    const recepient = Principal.fromText(toAccount);
    const result = await token.transfer(recepient, Number(enteredAmount));
    setTransactionResult(result);
    setDisable(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={toAccount}
                onChange={(e) => setToAccount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={enteredAmount}
                onChange={(e) => setEnteredAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={isDisabled}>
            Transfer
          </button>
        </p>
        <p>{transactionResult}</p>
      </div>
    </div>
  );
}

export default Transfer;
