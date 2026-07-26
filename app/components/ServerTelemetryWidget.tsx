"use client";
import { useState } from 'react';
import { Wifi, Users, MapPin, Activity } from 'lucide-react';

export default function ServerTelemetryWidget() {
  const [status] = useState({
    online: true,
    players: '4 / 16',
    map: 'Daisy Hill Farm',
    ping: '24ms'
  });

  return (
    <div style={{ background:'#131826', padding:'25px', borderRadius:'10px', border:'1px solid #1e293b', boxShadow:'0 4px 12px rgba(0,0,0,0.3)', color:'#fff', fontFamily:'Arial, sans-serif' }}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px'}}>
        <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
          <Activity size={18} color="#22c55e" />
          <h3 style={{fontSize:'16px', fontWeight:'900', margin:0, letterSpacing:'0.5px', color:'#f8fafc'}}>G-PORTAL TELEMETRY</h3>
        </div>
        <span style={{fontSize:'11px', fontWeight:'bold', background:'rgba(34, 197, 94, 0.1)', color:'#22c55e', padding:'4px 8px', borderRadius:'4px', display:'flex', alignItems:'center', gap:'5px'}}>
          <Wifi size={12}/> ONLINE
        </span>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
        <div style={{background:'#0b0f17', padding:'12px', borderRadius:'6px', border:'1px solid #1e293b'}}>
          <span style={{fontSize:'10px', color:'#94a3b8', fontWeight:'bold', display:'flex', alignItems:'center', gap:'4px', marginBottom:'4px'}}>
            <Users size={12}/> ACTIVE PLAYERS
          </span>
          <span style={{fontSize:'16px', fontWeight:'900', color:'#fff'}}>{status.players}</span>
        </div>

        <div style={{background:'#0b0f17', padding:'12px', borderRadius:'6px', border:'1px solid #1e293b'}}>
          <span style={{fontSize:'10px', color:'#94a3b8', fontWeight:'bold', display:'flex', alignItems:'center', gap:'4px', marginBottom:'4px'}}>
            <MapPin size={12}/> CURRENT MAP
          </span>
          <span style={{fontSize:'14px', fontWeight:'900', color:'#22c55e'}}>{status.map}</span>
        </div>
      </div>
    </div>
  );
}