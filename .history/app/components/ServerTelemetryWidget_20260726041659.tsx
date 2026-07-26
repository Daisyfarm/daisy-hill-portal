'use client';

import React, { useState, useEffect } from 'react';
import { Activity, Cpu, Users, HardDrive, Wifi, RefreshCw } from 'lucide-react';

export default function ServerTelemetryWidget() {
  const [fps, setFps] = useState(60.0);
  const [players, setPlayers] = useState(28);
  const [vehicles, setVehicles] = useState(142);
  const [ping, setPing] = useState(18);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Simulate live telemetry fluctuations to give it an active live-feed feel
  useEffect(() => {
    const interval = setInterval(() => {
      setFps(prev => Number((60 + (Math.random() * 0.4 - 0.2)).toFixed(1)));
      setPing(prev => Math.floor(15 + Math.random() * 8));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleManualRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  return (
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
      
      {/* Widget Header */}
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
            <RefreshCw size={14} className={isRefreshing ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>

      {/* Telemetry Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        
        {/* Server FPS */}
        <div style={{ backgroundColor: 'rgba(5, 7, 10, 0.6)', border: '1px solid #27272a', borderRadius: '8px', padding: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#71717a', textTransform: 'uppercase' }}>Tick Rate / FPS</span>
            <Cpu size={16} color="#34d399" />
          </div>
          <div style={{ fontSize: '20px', fontWeight: 900, color: '#ffffff', fontFamily: 'monospace' }}>
            {fps} <span style={{ fontSize: '11px', color: '#34d399', fontWeight: 'normal' }}>FPS</span>
          </div>
          <div style={{ fontSize: '10px', color: '#a1a1aa', marginTop: '4px' }}>Target: 60.0 FPS stable</div>
        </div>

        {/* Active Farmers */}
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

        {/* Spawned Vehicles */}
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

        {/* Database Latency / Ping */}
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
  );
}