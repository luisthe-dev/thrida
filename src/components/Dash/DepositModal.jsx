import React, { useState } from "react";
import { useEffect } from "react";
import { MakeDeposit, UploadDepositSlip } from "../apis/transactionsApi";
import { toast } from "react-toastify";

const DepositModal = ({ showModal, setShowModal, depositType }) => {
  const [depositAmount, setDepositAmount] = useState("");
  const [depositStep, setDepositStep] = useState(1);
  const [depositData, setDepositData] = useState({});

  useEffect(() => setDepositStep(1) || setDepositAmount(""), [depositType]);

  const processDeposit = async () => {
    const depositResponse = await MakeDeposit(depositAmount, depositType);

    if (depositResponse.status === 0) {
      toast.error(depositResponse.message);
      return;
    }

    setDepositData(depositResponse?.data);
    setDepositStep(2);
  };

  const uploadDepositReciept = async (e) => {
    const uploadSlip = await UploadDepositSlip(
      depositData?.transaction?.id,
      e.target.files[0]
    );
    if (uploadSlip.status === 1) {
      toast.success("Deposit Placed Successfully");
      setDepositStep(1);
      setDepositAmount("");
      setShowModal(false);
    }
  };

  return (
    <>
      <div
        className={showModal ? "MainBackground active" : "MainBackground"}
        onClick={() => setShowModal(!showModal)}
      ></div>
      <div
        className={
          showModal && depositStep === 1 ? "MainModal active" : "MainModal"
        }
      >
        <div className="MainModalHeader">
          <h4> Deposit </h4>
          <h5> {depositType} </h5>
        </div>
        <div className="MainModalBody">
          <div className="MainModalBodyBlock">
            <h5> Deposit Amount ($) </h5>
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
      <div
        className={
          showModal && depositStep === 2 ? "MainModal active" : "MainModal"
        }
      >
        <div className="MainModalHeader">
          <h4> {depositType} </h4>
          <h5> Processing... </h5>
        </div>
        <div className="MainModalBody">
          <div className="MainModalBodyBlock">
            <h5 className="">
              Please Use The Description Provided Below As Payment Reference
            </h5>

            <div className="MainModalBodyFlex">
              <h4> Deposit Amount </h4>
              <h5>{depositData?.payAmount}</h5>
            </div>

            {depositType === "Bank Transfer" ? (
              <>
                <div className="MainModalBodyFlex">
                  <h4> Account Name : </h4>
                  <h5> {depositData?.depositData?.account_name} </h5>
                </div>
                <div className="MainModalBodyFlex">
                  <h4> Bank Name : </h4>
                  <h5> {depositData?.depositData?.bank_name} </h5>
                </div>
                <div className="MainModalBodyFlex">
                  <h4> Account Number : </h4>
                  <h5> {depositData?.depositData?.account_number} </h5>
                </div>
              </>
            ) : (
              <>
                <div className="MainModalBodyFlex">
                  <h4> Wallet Address : </h4>
                  <h5> {depositData?.depositData?.wallet_address} </h5>
                </div>
                {/* <div className="MainModalBodyFlex">
                  <h4> Wallet QR : </h4>
                  <h5>
                    <img
                      src={depositData?.depositData?.wallet_qr}
                      alt={`${depositType} Deposit QR`}
                    />
                  </h5>
                </div> */}
              </>
            )}
            <div className="MainModalBodyFlex">
              <h4> Description : </h4>
              <h5> {depositData?.depositData?.deposit_rem} </h5>
            </div>
          </div>
        </div>
        <div className="MainModalFooter">
          <input
            type={"file"}
            onChange={uploadDepositReciept}
            id="slipUploadBtn"
            accept="image/png, image/jpeg, image/jpg"
            style={{ display: "none" }}
          />
          <button
            onClick={() => document.getElementById("slipUploadBtn").click()}
          >
            Upload Reciept
          </button>
        </div>
      </div>
    </>
  );
};

export default DepositModal;
