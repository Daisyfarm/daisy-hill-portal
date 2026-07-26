"use client";
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Globe, Flag, Shield, Sword, AlertTriangle } from 'lucide-react';

const sb = createClient('https://dlwhztcqntalrhfrefsk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsd2h6dGNxbnRhbHJoZnJlZnNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NzM2ODgsImV4cCI6MjA4OTQ0OTY4OH0.z_TOBv8Ky9Ksx3hTu19ScXHGcO86-GmwjdYFbdOt8ZY');
const HK = "https://discord.com/api/webhooks/1484184649847804016/o_bj5hINtTTZEux2RBegwBEqLUlNYIMS7Azomm4xadN7S6g353sEJhaaIiExvh0Ct4Za";

export default function ConquestPage() {
  const [u, setU] = useState<any>({ username: 'Operator', balance: 25000 });
  const [territories, setTerritories] = useState<any[]>([]);
  const [ld, setLd] = useState(true);

  const load = async () => {
    try {
      const { data: { session } } = await sb.auth.getSession();
      const user = session?.user;
      
      if (user) {
        const { data: profile } = await sb.from('profiles').select('*').eq('id', user.id).single();
        if (profile) setU(profile);
      }

      // Try fetching territories if table exists, otherwise use mock regional data
      const { data: terr, error } = await sb.from('territories').select('*');
      if (error || !terr || terr.length === 0) {
        setTerritories([
          { id: 1, name: 'North Valley Sector', status: 'Unclaimed', control: 'Neutral', defense_cost: 10000 },
          { id: 2, name: 'Daisy Hill Basin', status: 'Secured', control: 'Daisy Hill Community Farm', defense_cost: 15000 },
          { id: 3, name: 'Eastern Plateau', status: 'Contested', control: 'Independent', defense_cost: 20000 },
        ]);
      } else {
        setTerritories(terr);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLd(false);
    }
  };

  useEffect(() => { load(); }, []);

  if (ld) return <div style={{background:'#1a1a1a',color:'#fff',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Arial'}}>Accessing Regional Conquest Feed...</div>;

  const sideBtn = { width:'100%', padding:'12px 15px', background:'transparent', color:'#aaa', border:'none', marginBottom:'8px', textAlign:'left' as const, cursor:'pointer', fontWeight:'bold', fontSize:'12px', borderRadius:'4px', display:'flex', alignItems:'center', gap:'10px' };

  return (
    <div style={{ background:'#111', minHeight:'100vh', color:'#fff', fontFamily:'Arial, sans-serif', display:'flex', flexDirection:'column' }}>
      <div style={{ background:'#222', padding:'12px 25px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'2px solid #4a7ab5' }}>
        <span onClick={()=>window.location.href='/dashboard'} style={{color:'#22c55e', fontWeight:'900', fontSize:'20px', fontStyle:'italic', cursor:'pointer'}}>DAISY HILL COMMUNITY FARM</span>
        <span style={{color:'#fff', fontSize:'11px'}}>PERSONAL BALANCE: ${u?.balance?.toLocaleString() || '0'}</span>
      </div>

      <div style={{ display:'flex', flex:1 }}>
        <div style={{ width:'240px', background:'#222', padding:'20px', borderRight:'1px solid #000' }}>
          <button style={sideBtn} onClick={()=>window.location.href='/dashboard'}>Dashboard</button>
          <button style={sideBtn} onClick={()=>window.location.href='/accounting'}>Accounting</button>
          <button style={sideBtn} onClick={()=>window.location.href='/company'}>Corporate Suite</button>
          <button style={{...sideBtn, background:'#333', color:'#fff'}} onClick={()=>window.location.href='/conquest'}><Globe size={16}/> Regional Conquest</button>
          <button style={sideBtn} onClick={()=>sb.auth.signOut().then(()=>window.location.href='/')}>Logout</button>
        </div>

        <div style={{ flex:1, background:'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600")', backgroundSize:'cover', position:'relative', overflowY:'auto' }}>
          <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.7)' }}></div>
          <div style={{ position:'relative', zIndex:1, padding:'40px', maxWidth:'1000px', margin:'0 auto' }}>
            
            <h1 style={{fontSize:'36px', textTransform:'uppercase', margin:0}}>Regional Conquest</h1>
            <p style={{fontSize:'12px', color:'#4a7ab5', fontWeight:'bold', margin:'10px 0 30px'}}>
              MONITOR TERRITORIAL CONTROL, EXPAND INFLUENCE, AND SECURE SECTORS ACROSS THE REGION.
            </p>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:'20px' }}>
              {territories.map(t => (
                <div key={t.id} style={{ background:'rgba(25,25,25,0.95)', padding:'20px', borderLeft:'5px solid #22c55e', borderRadius:'4px', display:'flex', flexDirection:'column', gap:'10px' }}>
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <h3 style={{margin:0, fontSize:'18px'}}>{t.name}</h3>
                    <span style={{fontSize:'10px', background:'#222', padding:'3px 8px', borderRadius:'3px', color:'#22c55e', fontWeight:'bold'}}>{t.status.toUpperCase()}</span>
                  </div>
                  <p style={{margin:0, fontSize:'13px', color:'#aaa'}}>Current Control: <strong style={{color:'#fff'}}>{t.control}</strong></p>
                  <div style={{borderTop:'1px solid #444', paddingTop:'10px', marginTop:'5px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <span style={{fontSize:'12px', color:'#aaa'}}>Defense Cost: ${t.defense_cost?.toLocaleString()}</span>
                    <button style={{padding:'8px 15px', background:'#4a7ab5', color:'#fff', border:'none', fontWeight:'bold', cursor:'pointer', borderRadius:'4px', fontSize:'11px'}}>
                      SECURE SECTOR
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}