import { BsClockFill, BsCheckAll } from "react-icons/bs";
import { MdCancel } from "react-icons/md";

const HistoryBlock = ({ amount, type, status, method, created }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const formattedDate = new Date(created);
  return (
    <div className="historyBlock">
      <div className="historyBlockTiming">
        <p>
          {`${
            months[formattedDate.getMonth()]
          } ${formattedDate.getDate()}, ${formattedDate.getFullYear()}`}
        </p>
        <p> {`${formattedDate.getHours()}:${formattedDate.getMinutes()}`} </p>
      </div>
      <div className="historyBlockMainDetails">
        <div className="historyBlockType">
          <h6> {type} </h6>
          <p> {method} </p>
        </div>
        <div className="historyBlockAmount">
          <h6>
            {type === "Deposit" ? "+" : "-"} ₦{Number(amount).toLocaleString()}
          </h6>
          <p>
            {status}
            {status === "Success" && <BsCheckAll />}
            {status === "Pending" && <BsClockFill />}
            {status === "Failed" && <MdCancel />}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryBlock;
