import React, { useEffect, useState } from "react";
import { FiCheckCircle, FiLoader } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { toast } from "react-toastify";
import Table from "../../../components/Admin/Table";
import {
  createNewAsset,
  deleteAssets,
  toggleAssetStatus,
} from "../../../components/apis/assetApi";
import { getAllAssets } from "../../../components/apis/getApi";

const Assets = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pairName, setPairName] = useState("");
  const [volatility, setVolatility] = useState("");
  const [pairStatus, setPairStatus] = useState("");
  const [pairLevel, setPairLevel] = useState("");

  const [allAssets, setAllAssets] = useState([]);

  const submitAssetForm = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const assetData = {
      asset_name: pairName,
      volatility: volatility,
      level: pairLevel,
      status: pairStatus,
    };

    const createRes = await createNewAsset(assetData);

    if (createRes.status === 1) {
      toast.success("Asset Created Successfully");
      setPairLevel("");
      setPairName("");
      setPairStatus("");
      setVolatility("");
      await getAssets();
    } else {
      toast.error("Error Creating Asset");
    }

    setIsLoading(false);
  };

  const toggleStatus = async (assetId) => {
    setIsLoading(true);
    const toggleRes = await toggleAssetStatus(assetId);

    if (toggleRes.status === 1) {
      toast.success("Updated Assets Successfully");
      await getAssets();
    } else {
      toast.error("Error Updating Asset Status");
    }

    setIsLoading(false);
  };

  const deleteAsset = async (assetId) => {
    setIsLoading(true);

    const delRes = await deleteAssets(assetId);

    if (delRes.status === 1) {
      toast.success("Deleted Asset Successfully");
      await getAssets();
    } else {
      toast.error("Error Deleting Asset");
    }

    setIsLoading(false);
  };

  const getAssets = async () => {
    const tempAssets = [];
    setIsLoading(true);
    const AllAssets = await getAllAssets();
    AllAssets.data.map((asset) => {
      const newData = [
        asset.asset_name,
        asset.volatility,
        asset.level,
        Number(asset.status) ? <FiCheckCircle /> : <ImCancelCircle />,
        <>
          <button
            onClick={() => toggleStatus(asset.id)}
            className={"loadingBtn"}
            disabled={isLoading}
          >
            {isLoading ? (
              <FiLoader />
            ) : Number(asset.status) ? (
              "Disable"
            ) : (
              "Enable"
            )}
          </button>
          <button
            onClick={() => deleteAsset(asset.id)}
            className={"loadingBtn"}
            disabled={isLoading}
          >
            {isLoading ? <FiLoader /> : "Delete"}
          </button>
        </>,
      ];
      tempAssets.push(newData);
      return false;
    });
    setAllAssets(tempAssets);
    setIsLoading(false);
  };

  useEffect(() => {
    getAssets();
    return;
  }, []);

  return (
    <div className="adminStatTables">
      <div className="adminStatTable">
        <Table
          classes={"hover"}
          title={"Assets"}
          tableHeaders={[
            "S/N",
            "Asset Name",
            "Volatility",
            "Level",
            "Status",
            "Action",
          ]}
          tableData={allAssets}
          isLoading={isLoading}
        />
      </div>
      <div className="adminStatTable">
        <h2> Add New Asset </h2>
        <form onSubmit={submitAssetForm}>
          <label> Asset(Pair) Name </label>
          <input
            type={"text"}
            placeholder={"Pair Name"}
            value={pairName}
            onInput={(e) => setPairName(e.target.value)}
          />
          <label> Volatility (%) </label>
          <input
            type={"number"}
            placeholder={"Volatility"}
            value={volatility}
            onInput={(e) => setVolatility(e.target.value)}
          />
          <label> Level </label>
          <select
            value={pairLevel}
            onChange={(e) => setPairLevel(e.target.value)}
          >
            <option disabled value={""}>
              Select Asset Level
            </option>
            <option> Free </option>
            <option> Silver </option>
            <option> Gold </option>
          </select>
          <label> Status </label>
          <select
            value={pairStatus}
            onChange={(e) => setPairStatus(e.target.value)}
          >
            <option disabled value={""}>
              Select Asset Status
            </option>
            <option value={1}> Active </option>
            <option value={0}> Inactive </option>
          </select>
          <button disabled={isLoading} className={"loadingBtn"}>
            {isLoading ? <FiLoader /> : `Add Asset`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Assets;
