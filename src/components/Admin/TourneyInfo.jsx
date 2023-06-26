import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiLoader } from "react-icons/fi";
import { toast } from "react-toastify";
import { getSingleUser } from "../apis/adminApi";
import { imageUrl } from "../apis/axios";
import {
  deleteTournament,
  getSingleTourney,
  toggleTournament,
} from "../apis/tournamentApi";

const TourneyInfo = ({ tourneyId, setTourneyId }) => {
  const [isLoading, setIsLoading] = useState(false);
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
  });

  const toggleTourney = async () => {
    setIsLoading(true);
    const freezeRes = await toggleTournament(tourneyId);
    freezeRes
      ? toast.success(freezeRes.message)
      : toast.error(freezeRes.message);
    await getTourneyDetails();
    setIsLoading(false);
  };

  const deleteTourney = async () => {
    setIsLoading(true);
    const freezeRes = await deleteTournament(tourneyId);
    freezeRes
      ? toast.success(freezeRes.message)
      : toast.error(freezeRes.message);
    await getTourneyDetails();
    setIsLoading(false);
  };

  const getTourneyDetails = async () => {
    setIsLoading(true);
    const tourneyRes = await getSingleTourney(tourneyId);
    const tourneyData = tourneyRes.data;
    const userId = tourneyData.user_id;
    const userData = (await getSingleUser(userId)).data;
    setTourneyDetails({
      name: tourneyData.name,
      host: userData.name,
      cashPrice: Number(tourneyData.cash_price).toLocaleString(),
      is_active: Number(tourneyData.is_active),
      description: tourneyData.description,
      tournamentCash: Number(tourneyData.tournament_cash).toLocaleString(),
      startDate: tourneyData.start_date,
      endDate: tourneyData.end_date,
      image: tourneyData.image,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getTourneyDetails();
    return;
  }, [tourneyId]);

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
                <AiOutlineCloseCircle onClick={() => setTourneyId(0)} />
              </div>
              <div className="userInfoMainBlocks">
                <div
                  className="userInfoMainBlockInput"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={`${imageUrl}${tourneyDetails.image}`} />
                </div>
                <div className="userInfoMainBlockInput">
                  <p> Name </p>
                  <input
                    type={"text"}
                    placeholder={"Name"}
                    value={tourneyDetails.name}
                    readOnly
                  />
                </div>
                <div className="userInfoMainBlockInput">
                  <p> Host </p>
                  <input
                    type={"text"}
                    placeholder={"Host"}
                    value={tourneyDetails.host}
                    readOnly
                  />
                </div>
                <div className="userInfoMainBlockInput">
                  <p> Cash Price </p>
                  <input
                    type={"text"}
                    placeholder={"Cash Price"}
                    value={tourneyDetails.cashPrice}
                    readOnly
                  />
                </div>
                <div className="userInfoMainBlockInput">
                  <p> Tourney Cash </p>
                  <input
                    type={"text"}
                    placeholder={"Tourney Cash"}
                    value={tourneyDetails.tournamentCash}
                    readOnly
                  />
                </div>
                <div className="userInfoMainBlockBtns">
                  <button onClick={toggleTourney}>
                    {tourneyDetails.is_active ? `Deactivate ` : `Activate `}
                    Tournament
                  </button>
                  <button onClick={deleteTourney}> Delete Tournament </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TourneyInfo;
