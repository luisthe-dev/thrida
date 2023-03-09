import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProUsers } from "../apis/userApi";

const ProTraderSide = ({ active, setActive, proActive }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [allPros, setAllPros] = useState([]);
  const myNavigate = useNavigate();

  const { is_pro } = useSelector((state) => state.userStore.userDetails);

  const getProBoard = async () => {
    setIsLoading(true);
    const proRes = await getProUsers(active);
    if (proRes.status === 1) {
      setAllPros(proRes.data.board);
    }
    setIsLoading(false);
  };

  const checkPro = (proId) => {
    setActive(false);
    proActive(proId);
  };

  useEffect(() => {
    getProBoard();
    return;
  }, [active]);

  return (
    <div className={active ? "tradeHistoryPopUp active" : "tradeHistoryPopUp"}>
      <div className="newTourneyBtn">
        {!is_pro && (
          <button onClick={() => myNavigate("/dashboard/pro/request")}>
            Become A Pro!
          </button>
        )}
      </div>
      <div className="proTraderBlock">
        {isLoading ? (
          <p> Loading Pro Traders Info ... </p>
        ) : (
          <>
            <div className="proTraderBlockHeader">
              <h3> Top Trader </h3>
              <p>
                Traders with the highest profit history. This list is updated{" "}
                <span>every second</span>.
              </p>
              <div className="proTraderBlockSelf">
                <p> You </p>
                <p> ₦0.00 </p>
              </div>
            </div>
            <div className="proTraderBlockBoard">
              <h5> Top 50 Traders </h5>
              <div className="proTraderBlockBoardTable">
                <div className="proTraderBlockBoardTableHeader">
                  <p> Ranking </p>
                  <p> Profit </p>
                </div>
                <div className="proTraderBlockBoardBody">
                  {allPros.length < 1 ? (
                    <p> No Active Pro Trader </p>
                  ) : (
                    <>
                      {allPros.map((pro, key) => (
                        <div
                          className="proTraderBlockBodyPro"
                          key={key}
                          onClick={() => checkPro(pro.id)}
                        >
                          <div>
                            <label>{key + 1}</label>
                            <p> {pro.name} </p>
                          </div>
                          <p> ₦{Number(pro.profit).toLocaleString()} </p>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProTraderSide;
