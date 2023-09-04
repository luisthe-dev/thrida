import React, { useState } from "react";
import { FiLoader } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RequestPro } from "../../../components/apis/userApi";

const Request = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [proDetails, setProDetails] = useState({
    verificationType: "",
    verificationImage: "",
    userImage: "",
    percentageWin: "",
    description: "",
  });
  const myNavigate = useNavigate();

  const submitProForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const myProData = new FormData();

    myProData.append("verificationType", proDetails.verificationType);
    myProData.append("verificationImage", proDetails.verificationImage);
    myProData.append("userImage", proDetails.userImage);
    myProData.append("percentageWin", proDetails.percentageWin);
    myProData.append("description", proDetails.description);

    const requestRes = await RequestPro(myProData);

    requestRes.status === 1 && toast.success("Request Has Been Submitted");

    setIsLoading(false);
  };

  const imageUpload = (e) => {
    setProDetails({ ...proDetails, verificationImage: e.target.files[0] });
  };

  const userUpload = (e) => {
    setProDetails({ ...proDetails, userImage: e.target.files[0] });
  };

  return (
    <div className="adminStatTables">
      <div className="adminStatTable">
        <h2> Request To Become A Pro Trader </h2>
        <form onSubmit={submitProForm}>
          <label> Verification Type </label>
          <select
            type="text"
            value={proDetails.verificationType}
            onChange={(e) =>
              setProDetails({ ...proDetails, verificationType: e.target.value })
            }
          >
            <option value={""} disabled>
              Select A Verification Method
            </option>
            <option value={"NIN Slip"}> NIN Slip </option>
            <option value={"Passport"}> Passport </option>
            <option value={"Driving License"}> Driving License </option>
            <option value={"Residence permnit"}> Residence permnit </option>
            <option value={"Voter's Card"}> Voter's Card </option>
          </select>
          <label> Verification Image </label>
          <input type={"file"} accept="image/*" onChange={imageUpload} />
          <label> User Picture </label>
          <input type={"file"} accept="image/*" onChange={userUpload} />
          <label> Descripion </label>
          <textarea
            rows={6}
            value={proDetails.description}
            onInput={(e) =>
              setProDetails({ ...proDetails, description: e.target.value })
            }
          />
          <label> Percentage To Be Collected </label>
          <input
            type="number"
            value={proDetails.percentageWin}
            onInput={(e) =>
              setProDetails({ ...proDetails, percentageWin: e.target.value })
            }
          />
          <button disabled={isLoading} className={"loadingBtn"}>
            {isLoading ? <FiLoader /> : `Request To Be A Pro`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Request;
