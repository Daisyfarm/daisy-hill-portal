"use client";
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Landmark, Cloud, DollarSign, TrendingUp, ShieldCheck, AlertCircle, FileText } from 'lucide-react';

const sb = createClient(
  'https://yioyfxvabhzvkwuljcki.supabase.co',
  'sb_publishable_wvc-fOTg4S73QnDR3PEK0g_fDO6x4NG'
);

export default function Accounting() {
  const [u, setU] = useState<any>({ balance: 0, credit_score: 600, username: 'Operator' });
  const [stats, setStats] = useState({ landNav: 0, vehicleNav: 0, totalDebt: 0, fines: 0 });
  const [w, setW] = useState("72°F");
  const [ld, setLd] = useState(true);

  const load = async () => {
    try {
      const { data: profiles } = await sb.from('profiles').select('*');
      if (profiles && profiles.length > 0) {
        const { data: { user } } = await sb.auth.getUser();
        const matched = profiles.find(p => p.id === user?.id) || profiles[0];
        setU(matched);

        const userId = matched.id;
        const { data: land } = await sb.from('land_registry').select('price').eq('owner_id', userId);
        const landSum = land?.reduce((acc, curr) => acc + (curr.price || 0), 0) || 0;

        const { data: fleet } = await sb.from('fleet').select('value').eq('owner_id', userId);
        const fleetSum = fleet?.reduce((acc, curr) => acc + (curr.value || 0), 0) || 0;

        const { data: loans } = await sb.from('loans').select('amount_remaining').eq('user_id', userId).eq('status', 'active');
        const debtSum = loans?.reduce((acc, curr) => acc + (curr.amount_remaining || 0), 0) || 0;

        const { data: tx } = await sb.from('transactions').select('amount').eq('user_id', userId).ilike('description', '%Fine%');
        const fineSum = tx?.reduce((acc, curr) => acc + (curr.amount || 0), 0) || 0;

        setStats({ landNav: landSum, vehicleNav: fleetSum, totalDebt: debtSum, fines: fineSum });
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
      <div style={{fontSize:'14px', letterSpacing:'1px', fontWeight:600}}>LOADING FINANCIAL LEDGER...</div>
      <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
    </div>
  );

  const balance = u.balance || 0;
  const creditScore = u.credit_score || 600;
  const displayName = u.username || u.full_name || u.name || 'Operator';
  const totalAssets = balance + stats.landNav + stats.vehicleNav;
  const netWorth = totalAssets - stats.totalDebt;

  const sideBtn = { width:'100%', padding:'12px 18px', background:'transparent', color:'#94a3b8', border:'none', marginBottom:'6px', textAlign:'left' as const, cursor:'pointer', fontWeight:'600', fontSize:'13px', borderRadius:'8px', display:'flex', alignItems:'center', gap:'12px', transition:'all 0.2s ease' };

  return (
    <div style={{ background:'#090d16', minHeight:'100vh', color:'#f8fafc', fontFamily:'Inter, system-ui, sans-serif', display:'flex', flexDirection:'column' }}>
      
      {/* TOP HEADER */}
      <div style={{ background:'#111827', padding:'14px 30px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #1f2937', boxShadow:'0 4px 6px -1px rgba(0,0,0,0.2)' }}>
        <div style={{ display:'flex', gap:'35px', alignItems:'center' }}>
          <span onClick={()=>window.location.href='/dashboard'} style={{color:'#4ade80', fontWeight:'800', fontSize:'17px', letterSpacing:'0.5px', cursor:'pointer', display:'flex', alignItems:'center', gap:'8px'}}>
            🌾 DAISY HILL FARMING COMMUNITY
          </span>
          <span style={{color:'#94a3b8', fontSize:'12px', fontWeight:'500', display:'flex', alignItems:'center', gap:'6px'}}>
            <Cloud size={14} color="#38bdf8"/> Montana Weather: <strong style={{color:'#fff'}}>{w}</strong>
          </span>
        </div>
        <div style={{display:'flex', gap:'20px', alignItems:'center'}}>
          <div style={{background:'#1f2937', padding:'6px 14px', borderRadius:'20px', border:'1px solid #374151', fontSize:'12px', color:'#e2e8f0'}}>
            👤 <span style={{color:'#4ade80', fontWeight:'600'}}>{displayName}</span>
          </div>
          <button onClick={()=>window.location.href='/admin'} style={{background:'#ef4444', border:'none', color:'#fff', padding:'7px 16px', fontSize:'12px', fontWeight:'700', cursor:'pointer', borderRadius:'6px', boxShadow:'0 2px 4px rgba(239,68,68,0.3)', transition:'opacity 0.2s'}}>
            STAFF PANEL
          </button>
        </div>
      </div>

      <div style={{ display:'flex', flex:1 }}>
        
        {/* SIDEBAR NAVIGATION */}
        <div style={{ width:'260px', background:'#111827', padding:'25px 15px', borderRight:'1px solid #1f2937', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
          <div>
            <div style={{fontSize:'10px', textTransform:'uppercase', color:'#64748b', fontWeight:'700', letterSpacing:'1px', marginBottom:'12px', paddingLeft:'12px'}}>Navigation</div>
            <button style={sideBtn} onClick={()=>window.location.href='/dashboard'}>📊 Dashboard</button>
            <button style={sideBtn} onClick={()=>window.location.href='/contracts'}>🚜 Field Work</button>
            <button style={sideBtn} onClick={()=>window.location.href='/land'}>🗺️ Field Management</button>
            <button style={{...sideBtn, background:'#1e293b', color:'#38bdf8', boxShadow:'inset 0 1px 0 rgba(255,255,255,0.05)'}}>💰 Accounting</button>
          </div>
          <div>
            <button style={{...sideBtn, color:'#f87171'}} onClick={()=>sb.auth.signOut().then(()=>window.location.href='/')}>🚪 Logout</button>
          </div>
        </div>

        {/* MAIN BACKGROUND & CONTENT */}
        <div style={{ flex:1, background:'linear-gradient(rgba(9, 13, 22, 0.85), rgba(9, 13, 22, 0.95)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600") center/cover', position:'relative', overflowY:'auto', padding:'40px' }}>
          
          <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
            
            {/* PAGE TITLE BANNER */}
            <div style={{ background:'rgba(17, 24, 39, 0.85)', backdropFilter:'blur(10px)', padding:'30px 40px', borderRadius:'12px', border:'1px solid #374151', boxShadow:'0 10px 25px -5px rgba(0, 0, 0, 0.5)', marginBottom:'30px' }}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:'20px'}}>
                <div>
                  <h1 style={{fontSize:'32px', fontWeight:'800', margin:0, letterSpacing:'0.5px', color:'#fff', display:'flex', alignItems:'center', gap:'12px'}}>
                    <FileText color="#38bdf8" size={32}/> Financial Ledger & Accounting
                  </h1>
                  <p style={{fontSize:'13px', color:'#94a3b8', margin:'8px 0 0 0', lineHeight:'1.5', maxWidth:'750px'}}>
                    Real-time operational financial overview. Track your liabilities, active loans, vehicle assets, and land evaluations across Daisy Hill.
                  </p>
                </div>
                <div style={{background:'#1e293b', padding:'15px 25px', borderRadius:'8px', border:'1px solid #475569', textAlign:'right'}}>
                  <div style={{fontSize:'11px', color:'#94a3b8', textTransform:'uppercase', fontWeight:'700', letterSpacing:'0.5px'}}>Net Worth (NAV)</div>
                  <div style={{fontSize:'24px', fontWeight:'800', color: netWorth >= 0 ? '#4ade80' : '#f87171', marginTop:'2px'}}>
                    ${netWorth.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </div>
                </div>
              </div>
            </div>

            {/* TWO COLUMN GRID */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(480px, 1fr))', gap:'30px' }}>
              
              {/* COLUMN 1: WEB LIABILITIES */}
              <div style={{ background:'rgba(17, 24, 39, 0.85)', backdropFilter:'blur(10px)', borderRadius:'12px', border:'1px solid #374151', padding:'30px', boxShadow:'0 10px 25px -5px rgba(0, 0, 0, 0.5)' }}>
                <div style={{display:'flex', alignItems:'center', gap:'10px', borderBottom:'1px solid #374151', paddingBottom:'15px', marginBottom:'20px'}}>
                  <AlertCircle color="#f87171" size={22}/>
                  <h2 style={{fontSize:'20px', fontWeight:'700', margin:0}}>Web Liabilities</h2>
                </div>

                <div style={{display:'flex', flexDirection:'column', gap:'14px'}}>
                  <div style={{display:'flex', justifyContent:'space-between', padding:'12px 16px', background:'#1f2937', borderRadius:'8px', alignItems:'center'}}>
                    <span style={{color:'#cbd5e1', fontSize:'14px', fontWeight:'500'}}>Active Loans Principal</span>
                    <span style={{fontWeight:'700', color:'#f87171', fontSize:'15px'}}>${stats.totalDebt.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                  </div>

                  <div style={{display:'flex', justifyContent:'space-between', padding:'12px 16px', background:'#1f2937', borderRadius:'8px', alignItems:'center'}}>
                    <span style={{color:'#cbd5e1', fontSize:'14px', fontWeight:'500'}}>Pending Fines & Penalties</span>
                    <span style={{fontWeight:'700', color:'#f87171', fontSize:'15px'}}>${stats.fines.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                  </div>

                  <div style={{display:'flex', justifyContent:'space-between', padding:'12px 16px', background:'#1f2937', borderRadius:'8px', alignItems:'center'}}>
                    <span style={{color:'#cbd5e1', fontSize:'14px', fontWeight:'500'}}>Invoices / Taxes Owed</span>
                    <span style={{fontWeight:'700', color:'#e2e8f0', fontSize:'15px'}}>$0.00</span>
                  </div>

                  <div style={{marginTop:'15px', padding:'18px', background:'rgba(239, 68, 68, 0.1)', border:'1px solid rgba(239, 68, 68, 0.3)', borderRadius:'8px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <span style={{fontWeight:'700', color:'#fca5a5', fontSize:'15px'}}>Total Liabilities</span>
                    <span style={{fontWeight:'800', color:'#f87171', fontSize:'18px'}}>${stats.totalDebt.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                  </div>
                </div>
              </div>

              {/* COLUMN 2: GAME ASSETS */}
              <div style={{ background:'rgba(17, 24, 39, 0.85)', backdropFilter:'blur(10px)', borderRadius:'12px', border:'1px solid #374151', padding:'30px', boxShadow:'0 10px 25px -5px rgba(0, 0, 0, 0.5)' }}>
                <div style={{display:'flex', alignItems:'center', gap:'10px', borderBottom:'1px solid #374151', paddingBottom:'15px', marginBottom:'20px'}}>
                  <ShieldCheck color="#4ade80" size={22}/>
                  <h2 style={{fontSize:'20px', fontWeight:'700', margin:0}}>Game Assets & Valuation</h2>
                </div>

                <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
                  <div style={{display:'flex', justifyContent:'space-between', padding:'10px 16px', background:'#1f2937', borderRadius:'8px', alignItems:'center'}}>
                    <span style={{color:'#cbd5e1', fontSize:'14px', fontWeight:'500'}}>Liquid Cash Balance</span>
                    <span style={{fontWeight:'700', color:'#4ade80', fontSize:'15px'}}>${balance.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                  </div>

                  <div style={{display:'flex', justifyContent:'space-between', padding:'10px 16px', background:'#1f2937', borderRadius:'8px', alignItems:'center'}}>
                    <span style={{color:'#cbd5e1', fontSize:'14px', fontWeight:'500'}}>Vehicle Fleet Value (NAV)</span>
                    <span style={{fontWeight:'700', color:'#38bdf8', fontSize:'15px'}}>${stats.vehicleNav.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                  </div>

                  <div style={{display:'flex', justifyContent:'space-between', padding:'10px 16px', background:'#1f2937', borderRadius:'8px', alignItems:'center'}}>
                    <span style={{color:'#cbd5e1', fontSize:'14px', fontWeight:'500'}}>Land Registry Value (LNAV)</span>
                    <span style={{fontWeight:'700', color:'#38bdf8', fontSize:'15px'}}>${stats.landNav.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                  </div>

                  <div style={{display:'flex', justifyContent:'space-between', padding:'10px 16px', background:'#1f2937', borderRadius:'8px', alignItems:'center'}}>
                    <span style={{color:'#cbd5e1', fontSize:'14px', fontWeight:'500'}}>Credit Score Rating</span>
                    <span style={{fontWeight:'700', color:'#fbbf24', fontSize:'15px'}}>{creditScore} PTS</span>
                  </div>

                  <div style={{marginTop:'10px', padding:'18px', background:'rgba(74, 222, 128, 0.1)', border:'1px solid rgba(74, 222, 128, 0.3)', borderRadius:'8px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <span style={{fontWeight:'700', color:'#86efac', fontSize:'15px'}}>Total Gross Assets (GAV)</span>
                    <span style={{fontWeight:'800', color:'#4ade80', fontSize:'18px'}}>${totalAssets.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                  </div>
                </div>
              </div>

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