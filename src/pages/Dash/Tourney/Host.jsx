import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTourney } from "../../../components/apis/tournamentApi";

const Host = () => {
  const [tourneyData, setTourneyData] = useState({
    cash_price: "",
    description: "",
    name: "",
    amount: "",
    start_date: "",
    end_date: "",
    partCost: "",
    tourneyImage: "",
    rebuy: "",
    rebuyCount: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const myNavigate = useNavigate();

  const imageUpload = (e) => {
    setTourneyData({ ...tourneyData, tourneyImage: e.target.files[0] });
  };

  const submitTourney = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const myTourneyData = new FormData();

    myTourneyData.append("cash_price", tourneyData.cash_price);
    myTourneyData.append("description", tourneyData.description);
    myTourneyData.append("name", tourneyData.name);
    myTourneyData.append("amount", tourneyData.amount);
    myTourneyData.append("start_date", tourneyData.start_date);
    myTourneyData.append("end_date", tourneyData.end_date);
    myTourneyData.append("partCost", tourneyData.partCost);
    myTourneyData.append("tourneyImage", tourneyData.tourneyImage);
    myTourneyData.append("rebuy", tourneyData.rebuy);
    myTourneyData.append("rebuyCount", tourneyData.rebuyCount);

    const tourneyRes = await createTourney(myTourneyData);

    if (tourneyRes.status === 1) {
      toast.success("Tournament Requested Successfully");
      myNavigate("/dashboard/cashier");
    } else {
      toast.error(tourneyRes.message);
    }

    setIsLoading(false);
  };

  return (
    <>
      <div className="TournamentHostContainer">
        <div className="TournamentHostForm">
          <form onSubmit={submitTourney}>
            <label> Tournament Cash Price (₦) </label>
            <input
              type="text"
              className="TourneyCashPrice"
              placeholder="0"
              value={tourneyData.cash_price}
              onInput={(e) =>
                setTourneyData({ ...tourneyData, cash_price: e.target.value })
              }
            />
            <label> Tournament Name </label>
            <input
              type="text"
              value={tourneyData.name}
              onInput={(e) =>
                setTourneyData({ ...tourneyData, name: e.target.value })
              }
            />
            <label> Tournament Description (optional)</label>
            <textarea
              type="text"
              rows={8}
              value={tourneyData.description}
              onInput={(e) =>
                setTourneyData({ ...tourneyData, description: e.target.value })
              }
            />
            <div className="TourneyFormTwins">
              <div>
                <label> Tournament Start Date </label>
                <input
                  type="date"
                  value={tourneyData.start_date}
                  onInput={(e) =>
                    setTourneyData({
                      ...tourneyData,
                      start_date: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label> Tournament End Date </label>
                <input
                  type="date"
                  value={tourneyData.end_date}
                  onInput={(e) =>
                    setTourneyData({ ...tourneyData, end_date: e.target.value })
                  }
                />
              </div>
            </div>
            <label> Tournament Image </label>
            <input type={"file"} accept="image/*" onChange={imageUpload} />
            <label> Start Balance For Contestants </label>
            <input
              type="number"
              value={tourneyData.amount}
              onInput={(e) =>
                setTourneyData({ ...tourneyData, amount: e.target.value })
              }
            />
            <label> Rebuy Cost </label>
            <input
              type="number"
              value={tourneyData.rebuy}
              onInput={(e) =>
                setTourneyData({ ...tourneyData, rebuy: e.target.value })
              }
            />
            <label> Allowed Number Of Rebuy </label>
            <input
              type="number"
              value={tourneyData.rebuyCount}
              onInput={(e) =>
                setTourneyData({ ...tourneyData, rebuyCount: e.target.value })
              }
            />
            <label> Participation Cost </label>
            <input
              type="number"
              value={tourneyData.partCost}
              onInput={(e) =>
                setTourneyData({ ...tourneyData, partCost: e.target.value })
              }
            />
            <div className="TourneyRules">
              <h3> Tournament Policies </h3>
              <ol>
                <li>
                  Your request to host a tournament will be reviewed. If found
                  worthy and pirze fund is attractive, it will be approved.
                </li>
                <li>
                  Prize Fund Payments are deducted from your live account once
                  you decide to host a tournament.
                </li>
                <li>
                  Thrida will ont be held responsible for traders profits or
                  losses used in hosting a tournament.
                </li>
                <li>
                  No Refunds on Prize Funds once tournament has been approved
                  and listed.
                </li>
              </ol>
            </div>
            <button disabled={isLoading}> Host Tourney </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Host;
