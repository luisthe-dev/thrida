import React from "react";

const Table = ({ title, tableHeaders, tableData, classes }) => {
  return (
    <div className="adminTable">
      <div className="adminTableHeader">
        <label> {title} </label>
      </div>
      <div className="adminTableBody">
        <table className={classes}>
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index}> {header} </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td> {index + 1} </td>
                {data.map((item, index) => (
                  <td key={index}> {item} </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
