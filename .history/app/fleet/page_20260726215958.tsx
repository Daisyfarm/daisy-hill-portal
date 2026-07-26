"use client";
import { useState } from 'react';
import { Truck, ArrowLeft, Tool } from 'lucide-react';

export default function FleetPage() {
  const [fleet] = useState([
    { id: 1, name: 'Fendt 942 Vario', type: 'Heavy Tractor', status: 'Available', fuel: '92%' },
    { id: 2, name: 'John Deere X9 1100', type: 'Harvester', status: 'In Operation', fuel: '45%' },
    { id: 3, name: 'JCB Fastrac 8330', type: 'Transport', status: 'Available', fuel: '88%' }
  ]);

  return (
    <div style={{ background:'#0b0f17', minHeight:'100vh', color:'#fff', fontFamily:'Arial, sans-serif', display:'flex', flexDirection:'column' }}>
      
      {/* Top Header */}
      <div style={{ background:'#111622', padding:'16px 30px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'2px solid #22c55e' }}>
        <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
          <Truck size={20} color="#22c55e" />
          <span style={{color:'#22c55e', fontWeight:'900', fontSize:'16px', fontStyle:'italic', letterSpacing:'0.5px'}}>DAISY HILL FLEET GARAGE</span>
        </div>
        <span onClick={()=>window.location.href='/dashboard'} style={{color:'#94a3b8', fontSize:'12px', fontWeight:'bold', cursor:'pointer', display:'flex', alignItems:'center', gap:'6px'}}>
          <ArrowLeft size={14}/> BACK TO DASHBOARD
        </span>
      </div>

      {/* Content Area */}
      <div style={{ flex:1, padding:'40px', maxWidth:'1200px', margin:'0 auto', width:'100%', boxSizing:'border-box' }}>
        <div style={{marginBottom:'30px', borderBottom:'1px solid #1e293b', paddingBottom:'15px'}}>
          <h1 style={{fontSize:'26px', fontWeight:'900', textTransform:'uppercase', margin:'0 0 5px 0', letterSpacing:'1px', color:'#f8fafc'}}>Cooperative Fleet</h1>
          <p style={{fontSize:'12px', color:'#94a3b8', margin:0}}>Inspect shared farm machinery, fuel statuses, and equipment allocations across the server.</p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px, 1fr))', gap:'20px' }}>
          {fleet.map((vehicle) => (
            <div key={vehicle.id} style={{ background:'#131826', padding:'25px', borderRadius:'10px', border:'1px solid #1e293b', display:'flex', flexDirection:'column', gap:'15px' }}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                <div>
                  <span style={{fontSize:'10px', fontWeight:'bold', color:'#22c55e', background:'rgba(34, 197, 94, 0.1)', padding:'4px 8px', borderRadius:'4px'}}>
                    {vehicle.type}
                  </span>
                  <h3 style={{fontSize:'18px', fontWeight:'bold', margin:'10px 0 0 0', color:'#f8fafc'}}>{vehicle.name}</h3>
                </div>
                <span style={{fontSize:'11px', fontWeight:'bold', color: vehicle.status === 'Available' ? '#22c55e' : '#f59e0b'}}>
                  {vehicle.status}
                </span>
              </div>

              <div style={{background:'#0b0f17', padding:'12px 15px', borderRadius:'6px', display:'flex', justifyContent:'space-between', alignItems:'center', border:'1px solid #1e293b'}}>
                <span style={{fontSize:'11px', color:'#94a3b8', fontWeight:'bold'}}>FUEL / DEF STATUS</span>
                <span style={{fontSize:'14px', fontWeight:'900', color:'#fff'}}>{vehicle.fuel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}