import React, { useEffect, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Table from "../../../components/Admin/Table";
import TourneyInfo from "../../../components/Admin/TourneyInfo";
import { getSingleUser } from "../../../components/apis/adminApi";
import { getAllTourneys } from "../../../components/apis/tournamentApi";

const Tournaments = () => {
  const [tournaments, setTournaments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editTourney, setEditTourney] = useState(0);
  const myNavigate = useNavigate();

  const getTournaments = async (pageNumber) => {
    setIsLoading(true);

    const tourneysRes = await getAllTourneys(pageNumber);

    if (!tourneysRes.status === 0 || !tourneysRes.data) {
      toast.error("Error Fetching Tournaments");
      setIsLoading(false);
      setTournaments([]);
      return;
    }

    const tempTourneys = [];

    await tourneysRes.data.map(async (tournament) => {
      const userId = tournament.user_id;
      const userData = (await getSingleUser(userId)).data;
      const tourneyData = [
        userData.name ? userData.name : `Admin Hosted`,
        `₦${Number(tournament.cash_price).toLocaleString()}`,
        tournament.name,
        Number(tournament.is_active) ? <FiCheckCircle /> : <ImCancelCircle />,
        <button onClick={() => setEditTourney(tournament.id)}>
          View Details
        </button>,
      ];
      tempTourneys.push(tourneyData);
    });

    setTournaments(tempTourneys);
    setIsLoading(false);
  };

  useEffect(() => {
    getTournaments(1);
  }, []);

  return (
    <>
      {editTourney !== 0 && (
        <TourneyInfo setTourneyId={setEditTourney} tourneyId={editTourney} />
      )}
      <button
        className="adminBtn"
        onClick={() => myNavigate("host")}
        style={{
          alignSelf: "flex-start",
          margin: "12px 50px",
          display: "inline-block",
        }}
      >
        Host A Tourney
      </button>
      <Table
        classes={"bordered hover"}
        title={"Tournaments"}
        tableHeaders={[
          "S/N",
          "Host",
          "Cash Price",
          "Tournament Name",
          "Status",
          "Action",
        ]}
        tableData={tournaments}
        isLoading={isLoading}
      />
    </>
  );
};

export default Tournaments;
