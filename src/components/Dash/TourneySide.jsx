import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  appliedTourney,
  applyTourney,
  getActiveTourneys,
} from "../apis/tournamentApi";

const TourneySide = ({ active }) => {
  const [tourneyData, setTourneyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [applied, setApplied] = useState([]);

  const myNavigate = useNavigate();

  const applyToTourney = async (tourneyId) => {
    setIsLoading(true);
    const applyRes = await applyTourney(tourneyId);
    console.log(applyRes);
    Number(applyRes.status) === 1
      ? toast.success("Signed Up For Tournament Successfully")
      : toast.error(applyRes.message);
    await getTourneys();
  };

  const readMoreOnTourney = async (tourneyId) => {
    console.log(tourneyId);
  };

  const getTourneys = async () => {
    setIsLoading(true);
    const tradesRes = await getActiveTourneys();
    const regedRes = await appliedTourney();
    setTourneyData(tradesRes.data);
    setApplied(regedRes.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getTourneys();
    return;
  }, [active]);

  return (
    <div className={active ? "tradeHistoryPopUp active" : "tradeHistoryPopUp"}>
      <div className="newTourneyBtn">
        <button onClick={() => myNavigate("/dashboard/tournaments/host")}>
          Host A Tournament
        </button>
      </div>
      <div className="tourneyHistory">
        {isLoading ? (
          <p> Loading Tournaments ... </p>
        ) : tourneyData.length < 1 ? (
          <p> No Active Tournament! </p>
        ) : (
          tourneyData.map((tourney, key) => (
            <div
              key={key}
              className={"tourneyBlock"}
              style={{
                backgroundImage: `url("http://127.0.0.1:8000/storage/${tourney.image}")`,
              }}
            >
              <div className="tourneyBlockHeader">
                <h5> {tourney.name} </h5>
                <p> {tourney.start_date}24th December 2023 </p>
              </div>
              <div className="tourneyBlockFooter">
                <p> ₦{Number(tourney.cash_price).toLocaleString()} </p>
                <div className="tourneyBlockFooterBtns">
                  <button onClick={() => readMoreOnTourney(tourney.id)}>
                    Read More
                  </button>
                  {applied.filter(
                    (appliedOne) => appliedOne.tournament_id === tourney.id
                  ).length > 0 ? (
                    <button
                      disabled={true}
                      onClick={() => applyToTourney(tourney.id)}
                    >
                      Signed Up
                    </button>
                  ) : (
                    <button onClick={() => applyToTourney(tourney.id)}>
                      Sign Up
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TourneySide;
