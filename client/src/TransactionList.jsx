import Transaction from "./Transaction";

function TransactionList({ transactionList }) {
  return (
    <div>
      {transactionList.map((transaction) => {
        return <Transaction key={transaction.id} transaction={transaction} />;
      })}
    </div>
  );
}

export default TransactionList;
