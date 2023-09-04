import React, { useState } from "react";
import { FiLoader } from "react-icons/fi";
import { toast } from "react-toastify";
import { initWithdrawal } from "../../../components/apis/transactionsApi";

const Withdraw = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [withdrawDetails, setWithdrawDetails] = useState({
    withdrawTo: "",
    withdrawAmount: "",
    withdrawDetail: {
      withdrawWalletAddress: "",
      withdrawBankDetails: {
        bankName: "",
        accountNumber: "",
        accountName: "",
      },
    },
  });

  const submitWithForm = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const withdrawData = {
      channel: withdrawDetails.withdrawTo,
      amount: withdrawDetails.withdrawAmount,
      remark:
        withdrawDetails.withdrawTo !== "Bank Transfer"
          ? withdrawDetails.withdrawDetail.withdrawWalletAddress
          : JSON.stringify(withdrawDetails.withdrawDetail.withdrawBankDetails),
    };

    const withRes = await initWithdrawal(withdrawData);

    withRes.status === 1
      ? toast.success(withRes.data.message)
      : toast.error(withRes.message);

    setIsLoading(false);
  };

  return (
    <div className="adminStatTables">
      <div className="adminStatTable">
        <h2> Request Funds Withdrawal </h2>
        <form onSubmit={submitWithForm}>
          <label> Withdrawal Method </label>
          <select
            value={withdrawDetails.withdrawTo}
            onChange={(e) =>
              setWithdrawDetails({
                ...withdrawDetails,
                withdrawTo: e.target.value,
              })
            }
          >
            <option value={""} disabled>
              Select A Withdrawal Method
            </option>
            <option value={"BTC"}> Bitcoin </option>
            <option value={"USDT  ERC 20"}> USDT ERC 20 </option>
            <option value={"USDT TRC 20"}> USDT TRC 20 </option>
            <option value={"LTC"}> Litecoin </option>
            <option value={"ETH"}> Ethereum </option>
            <option value={"Bank Transfer"}> Bank Transfer </option>
            <option value={"PayPal"}> PayPal </option>
          </select>
          <label> Amount </label>
          <input
            placeholder="Amount To Withdraw"
            type="number"
            value={withdrawDetails.withdrawAmount}
            onInput={(e) =>
              setWithdrawDetails({
                ...withdrawDetails,
                withdrawAmount: e.target.value,
              })
            }
          />
          {(withdrawDetails.withdrawTo !== "") &&
            (withdrawDetails.withdrawTo !== "Bank Transfer") && (
            <>
              <label> Wallet Address </label>
              <input
                placeholder="Wallet Address"
                type="text"
                value={withdrawDetails.withdrawDetail.withdrawWalletAddress}
                onInput={(e) =>
                  setWithdrawDetails({
                    ...withdrawDetails,
                    withdrawDetail: {
                      ...withdrawDetails.withdrawDetail,
                      withdrawWalletAddress: e.target.value,
                    },
                  })
                }
              />
            </>
          )}
          {withdrawDetails.withdrawTo === "Bank Transfer" && (
            <>
              <label> Bank Name </label>
              <input
                placeholder="Bank Name"
                type="text"
                value={
                  withdrawDetails.withdrawDetail.withdrawBankDetails.bankName
                }
                onInput={(e) =>
                  setWithdrawDetails({
                    ...withdrawDetails,
                    withdrawDetail: {
                      ...withdrawDetails.withdrawDetail,
                      withdrawBankDetails: {
                        ...withdrawDetails.withdrawDetail.withdrawBankDetails,
                        bankName: e.target.value,
                      },
                    },
                  })
                }
              />
              <label> Account Number </label>
              <input
                placeholder="Account Number"
                type="text"
                value={
                  withdrawDetails.withdrawDetail.withdrawBankDetails
                    .accountNumber
                }
                onInput={(e) =>
                  setWithdrawDetails({
                    ...withdrawDetails,
                    withdrawDetail: {
                      ...withdrawDetails.withdrawDetail,
                      withdrawBankDetails: {
                        ...withdrawDetails.withdrawDetail.withdrawBankDetails,
                        accountNumber: e.target.value,
                      },
                    },
                  })
                }
              />
              <label> Account Name </label>
              <input
                placeholder="Account Name"
                type="text"
                value={
                  withdrawDetails.withdrawDetail.withdrawBankDetails.accountName
                }
                onInput={(e) =>
                  setWithdrawDetails({
                    ...withdrawDetails,
                    withdrawDetail: {
                      ...withdrawDetails.withdrawDetail,
                      withdrawBankDetails: {
                        ...withdrawDetails.withdrawDetail.withdrawBankDetails,
                        accountName: e.target.value,
                      },
                    },
                  })
                }
              />
            </>
          )}
          <button disabled={isLoading} className={"loadingBtn"}>
            {isLoading ? <FiLoader /> : `Request Withdrawal`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Withdraw;
