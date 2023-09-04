import {React,useEffect,useState} from "react";
import {GetDepositTransactions} from "../../components/apis/transactionsApi";
const StatusComponent = ({ status, progress }) => {
  const statusOptions = ['VIP 1', 'VIP 2', 'VIP 3'];

  return (
    <div className="status-container">
      {statusOptions.map((option) => (
        <div
          key={option}
          className={`status ${status === option ? 'active' : ''}`}
          style={{
            backgroundColor: status === option ? getStatusColor(option) : 'transparent',
            opacity: status === option ? 1 : 0.5,
          }}
        >
          {option.toUpperCase()}
        </div>
      ))}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'VIP 1':
      return 'blue';
    case 'VIP 2':
      return 'green';
    case 'VIP 3':
      return 'gold';
    default:
      return 'gray';
  }
};

const Status = () => {
  const [depositSum, setDepositSum] = useState(0);
  useEffect(() => {
    const getTransactions = async () => {
      const allTransactions = await GetDepositTransactions();
      const depositSum = allTransactions?.data.reduce(
        (sum, current) => sum + Number(current.amount),
        0
      );

      setDepositSum(depositSum);
    };
    getTransactions();
  }, []);
  const stat=(amount)=>{
    if(amount<299400){
      return 'VIP 1';
    }
    if(amount>299400 && amount<599400){
      return 'VIP 2';
    }
    if(amount>599400){
      return 'VIP 3';
    }
  }
  const prog=(amount)=>{
    if(amount<299400){
      return (amount/299400)*100;
    }
    if(amount>299400 && amount<599400){
      return (amount/599400)*100;
    }
    if(amount>599400){
      return 100;
    }
  }
  return <div className="status-page">
  <StatusComponent status={stat(Number(depositSum))} progress={(prog(Number(depositSum)))} />

  </div>;
};

export default Status;
