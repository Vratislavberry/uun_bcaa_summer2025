import Container from "react-bootstrap/esm/Container";
import TransactionListProvider from "./transaction-list-provider";

function Dashboard() {
  return (
    <Container>
      <TransactionListProvider>dashboard</TransactionListProvider>
    </Container>
  );
}

export default Dashboard;
