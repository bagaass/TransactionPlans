import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransactionPlans from "./TransactionPlans";
import PaymentPage from "./PaymentPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TransactionPlans />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
