'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Tractor, Users, CheckCircle2, Clock, AlertTriangle, ChevronRight, FileText, Activity, Cpu, HardDrive, Wifi, RefreshCw } from 'lucide-react';

export default function PlayerDashboard() {
  // Telemetry state simulation
  const [fps, setFps] = useState(60.0);
  const [players, setPlayers] = useState(28);
  const [vehicles, setVehicles] = useState(142);
  const [ping, setPing] = useState(18);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleManualRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundImage: 'linear-gradient(rgba(5, 7, 10, 0.4), rgba(5, 7, 10, 0.5)), url("/JD2.jpg")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundAttachment: 'fixed',
      color: '#ffffff', 
      fontFamily: 'sans-serif',
      paddingBottom: '40px'
    }}>
      
      {/* Sub-Header bar */}
      <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.6)', borderBottom: '1px solid rgba(39, 39, 42, 0.4)', padding: '12px 24px', marginBottom: '32px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.1em', color: '#a1a1aa', textTransform: 'uppercase' }}>
            Daisy Hill Farming Community | <span style={{ color: '#34d399' }}>Player Portal</span>
          </span>
          <Link href="/dashboard/staff" style={{ backgroundColor: 'rgba(39, 39, 42, 0.8)', color: '#ffffff', border: '1px solid #3f3f46', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase' }}>
            Switch to Staff Control Panel
          </Link>
        </div>
      </div>

      {/* Main Container */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Live Server Status Telemetry Widget */}
        <div style={{ 
          backgroundColor: 'rgba(15, 17, 23, 0.85)', 
          backdropFilter: 'blur(10px)', 
          border: '1px solid rgba(39, 39, 42, 0.6)', 
          borderRadius: '12px', 
          padding: '20px', 
          marginBottom: '24px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          color: '#ffffff',
          fontFamily: 'sans-serif'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', paddingBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Activity size={20} color="#34d399" />
              <h2 style={{ fontSize: '13px', fontWeight: 900, textTransform: 'uppercase', margin: 0, letterSpacing: '0.05em' }}>
                Live Dedicated Server Telemetry
              </h2>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ height: '8px', width: '8px', backgroundColor: '#34d399', borderRadius: '50%', boxShadow: '0 0 8px #34d399', display: 'inline-block' }} />
                <span style={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', color: '#34d399' }}>Online & Stable</span>
              </div>
              <button 
                onClick={handleManualRefresh}
                style={{ background: 'none', border: '1px solid #3f3f46', borderRadius: '4px', padding: '4px', color: '#a1a1aa', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                title="Refresh Telemetry"
              >
                <RefreshCw size={14} />
              </button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div style={{ backgroundColor: 'rgba(5, 7, 10, 0.6)', border: '1px solid #27272a', borderRadius: '8px', padding: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#71717a', textTransform: 'uppercase' }}>Tick Rate / FPS</span>
                <Cpu size={16} color="#34d399" />
              </div>
              <div style={{ fontSize: '20px', fontWeight: 900, color: '#ffffff', fontFamily: 'monospace' }}>
                {fps.toFixed(1)} <span style={{ fontSize: '11px', color: '#34d399', fontWeight: 'normal' }}>FPS</span>
              </div>
              <div style={{ fontSize: '10px', color: '#a1a1aa', marginTop: '4px' }}>Target: 60.0 FPS stable</div>
            </div>

            <div style={{ backgroundColor: 'rgba(5, 7, 10, 0.6)', border: '1px solid #27272a', borderRadius: '8px', padding: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#71717a', textTransform: 'uppercase' }}>Connected Players</span>
                <Users size={16} color="#60a5fa" />
              </div>
              <div style={{ fontSize: '20px', fontWeight: 900, color: '#ffffff', fontFamily: 'monospace' }}>
                {players} <span style={{ fontSize: '11px', color: '#60a5fa', fontWeight: 'normal' }}>/ 64 Slots</span>
              </div>
              <div style={{ fontSize: '10px', color: '#a1a1aa', marginTop: '4px' }}>Queued: 0 players</div>
            </div>

            <div style={{ backgroundColor: 'rgba(5, 7, 10, 0.6)', border: '1px solid #27272a', borderRadius: '8px', padding: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#71717a', textTransform: 'uppercase' }}>Active Assets</span>
                <HardDrive size={16} color="#f59e0b" />
              </div>
              <div style={{ fontSize: '20px', fontWeight: 900, color: '#ffffff', fontFamily: 'monospace' }}>
                {vehicles} <span style={{ fontSize: '11px', color: '#f59e0b', fontWeight: 'normal' }}>Vehicles/Implements</span>
              </div>
              <div style={{ fontSize: '10px', color: '#a1a1aa', marginTop: '4px' }}>Memory load: Optimal</div>
            </div>

            <div style={{ backgroundColor: 'rgba(5, 7, 10, 0.6)', border: '1px solid #27272a', borderRadius: '8px', padding: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#71717a', textTransform: 'uppercase' }}>Database Latency</span>
                <Wifi size={16} color="#34d399" />
              </div>
              <div style={{ fontSize: '20px', fontWeight: 900, color: '#ffffff', fontFamily: 'monospace' }}>
                {ping} <span style={{ fontSize: '11px', color: '#34d399', fontWeight: 'normal' }}>ms</span>
              </div>
              <div style={{ fontSize: '10px', color: '#a1a1aa', marginTop: '4px' }}>Sync rate: Real-time</div>
            </div>
          </div>
        </div>

        {/* Whitelisting Progress Section */}
        <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '24px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', paddingBottom: '16px' }}>
            <Tractor size={24} color="#34d399" />
            <div>
              <h1 style={{ fontSize: '16px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
                Farmer Whitelist Progress
              </h1>
              <p style={{ fontSize: '11px', color: '#a1a1aa', margin: '2px 0 0 0' }}>
                Complete all requirements below to submit your farm for staff review and server access.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
            <div style={{ backgroundColor: 'rgba(5, 7, 10, 0.6)', border: '1px solid #27272a', padding: '16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle2 size={20} color="#34d399" />
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#ffffff' }}>Discord Community Authentication</div>
                  <div style={{ fontSize: '11px', color: '#a1a1aa' }}>Linked account: FarmerJoe#1234</div>
                </div>
              </div>
              <span style={{ backgroundColor: 'rgba(52, 211, 153, 0.1)', color: '#34d399', border: '1px solid rgba(52, 211, 153, 0.3)', padding: '4px 10px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                Completed
              </span>
            </div>

            <div style={{ backgroundColor: 'rgba(5, 7, 10, 0.6)', border: '1px solid #27272a', padding: '16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle2 size={20} color="#34d399" />
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#ffffff' }}>Steam ID & Asset Verification</div>
                  <div style={{ fontSize: '11px', color: '#34d399', fontFamily: 'monospace' }}>steam:11000010f234abc</div>
                </div>
              </div>
              <span style={{ backgroundColor: 'rgba(52, 211, 153, 0.1)', color: '#34d399', border: '1px solid rgba(52, 211, 153, 0.3)', padding: '4px 10px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                Completed
              </span>
            </div>

            <div style={{ backgroundColor: 'rgba(5, 7, 10, 0.6)', border: '1px solid #27272a', padding: '16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle2 size={20} color="#34d399" />
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#ffffff' }}>Community Code of Conduct Survey</div>
                  <div style={{ fontSize: '11px', color: '#a1a1aa' }}>Score: 100% (Passed)</div>
                </div>
              </div>
              <span style={{ backgroundColor: 'rgba(52, 211, 153, 0.1)', color: '#34d399', border: '1px solid rgba(52, 211, 153, 0.3)', padding: '4px 10px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                Completed
              </span>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}