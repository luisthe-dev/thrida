import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Table from "../../../components/Admin/Table";
import TransactionInfo from "../../../components/Admin/TransactionInfo";
import { GetAllPendingWithdrawal } from "../../../components/apis/adminApi";

const Withdrawal = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedTrans, setExpandedTrans] = useState(0);

  const getTransactions = async (pageNumber) => {
    setIsLoading(true);

    const transactionsRes = await GetAllPendingWithdrawal(pageNumber);

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
        `₦${Number(transactions.amount).toLocaleString()}`,
        transactions.channel,
        <button onClick={() => setExpandedTrans(transactions.id)}>
          View Details
        </button>,
      ];
      tempTransactions.push(userData);
      return true;
    });

    setIsLoading(false);
    setTransactions(tempTransactions);
  };

  useEffect(() => {
    getTransactions(1);
  }, []);

  return (
    <>
      {expandedTrans !== 0 && (
        <TransactionInfo
          transactionId={expandedTrans}
          setTransactionId={setExpandedTrans}
          transactionType={"Withdrawal"}
        />
      )}
      <Table
        classes={"bordered hover"}
        title={"Pending Withdrawals"}
        tableHeaders={["S/N", "Email", "Amount", "Channel", "Action"]}
        tableData={transactions}
        isLoading={isLoading}
      />
    </>
  );
};

export default Withdrawal;
