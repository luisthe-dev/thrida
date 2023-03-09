import React, { useEffect, useState } from "react";
import { BiMoney } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { MdMoneyOff } from "react-icons/md";
import { toast } from "react-toastify";
import { imageUrl } from "../apis/axios";
import {
  applyTourney,
  checkRegisteredTourney,
  getSingleTourney,
  getTourneyLeaderboard,
} from "../apis/tournamentApi";

const TourneyInfoSide = ({ active }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);
  const [tourneyLeaderboard, setTourneyLeaderboard] = useState([]);
  const [tourneyDetails, setTourneyDetails] = useState({
    name: "",
    host: "",
    cashPrice: "",
    is_active: false,
    description: "",
    tournamentCash: "",
    startDate: "",
    endDate: "",
    image: "",
    userCount: "",
    rebuy_cost: "",
    rebuy_count: "",
    participation_cost: "",
  });

  const applyToTourney = async () => {
    setIsLoading(true);
    const applyRes = await applyTourney(active);
    Number(applyRes.status) === 1
      ? toast.success("Signed Up For Tournament Successfully")
      : toast.error(applyRes.message);
    setIsLoading(false);
  };

  const getTourneyDetails = async () => {
    setIsLoading(true);
    const tourneyRes = await getSingleTourney(active);
    const tourneyData = tourneyRes.data;
    setTourneyDetails({
      name: tourneyData.name,
      cashPrice: Number(tourneyData.cash_price).toLocaleString(),
      is_active: Number(tourneyData.is_active),
      description: tourneyData.description,
      tournamentCash: Number(tourneyData.tournament_cash).toLocaleString(),
      startDate: tourneyData.start_date,
      endDate: tourneyData.end_date,
      image: tourneyData.image,
      userCount: tourneyData.user_count,
      rebuy_cost: tourneyData.rebuy_cost,
      rebuy_count: tourneyData.rebuy_count,
      participation_cost: tourneyData.participation_cost,
    });
    const getReg = await checkRegisteredTourney(tourneyData.id);
    console.log(getReg);
    getReg.status === 1 ? setIsRegistered(true) : setIsRegistered(false);
    const getLeaderboard = await getTourneyLeaderboard(tourneyData.id);
    setTourneyLeaderboard(getLeaderboard.data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (active === 0) return;
    getTourneyDetails();
  }, [active]);

  return (
    <div
      className={
        active !== 0 ? "tradeHistoryPopUp active" : "tradeHistoryPopUp"
      }
    >
      <div className="tourneyInfoBlock">
        {isLoading ? (
          <p> Loading Tournament Info ... </p>
        ) : (
          <>
            <div
              className="tourneyInfoBlockHeader"
              style={{
                backgroundImage: `url("${imageUrl}${tourneyDetails.image}")`,
              }}
            >
              <h1> {tourneyDetails.name} </h1>
            </div>
            <div className="tourneyInfoBlockPrizePool">
              <h6> Price Pool </h6>
              <h3> ₦{tourneyDetails.cashPrice} </h3>
            </div>
            <div className="tourneyInfoBlockInfo">
              <div className="tourneyInfoBlockInfoBlock">
                <FiUsers />
                <h4> {Number(tourneyDetails.userCount)} </h4>
                <p> Contestants </p>
              </div>
              <div className="tourneyInfoBlockInfoBlock">
                <BiMoney />
                <h4>{tourneyDetails.tournamentCash}</h4>
                <p> Start Balance </p>
              </div>
              <div className="tourneyInfoBlockInfoBlock">
                <MdMoneyOff />
                <h4> ₦{Number(tourneyDetails.rebuy_cost).toLocaleString()} </h4>
                <p> Rebuy Cost </p>
              </div>
            </div>
            <div className="tourneyInfoBlockActionBtn">
              <button onClick={isRegistered ? () => {} : applyToTourney}>
                {isRegistered
                  ? "Signed Up Already"
                  : `Sign Up For ₦
                ${Number(tourneyDetails.participation_cost).toLocaleString()}`}
              </button>
            </div>
            <div className="tourneyInfoBlockDesc">
              <h4> Tournament Description </h4>
              <div className="tourneyInfoBlockDescFlex">
                <p> Number of rebuys </p>
                <p> {Number(tourneyDetails.rebuy_count).toLocaleString()} </p>
              </div>
              <div className="tourneyInfoBlockDescFlex">
                <p> Start Date </p>
                <p> {tourneyDetails.startDate} 10:00 </p>
              </div>
              <div className="tourneyInfoBlockDescFlex">
                <p> End Date </p>
                <p> {tourneyDetails.endDate} 21:00 </p>
              </div>
              <p>{tourneyDetails.description}</p>
            </div>
            <div className="tourneyInfoBlockLeaderBoard">
              <h4> Leaderboard </h4>
              <table>
                <thead>
                  <tr>
                    <th> Place </th>
                    <th> Name </th>
                    <th> Amount </th>
                  </tr>
                </thead>
                <tbody>
                  {tourneyLeaderboard.length < 1 ? (
                    <p>No Registered Contestant!..</p>
                  ) : (
                    <>
                      {tourneyLeaderboard.map((leader, key) => (
                        <tr key={key}>
                          <td> {key + 1}</td>
                          <td> {leader.user} </td>
                          <td>
                            {Number(leader.user_balance).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TourneyInfoSide;
