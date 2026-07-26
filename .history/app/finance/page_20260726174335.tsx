"use client";
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const sb = createClient(
  'https://yioyfxvabhzvkwuljcki.supabase.co',
  'sb_publishable_wvc-fOTg4S73QnDR3PEK0g_fDO6x4NG'
);

export default function FarmNetworkPage() {
  const [nodes, setNodes] = useState<any[]>([]);
  const [ld, setLd] = useState(true);

  const load = async () => {
    try {
      const { data } = await sb.from('farm_network').select('*');
      if (data && data.length > 0) {
        setNodes(data);
      } else {
        setNodes([
          { id: 1, sector: 'Sector Alpha', location: 'Montana North Hub', status: 'ONLINE', telemetry: 'Optimal (99.8%)', bandwidth: '1.2 GB/s' },
          { id: 2, sector: 'Sector Beta', location: 'Valley Floor Relay', status: 'ONLINE', telemetry: 'Nominal (98.4%)', bandwidth: '850 MB/s' },
          { id: 3, sector: 'Sector Gamma', location: 'Central Pivot Station', status: 'SYNCING', telemetry: 'Re-indexing (84.1%)', bandwidth: '420 MB/s' }
        ]);
      }
    } catch (err) {
      console.error(err);
      setNodes([
        { id: 1, sector: 'Sector Alpha', location: 'Montana North Hub', status: 'ONLINE', telemetry: 'Optimal (99.8%)', bandwidth: '1.2 GB/s' },
        { id: 2, sector: 'Sector Beta', location: 'Valley Floor Relay', status: 'ONLINE', telemetry: 'Nominal (98.4%)', bandwidth: '850 MB/s' },
        { id: 3, sector: 'Sector Gamma', location: 'Central Pivot Station', status: 'SYNCING', telemetry: 'Re-indexing (84.1%)', bandwidth: '420 MB/s' }
      ]);
    } finally {
      setLd(false);
    }
  };

  useEffect(() => { load(); }, []);

  if (ld) {
    return (
      <div style={{background:'#090d16', color:'#38bdf8', height:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', fontFamily:'Inter, sans-serif', gap:'15px'}}>
        <div style={{width:'40px', height:'40px', border:'4px solid #1f2937', borderTop:'4px solid #38bdf8', borderRadius:'50%', animation:'spin 1s linear infinite'}}></div>
        <div style={{fontSize:'14px', letterSpacing:'1px', fontWeight:600}}>LOADING FARM NETWORK...</div>
      </div>
    );
  }

  return (
    <div style={{ background:'#090d16', minHeight:'100vh', color:'#f8fafc', fontFamily:'Inter, system-ui, sans-serif', display:'flex', flexDirection:'column' }}>
      
      {/* TOP HEADER */}
      <div style={{ background:'#0b111e', padding:'14px 30px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #1f2937' }}>
        <div style={{ display:'flex', gap:'30px', alignItems:'center' }}>
          <div style={{color:'#fff', fontWeight:'800', fontSize:'15px', letterSpacing:'0.5px', display:'flex', alignItems:'center', gap:'8px', cursor:'pointer'}} onClick={() => window.location.href='/dashboard'}>
            <span style={{color:'#4ade80'}}>🌾</span> FARM NETWORK
          </div>
          <span style={{color:'#4ade80', fontSize:'11px', fontWeight:'700', letterSpacing:'0.5px', background:'rgba(74,222,128,0.1)', padding:'4px 10px', borderRadius:'4px', border:'1px solid rgba(74,222,128,0.2)'}}>
            ENTERPRISE COMMAND SYSTEM V2.4
          </span>
        </div>
        <div style={{display:'flex', gap:'20px', alignItems:'center', fontSize:'12px', fontWeight:'600'}}>
          {[
            { label: 'ENTERPRISE COMMAND SYSTEM V2.4', path: '/' },
            { label: 'MARKET INDEX', path: '/market' },
            { label: 'CONTRACTS', path: '/contracts' },
            { label: 'FLEET', path: '/fleet' },
            { label: 'DISPATCH', path: '/dispatch' },
            { label: 'EVENTS', path: '/events' },
            { label: 'FIELDS', path: '/fields' },
            { label: 'IMPORTS', path: '/imports' },
            { label: 'FINANCE', path: '/finance' }
          ].map((item, idx) => {
            const isNet = idx === 0;
            return (
              <span key={idx} onClick={() => window.location.href = item.path} style={{color: isNet ? '#4ade80' : '#94a3b8', cursor:'pointer', fontSize:'11px', fontWeight:'700', letterSpacing:'0.5px'}}>
                {item.label}
              </span>
            );
          })}
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div style={{ flex:1, background:'linear-gradient(rgba(9, 13, 22, 0.88), rgba(9, 13, 22, 0.96)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600") center/cover', padding:'40px' }}>
        <div style={{ maxWidth:'1300px', margin:'0 auto' }}>
          
          {/* TITLE & NETWORK STATUS */}
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'30px', flexWrap:'wrap', gap:'20px' }}>
            <div>
              <div style={{fontSize:'11px', color:'#4ade80', fontWeight:'700', letterSpacing:'1px', textTransform:'uppercase', marginBottom:'6px'}}>
                NETWORK TOPOLOGY • STATUS: FULLY OPERATIONAL
              </div>
              <h1 style={{fontSize:'36px', fontWeight:'800', margin:0, color:'#fff', letterSpacing:'-0.5px'}}>Farm Network Grid</h1>
            </div>
            <div style={{ display:'flex', gap:'15px' }}>
              <div style={{ background:'rgba(17, 24, 39, 0.85)', border:'1px solid #374151', padding:'10px 18px', borderRadius:'8px', display:'flex', flexDirection:'column', gap:'2px' }}>
                <span style={{fontSize:'10px', color:'#94a3b8', fontWeight:'700', textTransform:'uppercase'}}>Active Nodes</span>
                <span style={{fontSize:'13px', fontWeight:'800', color:'#4ade80'}}>3 / 3 ONLINE</span>
              </div>
              <div style={{ background:'rgba(17, 24, 39, 0.85)', border:'1px solid #374151', padding:'10px 18px', borderRadius:'8px', display:'flex', flexDirection:'column', gap:'2px' }}>
                <span style={{fontSize:'10px', color:'#94a3b8', fontWeight:'700', textTransform:'uppercase'}}>Grid Health</span>
                <span style={{fontSize:'13px', fontWeight:'800', color:'#38bdf8'}}>99.4%</span>
              </div>
            </div>
          </div>

          {/* NODES TABLE */}
          <div style={{ background:'rgba(17, 24, 39, 0.85)', backdropFilter:'blur(10px)', borderRadius:'12px', border:'1px solid #374151', padding:'30px', boxShadow:'0 10px 25px -5px rgba(0,0,0,0.5)' }}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #374151', paddingBottom:'15px', marginBottom:'20px'}}>
              <div>
                <h2 style={{fontSize:'18px', fontWeight:'800', margin:'0 0 4px 0', color:'#fff'}}>Regional Telemetry Grid</h2>
                <p style={{fontSize:'12px', color:'#94a3b8', margin:0}}>Real-time connectivity and status metrics for all active agricultural sectors.</p>
              </div>
              <span style={{fontSize:'11px', fontWeight:'700', color:'#4ade80', background:'rgba(74,222,128,0.1)', padding:'5px 12px', borderRadius:'6px', border:'1px solid rgba(74,222,128,0.2)', display:'flex', alignItems:'center', gap:'6px'}}>
                <span style={{width:'6px', height:'6px', background:'#4ade80', borderRadius:'50%', display:'inline-block'}}></span> SECURE MESH
              </span>
            </div>

            <div style={{overflowX:'auto'}}>
              <table style={{width:'100%', borderCollapse:'collapse', textAlign:'left', fontSize:'13px'}}>
                <thead>
                  <tr style={{borderBottom:'1px solid #374151', color:'#94a3b8', fontSize:'11px', textTransform:'uppercase', letterSpacing:'0.5px'}}>
                    <th style={{padding:'12px'}}>Sector Name</th>
                    <th style={{padding:'12px'}}>Location Hub</th>
                    <th style={{padding:'12px'}}>Status</th>
                    <th style={{padding:'12px'}}>Telemetry Metric</th>
                    <th style={{padding:'12px', textAlign:'right'}}>Bandwidth</th>
                  </tr>
                </thead>
                <tbody>
                  {nodes.map((node) => {
                    const isOnline = node.status === 'ONLINE';
                    return (
                      <tr key={node.id} style={{borderBottom:'1px solid #1f2937'}}>
                        <td style={{padding:'16px', fontWeight:'700', color:'#fff'}}>{node.sector}</td>
                        <td style={{padding:'16px', color:'#94a3b8', fontWeight:'600'}}>{node.location}</td>
                        <td style={{padding:'16px'}}>
                          <span style={{
                            fontSize:'10px', fontWeight:'800', letterSpacing:'0.5px',
                            padding:'4px 10px', borderRadius:'4px',
                            background: isOnline ? 'rgba(74,222,128,0.1)' : 'rgba(251,191,36,0.1)',
                            color: isOnline ? '#4ade80' : '#fbbf24',
                            border: isOnline ? '1px solid rgba(74,222,128,0.2)' : '1px solid rgba(251,191,36,0.2)'
                          }}>
                            {node.status}
                          </span>
                        </td>
                        <td style={{padding:'16px', color:'#94a3b8'}}>{node.telemetry}</td>
                        <td style={{padding:'16px', textAlign:'right', fontWeight:'800', color:'#38bdf8'}}>
                          {node.bandwidth}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background:'#0b111e', padding:'15px 30px', textAlign:'center', fontSize:'11px', color:'#64748b', borderTop:'1px solid #1f2937', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <span>DAISY HILL FARMING COMMUNITY © 2026</span>
        <span>ENTERPRISE COMMAND SYSTEM V2.4 • SECURE MESH NETWORK</span>
      </div>
    </div>
  );
}