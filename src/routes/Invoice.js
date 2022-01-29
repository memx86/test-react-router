import { useParams, useNavigate } from "react-router-dom";
import { getInvoice, deleteInvoice } from "data";
export default function Invoice() {
  const navigate = useNavigate();
  const { invoiceId } = useParams();
  const { amount, name, number, due } = getInvoice(parseInt(invoiceId, 10));
  return (
    <div>
      <h2>Invoice {amount}</h2>
      <p>
        {name}: {number}
      </p>
      <p>Due Date: {due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(number);
            navigate("/invoices");
          }}
        >
          Delete
        </button>
      </p>
    </div>
  );
}
