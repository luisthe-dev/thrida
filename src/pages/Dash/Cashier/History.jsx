import HistoryBlock from "../../../components/Dash/HistoryBlock";

const History = () => {
  return (
    <>
      <div className="historyBlockContainer">
        <div className="historyBlocks">
          <HistoryBlock
            amount={"4500000"}
            type={"Deposit"}
            status={"Pending"}
            method={"Paypal"}
            created={"2021-12-04 00:17:30"}
          />
        </div>
      </div>
    </>
  );
};

export default History;
