import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import RequestInfo from "../../../components/Admin/RequestInfo";
import Table from "../../../components/Admin/Table";
import {
  GetProRequests,
  getSingleUser,
} from "../../../components/apis/adminApi";

const ProRequests = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allRequests, setAllRequests] = useState([]);
  const [editRequest, setEditRequest] = useState(0);

  const getRequests = async (pageNumber) => {
    setIsLoading(true);

    const requestRes = await GetProRequests(pageNumber);

    if (!requestRes.status === 0 || !requestRes.data) {
      toast.error("Error Fetching Requests");
      setIsLoading(false);
      setAllRequests([]);
      return;
    }

    const tempRequests = [];

    await requestRes.data.map(async (request) => {
      const userDetails = await getSingleUser(request.user_id);

      if (!userDetails.data) return false;

      const requestData = [
        userDetails.data.name,
        userDetails.data.email,
        request.vertification_type,
        request.created_at.split(" ")[0],
        <button onClick={() => setEditRequest(request.id)}> Edit </button>,
      ];
      tempRequests.push(requestData);

      return true;
    });

    setIsLoading(false);
    setAllRequests(tempRequests);
  };

  useEffect(() => {
    if (editRequest !== 0) return;
    getRequests(1);
  }, [editRequest]);

  return (
    <>
      {editRequest !== 0 && (
        <RequestInfo requestId={editRequest} setRequestId={setEditRequest} />
      )}
      <Table
        classes={"bordered hover"}
        title={"Pro Requests"}
        tableHeaders={[
          "S/N",
          "Name",
          "Email",
          "Document Type",
          "Request Date",
          "Actions",
        ]}
        tableData={allRequests}
        isLoading={isLoading}
      />
    </>
  );
};

export default ProRequests;
