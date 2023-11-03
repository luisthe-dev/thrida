import React, { useEffect, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { toast } from "react-toastify";
import Table from "../../../components/Admin/Table";
import UserInfo from "../../../components/Admin/UserInfo";
import { GetAllUsers } from "../../../components/apis/adminApi";


const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editUser, setEditUser] = useState(0);


  const getUsers = async (pageNumber) => {
    setIsLoading(true);

    const userRes = await GetAllUsers(pageNumber);

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
        `₦${Number(JSON.parse(user?.wallets)?.real_wallet)?.toLocaleString()}`,
        Number(user.is_pro) ? <FiCheckCircle /> : <ImCancelCircle />,
        <button onClick={() => setEditUser(user.id)}> Edit </button>,
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
      {editUser !== 0 && <UserInfo userId={editUser} setUser={setEditUser} />}
      <Table
        classes={"bordered hover"}
        title={"Users"}
        tableHeaders={["S/N", "Name", "Level", "Wallet", "Pro", "Actions"]}
        tableData={users}
        isLoading={isLoading}
      />

    </>
  );
};

export default Users;
