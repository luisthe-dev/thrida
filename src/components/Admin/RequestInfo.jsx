import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiLoader } from "react-icons/fi";
import { toast } from "react-toastify";
import {
  approveSingleRequest,
  denySingleRequest,
  getSingleRequest,
  getSingleUser,
} from "../apis/adminApi";
import { imageUrl } from "../apis/axios";

const RequestInfo = ({ requestId, setRequestId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [requestDetails, setRequestDetails] = useState({
    name: "",
    email: "",
    verificationType: "",
    verificationImage: "",
    userImage: "",
    requestDate: "",
    requestStatus: "Pending",
    requestPercentage: 0,
  });

  const denyRequest = async () => {
    setIsLoading(true);

    const requestRes = await denySingleRequest(requestId);

    if (requestRes.status === 1) {
      toast.success("Request Denied");
      setRequestId(0);
    }
  };

  const acceptRequest = async () => {
    setIsLoading(true);

    const requestRes = await approveSingleRequest(requestId);

    if (requestRes.status === 1) {
      toast.success("Request Approved");
      setRequestId(0);
    }
  };

  const getRequestDetails = async () => {
    setIsLoading(true);
    const requestRes = await getSingleRequest(requestId);
    const requestData = requestRes.data;
    const userRes = await getSingleUser(requestData.user_id);
    const userData = userRes.data;
    setRequestDetails({
      name: userData.name,
      email: userData.email,
      verificationType: requestData.vertification_type,
      verificationImage: requestData.verification_url,
      userImage: requestData.user_image,
      requestDate: requestData.created_at,
      requestStatus: requestData.verification_status,
      requestPercentage: requestData.percentage_win,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    if (requestId === 0) return;
    getRequestDetails();
  }, [requestId]);

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
                <AiOutlineCloseCircle onClick={() => setRequestId(0)} />
              </div>
              <div className="userInfoMainBlocks">
                <div
                  className="userInfoMainBlockInput"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></div>
                <div className="userInfoMainBlockInput">
                  <p> Name </p>
                  <input
                    type={"text"}
                    placeholder={"Name"}
                    value={requestDetails.name}
                    readOnly
                  />
                </div>
                <div className="userInfoMainBlockInput">
                  <p> Email </p>
                  <input
                    type={"text"}
                    placeholder={"Email"}
                    value={requestDetails.email}
                    readOnly
                  />
                </div>
                <div className="userInfoMainBlockInput">
                  <p> Verification Type </p>
                  <input
                    type={"text"}
                    placeholder={"Verification Type"}
                    value={requestDetails.verificationType}
                    readOnly
                  />
                </div>
                <div className="userInfoMainBlockInput">
                  <p> Verification ID </p>
                  <img src={`${imageUrl}${requestDetails.verificationImage}`} />
                </div>
                <div className="userInfoMainBlockInput">
                  <p> User Image </p>
                  <img src={`${imageUrl}${requestDetails.userImage}`} />
                </div>
                <div className="userInfoMainBlockBtns">
                  <button onClick={acceptRequest}>Approve Request</button>
                  <button onClick={denyRequest}> Deny Request </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default RequestInfo;
