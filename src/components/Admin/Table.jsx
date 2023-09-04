import React from "react";

const Table = ({
  title,
  tableHeaders,
  tableData,
  classes,
  isLoading = false,
}) => {
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
            {isLoading ? (
              <tr>
                <td colSpan={tableHeaders.length}> Loading Entries ... </td>
              </tr>
            ) : tableData.length === 0 ? (
              <tr>
                <td colSpan={tableHeaders.length}> No Registered Entries </td>
              </tr>
            ) : (
              tableData.map((data, index) => (
                <tr key={index}>
                  <td> {index + 1} </td>
                  {data.map((item, index) => 
                 {
                 if(index==0){
                  return  (
                    <td key={index}> <img src={item} /> </td>
                  )
                 }else{
                  return  (
                    <td key={index}> {item} </td>
                  )
                 }
                 }
                  )
                  }
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
