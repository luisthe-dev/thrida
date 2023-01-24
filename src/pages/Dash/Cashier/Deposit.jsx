import React, { useEffect, useState } from "react";
import { AiOutlineBank } from "react-icons/ai";
import { toast } from "react-toastify";
import { GetDepositTransactions } from "../../../components/apis/transactionsApi";
import DepositModal from "../../../components/Dash/DepositModal";

const Deposit = () => {
  const [showModal, setShowModal] = useState(false);
  const [depositType, setDepositType] = useState("Bank Transfer");

  const setDepositMethod = (method) => {
    setDepositType(method);
    setShowModal(!showModal);
  };

  const [loading, setLoading] = useState(true);
  const [depositSum, setDepositSum] = useState(0);

  useEffect(() => {
    const getTransactions = async () => {
      const allTransactions = await GetDepositTransactions();
      const depositSum = allTransactions?.data.reduce(
        (sum, current) => sum + Number(current.amount),
        0
      );

      setDepositSum(depositSum);
      setLoading(false);
    };
    getTransactions();
  }, []);

  return (
    <>
      <DepositModal
        showModal={showModal}
        setShowModal={setShowModal}
        depositType={depositType}
      />
      <div className="cashierPageBodyBlocks">
        <div className="cashierPageBodyBlock">
          <h5> Total Deposit </h5>
          <h6>
            {loading
              ? `Loading...`
              : `₦${Number(depositSum)?.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`}
          </h6>
          <p> Deposit more to attain a higher vip status </p>
          <div className="cashierPageBodyProgressBar">
            <div
              className="cashierPageBodyProgressBar_Bar"
              style={{ width: "25%" }}
            ></div>
          </div>
          <p> ₦200,000 to next VIP status </p>
        </div>
      </div>
      <div className="depositPage">
        <h4> Fund Your Account </h4>
        <h6> *Minimum Deposit is $1 (₦450) </h6>
        <h3> Crypto Currency </h3>
        <div className="depositPageMethods">
          <div
            className="depositMethod"
            onClick={() => setDepositMethod("Bitcoin")}
          >
            <img src="/public_assets/svgs/bitcoin.svg" alt="bitcoin" />
            <h5> Bitcoin </h5>
          </div>
          <div
            className="depositMethod"
            onClick={() => setDepositMethod("USDT ERC 20")}
          >
            <img src="/public_assets/svgs/usdt.svg" alt="usdt" />
            <h5> USDT ERC 20 </h5>
          </div>
          <div
            className="depositMethod"
            onClick={() => setDepositMethod("USDT TRC 20")}
          >
            <img src="/public_assets/svgs/usdt.svg" alt="usdt" />
            <h5> USDT TRC 20 </h5>
          </div>
          <div
            className="depositMethod"
            onClick={() => setDepositMethod("Litecoin")}
          >
            <img src="/public_assets/svgs/litecoin.svg" alt="litecoin" />
            <h5> Litecoin </h5>
          </div>
          <div
            className="depositMethod"
            onClick={() => setDepositMethod("Ethereum")}
          >
            <img src="/public_assets/svgs/ethereum.svg" alt="ethereum" />
            <h5> Ethereum </h5>
          </div>
        </div>
        <h3> Online Payments </h3>
        <div className="depositPageMethods">
          <div
            className="depositMethod"
            onClick={() => {
              toast.error("Deposit Method is currently unavailable");
              // setDepositMethod("Paypal")
            }}
          >
            <img src="/public_assets/svgs/paypal.svg" alt="paypal" />
            <h5> PayPal </h5>
          </div>
          <div
            className="depositMethod"
            onClick={() => {
              toast.error("Deposit Method is currently unavailable");
              // setDepositMethod("Card")
            }}
          >
            <img src="/public_assets/svgs/mastercard.svg" alt="card payment" />
            <h5> Card </h5>
          </div>
        </div>
        <h3> Online Banking </h3>
        <div className="depositPageMethods">
          <div
            className="depositMethod"
            onClick={() => setDepositMethod("Bank Transfer")}
          >
            <AiOutlineBank />
            <h5> Bank Transfer </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deposit;
