"use client";

import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          
          <div className="contact-info">
            <p className="contact-kicker">Secure Intake Portal</p>
            <h2 className="contact-title">Verify <strong>Identity & Mission.</strong></h2>
            <p className="contact-desc">
              Access restricted to authorized personnel. Provide official 
              credentials for background verification and authentication.
            </p>

            <div className="status-box">
              <div className="status-item">
                <span className="status-dot pulse" />
                <div className="status-text">
                  <label>Portal Status</label>
                  <span>Active - Encrypted</span>
                </div>
              </div>
              <div className="status-item">
                <span className="status-dot pulse blue" />
                <div className="status-text">
                  <label>Verification</label>
                  <span>Level 4 Analysis</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Department / Ministry</label>
                  <input type="text" placeholder="e.g. MHA / Police HQ" required />
                </div>
                <div className="form-group">
                  <label>Official Designation</label>
                  <input type="text" placeholder="e.g. Commissioner" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Full Legal Name</label>
                  <input type="text" placeholder="Officer Name" required />
                </div>
                <div className="form-group">
                  <label>Service / Badge ID</label>
                  <input type="text" placeholder="UID Number" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Government Email</label>
                  <input type="email" placeholder="name@agency.gov.in" required />
                </div>
                <div className="form-group">
                  <label>Security Clearance</label>
                  {/* Fixed: Moved 'selected' logic to 'defaultValue' on select tag */}
                  <select required className="form-select" defaultValue="">
                    <option value="" disabled>Select Level</option>
                    <option value="confidential">Confidential</option>
                    <option value="secret">Secret</option>
                    <option value="top-secret">Top Secret</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Operational Scope</label>
                <textarea rows={3} placeholder="Detail the specific security requirement..." required />
              </div>

              <button type="submit" className="contact-btn">
                <span>Request Authentication</span>
              </button>
            </form>

            <div className="contact-warning">
              <span className="warning-asterisk">*</span>
              <p>
                <strong>RESTRICTED:</strong> Strictly for <span>Government & Public Sector</span>. 
                Personal requests are discarded. Formalities proceed only after 
                successful verification and authentication analysis.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}