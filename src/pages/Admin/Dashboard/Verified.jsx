import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Table from "../../../components/Admin/Table";
import { GetProUsers } from "../../../components/apis/adminApi";

const Verified = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async (pageNumber) => {
    setIsLoading(true);

    const userRes = await GetProUsers(pageNumber);

    if (!userRes.status === 0 || !userRes.data) {
      toast.error("Error Fetching Users");
      setIsLoading(false);
      setUsers([]);
      return;
    }

    const tempUsers = [];

    userRes.data.map((user) => {
      const userData = [
        user.name,
        user.level,
        `₦${JSON.parse(user.wallets).real_wallet.toLocaleString()}`,
        <>
          <button> Edit </button>
          <button> Delete </button>
        </>,
      ];
      tempUsers.push(userData);
      return true;
    });

    setIsLoading(false);
    setUsers(tempUsers);
  };

  useEffect(() => {
    getUsers(1);
  }, []);

  return (
    <>
      <Table
        classes={"bordered hover"}
        title={"Pro Users"}
        tableHeaders={["S/N", "Name", "Level", "Wallet", "Actions"]}
        tableData={users}
        isLoading={isLoading}
      />
    </>
  );
};

export default Verified;
