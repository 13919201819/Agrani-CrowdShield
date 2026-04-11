"use client";

import { useParams, useRouter } from "next/navigation";
import "../../drones.css";

export default function AuthorityPage() {
  const { id } = useParams();
  const router = useRouter();

  return (
    <div className="auth-full-page">
      <div className="auth-card-centered">
        <h2>Government Authentication</h2>
        <p>Registry Lock: <strong>{id}</strong></p>

        <div className="auth-form">
          <label>Governing Agency</label>
          <input type="text" className="auth-input-tactical" placeholder="e.g. Dept. of Justice" />
          
          <label>Authorization Document (PDF)</label>
          <div className="auth-upload-box">Click to Upload Signed Mandate</div>
        </div>

        <div className="auth-actions">
          <button className="btn-cancel-text" onClick={() => router.back()}>Back</button>
          <button className="btn-procure-next" onClick={() => router.push(`/drones/${id}/payment`)}>
            Authorize & Continue
          </button>
        </div>
      </div>
    </div>
  );
}