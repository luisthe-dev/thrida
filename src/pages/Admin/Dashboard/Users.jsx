import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import Table from "../../../components/Admin/Table";

const Users = () => {
  return (
    <>
      <Table
        title={"Users"}
        tableHeaders={["S/N", "Name", "Level", "Wallet", "Pro", "Actions"]}
        tableData={[
          [
            "Lazy Luis",
            "Silver",
            <>
              {`$${(112432443).toLocaleString()}`}
              <button> Edit </button>
            </>,
            <FiCheckCircle />,
            <>
              <button> Edit </button>
              <button> Delete </button>
            </>,
          ],
        ]}
      />
    </>
  );
};

export default Users;
