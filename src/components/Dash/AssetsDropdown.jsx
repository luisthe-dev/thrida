import React, { useState } from "react";
import { useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  intializeChartStoreData,
  updateActiveAsset,
} from "../../redux/chartStore";
import { getAllActiveAssets } from "../apis/assetApi";

const AssetsDropdown = () => {
  const [dropActive, setDropActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [allAssets, setAllAssets] = useState([]);
  const [activeAsset, setActiveAsset] = useState();
  const [activeAssetDetails, setActiveAssetDetails] = useState({});
  const myDispatch = useDispatch();

  const { level } = useSelector((state) => state.userStore.userDetails);

  const allowedLevels = ["Free"];

  if (level === "Silver" || level === "Gold") allowedLevels.push("Silver");
  if (level === "Gold") allowedLevels.push("Gold");

  useEffect(() => {
    const getAllAssets = async () => {
      setIsLoading(true);
      const myAssets = await getAllActiveAssets();
      setAllAssets(myAssets.data);
      switchActive(
        localStorage.getItem("activeAsset")
          ? localStorage.getItem("activeAsset")
          : myAssets.data[0].asset_name,
        myAssets.data
      );
    };
    getAllAssets();
    return;
  }, [level]);

  const switchActive = (assetName, assetData = allAssets) => {
    if (!level) return;
    if (!assetName) return;
    if (assetData.length === 0) return;

    setIsLoading(true);
    setDropActive(false);
    const foundAssets = assetData.filter(
      (asset) =>
        asset.asset_name === assetName &&
        Number(asset.status) === 1 &&
        allowedLevels.includes(asset.level)
    );
    if (foundAssets.length === 0) {
      toast.error("Error Switching Asset");
      setIsLoading(false);
      return;
    }

    setActiveAssetDetails(foundAssets[0]);
    setActiveAsset(assetName);
    myDispatch(intializeChartStoreData(assetName));
    myDispatch(updateActiveAsset(assetName));
    localStorage.setItem("activeAsset", assetName);

    setIsLoading(false);
  };

  return (
    <div className={dropActive ? "assetsMainView active" : "assetsMainView"}>
      <div
        className="assetsMainAsset"
        onClick={() => setDropActive(!dropActive)}
      >
        {isLoading ? (
          <p> Loading Assets... </p>
        ) : (
          <>
            <div className="assetMainAssetDetails">
              <h5> {activeAssetDetails?.asset_name} </h5>
              <p> {activeAssetDetails?.volatility}% </p>
            </div>
            <div className="assetMainAssetBtn">
              <p>
                <BiChevronDown />
              </p>
            </div>
          </>
        )}
      </div>
      <div className="assetsMainList">
        {isLoading ? (
          <p> Loading Assets... </p>
        ) : allAssets.length > 0 ? (
          allAssets.map((asset, assetKey) => (
            <div
              className={
                allowedLevels.includes(asset.level)
                  ? "assetListAssetDetails"
                  : "assetListAssetDetails disabled"
              }
              key={assetKey}
              onClick={() => switchActive(asset.asset_name)}
            >
              <img src={asset.image} />
              <h5> {asset.asset_name} </h5>
              <p> {asset.volatility}% </p>
            </div>
          ))
        ) : (
          <p> No Asset Available </p>
        )}
      </div>
    </div>
  );
};

export default AssetsDropdown;
