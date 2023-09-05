import React, { useEffect, useRef, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { toast } from "react-toastify";
import Table from "../../../components/Admin/Table";
import UserInfo from "../../../components/Admin/UserInfo";
import { GetAllUsers, SearchUsers } from "../../../components/apis/adminApi";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editUser, setEditUser] = useState(0);
  const [searchItem, setSearchItem] = useState("");
  const searchRef = useRef(null);

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

  const searchAllUsers = async (pageNumber) => {
    setIsLoading(true);

    const userRes = await SearchUsers(searchItem, pageNumber);

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

  useEffect(() => {
    if (searchRef.current) clearTimeout(searchRef.current);

    searchRef.current = setTimeout(() => {
      searchAllUsers(1);
    }, 3000);
  }, [searchItem]);

  return (
    <>
      {editUser !== 0 && <UserInfo userId={editUser} setUser={setEditUser} />}
      <input
        type="text"
        style={{
          width: "90%",
          borderRadius: 8,
          padding: "10px 12px",
          border: "1px solid var(--darkBackground)",
        }}
        placeholder="Search By Name or Email"
        value={searchItem}
        onInput={(e) => setSearchItem(e.target.value)}
      />
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
