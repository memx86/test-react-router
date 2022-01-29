import { Routes, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import Main from "routes/Main";
import Expenses from "routes/Expenses";
import Invoices from "routes/Invoices";
import Invoice from "routes/Invoice";

function App() {
  return (
    <div>
      <h1>Book Keeper</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={
            <div style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
