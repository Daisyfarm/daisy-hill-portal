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
  const [activeTab, setActiveTab] = useState<'overview' | 'market' | 'fleet'>('overview');

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
    setTimeout(() => setIsRefreshing(false), 600);
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
      <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.6)', borderBottom: '1px solid rgba(39, 39, 42, 0.4)', padding: '12px 24px', marginBottom: '24px' }}>
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
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Tab Navigation Bar */}
        <div style={{ display: 'flex', gap: '8px', backgroundColor: 'rgba(15, 17, 23, 0.85)', padding: '8px', borderRadius: '10px', border: '1px solid rgba(39, 39, 42, 0.6)' }}>
          <button
            onClick={() => setActiveTab('overview')}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: activeTab === 'overview' ? '#34d399' : 'transparent',
              color: activeTab === 'overview' ? '#05070a' : '#a1a1aa',
              fontWeight: 'bold',
              fontSize: '12px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              transition: 'all 0.2s'
            }}
          >
            Overview & Whitelist
          </button>
          <button
            onClick={() => setActiveTab('market')}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: activeTab === 'market' ? '#34d399' : 'transparent',
              color: activeTab === 'market' ? '#05070a' : '#a1a1aa',
              fontWeight: 'bold',
              fontSize: '12px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              transition: 'all 0.2s'
            }}
          >
            Market & Contracts
          </button>
          <button
            onClick={() => setActiveTab('fleet')}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: activeTab === 'fleet' ? '#34d399' : 'transparent',
              color: activeTab === 'fleet' ? '#05070a' : '#a1a1aa',
              fontWeight: 'bold',
              fontSize: '12px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              transition: 'all 0.2s'
            }}
          >
            Fleet & Telemetry
          </button>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Connected Farmers Table */}
            <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '24px', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', paddingBottom: '12px' }}>
                <Globe size={20} color="#60a5fa" />
                <h2 style={{ fontSize: '14px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
                  Active Farmers On Server ({onlinePlayers.length})
                </h2>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #27272a', color: '#71717a', fontSize: '10px', textTransform: 'uppercase' }}>
                    <th style={{ padding: '8px' }}>Farmer Name</th>
                    <th style={{ padding: '8px' }}>Role</th>
                    <th style={{ padding: '8px' }}>Location</th>
                    <th style={{ padding: '8px', textAlign: 'right' }}>Session</th>
                  </tr>
                </thead>
                <tbody>
                  {onlinePlayers.map(p => (
                    <tr key={p.id} style={{ borderBottom: '1px solid rgba(39, 39, 42, 0.4)' }}>
                      <td style={{ padding: '10px', fontWeight: 'bold' }}>{p.username}</td>
                      <td style={{ padding: '10px' }}><span style={{ color: '#60a5fa', fontWeight: 'bold' }}>{p.role}</span></td>
                      <td style={{ padding: '10px', color: '#e4e4e7' }}>{p.location}</td>
                      <td style={{ padding: '10px', textAlign: 'right', fontFamily: 'monospace', color: '#a1a1aa' }}>{p.sessionTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Whitelist Progress */}
            <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '24px', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', paddingBottom: '12px' }}>
                <Tractor size={20} color="#34d399" />
                <h2 style={{ fontSize: '14px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
                  Farmer Whitelist Progress
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ backgroundColor: 'rgba(5, 7, 10, 0.6)', padding: '12px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>Discord Community Authentication</span>
                  <span style={{ color: '#34d399', fontSize: '11px', fontWeight: 'bold' }}>COMPLETED</span>
                </div>
                <div style={{ backgroundColor: 'rgba(5, 7, 10, 0.6)', padding: '12px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>Steam ID & Asset Verification</span>
                  <span style={{ color: '#34d399', fontSize: '11px', fontWeight: 'bold' }}>COMPLETED</span>
                </div>
                <div style={{ backgroundColor: 'rgba(5, 7, 10, 0.6)', padding: '12px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>Community Code of Conduct Survey</span>
                  <span style={{ color: '#34d399', fontSize: '11px', fontWeight: 'bold' }}>COMPLETED</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MARKET & CONTRACTS */}
        {activeTab === 'market' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Commodities Table */}
            <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '24px', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', paddingBottom: '12px' }}>
                <BarChart3 size={20} color="#34d399" />
                <h2 style={{ fontSize: '14px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
                  Live Commodity Market & Grain Prices
                </h2>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #27272a', color: '#71717a', fontSize: '10px', textTransform: 'uppercase' }}>
                    <th style={{ padding: '8px' }}>Commodity</th>
                    <th style={{ padding: '8px' }}>Market Price (1,000L)</th>
                    <th style={{ padding: '8px' }}>Trend</th>
                    <th style={{ padding: '8px', textAlign: 'right' }}>Multiplier</th>
                  </tr>
                </thead>
                <tbody>
                  {commodities.map(item => (
                    <tr key={item.id} style={{ borderBottom: '1px solid rgba(39, 39, 42, 0.4)' }}>
                      <td style={{ padding: '10px', fontWeight: 'bold' }}>{item.name}</td>
                      <td style={{ padding: '10px', fontFamily: 'monospace', color: '#34d399' }}>${item.pricePer1000L.toLocaleString()}</td>
                      <td style={{ padding: '10px', color: item.trend === 'up' ? '#34d399' : '#f87171', fontWeight: 'bold' }}>{item.changePercent}</td>
                      <td style={{ padding: '10px', textAlign: 'right' }}><span style={{ color: '#34d399', fontSize: '10px', fontWeight: 'bold' }}>{item.demandMultiplier}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Contracting Centre */}
            <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '24px', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', paddingBottom: '12px' }}>
                <ClipboardList size={20} color="#34d399" />
                <h2 style={{ fontSize: '14px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
                  Farm Dispatch & Contracting Centre
                </h2>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #27272a', color: '#71717a', fontSize: '10px', textTransform: 'uppercase' }}>
                    <th style={{ padding: '8px' }}>Farm</th>
                    <th style={{ padding: '8px' }}>Task</th>
                    <th style={{ padding: '8px' }}>Location</th>
                    <th style={{ padding: '8px' }}>Payout</th>
                    <th style={{ padding: '8px', textAlign: 'right' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map(j => (
                    <tr key={j.id} style={{ borderBottom: '1px solid rgba(39, 39, 42, 0.4)' }}>
                      <td style={{ padding: '10px', fontWeight: 'bold' }}>{j.farmName}</td>
                      <td style={{ padding: '10px', color: '#e4e4e7' }}>{j.task}</td>
                      <td style={{ padding: '10px', color: '#a1a1aa' }}>{j.field}</td>
                      <td style={{ padding: '10px', fontFamily: 'monospace', color: '#34d399', fontWeight: 'bold' }}>{j.payout}</td>
                      <td style={{ padding: '10px', textAlign: 'right' }}>
                        {j.status === 'Open' ? (
                          <button onClick={() => handleAcceptJob(j.id)} style={{ backgroundColor: '#27272a', color: '#ffffff', border: '1px solid #3f3f46', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', cursor: 'pointer', fontWeight: 'bold' }}>
                            ACCEPT
                          </button>
                        ) : (
                          <span style={{ fontSize: '10px', color: '#a1a1aa', fontStyle: 'italic' }}>{j.status}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: FLEET & TELEMETRY */}
        {activeTab === 'fleet' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Server Telemetry */}
            <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '20px', borderRadius: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', paddingBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Activity size={18} color="#34d399" />
                  <h2 style={{ fontSize: '12px', fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>Server Telemetry</h2>
                </div>
                <button onClick={handleManualRefresh} style={{ background: 'none', border: '1px solid #3f3f46', borderRadius: '4px', padding: '4px', color: '#a1a1aa', cursor: 'pointer' }}>
                  <RefreshCw size={14} />
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                <div style={{ backgroundColor: 'rgba(5, 7, 10, 0.6)', border: '1px solid #27272a', padding: '12px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '10px', color: '#71717a', textTransform: 'uppercase' }}>FPS / Tick Rate</div>
                  <div style={{ fontSize: '18px', fontWeight: 900, fontFamily: 'monospace', marginTop: '4px' }}>{fps.toFixed(1)}</div>
                </div>
                <div style={{ backgroundColor: 'rgba(5, 7, 10, 0.6)', border: '1px solid #27272a', padding: '12px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '10px', color: '#71717a', textTransform: 'uppercase' }}>Connected Players</div>
                  <div style={{ fontSize: '18px', fontWeight: 900, fontFamily: 'monospace', color: '#60a5fa', marginTop: '4px' }}>{playersCount} / 64</div>
                </div>
                <div style={{ backgroundColor: 'rgba(5, 7, 10, 0.6)', border: '1px solid #27272a', padding: '12px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '10px', color: '#71717a', textTransform: 'uppercase' }}>Active Assets</div>
                  <div style={{ fontSize: '18px', fontWeight: 900, fontFamily: 'monospace', color: '#f59e0b', marginTop: '4px' }}>{vehiclesCount}</div>
                </div>
                <div style={{ backgroundColor: 'rgba(5, 7, 10, 0.6)', border: '1px solid #27272a', padding: '12px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '10px', color: '#71717a', textTransform: 'uppercase' }}>Database Latency</div>
                  <div style={{ fontSize: '18px', fontWeight: 900, fontFamily: 'monospace', color: '#34d399', marginTop: '4px' }}>{ping} ms</div>
                </div>
              </div>
            </div>

            {/* Fleet Maintenance */}
            <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '24px', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', paddingBottom: '12px' }}>
                <Wrench size={20} color="#f59e0b" />
                <h2 style={{ fontSize: '14px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
                  Fleet & Machinery Maintenance Hub
                </h2>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #27272a', color: '#71717a', fontSize: '10px', textTransform: 'uppercase' }}>
                    <th style={{ padding: '8px' }}>Asset Name</th>
                    <th style={{ padding: '8px' }}>Hours</th>
                    <th style={{ padding: '8px' }}>Wear</th>
                    <th style={{ padding: '8px' }}>Status</th>
                    <th style={{ padding: '8px', textAlign: 'right' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicles.map(v => (
                    <tr key={v.id} style={{ borderBottom: '1px solid rgba(39, 39, 42, 0.4)' }}>
                      <td style={{ padding: '10px', fontWeight: 'bold' }}>{v.name}</td>
                      <td style={{ padding: '10px', fontFamily: 'monospace', color: '#e4e4e7' }}>{v.engineHours}</td>
                      <td style={{ padding: '10px', fontFamily: 'monospace', color: v.wearPercent > 50 ? '#f87171' : '#34d399' }}>{v.wearPercent}%</td>
                      <td style={{ padding: '10px' }}><span style={{ fontSize: '10px', fontWeight: 'bold', color: v.status === 'Operational' ? '#34d399' : '#f59e0b' }}>{v.status}</span></td>
                      <td style={{ padding: '10px', textAlign: 'right' }}>
                        {v.status !== 'Workshop Repair' ? (
                          <button onClick={() => handleRequestRepair(v.id)} style={{ backgroundColor: '#27272a', color: '#ffffff', border: '1px solid #3f3f46', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', cursor: 'pointer', fontWeight: 'bold' }}>
                            SERVICE
                          </button>
                        ) : (
                          <span style={{ fontSize: '10px', color: '#a1a1aa', fontStyle: 'italic' }}>Servicing</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}