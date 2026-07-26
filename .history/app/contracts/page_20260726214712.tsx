"use client";
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { FileText, ArrowLeft, CheckCircle, Clock } from 'lucide-react';

const sb = createClient('https://dlwhztcqntalrhfrefsk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsd2h6dGNxbnRhbHRoZnJlZnNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NzM2ODgsImV4cCI6MjA4OTQ0OTY4OH0.z_TOBv8Ky9Ksx3hTu19ScXHGcO86-GmwjdYFbdOt8ZY');
const HK = "https://discord.com/api/webhooks/1484184649847804016/o_bj5hINtTTZEux2RBegwBEqLUlNYIMS7Azomm4xadN7S6g353sEJhaaIiExvh0Ct4Za";

export default function ContractsPage() {
  const [contracts, setContracts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContracts() {
      try {
        const { data, error } = await sb.from('contracts').select('*');
        if (error || !data || data.length === 0) {
          setContracts([
            { id: 1, title: 'Field 14 Wheat Harvest', reward: 12500, status: 'Available', client: 'Daisy Hill Cooperative' },
            { id: 2, title: 'Corn Transport - North Silo', reward: 8400, status: 'In Progress', client: 'Bjornholm Grain Ltd' },
            { id: 3, title: 'Plowing Sector 03', reward: 15000, status: 'Available', client: 'Hagenstedt Agronomics' }
          ]);
        } else {
          setContracts(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchContracts();
  }, []);

  const acceptContract = async (c: any) => {
    try {
      await fetch(HK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `📋 **CONTRACT ACCEPTED**\nTitle: **${c.title || c.name || 'Contract #' + c.id}**\nReward: **$${(c.reward || c.price || 10000).toLocaleString()}**\nClient: **${c.client || 'Community Farm'}**`
        })
      }).catch(() => {});

      alert("Contract successfully accepted and logged to dispatch!");
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div style={{background:'#0b0f17', color:'#fff', height:'100vh', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Arial'}}>Loading Contracts Hub...</div>;

  return (
    <div style={{ background:'#0b0f17', minHeight:'100vh', color:'#fff', fontFamily:'Arial, sans-serif', display:'flex', flexDirection:'column' }}>
      
      {/* Top Header */}
      <div style={{ background:'#111622', padding:'16px 30px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'2px solid #22c55e' }}>
        <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
          <FileText size={20} color="#22c55e" />
          <span style={{color:'#22c55e', fontWeight:'900', fontSize:'16px', fontStyle:'italic', letterSpacing:'0.5px'}}>DAISY HILL CONTRACTS BOARD</span>
        </div>
        <span onClick={()=>window.location.href='/dashboard'} style={{color:'#94a3b8', fontSize:'12px', fontWeight:'bold', cursor:'pointer', display:'flex', alignItems:'center', gap:'6px'}}>
          <ArrowLeft size={14}/> BACK TO DASHBOARD
        </span>
      </div>

      {/* Content Area */}
      <div style={{ flex:1, padding:'40px', maxWidth:'1200px', margin:'0 auto', width:'100%', boxSizing:'border-box' }}>
        
        <div style={{marginBottom:'30px', borderBottom:'1px solid #1e293b', paddingBottom:'15px'}}>
          <h1 style={{fontSize:'26px', fontWeight:'900', textTransform:'uppercase', margin:'0 0 5px 0', letterSpacing:'1px', color:'#f8fafc'}}>Active Community Contracts</h1>
          <p style={{fontSize:'12px', color:'#94a3b8', margin:0}}>Accept available agricultural operations, harvesting jobs, and transport contracts to earn funds.</p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(340px, 1fr))', gap:'20px' }}>
          {contracts.map((c, i) => (
            <div key={c.id || i} style={{ background:'#131826', padding:'25px', borderRadius:'10px', border:'1px solid #1e293b', display:'flex', flexDirection:'column', gap:'15px', boxShadow:'0 4px 12px rgba(0,0,0,0.3)' }}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                <div>
                  <span style={{fontSize:'10px', fontWeight:'bold', color:'#22c55e', background:'rgba(34, 197, 94, 0.1)', padding:'4px 8px', borderRadius:'4px', letterSpacing:'0.5px'}}>
                    {c.client || 'Daisy Hill Farm'}
                  </span>
                  <h3 style={{fontSize:'18px', fontWeight:'bold', margin:'10px 0 0 0', color:'#f8fafc'}}>{c.title || c.name || `Contract #${c.id}`}</h3>
                </div>
                <span style={{fontSize:'11px', display:'flex', alignItems:'center', gap:'4px', color: c.status === 'In Progress' ? '#f59e0b' : '#22c55e', fontWeight:'bold'}}>
                  {c.status === 'In Progress' ? <Clock size={14}/> : <CheckCircle size={14}/>}
                  {c.status || 'Available'}
                </span>
              </div>

              <div style={{background:'#0b0f17', padding:'12px 15px', borderRadius:'6px', display:'flex', justifyContent:'space-between', alignItems:'center', border:'1px solid #1e293b'}}>
                <span style={{fontSize:'11px', color:'#94a3b8', fontWeight:'bold'}}>COMPLETION REWARD</span>
                <span style={{fontSize:'16px', fontWeight:'900', color:'#22c55e'}}>${(c.reward || c.price || 10000).toLocaleString()}</span>
              </div>

              <button 
                onClick={()=>acceptContract(c)}
                style={{padding:'12px', background:'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)', color:'#000', border:'none', fontWeight:'900', fontSize:'13px', cursor:'pointer', borderRadius:'6px', textTransform:'uppercase', letterSpacing:'0.5px', boxShadow:'0 4px 12px rgba(34, 197, 94, 0.2)'}}
              >
                Accept Contract
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}