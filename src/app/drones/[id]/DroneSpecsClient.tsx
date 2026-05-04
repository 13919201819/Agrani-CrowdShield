"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import "../drones.css";

export default function DroneSpecsClient({ drone, id }: { drone: any, id: string }) {
  const router = useRouter();
  
  // Guard clause if data is still loading
  if (!drone) return <main style={{ background: '#000', color: '#fff', padding: '100px', textAlign: 'center' }}>Loading Specifications...</main>;

  // Mapping the API response to the specific fields you need
  const specs = {
    range: drone.range,
    datalink: drone.link,
    sensors: drone.sensors,
    wind: drone.wind
  };

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

        <div style={{ display: 'flex', gap: '80px', alignItems: 'flex-start' }}>
          
          {/* Left Side: Image */}
          <div style={{ flex: '0 0 400px' }}>
            <div style={{ background: '#0a0a0a', padding: '30px', borderRadius: '20px', border: '1px solid #1a1a1a' }}>
              <img src={drone.image_url} alt={drone.name} style={{ width: '100%', borderRadius: '10px' }} />
            </div>
          </div>

          {/* Right Side: Data */}
          <div style={{ flex: '1' }}>
            <h1 style={{ fontSize: '48px', color: '#fff', marginBottom: '10px', lineHeight: '1.1' }}>
              Technical <br /><span style={{ color: '#3b82f6' }}>Specifications</span>
            </h1>
            <p style={{ color: '#888', fontSize: '16px', lineHeight: '1.6', marginBottom: '40px', maxWidth: '500px' }}>
              {drone.description}
            </p>

            {/* FULL GRID (4 CARDS) */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
              <div className="t-card" style={{ background: '#0a0a0a', padding: '20px', borderRadius: '10px', border: '1px solid #1a1a1a' }}>
                <span style={{ color: '#3b82f6', fontSize: '10px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>RANGE</span>
                <strong style={{ fontSize: '18px', color: '#fff' }}>{specs.range}</strong>
              </div>
              <div className="t-card" style={{ background: '#0a0a0a', padding: '20px', borderRadius: '10px', border: '1px solid #1a1a1a' }}>
                <span style={{ color: '#3b82f6', fontSize: '10px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>LINK</span>
                <strong style={{ fontSize: '18px', color: '#fff' }}>{specs.datalink}</strong>
              </div>
              <div className="t-card" style={{ background: '#0a0a0a', padding: '20px', borderRadius: '10px', border: '1px solid #1a1a1a' }}>
                <span style={{ color: '#3b82f6', fontSize: '10px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>SENSORS</span>
                <strong style={{ fontSize: '18px', color: '#fff' }}>{specs.sensors}</strong>
              </div>
              <div className="t-card" style={{ background: '#0a0a0a', padding: '20px', borderRadius: '10px', border: '1px solid #1a1a1a' }}>
                <span style={{ color: '#3b82f6', fontSize: '10px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>WIND</span>
                <strong style={{ fontSize: '18px', color: '#fff' }}>{specs.wind}</strong>
              </div>
            </div>

            {/* PRICE SECTION */}
            <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: '30px' }}>
              <p style={{ color: '#444', fontSize: '11px', textTransform: 'uppercase', marginBottom: '5px' }}>Estimated Acquisition</p>
              <h3 style={{ color: '#fff', fontSize: '24px', marginBottom: '25px' }}>COST ${drone.price?.toLocaleString()}</h3>
              
              <button 
                onClick={() => router.push(`/drones/${id}/auth`)}
                style={{
                  background: '#3b82f6', color: 'white', border: 'none', padding: '18px 40px', 
                  borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer'
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