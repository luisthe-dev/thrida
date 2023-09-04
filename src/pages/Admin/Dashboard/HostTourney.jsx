import React, { useState } from "react";
import { FiLoader } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createAdminTourney } from "../../../components/apis/tournamentApi";

const HostTourney = () => {
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

  const submitTourneyForm = async (e) => {
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

    const tourneyRes = await createAdminTourney(myTourneyData);

    if (tourneyRes.status === 1) {
      toast.success("Tournament Requested Successfully");
      myNavigate("./");
    } else {
      toast.error(tourneyRes.message);
    }

    setIsLoading(false);
  };

  return (
    <div className="adminStatTables">
      <div className="adminStatTable">
        <h2> Host Tournament </h2>
        <form onSubmit={submitTourneyForm}>
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
          <label> Tournament End Date </label>
          <input
            type="date"
            value={tourneyData.end_date}
            onInput={(e) =>
              setTourneyData({ ...tourneyData, end_date: e.target.value })
            }
          />
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
          <button disabled={isLoading} className={"loadingBtn"}>
            {isLoading ? <FiLoader /> : `Host Tournament`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HostTourney;
