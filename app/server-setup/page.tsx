"use client";
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Server, ArrowLeft, Send } from 'lucide-react';

const sb = createClient('https://dlwhztcqntalrhfrefsk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsd2h6dGNxbnRhbHRoZnJlZnNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NzM2ODgsImV4cCI6MjA4OTQ0OTY4OH0.z_TOBv8Ky9Ksx3hTu19ScXHGcO86-GmwjdYFbdOt8ZY');
const HK = "https://discord.com/api/webhooks/1484184649847804016/o_bj5hINtTTZEux2RBegwBEqLUlNYIMS7Azomm4xadN7S6g353sEJhaaIiExvh0Ct4Za";

export default function ServerSetupPage() {
  const [form, setForm] = useState({
    serverName: 'Daisy Hill - G-Portal 01',
    region: 'Europe - Central',
    map: 'Daisy Hill Farm',
    slotCount: '16',
    ipAddress: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await sb.from('land_parcels').insert([{
        name: form.serverName,
        status: 'Online',
        owner: form.region
      }]).catch(() => {});

      await fetch(HK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `🚀 **G-PORTAL SERVER CONFIGURED**\nServer: **${form.serverName}**\nMap: **${form.map}**\nSlots: **${form.slotCount} Players**\nRegion: **${form.region}**`
        })
      })

      alert("Server telemetry profile successfully saved!");
      window.location.href = '/dashboard';
    } catch (err) {
      console.error(err);
      alert("Error saving server setup.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ background:'#0b0f17', minHeight:'100vh', color:'#fff', fontFamily:'Arial, sans-serif', display:'flex', flexDirection:'column' }}>
      
      {/* Top Header */}
      <div style={{ background:'#111622', padding:'16px 30px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'2px solid #22c55e' }}>
        <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
          <Server size={20} color="#22c55e" />
          <span style={{color:'#22c55e', fontWeight:'900', fontSize:'16px', fontStyle:'italic', letterSpacing:'0.5px'}}>G-PORTAL SERVER PROVISIONING</span>
        </div>
        <span onClick={()=>window.location.href='/dashboard'} style={{color:'#94a3b8', fontSize:'12px', fontWeight:'bold', cursor:'pointer', display:'flex', alignItems:'center', gap:'6px'}}>
          <ArrowLeft size={14}/> BACK TO DASHBOARD
        </span>
      </div>

      {/* Main Container */}
      <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 20px', background:'radial-gradient(circle at center, #151c2c 0%, #0b0f17 100%)' }}>
        <div style={{ background:'#131826', padding:'40px', borderRadius:'10px', width:'100%', maxWidth:'650px', border:'1px solid #1e293b', boxShadow:'0 10px 25px rgba(0,0,0,0.5)' }}>
          
          <div style={{marginBottom:'30px', borderBottom:'1px solid #1e293b', paddingBottom:'15px'}}>
            link your upcoming G-Portal dedicated server instance so the portal can sync player logs, contracts, and yields instantly upon launch.
          </div>

          <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'20px'}}>
            
            <div>
              <label style={{fontSize:'11px', fontWeight:'bold', color:'#94a3b8', display:'block', marginBottom:'8px', letterSpacing:'0.5px'}}>SERVER IDENTIFIER NAME</label>
              <input 
                type="text" 
                required
                style={{width:'100%', padding:'12px 15px', background:'#0b0f17', color:'#fff', border:'1px solid #2a3447', borderRadius:'6px', fontSize:'14px', boxSizing:'border-box', outline:'none'}}
                value={form.serverName}
                onChange={e=>setForm({...form, serverName: e.target.value})}
              />
            </div>

            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'15px'}}>
              <div>
                <label style={{fontSize:'11px', fontWeight:'bold', color:'#94a3b8', display:'block', marginBottom:'8px', letterSpacing:'0.5px'}}>ACTIVE MAP</label>
                <select 
                  style={{width:'100%', padding:'12px 15px', background:'#0b0f17', color:'#fff', border:'1px solid #2a3447', borderRadius:'6px', fontSize:'14px', outline:'none'}}
                  value={form.map}
                  onChange={e=>setForm({...form, map: e.target.value})}
                >
                  <option value="Daisy Hill Farm">Daisy Hill Farm</option>
                  <option value="Bjornholm">Bjornholm</option>
                  <option value="Hagenstedt">Hagenstedt</option>
                </select>
              </div>

              <div>
                <label style={{fontSize:'11px', fontWeight:'bold', color:'#94a3b8', display:'block', marginBottom:'8px', letterSpacing:'0.5px'}}>MAX PLAYER SLOTS</label>
                <select 
                  style={{width:'100%', padding:'12px 15px', background:'#0b0f17', color:'#fff', border:'1px solid #2a3447', borderRadius:'6px', fontSize:'14px', outline:'none'}}
                  value={form.slotCount}
                  onChange={e=>setForm({...form, slotCount: e.target.value})}
                >
                  <option value="16">16 Slots</option>infected
                  <option value="8">8 Slots</option>
                  <option value="20">20 Slots</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{fontSize:'11px', fontWeight:'bold', color:'#94a3b8', display:'block', marginBottom:'8px', letterSpacing:'0.5px'}}>HOSTING REGION</label>
              <input 
                type="text" 
                placeholder="e.g. London / Frankfurt" 
                style={{width:'100%', padding:'12px 15px', background:'#0b0f17', color:'#fff', border:'1px solid #2a3447', borderRadius:'6px', fontSize:'14px', boxSizing:'border-box', outline:'none'}}
                value={form.region}
                onChange={e=>setForm({...form, region: e.target.value})}
              />
            </div>

            <div>
              <label style={{fontSize:'11px', fontWeight:'bold', color:'#94a3b8', display:'block', marginBottom:'8px', letterSpacing:'0.5px'}}>G-PORTAL IP & PORT (OPTIONAL)</label>
              <input 
                type="text" 
                placeholder="e.g. 194.163.180.44:10820" 
                style={{width:'100%', padding:'12px 15px', background:'#0b0f17', color:'#fff', border:'1px solid #2a3447', borderRadius:'6px', fontSize:'14px', boxSizing:'border-box', outline:'none'}}
                value={form.ipAddress}
                onChange={e=>setForm({...form, ipAddress: e.target.value})}
              />
            </div>

            <button 
              type="submit" 
              disabled={submitting}
              style={{marginTop:'15px', padding:'15px', background:'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)', color:'#000', border:'none', fontWeight:'900', fontSize:'14px', cursor:'pointer', borderRadius:'6px', textTransform:'uppercase', letterSpacing:'1px', display:'flex', alignItems:'center', justifyContent:'center', gap:'8px', boxShadow:'0 4px 12px rgba(34, 197, 94, 0.3)'}}
            >
              <Send size={16} />
              {submitting ? 'SAVING CONFIG...' : 'INITIALIZE SERVER LINK'}
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}
