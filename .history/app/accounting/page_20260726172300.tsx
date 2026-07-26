"use client";
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const sb = createClient(
  'https://yioyfxvabhzvkwuljcki.supabase.co',
  'sb_publishable_wvc-fOTg4S73QnDR3PEK0g_fDO6x4NG'
);

export default function Accounting() {
  const [u, setU] = useState<any>({ balance: 0, credit_score: 600, username: 'User' });
  const [stats, setStats] = useState({ landNav: 0, vehicleNav: 0, totalDebt: 0, fines: 0 });
  const [w, setW] = useState("");
  const [ld, setLd] = useState(true);

  const load = async () => {
    try {
      const { data: profiles } = await sb.from('profiles').select('*').limit(1);
      if (profiles && profiles.length > 0) {
        setU(profiles[0]);
      }

      const userId = profiles?.[0]?.id;
      if (userId) {
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

  if (ld) return <div style={{background:'#1a1a1a',color:'#fff',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>Generating Audit Report...</div>;

  const balance = u.balance || 0;
  const creditScore = u.credit_score || 600;
  const displayName = u.username || u.full_name || u.name || 'Operator';
  const sideBtn = { width:'100%', padding:'12px 15px', background:'transparent', color:'#aaa', border:'none', marginBottom:'8px', textAlign:'left' as const, cursor:'pointer', fontWeight:'bold', fontSize:'12px', borderRadius:'4px', display:'flex', alignItems:'center', gap:'10px' };

  return (
    <div style={{ background:'#111', minHeight:'100vh', color:'#fff', fontFamily:'Arial, sans-serif', display:'flex', flexDirection:'column' }}>
      <div style={{ background:'#222', padding:'12px 25px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'2px solid #4a7ab5' }}>
        <div style={{ display:'flex', gap:'30px', alignItems:'center' }}>
          <span onClick={()=>window.location.href='/dashboard'} style={{color:'#22c55e', fontWeight:'900', fontSize:'20px', fontStyle:'italic', cursor:'pointer'}}>IRON DAISY AGRI</span>
          <span style={{color:'#fff', fontSize:'11px', textTransform:'uppercase'}}>Montana Weather: {w}</span>
        </div>
        <div style={{display:'flex', gap:'15px', alignItems:'center'}}>
          <span style={{fontSize:'12px', color:'#ddd', fontWeight:'bold'}}>Welcome, {displayName}</span>
          <button onClick={()=>window.location.href='/admin'} style={{background:'#dc2626', border:'none', color:'#fff', padding:'6px 15px', fontSize:'11px', fontWeight:'bold', cursor:'pointer', borderRadius:'3px'}}>STAFF PANEL</button>
        </div>
      </div>

      <div style={{ display:'flex', flex:1 }}>
        <div style={{ width:'240px', background:'#222', padding:'20px', borderRight:'1px solid #000' }}>
          <button style={sideBtn} onClick={()=>window.location.href='/dashboard'}>Dashboard</button>
          <button style={sideBtn} onClick={()=>window.location.href='/contracts'}>Field Work</button>
          <button style={sideBtn} onClick={()=>window.location.href='/land'}>Field Management</button>
          <button style={{...sideBtn, background:'#333', color:'#fff'}}>Accounting</button>
          <button style={sideBtn} onClick={()=>window.location.href='/'}>Logout</button>
        </div>

        <div style={{ flex:1, background:'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600")', backgroundSize:'cover', position:'relative', overflowY:'auto' }}>
          <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.7)' }}></div>
          
          <div style={{ position:'relative', zIndex:1, padding:'40px', maxWidth:'1100px', margin:'0 auto' }}>
            <div style={{ background:'rgba(35,35,35,0.9)', padding:'40px', borderTop:'1px solid #fff' }}>
                <h1 style={{fontSize:'42px', margin:0, textTransform:'uppercase'}}>Accounting</h1>
                <p style={{fontSize:'12px', color:'#ccc', margin:'15px 0 30px', maxWidth:'900px'}}>
                    THIS IS YOUR ACCOUNTING AREA. HERE YOU CAN SEE AN OVERVIEW OF YOUR ENTIRE FINANCIAL SITUATION.
                </p>

                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'60px' }}>
                    <div>
                        <h2 style={{fontSize:'28px', borderBottom:'1px solid #444', paddingBottom:'10px', marginBottom:'20px'}}>Web Liabilities</h2>
                        <div style={{fontSize:'18px', display:'flex', flexDirection:'column', gap:'15px'}}>
                            <div>Loans: ${stats.totalDebt.toLocaleString()}</div>
                            <div>Fines: ${stats.fines.toLocaleString()}</div>
                            <div style={{marginTop:'30px'}}>
                                <p style={{margin:0}}>Total Liabilities: ${stats.totalDebt.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 style={{fontSize:'28px', borderBottom:'1px solid #444', paddingBottom:'10px', marginBottom:'20px'}}>Game Assets</h2>
                        <div style={{fontSize:'18px', display:'flex', flexDirection:'column', gap:'10px'}}>
                            <p style={{margin:0}}>Cash: ${balance.toLocaleString()}</p>
                            <p style={{margin:'10px 0 0 0'}}>Vehicle NAV: ${stats.vehicleNav.toLocaleString()}</p>
                            <p style={{margin:0, color:'#4a7ab5'}}>Land NAV (LNAV): ${stats.landNav.toLocaleString()}</p>
                            <div style={{marginTop:'30px'}}>
                                <p style={{margin:0}}>IG NAV: ${(balance + stats.landNav + stats.vehicleNav - stats.totalDebt).toLocaleString()}</p>
                                <p style={{margin:0}}>Credit Score: {creditScore}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}