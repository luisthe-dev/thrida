import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Table from "../../../components/Admin/Table";
import { GetAllUserTransactions } from "../../../components/apis/adminApi";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTransactions = async (pageNumber) => {
    setIsLoading(true);

    const transactionsRes = await GetAllUserTransactions(pageNumber);

    if (!transactionsRes.status === 0 || !transactionsRes.data) {
      toast.error("Error Fetching Transactions");
      setIsLoading(false);
      setTransactions([]);
      return;
    }

    const tempTransactions = [];

    transactionsRes.data.map((transactions) => {
      const userData = [
        transactions.email,
        `$${Number(transactions.amount).toLocaleString()}`,
        transactions.type,
        transactions.channel,
        transactions.status,
        <button> View Details </button>,
      ];
      tempTransactions.push(userData);
    });

    setIsLoading(false);
    setTransactions(tempTransactions);
  };

  useEffect(() => {
    getTransactions(1);
  }, []);

  return (
    <>
      <Table
        classes={"bordered hover"}
        title={"Transactions"}
        tableHeaders={[
          "S/N",
          "Email",
          "Amount",
          "Type",
          "Channel",
          "Status",
          "Action",
        ]}
        tableData={transactions}
        isLoading={isLoading}
      />
    </>
  );
};

export default Transaction;
