import React, { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllActiveAssets } from "../../../components/apis/assetApi";
import { createAdminTourney } from "../../../components/apis/tournamentApi";

const HostTourney = () => {
  const [allAssets, setAllAssets] = useState([]);
  const [tourneyData, setTourneyData] = useState({
    cash_price: "",
    description: "",
    name: "",
    amount: "",
    start_date: "",
    end_date: "",
    asset_id: 0,
    partCost: "",
    tourneyImage: "",
    rebuy: 0,
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
    myTourneyData.append("asset_id", tourneyData.asset_id);
    myTourneyData.append("partCost", tourneyData.partCost);
    myTourneyData.append("tourneyImage", tourneyData.tourneyImage);
    myTourneyData.append("rebuy", tourneyData.rebuy);

    const tourneyRes = await createAdminTourney(myTourneyData);

    if (tourneyRes.status === 1) {
      toast.success("Tournament Requested Successfully");
      myNavigate("./");
    } else {
      toast.error(tourneyRes.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const getAllAssets = async () => {
      setIsLoading(true);
      const myAssets = await getAllActiveAssets();
      setAllAssets(myAssets.data);
      setIsLoading(false);
    };
    getAllAssets();
    return;
  }, []);

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
          <label> Select An Asset To Use </label>
          <select
            value={tourneyData.asset_id}
            onInput={(e) =>
              setTourneyData({
                ...tourneyData,
                asset_id: Number(e.target.value),
              })
            }
          >
            <option value={0} disabled>
              Make A Choice
            </option>
            {allAssets.map((asset, id) => (
              <option value={asset.id} key={id}>
                {asset.asset_name}
              </option>
            ))}
          </select>
          <label> Tournament Image </label>
          <input type={"file"} accept="image/*" onChange={imageUpload} />
          <label> Starting Amount Of Contestants </label>
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
