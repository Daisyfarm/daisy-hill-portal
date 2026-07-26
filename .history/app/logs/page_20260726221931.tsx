"use client";
import { useState } from 'react';
import { FileText, ArrowLeft, ShieldAlert } from 'lucide-react';

export default function LogsPage() {
  const [logs] = useState([
    { id: 1, type: 'BALANCE_UPDATE', user: 'Admin / System', details: 'Adjusted balance for Operator Alpha by +$50,000', timestamp: '2026-07-26 10:05 AM' },
    { id: 2, type: 'CONTRACT_COMPLETED', user: 'DaisyValleyFarmer', details: 'Completed North Ridge Harvest Contract #104', timestamp: '2026-07-26 09:42 AM' },
    { id: 3, type: 'SERVER_BOOT', user: 'G-Portal Daemon', details: 'Instance initialized on Map: Daisy Hill Farm (Slot capacity: 16)', timestamp: '2026-07-26 08:00 AM' }
  ]);

  return (
    <div style={{ background:'#090d16', minHeight:'100vh', color:'#f8fafc', fontFamily:'Inter, system-ui, sans-serif', display:'flex', flexDirection:'column' }}>
      
      {/* Top Header */}
      <div style={{ background:'#111827', padding:'16px 30px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #1f2937' }}>
        <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
          <FileText size={20} color="#f87171" />
          <span style={{color:'#f87171', fontWeight:'800', fontSize:'15px', letterSpacing:'0.5px'}}>STAFF AUDIT & EVENT LOGS</span>
        </div>
        <span onClick={()=>window.location.href='/admin'} style={{color:'#94a3b8', fontSize:'12px', fontWeight:'bold', cursor:'pointer', display:'flex', alignItems:'center', gap:'6px'}}>
          <ArrowLeft size={14}/> BACK TO ADMIN PANEL
        </span>
      </div>

      {/* Main Content */}
      <div style={{ flex:1, padding:'40px', maxWidth:'1100px', margin:'0 auto', width:'100%', boxSizing:'border-box' }}>
        <div style={{marginBottom:'30px', borderBottom:'1px solid #1f2937', paddingBottom:'15px'}}>
          <h1 style={{fontSize:'24px', fontWeight:'800', margin:'0 0 5px 0', color:'#fff'}}>Server Operations Audit Trail</h1>
          <p style={{fontSize:'12px', color:'#94a3b8', margin:0}}>Inspect recorded system events, economy modifications, and player contract achievements.</p>
        </div>

        <div style={{background:'#111827', borderRadius:'12px', border:'1px solid #374151', padding:'30px', boxShadow:'0 10px 25px -5px rgba(0,0,0,0.5)'}}>
          <div style={{overflowX:'auto'}}>
            <table style={{width:'100%', borderCollapse:'collapse', textAlign:'left', fontSize:'13px'}}>
              <thead>
                <tr style={{borderBottom:'1px solid #374151', color:'#94a3b8', fontSize:'11px', textTransform:'uppercase', letterSpacing:'0.5px'}}>
                  <th style={{padding:'12px'}}>EVENT TYPE</th>
                  <th style={{padding:'12px'}}>ACTOR</th>
                  <th style={{padding:'12px'}}>DETAILS</th>
                  <th style={{padding:'12px', textAlign:'right'}}>TIMESTAMP</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((l) => (
                  <tr key={l.id} style={{borderBottom:'1px solid #1f2937'}}>
                    <td style={{padding:'15px', fontWeight:'700', color:'#38bdf8'}}>{l.type}</td>
                    <td style={{padding:'15px', fontWeight:'600', color:'#fff'}}>{l.user}</td>
                    <td style={{padding:'15px', color:'#cbd5e1'}}>{l.details}</td>
                    <td style={{padding:'15px', textAlign:'right', color:'#94a3b8', fontSize:'12px'}}>{l.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}