function Transaction({ transaction }) {
  return (
    <div
      style={{
        border: "solid grey 1px",
        borderRadius: "8px",
        background: transaction.type === "credit" ? "green" : "red",
        padding: "2px 6px",
        margin: "1px 0",
      }}
    >
      {transaction.name}, {transaction.amount.toLocaleString()}
    </div>
  );
}

export default Transaction;
