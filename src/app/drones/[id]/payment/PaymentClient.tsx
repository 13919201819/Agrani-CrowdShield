"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function PaymentClient() {
  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      router.push(`/drones/${id}/tracking`);
    }, 2000);
  };

  return (
    <div className="auth-page-centered">
      <div className="auth-card">
        <header className="auth-header">
          <h2>Secure Financial Gateway</h2>
          <p>Complete the procurement for Unit: <strong>{id}</strong></p>
        </header>

        <div className="payment-summary-box">
          <div className="row"><span>Subtotal:</span><strong>Calculated at checkout</strong></div>
          <div className="row"><span>Encryption:</span><strong>End-to-End SSL</strong></div>
        </div>

        <div className="form-group">
          <label>Cardholder Name</label>
          <input type="text" className="tact-input" placeholder="AS SHOWN ON CARD" />
        </div>

        <div className="form-group">
          <label>Credit Card Details</label>
          <input type="text" className="tact-input" placeholder="XXXX XXXX XXXX XXXX" />
          <div className="input-row" style={{ marginTop: '10px' }}>
            <input type="text" className="tact-input" placeholder="MM / YY" />
            <input type="text" className="tact-input" placeholder="CVC" />
          </div>
        </div>

        <div className="action-footer">
          <button className="btn-secondary" onClick={() => router.back()}>Back</button>
          <button
            className="btn-primary"
            onClick={handlePayment}
            disabled={loading}
          >
            {loading ? "AUTHORIZING..." : "CONFIRM & PAY"}
          </button>
        </div>
      </div>
    </div>
  );
}