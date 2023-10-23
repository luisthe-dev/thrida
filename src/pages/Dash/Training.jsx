import React, { useEffect, useState } from "react";
import { GetTrainingDetails } from "../../components/apis/rcodeapi";
const Training = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allAssets, setAllAssets] = useState([]);

  useEffect(() => {
    const getAllAssets = async () => {
      setIsLoading(true);
      const myData = await GetTrainingDetails();
      setAllAssets(myData.data);
      setIsLoading(false);
    };
    getAllAssets();
    return;
  }, []);
  return (
    <div className="Rocde-training-body">
      <h2>Training Videos</h2>
      <div className="RcodeTrainingMainList">
        {isLoading ? (
          <p> Loading Training... </p>
        ) : allAssets.length > 0 ? (
          allAssets.map((asset, assetKey) => (
            <a target="_blank" href={asset.video_url}>
              <iframe key={assetKey} src={asset.video_url}></iframe>
              <div class="blocker"></div>
            </a>
          ))
        ) : (
          <p> No Asset Available </p>
        )}
      </div>
    </div>
  );
};
export default Training;
