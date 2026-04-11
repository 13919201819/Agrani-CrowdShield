"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import "../drones.css";

export default function DroneSpecsClient() {
  const { id } = useParams();
  const router = useRouter();

  return (
    <main className="specs-full-view" style={{ minHeight: '100vh', background: '#000', paddingTop: '120px' }}>
      <div className="specs-content-wrapper" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        
        {/* Navigation */}
        <div style={{ marginBottom: '40px' }}>
          <Link href="/drones" style={{ color: '#666', textDecoration: 'none', fontSize: '13px', fontWeight: 'bold' }}>
            ← RETURN TO FLEET CATALOG
          </Link>
          <p style={{ color: '#3b82f6', fontSize: '11px', marginTop: '10px', letterSpacing: '1px' }}>
            SYSTEM_AUTH: VALID // UNIT_ID: {id}
          </p>
        </div>

        {/* Main 2-Column Grid */}
        <div style={{ display: 'flex', gap: '80px', alignItems: 'flex-start' }}>
          
          {/* Left Side: Visual */}
          <div style={{ flex: '0 0 400px' }}>
            <div style={{ background: '#0a0a0a', padding: '30px', borderRadius: '20px', border: '1px solid #1a1a1a' }}>
              <img 
                src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200" 
                alt="Hardware Analysis" 
                style={{ width: '100%', borderRadius: '10px', filter: 'contrast(1.1)' }}
              />
            </div>
          </div>

          {/* Right Side: Data */}
          <div style={{ flex: '1' }}>
            <h1 style={{ fontSize: '48px', color: '#fff', marginBottom: '10px', lineHeight: '1.1' }}>
              Technical <br />
              <span style={{ color: '#3b82f6' }}>Specifications</span>
            </h1>
            
            <p style={{ color: '#888', fontSize: '16px', lineHeight: '1.6', marginBottom: '40px', maxWidth: '500px' }}>
              Authorized hardware profile for series {id}. Optimized for high-altitude 
              reconnaissance and encrypted data relay in hostile environments.
            </p>

            {/* Specs Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
              <div className="t-card">
                <span style={{ color: '#3b82f6', fontSize: '10px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>RANGE</span>
                <strong style={{ fontSize: '18px', color: '#fff' }}>25 KM / 15.5 MI</strong>
              </div>
              <div className="t-card">
                <span style={{ color: '#3b82f6', fontSize: '10px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>LINK</span>
                <strong style={{ fontSize: '18px', color: '#fff' }}>AES-256 ENCRYPTED</strong>
              </div>
              <div className="t-card">
                <span style={{ color: '#3b82f6', fontSize: '10px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>SENSORS</span>
                <strong style={{ fontSize: '18px', color: '#fff' }}>EO/IR QUAD-SENSOR</strong>
              </div>
              <div className="t-card">
                <span style={{ color: '#3b82f6', fontSize: '10px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>WIND</span>
                <strong style={{ fontSize: '18px', color: '#fff' }}>UP TO 55 KM/H</strong>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: '30px' }}>
              <p style={{ color: '#444', fontSize: '11px', textTransform: 'uppercase', marginBottom: '5px' }}>Estimated Acquisition</p>
              <h3 style={{ color: '#fff', fontSize: '24px', marginBottom: '25px' }}>COST $18,900.00</h3>
              
              <button 
                onClick={() => router.push(`/drones/${id}/auth`)}
                style={{
                  background: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  padding: '18px 40px',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  cursor: 'pointer'
                }}
              >
                PROCEED TO AUTHENTICATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}