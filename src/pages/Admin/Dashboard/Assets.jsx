import React, { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import Table from "../../../components/Admin/Table";

const Assets = () => {
  const [pairName, setPairName] = useState("");
  const [volatility, setVolatility] = useState("");
  const [pairStatus, setPairStatus] = useState("");
  const [pairLevel, setPairLevel] = useState("");

  return (
    <div className="adminStatTables">
      <div className="adminStatTable">
        <Table
          classes={"hover"}
          title={"Users"}
          tableHeaders={["S/N", "Pair Name", "Volatility", "Level", "Status"]}
          tableData={[["BTC/USDT", "90", `Silver`, <FiCheckCircle />]]}
        />
      </div>
      <div className="adminStatTable">
        <h2> Add New Asset </h2>
        <form>
          <label> Pair Name </label>
          <input
            type={"text"}
            placeholder={"Pair Name"}
            value={pairName}
            onInput={(e) => setPairName(e.target.value)}
          />
          <label> Volatility </label>
          <input
            type={"number"}
            placeholder={"Volatility"}
            value={volatility}
            onInput={(e) => setVolatility(e.target.value)}
          />
          <label> Level </label>
          <select
            defaultValue={""}
            value={pairLevel}
            onChange={(e) => setPairLevel(e.target.value)}
          >
            <option disabled value={""}>
              Select Asset Level
            </option>
            <option> Free </option>
            <option> Silver </option>
            <option> Gold </option>
          </select>
          <label> Status </label>
          <select
            value={pairStatus}
            onChange={(e) => setPairStatus(e.target.value)}
          >
            <option selected disabled value={""}>
              Select Asset Status
            </option>
            <option value={1}> Active </option>
            <option value={0}> Inactive </option>
          </select>
          <button> Add Asset </button>
        </form>
      </div>
    </div>
  );
};

export default Assets;
