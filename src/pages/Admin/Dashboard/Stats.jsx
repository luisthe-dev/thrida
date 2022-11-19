import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import Table from "../../../components/Admin/Table";

const Stats = () => {
  return (
    <>
      <div className="adminStatBlocks">
        <div className="adminStatBlock">
          <p> 0 </p>
          <label> Users </label>
        </div>
        <div className="adminStatBlock">
          <p> 0 </p>
          <label> Wallet Balance </label>
        </div>
        <div className="adminStatBlock">
          <p> 0 </p>
          <label> Pro Traders </label>
        </div>
        <div className="adminStatBlock">
          <p> 0 </p>
          <label> Transactions </label>
        </div>
      </div>
      <div className="adminStatTables">
        <div className="adminStatTable">
          <Table
            classes={"hover"}
            title={"Users"}
            tableHeaders={["S/N", "Name", "Level", "Wallet", "Pro"]}
            tableData={[
              [
                "Lazy Luis",
                "Silver",
                `$${(112432443).toLocaleString()}`,
                <FiCheckCircle />,
              ],
              [
                "Lazy Luis",
                "Silver",
                `$${(112432443).toLocaleString()}`,
                <ImCancelCircle />,
              ],
            ]}
          />
        </div>
        <div className="adminStatTable">
          <Table
            classes={"hover"}
            title={"Users"}
            tableHeaders={["S/N", "Name", "Level", "Wallet", "Pro"]}
            tableData={[
              [
                "Lazy Luis",
                "Silver",
                `$${(112432443).toLocaleString()}`,
                <FiCheckCircle />,
              ],
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Stats;
