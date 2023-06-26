import React, { useState } from "react";

const BonusSide = ({ active }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={active ? "tradeHistoryPopUp active" : "tradeHistoryPopUp"}>
      <div className="proTraderInfoBlock">
        {isLoading ? <p> Loading Bonus Details ... </p> : <></>}
      </div>
    </div>
  );
};

export default BonusSide;
