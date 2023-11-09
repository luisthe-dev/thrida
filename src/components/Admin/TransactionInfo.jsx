import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiLoader } from "react-icons/fi";
import { toast } from "react-toastify";
import {
  approveSingleWthdrawal,
  denySingleWthdrawal,
  getSinglePendingWithdrawal,
} from "../apis/adminApi";
import { imageUrl } from "../apis/axios";

const TransactionInfo = ({
  transactionId,
  transactionType,
  setTransactionId,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [transactionDetail, setTransactionDetail] = useState({
    email: "",
    channel: "",
    type: transactionType,
    remark: "",
    amount: 0,
    ref: "",
  });

  const denyRequest = async () => {
    setIsLoading(true);

    const requestRes = await denySingleWthdrawal(
      transactionType,
      transactionId
    );

    if (requestRes.status === 1) {
      toast.success("Transaction Denied");
      setTransactionId(0);
    } else {
      toast.error("Error Denying Transaction");
    }
  };

  const acceptRequest = async () => {
    setIsLoading(true);

    const requestRes = await approveSingleWthdrawal(
      transactionType == "Deposit" ? "deposit" : transactionType,
      transactionId
    );

    if (requestRes.status === 1) {
      toast.success("Transaction Approved");
      setTransactionId(0);
    } else {
      
      toast.error("Error Approving Transaction");
    }
  };

  const getRequestDetails = async () => {
    setIsLoading(true);
    const requestRes = await getSinglePendingWithdrawal(
      transactionId,
      transactionType
    );

    if (requestRes.status === 0) {
      toast.error("Error Fetching Transaction Details");
      setTransactionId(0);
      return;
    }

    const requestData = requestRes.data;
    setTransactionDetail({
      email: requestData.email,
      channel: requestData.channel,
      type: requestData.type,
      remark: requestData.remark,
      amount: requestData.amount,
      ref: requestData.ref,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    if (transactionId === 0) return;
    getRequestDetails();
  }, [transactionId]);

  return (
    <>
      <div className="userInfoMainContainer">
        <div className="userInfoMainBlock">
          {isLoading ? (
            <div className="loaderIcon">
              <FiLoader />
            </div>
          ) : (
            <>
              <div className="userInfoClose">
                <AiOutlineCloseCircle onClick={() => setTransactionId(0)} />
              </div>
              <div className="userInfoMainBlocks">
                <div
                  className="userInfoMainBlockInput"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></div>
                <div className="userInfoMainBlockInput">
                  <p> Email </p>
                  <input
                    type={"text"}
                    placeholder={"Email"}
                    value={transactionDetail.email}
                    readOnly
                  />
                </div>

                <div className="userInfoMainBlockInput">
                  <p> Amount </p>
                  <input
                    type={"text"}
                    placeholder={"Amount"}
                    value={transactionDetail.amount}
                    readOnly
                  />
                </div>

                <div className="userInfoMainBlockInput">
                  <p> Channel </p>
                  <input
                    type={"text"}
                    placeholder={"Channel"}
                    value={transactionDetail.channel}
                    readOnly
                  />
                </div>

                {transactionDetail.type === "Deposit" && (
                  <>
                    <div className="userInfoMainBlockInput">
                      <p> Reference Id </p>
                      <input
                        type={"text"}
                        placeholder={"Reference Id"}
                        value={transactionDetail.ref}
                        readOnly
                      />
                    </div>
                    <div className="userInfoMainBlockInput">
                      <p> Deposit Confirmation </p>
                      <img src={`${imageUrl}${transactionDetail.remark}`} />
                    </div>
                  </>
                )}

                {transactionDetail.type === "Withdrawal" && (
                  <>
                    {transactionDetail.channel !== "Bank Transfer" ? (
                      <>
                        <div className="userInfoMainBlockInput">
                          <p> Wallet Address </p>
                          <input
                            type={"text"}
                            placeholder={"Wallet Address"}
                            value={transactionDetail.remark}
                            readOnly
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="userInfoMainBlockInput">
                          <p> Bank Name </p>
                          <input
                            type={"text"}
                            placeholder={"Bank Namr"}
                            value={
                              JSON.parse(transactionDetail.remark).bankName
                            }
                            readOnly
                          />
                        </div>

                        <div className="userInfoMainBlockInput">
                          <p> Account Number </p>
                          <input
                            type={"text"}
                            placeholder={"Account Number"}
                            value={
                              JSON.parse(transactionDetail.remark).accountNumber
                            }
                            readOnly
                          />
                        </div>

                        <div className="userInfoMainBlockInput">
                          <p> Account Name </p>
                          <input
                            type={"text"}
                            placeholder={"Account Name"}
                            value={
                              JSON.parse(transactionDetail.remark).accountName
                            }
                            readOnly
                          />
                        </div>
                      </>
                    )}
                  </>
                )}

                <div className="userInfoMainBlockBtns">
                  <button onClick={acceptRequest}>Approve Transaction </button>
                  <button onClick={denyRequest}> Deny Transaction </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TransactionInfo;
