import React, { useState } from "react";
import { makeDeposit } from "../apis/transactionsApi";

const DepositModal = ({ showModal, setShowModal, depositType }) => {
  const [depositAmount, setDepositAmount] = useState("");

  const processDeposit = async () => {
    const depositResponse = await makeDeposit(depositAmount, depositType);

    console.log(depositAmount, depositType, depositResponse);
  };

  return (
    <>
      <div
        className={showModal ? "MainBackground active" : "MainBackground"}
        onClick={() => setShowModal(!showModal)}
      ></div>
      <div className={showModal ? "MainModal active" : "MainModal"}>
        <div className="MainModalHeader">
          <h4> Deposit </h4>
          <h5> {depositType} </h5>
        </div>
        <div className="MainModalBody">
          <div className="MainModalBodyBlock">
            <h5> Deposit Amount </h5>
            <input
              type="number"
              placeholder="Enter Amount"
              value={depositAmount}
              onInput={(e) =>
                setDepositAmount(Math.trunc(Number(e.target.value.trim())))
              }
            />
          </div>
        </div>
        <div className="MainModalFooter">
          <button onClick={processDeposit}> Deposit </button>
        </div>
      </div>
    </>
  );
};

export default DepositModal;
