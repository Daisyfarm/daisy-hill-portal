"use client";
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Cloud, LayoutDashboard, Tractor, MapPin, Calculator, LogOut, ShieldAlert, Shield, BookOpen, HelpCircle, ArrowLeft, Layers, CheckCircle2, Droplets } from 'lucide-react';

const sb = createClient(
  'https://yioyfxvabhzvkwuljcki.supabase.co',
  'sb_publishable_wvc-fOTg4S73QnDR3PEK0g_fDO6x4NG'
);

export default function LandManagement() {
  const [plots, setPlots] = useState<any[]>([]);
  const [w, setW] = useState("72°F");
  const [ld, setLd] = useState(true);

  const load = async () => {
    try {
      const { data, error } = await sb.from('land_registry').select('*');
      if (data && data.length > 0) {
        setPlots(data);
      } else {
        setPlots([
          { id: 1, sector: 'SECTOR ALPHA - PLOT 01', title: 'North Ridge Wheat Acreage', description: 'Total area: 240 hectares. Soil nitrogen levels optimal; surface moisture reading at stable parameters.', status: 'OPTIMAL GROWTH' },
          { id: 2, sector: 'SECTOR BETA - PLOT 04', title: 'Valley Floor Barley Zone', description: 'Total area: 180 hectares. Irrigation systems active. Preparing for secondary crop rotation cycle next week.', status: 'IRRIGATION ACTIVE' }
        ]);
      }

      const weatherRes = await fetch('https://api.open-meteo.com/v1/forecast?latitude=47.15&longitude=-110.22&current=temperature_2m&temperature_unit=fahrenheit');
      const weatherData = await weatherRes.json();
      if (weatherData?.current?.temperature_2m) {
        setW(Math.round(weatherData.current.temperature_2m) + "°F");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLd(false);
    }
  };

  useEffect(() => { load(); }, []);

  if (ld) return (
    <div style={{background:'#0f172a', color:'#38bdf8', height:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', fontFamily:'Inter, sans-serif', gap:'15px'}}>
      <div style={{width:'40px', height:'40px', border:'4px solid #334155', borderTop:'4px solid #38bdf8', borderRadius:'50%', animation:'spin 1s linear infinite'}}></div>
      <div style={{fontSize:'14px', letterSpacing:'1px', fontWeight:600}}>LOADING FIELD MANAGEMENT...</div>
      <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
    </div>
  );

  const sideBtn = { width:'100%', padding:'12px 18px', background:'transparent', color:'#94a3b8', border:'none', marginBottom:'6px', textAlign:'left' as const, cursor:'pointer', fontWeight:'600', fontSize:'13px', borderRadius:'8px', display:'flex', alignItems:'center', gap:'12px', transition:'all 0.2s ease' };

  return (
    <div style={{ background:'#090d16', minHeight:'100vh', color:'#f8fafc', fontFamily:'Inter, system-ui, sans-serif', display:'flex', flexDirection:'column' }}>
      
      {/* TOP HEADER */}
      <div style={{ background:'#111827', padding:'14px 30px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #1f2937', boxShadow:'0 4px 6px -1px rgba(0,0,0,0.2)' }}>
        <div style={{ display:'flex', gap:'30px', alignItems:'center' }}>
          <div style={{display:'flex', alignItems:'center', gap:'10px', cursor:'pointer'}} onClick={()=>window.location.href='/dashboard'}>
            <div style={{background:'#1e293b', padding:'6px 10px', borderRadius:'6px', border:'1px solid #334155', color:'#4ade80', fontWeight:'bold'}}>🚜</div>
            <div>
              <div style={{color:'#fff', fontWeight:'800', fontSize:'15px', letterSpacing:'0.5px'}}>DHFC PORTAL</div>
              <div style={{color:'#94a3b8', fontSize:'10px', fontWeight:'600', letterSpacing:'0.5px'}}>DAISY HILL FARMING COMMUNITY</div>
            </div>
          </div>
          <span style={{color:'#94a3b8', fontSize:'12px', fontWeight:'500', display:'flex', alignItems:'center', gap:'6px', borderLeft:'1px solid #374151', paddingLeft:'30px'}}>
            <Cloud size={14} color="#38bdf8"/> Montana Weather: <strong style={{color:'#fff'}}>{w}</strong>
          </span>
        </div>
        <div style={{display:'flex', gap:'12px', alignItems:'center'}}>
          <button style={{background:'#1f2937', border:'1px solid #374151', color:'#e2e8f0', padding:'6px 14px', fontSize:'11px', fontWeight:'700', cursor:'pointer', borderRadius:'6px', display:'flex', alignItems:'center', gap:'6px'}}>
            <Shield size={13} color="#4ade80"/> PLAYER VIEW
          </button>
          <button onClick={()=>window.location.href='/admin'} style={{background:'#1f2937', border:'1px solid #374151', color:'#e2e8f0', padding:'6px 14px', fontSize:'11px', fontWeight:'700', cursor:'pointer', borderRadius:'6px', display:'flex', alignItems:'center', gap:'6px'}}>
            <ShieldAlert size={13} color="#f87171"/> STAFF CONTROL PANEL
          </button>
          <button style={{background:'#1f2937', border:'1px solid #374151', color:'#e2e8f0', padding:'6px 14px', fontSize:'11px', fontWeight:'700', cursor:'pointer', borderRadius:'6px', display:'flex', alignItems:'center', gap:'6px'}}>
            <BookOpen size={13} color="#38bdf8"/> RULES
          </button>
          <button style={{background:'#1f2937', border:'1px solid #374151', color:'#e2e8f0', padding:'6px 14px', fontSize:'11px', fontWeight:'700', cursor:'pointer', borderRadius:'6px', display:'flex', alignItems:'center', gap:'6px'}}>
            <HelpCircle size={13} color="#fbbf24"/> SUPPORT
          </button>
        </div>
      </div>

      <div style={{ display:'flex', flex:1 }}>
        
        {/* SIDEBAR NAVIGATION */}
        <div style={{ width:'260px', background:'#111827', padding:'25px 15px', borderRight:'1px solid #1f2937', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
          <div>
            <div style={{fontSize:'10px', textTransform:'uppercase', color:'#64748b', fontWeight:'700', letterSpacing:'1px', marginBottom:'12px', paddingLeft:'12px'}}>NAVIGATION</div>
            <button style={sideBtn} onClick={()=>window.location.href='/dashboard'}>
              <LayoutDashboard size={16}/> Dashboard
            </button>
            <button style={sideBtn} onClick={()=>window.location.href='/contracts'}>
              <Tractor size={16}/> Contract Board
            </button>
            <button style={{...sideBtn, background:'#1e293b', color:'#38bdf8', boxShadow:'inset 0 1px 0 rgba(255,255,255,0.05)'}}>
              <MapPin size={16}/> Field Management
            </button>
            <button style={sideBtn} onClick={()=>window.location.href='/accounting'}>
              <Calculator size={16}/> Accounting
            </button>
          </div>
          <div>
            <button style={{...sideBtn, color:'#f87171'}} onClick={()=>sb.auth.signOut().then(()=>window.location.href='/')}>
              <LogOut size={16}/> Logout
            </button>
          </div>
        </div>

        {/* MAIN BACKGROUND & CONTENT */}
        <div style={{ flex:1, background:'linear-gradient(rgba(9, 13, 22, 0.85), rgba(9, 13, 22, 0.95)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600") center/cover', position:'relative', overflowY:'auto', padding:'40px' }}>
          
          <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
            
            {/* PAGE BANNER */}
            <div style={{ background:'rgba(17, 24, 39, 0.85)', backdropFilter:'blur(10px)', padding:'30px 40px', borderRadius:'12px', border:'1px solid #374151', boxShadow:'0 10px 25px -5px rgba(0, 0, 0, 0.5)', marginBottom:'30px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'20px' }}>
              <div>
                <div style={{fontSize:'11px', color:'#4ade80', fontWeight:'700', letterSpacing:'1px', textTransform:'uppercase', marginBottom:'6px'}}>REGIONAL PLOT ANALYTICS</div>
                <h1 style={{fontSize:'32px', fontWeight:'800', margin:0, color:'#fff'}}>Land & Field Management</h1>
                <p style={{fontSize:'13px', color:'#94a3b8', margin:'6px 0 0 0'}}>Inspect soil telemetry, acreage boundaries, plot rotations, and moisture content.</p>
              </div>
              <button onClick={()=>window.location.href='/dashboard'} style={{background:'#1f2937', border:'1px solid #374151', color:'#fff', padding:'10px 20px', fontSize:'12px', fontWeight:'700', borderRadius:'8px', cursor:'pointer', display:'flex', alignItems:'center', gap:'8px'}}>
                <ArrowLeft size={15}/> BACK TO COMMAND
              </button>
            </div>

            {/* PLOTS GRID */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(360px, 1fr))', gap:'25px' }}>
              {plots.map((p, idx) => {
                const isOptimal = p.status?.includes('OPTIMAL') || p.status?.includes('GROWTH');
                return (
                  <div key={p.id || idx} style={{ background:'rgba(17, 24, 39, 0.85)', backdropFilter:'blur(10px)', borderRadius:'12px', border:'1px solid #374151', padding:'30px', display:'flex', flexDirection:'column', justifyContent:'space-between', boxShadow:'0 10px 25px -5px rgba(0, 0, 0, 0.5)' }}>
                    <div>
                      <div style={{fontSize:'11px', color:'#4ade80', fontWeight:'700', letterSpacing:'0.5px', textTransform:'uppercase', marginBottom:'8px'}}>{p.sector || `SECTOR PLOT 0${idx+1}`}</div>
                      <h3 style={{fontSize:'20px', fontWeight:'800', color:'#fff', margin:'0 0 12px 0'}}>{p.title || p.name || 'Agricultural Plot'}</h3>
                      <p style={{fontSize:'13px', color:'#94a3b8', lineHeight:'1.5', margin:'0 0 25px 0'}}>{p.description || p.notes || 'Soil telemetry nominal. Irrigation channels holding stable pressure across sector boundaries.'}</p>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid #374151', paddingTop:'15px'}}>
                      <span style={{fontSize:'11px', color:'#94a3b8', fontWeight:'700'}}>STATUS:</span>
                      <span style={{fontSize:'12px', fontWeight:'800', color: isOptimal ? '#4ade80' : '#38bdf8', display:'flex', alignItems:'center', gap:'5px'}}>
                        {isOptimal ? <CheckCircle2 size={14}/> : <Droplets size={14}/>}
                        {p.status || 'ACTIVE'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background:'#111827', padding:'15px 30px', textAlign:'center', fontSize:'11px', color:'#64748b', borderTop:'1px solid #1f2937', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <span>DAISY HILL FARMING COMMUNITY © 2026</span>
        <span>EXECUTIVE OPERATIONS SUITE • SECURE ENCLAVE</span>
      </div>
    </div>
  );
}