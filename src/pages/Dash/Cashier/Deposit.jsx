import React from "react";
import { AiOutlineBank } from "react-icons/ai";

const Deposit = () => {
  return (
    <>
      <div className="cashierPageBodyBlocks">
        <div className="cashierPageBodyBlock">
          <h5> Total Deposit </h5>
          <h6> ₦120,000 </h6>
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
          <div className="depositMethod">
            <img src="/public_assets/svgs/bitcoin.svg" alt="bitcoin" />
            <h5> Bitcoin </h5>
          </div>
          <div className="depositMethod">
            <img src="/public_assets/svgs/usdt.svg" alt="usdt" />
            <h5> USDT ERC 20 </h5>
          </div>
          <div className="depositMethod">
            <img src="/public_assets/svgs/usdt.svg" alt="usdt" />
            <h5> USDT TRC 20 </h5>
          </div>
          <div className="depositMethod">
            <img src="/public_assets/svgs/litecoin.svg" alt="litecoin" />
            <h5> Litecoin </h5>
          </div>
          <div className="depositMethod">
            <img src="/public_assets/svgs/ethereum.svg" alt="ethereum" />
            <h5> Ethereum </h5>
          </div>
        </div>
        <h3> Online Payments </h3>
        <div className="depositPageMethods">
          <div className="depositMethod">
            <img src="/public_assets/svgs/paypal.svg" alt="paypal" />
            <h5> PayPal </h5>
          </div>
          <div className="depositMethod">
            <img src="/public_assets/svgs/mastercard.svg" alt="card payment" />
            <h5> Card </h5>
          </div>
        </div>
        <h3> Online Banking </h3>
        <div className="depositPageMethods">
          <div className="depositMethod">
            <AiOutlineBank />
            <h5> Bank Transfer </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deposit;
