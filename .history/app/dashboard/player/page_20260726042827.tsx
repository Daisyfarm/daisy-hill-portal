'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Shield, Tractor, Users, CheckCircle2, Clock, AlertTriangle, 
  ChevronRight, FileText, Activity, Cpu, HardDrive, Wifi, 
  RefreshCw, Globe, MapPin, BarChart3, DollarSign, TrendingUp, 
  TrendingDown, Wrench, Fuel, ClipboardList, Briefcase 
} from 'lucide-react';

interface ConnectedPlayer {
  id: string;
  username: string;
  role: 'Farm Owner' | 'Contractor' | 'Heavy Operator' | 'Farm Hand';
  location: string;
  sessionTime: string;
}

interface Commodity {
  id: string;
  name: string;
  pricePer1000L: number;
  trend: 'up' | 'down';
  changePercent: string;
  demandMultiplier: string;
}

interface FleetVehicle {
  id: string;
  name: string;
  type: string;
  engineHours: string;
  wearPercent: number;
  fuelLevel: number;
  status: 'Operational' | 'Workshop Repair' | 'Low Fuel';
}

interface ContractJob {
  id: string;
  farmName: string;
  task: string;
  field: string;
  payout: string;
  status: 'Open' | 'Accepted' | 'Completed';
}

export default function PlayerDashboard() {
  const [fps, setFps] = useState(60.0);
  const [playersCount, setPlayersCount] = useState(28);
  const [vehiclesCount, setVehiclesCount] = useState(142);
  const [ping, setPing] = useState(18);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const [onlinePlayers] = useState<ConnectedPlayer[]>([
    { id: '1', username: 'FarmerJoe', role: 'Farm Owner', location: 'Field 14 (Wheat)', sessionTime: '2h 15m' },
    { id: '2', username: 'TractorTom', role: 'Heavy Operator', location: 'Biogas Plant', sessionTime: '1h 45m' },
    { id: '3', username: 'AcresAnna', role: 'Contractor', location: 'Animal Dealer', sessionTime: '42m' },
    { id: '4', username: 'GreenThumb99', role: 'Farm Hand', location: 'Main Farm Silos', sessionTime: '14m' }
  ]);

  const [commodities] = useState<Commodity[]>([
    { id: '1', name: 'Wheat', pricePer1000L: 1250, trend: 'up', changePercent: '+4.2%', demandMultiplier: '1.4x (High Demand)' },
    { id: '2', name: 'Corn', pricePer1000L: 1100, trend: 'up', changePercent: '+1.8%', demandMultiplier: '1.2x (Stable)' },
    { id: '3', name: 'Soybeans', pricePer1000L: 1680, trend: 'down', changePercent: '-2.1%', demandMultiplier: '0.9x (Normal)' },
    { id: '4', name: 'Canola', pricePer1000L: 1450, trend: 'up', changePercent: '+6.5%', demandMultiplier: '1.6x (Peak Surge)' },
    { id: '5', name: 'Silage', pricePer1000L: 420, trend: 'down', changePercent: '-0.5%', demandMultiplier: '1.0x (Standard)' },
  ]);

  const [vehicles, setVehicles] = useState<FleetVehicle[]>([
    { id: '1', name: 'John Deere 8R 410', type: 'Heavy Tractor', engineHours: '412.5 hrs', wearPercent: 14, fuelLevel: 82, status: 'Operational' },
    { id: '2', name: 'Fendt Ideal 9T', type: 'Harvester', engineHours: '280.0 hrs', wearPercent: 68, fuelLevel: 45, status: 'Workshop Repair' },
    { id: '3', name: 'JCB Fastrac 8330', type: 'Utility Tractor', engineHours: '590.2 hrs', wearPercent: 32, fuelLevel: 15, status: 'Low Fuel' },
    { id: '4', name: 'Case IH Magnum 400', type: 'Heavy Tractor', engineHours: '195.8 hrs', wearPercent: 8, fuelLevel: 90, status: 'Operational' }
  ]);

  const [jobs, setJobs] = useState<ContractJob[]>([
    { id: '1', farmName: 'Daisy Hill Main', task: 'Harvesting Wheat', field: 'Field 14', payout: '$18,500', status: 'Open' },
    { id: '2', farmName: 'Valley Acres', task: 'Lime Application', field: 'Field 08', payout: '$9,200', status: 'Open' },
    { id: '3', farmName: 'Oak Ridge Farm', task: 'Round Baling Straw', field: 'Field 21', payout: '$12,400', status: 'Accepted' },
    { id: '4', farmName: 'Highland Pastures', task: 'Cultivation & Plowing', field: 'Field 03', payout: '$15,000', status: 'Completed' }
  ]);

  const handleManualRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  const handleRequestRepair = (id: string) => {
    setVehicles(prev => prev.map(v => v.id === id ? { ...v, status: 'Workshop Repair', wearPercent: 5 } : v));
  };

  const handleAcceptJob = (id: string) => {
    setJobs(prev => prev.map(j => j.id === id ? { ...j, status: 'Accepted' } : j));
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
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* 1. Live Server Status Telemetry Widget */}
        <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', borderRadius: '12px', padding: '20px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
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
                {playersCount} <span style={{ fontSize: '11px', color: '#60a5fa', fontWeight: 'normal' }}>/ 64 Slots</span>
              </div>
              <div style={{ fontSize: '10px', color: '#a1a1aa', marginTop: '4px' }}>Queued: 0 players</div>
            </div>

            <div style={{ backgroundColor: 'rgba(5, 7, 10, 0.6)', border: '1px solid #27272a', borderRadius: '8px', padding: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#71717a', textTransform: 'uppercase' }}>Active Assets</span>
                <HardDrive size={16} color="#f59e0b" />
              </div>
              <div style={{ fontSize: '20px', fontWeight: 900, color: '#ffffff', fontFamily: 'monospace' }}>
                {vehiclesCount} <span style={{ fontSize: '11px', color: '#f59e0b', fontWeight: 'normal' }}>Vehicles/Implements</span>
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

        {/* 2. Live Commodity Market & Grain Prices */}
        <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '24px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', paddingBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <BarChart3 size={22} color="#34d399" />
              <div>
                <h2 style={{ fontSize: '15px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
                  Live Commodity Market & Grain Prices
                </h2>
                <p style={{ fontSize: '11px', color: '#a1a1aa', margin: '2px 0 0 0' }}>
                  Real-time elevator pricing index and demand multipliers for Daisy Hill economy.
                </p>
              </div>
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #27272a', color: '#71717a', fontSize: '10px', textTransform: 'uppercase' }}>
                  <th style={{ padding: '10px 12px' }}>Commodity</th>
                  <th style={{ padding: '10px 12px' }}>Market Price (Per 1,000L)</th>
                  <th style={{ padding: '10px 12px' }}>24h Trend</th>
                  <th style={{ padding: '10px 12px', textAlign: 'right' }}>Elevator Multiplier</th>
                </tr>
              </thead>
              <tbody>
                {commodities.map((item) => (
                  <tr key={item.id} style={{ borderBottom: '1px solid rgba(39, 39, 42, 0.4)' }}>
                    <td style={{ padding: '12px', fontWeight: 'bold', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <DollarSign size={14} color="#34d399" />
                      {item.name}
                    </td>
                    <td style={{ padding: '12px', fontFamily: 'monospace', fontWeight: 'bold', color: '#34d399', fontSize: '13px' }}>
                      ${item.pricePer1000L.toLocaleString()}
                    </td>
                    <td style={{ padding: '12px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: item.trend === 'up' ? '#34d399' : '#f87171', fontWeight: 'bold', fontSize: '11px' }}>
                        {item.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                        {item.changePercent}
                      </span>
                    </td>
                    <td style={{ padding: '12px', textAlign: 'right' }}>
                      <span style={{ backgroundColor: 'rgba(52, 211, 153, 0.1)', color: '#34d399', border: '1px solid rgba(52, 211, 153, 0.3)', padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                        {item.demandMultiplier}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Farm Dispatch & Job Contracting Board (Contract Folder Integration) */}
        <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '24px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', paddingBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <ClipboardList size={22} color="#34d399" />
              <div>
                <h2 style={{ fontSize: '15px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
                  Farm Dispatch & Contracting Centre
                </h2>
                <p style={{ fontSize: '11px', color: '#a1a1aa', margin: '2px 0 0 0' }}>
                  Manage active contract folders, accept community assignments, and post farm payouts.
                </p>
              </div>
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #27272a', color: '#71717a', fontSize: '10px', textTransform: 'uppercase' }}>
                  <th style={{ padding: '10px 12px' }}>Farm / Issuer</th>
                  <th style={{ padding: '10px 12px' }}>Contract Task</th>
                  <th style={{ padding: '10px 12px' }}>Location</th>
                  <th style={{ padding: '10px 12px' }}>Contract Payout</th>
                  <th style={{ padding: '10px 12px' }}>Folder Status</th>
                  <th style={{ padding: '10px 12px', textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((j) => (
                  <tr key={j.id} style={{ borderBottom: '1px solid rgba(39, 39, 42, 0.4)' }}>
                    <td style={{ padding: '12px', fontWeight: 'bold', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Briefcase size={14} color="#60a5fa" />
                      {j.farmName}
                    </td>
                    <td style={{ padding: '12px', color: '#e4e4e7', fontWeight: 'bold' }}>
                      {j.task}
                    </td>
                    <td style={{ padding: '12px', color: '#a1a1aa', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <MapPin size={14} color="#f59e0b" /> {j.field}
                    </td>
                    <td style={{ padding: '12px', fontFamily: 'monospace', color: '#34d399', fontWeight: 'bold', fontSize: '13px' }}>
                      {j.payout}
                    </td>
                    <td style={{ padding: '12px' }}>
                      <span style={{ 
                        backgroundColor: j.status === 'Open' ? 'rgba(52, 211, 153, 0.1)' : j.status === 'Accepted' ? 'rgba(96, 165, 250, 0.1)' : 'rgba(113, 113, 122, 0.1)', 
                        color: j.status === 'Open' ? '#34d399' : j.status === 'Accepted' ? '#60a5fa' : '#a1a1aa', 
                        border: `1px solid ${j.status === 'Open' ? 'rgba(52, 211, 153, 0.3)' : j.status === 'Accepted' ? 'rgba(96, 165, 250, 0.3)' : 'rgba(113, 113, 122, 0.3)'}`, 
                        padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' 
                      }}>
                        {j.status}
                      </span>
                    </td>
                    <td style={{ padding: '12px', textAlign: 'right' }}>
                      {j.status === 'Open' ? (
                        <button 
                          onClick={() => handleAcceptJob(j.id)}
                          style={{ backgroundColor: '#27272a', color: '#ffffff', border: '1px solid #3f3f46', padding: '5px 10px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer', textTransform: 'uppercase' }}
                        >
                          Open Folder
                        </button>
                      ) : (
                        <span style={{ fontSize: '10px', color: '#a1a1aa', fontStyle: 'italic' }}>
                          {j.status === 'Accepted' ? 'In Progress' : 'Archived'}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. Fleet & Machinery Maintenance Hub */}
        <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '24px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
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

        {/* 5. Live Connected Farmers Table */}
        <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '24px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', paddingBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Globe size={22} color="#60a5fa" />
              <div>
                <h2 style={{ fontSize: '15px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
                  Active Farmers On Server ({onlinePlayers.length})
                </h2>
                <p style={{ fontSize: '11px', color: '#a1a1aa', margin: '2px 0 0 0' }}>
                  Real-time list of players currently working on Daisy Hill Server #1.
                </p>
              </div>
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #27272a', color: '#71717a', fontSize: '10px', textTransform: 'uppercase' }}>
                  <th style={{ padding: '10px 12px' }}>Farmer Name</th>
                  <th style={{ padding: '10px 12px' }}>Community Role</th>
                  <th style={{ padding: '10px 12px' }}>In-Game Location</th>
                  <th style={{ padding: '10px 12px', textAlign: 'right' }}>Session Duration</th>
                </tr>
              </thead>
              <tbody>
                {onlinePlayers.map((p) => (
                  <tr key={p.id} style={{ borderBottom: '1px solid rgba(39, 39, 42, 0.4)' }}>
                    <td style={{ padding: '12px', fontWeight: 'bold', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ height: '6px', width: '6px', backgroundColor: '#34d399', borderRadius: '50%' }} />
                      {p.username}
                    </td>
                    <td style={{ padding: '12px' }}>
                      <span style={{ backgroundColor: 'rgba(96, 165, 250, 0.1)', color: '#60a5fa', border: '1px solid rgba(96, 165, 250, 0.3)', padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                        {p.role}
                      </span>
                    </td>
                    <td style={{ padding: '12px', color: '#e4e4e7', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <MapPin size={14} color="#f59e0b" /> {p.location}
                    </td>
                    <td style={{ padding: '12px', textAlign: 'right', color: '#a1a1aa', fontFamily: 'monospace' }}>
                      {p.sessionTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 6. Whitelisting Progress Section */}
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