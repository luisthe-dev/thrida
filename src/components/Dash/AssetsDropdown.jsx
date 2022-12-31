import React, { useState } from "react";
import { useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import { getAllActiveAssets } from "../apis/assetApi";

const AssetsDropdown = () => {
  const [dropActive, setDropActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [allAssets, setAllAssets] = useState([]);
  const [activeAsset, setActiveAsset] = useState([]);

  useEffect(() => {
    const getAllAssets = async () => {
      setIsLoading(true);
      const myAssets = await getAllActiveAssets();
      console.log(myAssets);
      setAllAssets(myAssets.data);
      setIsLoading(false);
    };
    getAllAssets();
  }, []);

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
              <h5> Asset Name </h5>
              <p> 80% </p>
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
          allAssets.map((asset) => (
            <div className="assetListAssetDetails">
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
