'use client';

import React, { useState } from 'react';
import { Wrench, Fuel, AlertCircle, CheckCircle, PlusCircle } from 'lucide-react';

interface FleetVehicle {
  id: string;
  name: string;
  type: string;
  engineHours: string;
  wearPercent: number;
  fuelLevel: number;
  status: 'Operational' | 'Workshop Repair' | 'Low Fuel';
}

export default function FleetMaintenanceHub() {
  const [vehicles, setVehicles] = useState<FleetVehicle[]>([
    { id: '1', name: 'John Deere 8R 410', type: 'Heavy Tractor', engineHours: '412.5 hrs', wearPercent: 14, fuelLevel: 82, status: 'Operational' },
    { id: '2', name: 'Fendt Ideal 9T', type: 'Harvester', engineHours: '280.0 hrs', wearPercent: 68, fuelLevel: 45, status: 'Workshop Repair' },
    { id: '3', name: 'JCB Fastrac 8330', type: 'Utility Tractor', engineHours: '590.2 hrs', wearPercent: 32, fuelLevel: 15, status: 'Low Fuel' },
    { id: '4', name: 'Case IH Magnum 400', type: 'Heavy Tractor', engineHours: '195.8 hrs', wearPercent: 8, fuelLevel: 90, status: 'Operational' }
  ]);

  const handleRequestRepair = (id: string) => {
    setVehicles(prev => prev.map(v => v.id === id ? { ...v, status: 'Workshop Repair', wearPercent: 5 } : v));
  };

  return (
    <div style={{ 
      backgroundColor: 'rgba(15, 17, 23, 0.85)', 
      backdropFilter: 'blur(10px)', 
      border: '1px solid rgba(39, 39, 42, 0.6)', 
      padding: '24px', 
      borderRadius: '12px', 
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      color: '#ffffff',
      fontFamily: 'sans-serif'
    }}>
      
      {/* Widget Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', paddingBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Wrench size={22} color="#f59e0b" />
          <div>
            <h2 style={{ fontSize: '15px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
              Fleet & Machinery Maintenance Hub
            </h2>
            <p style={{ fontSize: '11px', color: '#a1a1aa', margin: '2px 0 0 0' }}>
              Monitor engine hours, wear percentages, fuel levels, and dispatch workshop servicing.
            </p>
          </div>
        </div>
      </div>

      {/* Fleet Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #27272a', color: '#71717a', fontSize: '10px', textTransform: 'uppercase' }}>
              <th style={{ padding: '10px 12px' }}>Asset Name</th>
              <th style={{ padding: '10px 12px' }}>Engine Hours</th>
              <th style={{ padding: '10px 12px' }}>Component Wear</th>
              <th style={{ padding: '10px 12px' }}>Fuel Level</th>
              <th style={{ padding: '10px 12px' }}>Status</th>
              <th style={{ padding: '10px 12px', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((v) => (
              <tr key={v.id} style={{ borderBottom: '1px solid rgba(39, 39, 42, 0.4)' }}>
                <td style={{ padding: '12px', fontWeight: 'bold', color: '#ffffff' }}>
                  {v.name}
                  <div style={{ fontSize: '10px', color: '#71717a', fontWeight: 'normal' }}>{v.type}</div>
                </td>
                <td style={{ padding: '12px', fontFamily: 'monospace', color: '#e4e4e7' }}>
                  {v.engineHours}
                </td>
                <td style={{ padding: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '80px', height: '6px', backgroundColor: '#27272a', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${v.wearPercent}%`, height: '100%', backgroundColor: v.wearPercent > 50 ? '#f87171' : '#34d399' }} />
                    </div>
                    <span style={{ fontSize: '11px', fontFamily: 'monospace', color: v.wearPercent > 50 ? '#f87171' : '#34d399' }}>{v.wearPercent}%</span>
                  </div>
                </td>
                <td style={{ padding: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'monospace', fontSize: '11px', color: v.fuelLevel < 20 ? '#f87171' : '#60a5fa' }}>
                    <Fuel size={14} /> {v.fuelLevel}%
                  </div>
                </td>
                <td style={{ padding: '12px' }}>
                  <span style={{ 
                    backgroundColor: v.status === 'Operational' ? 'rgba(52, 211, 153, 0.1)' : v.status === 'Workshop Repair' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(248, 113, 113, 0.1)', 
                    color: v.status === 'Operational' ? '#34d399' : v.status === 'Workshop Repair' ? '#f59e0b' : '#f87171', 
                    border: `1px solid ${v.status === 'Operational' ? 'rgba(52, 211, 153, 0.3)' : v.status === 'Workshop Repair' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(248, 113, 113, 0.3)'}`, 
                    padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' 
                  }}>
                    {v.status}
                  </span>
                </td>
                <td style={{ padding: '12px', textAlign: 'right' }}>
                  {v.status !== 'Workshop Repair' ? (
                    <button 
                      onClick={() => handleRequestRepair(v.id)}
                      style={{ backgroundColor: '#27272a', color: '#ffffff', border: '1px solid #3f3f46', padding: '5px 10px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer', textTransform: 'uppercase' }}
                    >
                      Service Hub
                    </button>
                  ) : (
                    <span style={{ fontSize: '10px', color: '#a1a1aa', fontStyle: 'italic' }}>Servicing...</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}