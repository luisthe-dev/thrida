import React, { useState, useEffect } from "react";
import { GetBonus } from "../apis/rcodeapi";

const BonusSide = ({ active }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [bonus, setBonus] = useState({});
  useEffect(()=>{
    const loadBonus = async () =>{
      const data = await GetBonus();
      if(data.status===1){
      setBonus(data.data);
      }
      console.log(data);
      setIsLoading(false);
    }
    loadBonus();
  },[]);
  return (
    <div className={active ? "tradeHistoryPopUp active" : "tradeHistoryPopUp"}>
      <div className="proTraderInfoBlock bonus-class">
        {isLoading ? <p> Loading Bonus Details ... </p> : bonus.map((item)=>{
          return (
            <div className="bonus-item" key={item.id}>
              <div className="inner-bonus-item">
                <div>Coupon</div>
                <div>{item.bonus_amount}$</div>
              </div>
              <div className="bonus-foot">{item.bonus_status.replaceAll('_',' ')}</div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default BonusSide; 
