import React, { useEffect, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { toast } from "react-toastify";
import Table from "../../../components/Admin/Table";
import {
  getAllStats,
  GetAllUsers,
  GetProUsers,
} from "../../../components/apis/adminApi";

const Stats = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [proUsers, setProUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({});

  const getAllUsers = async () => {
    const userRes = await GetAllUsers(1);

    if (!userRes.status === 0 || !userRes.data) {
      toast.error("Error Fetching Users");

      setAllUsers([]);
      return;
    }

    const tempUsers = [];

    userRes.data.slice(0, 5).map((user) => {
      const userData = [
        user.name,
        user.level,
        `₦${Number(JSON.parse(user.wallets).real_wallet).toLocaleString()}`,
        Number(user.is_pro) ? <FiCheckCircle /> : <ImCancelCircle />,
      ];
      tempUsers.push(userData);
      return true;
    });

    setAllUsers(tempUsers);
  };

  const getProUsers = async () => {
    const userRes = await GetProUsers(1);

    if (!userRes.status === 0 || !userRes.data) {
      toast.error("Error Fetching Users");

      setProUsers([]);
      return;
    }

    const tempUsers = [];

    userRes.data.slice(0, 5).map((user) => {
      const userData = [
        user.name,
        user.email,
        `₦${Number(JSON.parse(user.wallets).real_wallet).toLocaleString()}`,
      ];
      tempUsers.push(userData);
      return true;
    });

    setProUsers(tempUsers);
  };

  const getStats = async () => {
    const statRes = await getAllStats();

    if (!statRes.status === 0 || !statRes.data) {
      toast.error("Error Getting Stats");
      return;
    }

    const tempStats = {
      user: statRes.data.user_count || 0,
      wallet: statRes.data.user_count || 0,
      pro: statRes.data.pro_user_count || 0,
      transactions: statRes.data.transaction_count || 0,
    };

    setStats(tempStats);
  };

  useEffect(() => {
    const getPageDets = async () => {
      setIsLoading(true);
      await getAllUsers();
      await getProUsers();
      await getStats();
      setIsLoading(false);
    };

    getPageDets();
  }, []);

  return (
    <>
      <div className="adminStatBlocks">
        <div className="adminStatBlock">
          <p> {stats.user || 0} </p>
          <label> Users </label>
        </div>
        <div className="adminStatBlock">
          <p> {stats.wallet || 0} </p>
          <label> Wallet Balance </label>
        </div>
        <div className="adminStatBlock">
          <p> {stats.pro || 0} </p>
          <label> Pro Traders </label>
        </div>
        <div className="adminStatBlock">
          <p> {stats.transactions || 0} </p>
          <label> Transactions </label>
        </div>
      </div>
      <div className="adminStatTables">
        <div className="adminStatTable">
          <Table
            classes={"hover"}
            title={"Users"}
            tableHeaders={["S/N", "Name", "Level", "Wallet", "Pro"]}
            tableData={allUsers}
            isLoading={isLoading}
          />
        </div>
        <div className="adminStatTable">
          <Table
            classes={"hover"}
            title={"Pro Traders"}
            tableHeaders={["S/N", "Name", "Email", "Wallet"]}
            tableData={proUsers}
            isLoading={isLoading}
          />
        </div>
      </div>
    </>
  );
};

export default Stats;
