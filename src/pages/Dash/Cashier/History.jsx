import { useEffect, useState } from "react";
import { GetTransactions } from "../../../components/apis/transactionsApi";
import HistoryBlock from "../../../components/Dash/HistoryBlock";

const History = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTransactions = async () => {
      const allTransactions = await GetTransactions();
      setTransactions(allTransactions?.data || []);
      setLoading(false);
    };
    getTransactions();
  }, []);

  return (
    <>
      <div className="historyBlockContainer">
        <div className="historyBlocks">
          {loading ? (
            <>
              <div className="loadingImageContain">
                <img
                  src="/public_assets/images/Thrida-01-02.png"
                  alt="Thrida Logo"
                  className="loadingImage"
                />
              </div>
            </>
          ) : transactions?.length > 0 ? (
            transactions?.map((transaction) => (
              <HistoryBlock
                amount={transaction.amount}
                type={transaction.type}
                status={transaction.status}
                method={transaction.channel}
                created={transaction.created_at}
                key={transaction.id}
              />
            ))
          ) : (
            <h4 className="noValidResult"> No Transactions Yet </h4>
          )}
        </div>
      </div>
    </>
  );
};

export default History;
