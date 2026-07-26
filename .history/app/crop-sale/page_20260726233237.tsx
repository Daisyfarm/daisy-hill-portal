"use client";
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Tractor, ArrowLeft, Send } from 'lucide-react';

const sb = createClient('https://dlwhztcqntalrhfrefsk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsd2h6dGNxbnRhbHRoZnJlZnNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NzM2ODgsImV4cCI6MjA4OTQ0OTY4OH0.z_TOBv8Ky9Ksx3hTu19ScXHGcO86-GmwjdYFbdOt8ZY');
const HK = "https://discord.com/api/webhooks/1484184649847804016/o_bj5hINtTTZEux2RBegwBEqLUlNYIMS7Azomm4xadN7S6g353sEJhaaIiExvh0Ct4Za";

export default function AddCropSalePage() {
  const [form, setForm] = useState({
    server: 'Bjornholm - 19',
    crop: '',
    sellType: 'Direct Sell',
    quantity: '',
    field: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!form.crop || !form.quantity) return alert("Please fill out all required fields.");
    
    setSubmitting(true);
    try {
      await sb.from('crop_sales').insert([{
        server: form.server,
        crop: form.crop,
        sell_type: form.sellType,
        quantity: parseFloat(form.quantity),
        field: form.field || 'N/A',
        created_at: new Date()
      }]);

      await fetch(HK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `🌾 **NEW CROP SALE LOGGED**\nServer: **${form.server}**\nCrop: **${form.crop}**\nQuantity: **${Number(form.quantity).toLocaleString()} L/Bales**\nMethod: **${form.sellType}**${form.field ? `\nField: **${form.field}**` : ''}`
        })
      }).catch(() => {});

      alert("Crop sale successfully recorded!");
      window.location.href = '/dashboard';
    } catch (err) {
      console.error(err);
      alert("Error processing sale submission.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ background:'#0b0f17', minHeight:'100vh', color:'#fff', fontFamily:'Arial, sans-serif', display:'flex', flexDirection:'column' }}>
      
      {/* Top Header */}
      <div style={{ background:'#111622', padding:'16px 30px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'2px solid #22c55e' }}>
        <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
          <Tractor size={20} color="#22c55e" />
          <span style={{color:'#22c55e', fontWeight:'900', fontSize:'16px', fontStyle:'italic', letterSpacing:'0.5px'}}>DAISY HILL FARM NETWORK</span>
        </div>
        <span onClick={()=>window.location.href='/dashboard'} style={{color:'#94a3b8', fontSize:'12px', fontWeight:'bold', cursor:'pointer', display:'flex', alignItems:'center', gap:'6px'}}>
          <ArrowLeft size={14}/> BACK TO MARKET INDEX
        </span>
      </div>

      {/* Main Container */}
      <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 20px', background:'radial-gradient(circle at center, #151c2c 0%, #0b0f17 100%)' }}>
        <div style={{ background:'#131826', padding:'40px', borderRadius:'10px', width:'100%', maxWidth:'650px', border:'1px solid #1e293b', boxShadow:'0 10px 25px rgba(0,0,0,0.5)' }}>
          
          <div style={{marginBottom:'30px', borderBottom:'1px solid #1e293b', paddingBottom:'15px'}}>
            <h1 style={{fontSize:'22px', fontWeight:'900', textTransform:'uppercase', margin:'0 0 5px 0', letterSpacing:'1px', color:'#f8fafc'}}>Add Crop Sale</h1>
            <p style={{fontSize:'12px', color:'#94a3b8', margin:0}}>Record your agricultural yield harvest and send telemetry to the community logs.</p>
          </div>

          <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'20px'}}>
            
            <div>
              <label style={{fontSize:'11px', fontWeight:'bold', color:'#94a3b8', display:'block', marginBottom:'8px', letterSpacing:'0.5px'}}>SERVER DESTINATION</label>
              <select 
                style={{width:'100%', padding:'12px 15px', background:'#0b0f17', color:'#fff', border:'1px solid #2a3447', borderRadius:'6px', fontSize:'14px', outline:'none'}}
                value={form.server}
                onChange={e=>setForm({...form, server: e.target.value})}
              >
                <option value="Bjornholm - 19">Bjornholm - 19</option>
                <option value="Hagenstedt - 04">Hagenstedt - 04</option>
                <option value="Daisy Hill - 01">Daisy Hill - 01</option>
              </select>
            </div>

            <div>
              <label style={{fontSize:'11px', fontWeight:'bold', color:'#94a3b8', display:'block', marginBottom:'8px', letterSpacing:'0.5px'}}>ITEM SHIPPING / CROP TYPE</label>
              <select 
                required
                style={{width:'100%', padding:'12px 15px', background:'#0b0f17', color:'#fff', border:'1px solid #2a3447', borderRadius:'6px', fontSize:'14px', outline:'none'}}
                value={form.crop}
                onChange={e=>setForm({...form, crop: e.target.value})}
              >
                <option value="">SELECT CROP TYPE</option>
                <option value="Wheat">Wheat</option>
                <option value="Barley">Barley</option>
                <option value="Canola">Canola</option>
                <option value="Corn">Corn</option>
                <option value="Sugar Beet">Sugar Beet</option>
                <option value="Potatoes">Potatoes</option>
              </select>
            </div>

            <div>
              <label style={{fontSize:'11px', fontWeight:'bold', color:'#94a3b8', display:'block', marginBottom:'8px', letterSpacing:'0.5px'}}>TRANSACTION CHANNEL (WAREHOUSE DISABLED)</label>
              <select 
                style={{width:'100%', padding:'12px 15px', background:'#0b0f17', color:'#fff', border:'1px solid #2a3447', borderRadius:'6px', fontSize:'14px', outline:'none'}}
                value={form.sellType}
                onChange={e=>setForm({...form, sellType: e.target.value})}
              >
                <option value="Direct Sell">Direct Sell</option>
              </select>
            </div>

            <div style={{display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:'15px'}}>
              <div>
                <label style={{fontSize:'11px', fontWeight:'bold', color:'#94a3b8', display:'block', marginBottom:'8px', letterSpacing:'0.5px'}}>QUANTITY (LITERS OR BALES)</label>
                <input 
                  type="number" 
                  placeholder="e.g. 1000" 
                  required
                  style={{width:'100%', padding:'12px 15px', background:'#0b0f17', color:'#fff', border:'1px solid #2a3447', borderRadius:'6px', fontSize:'14px', boxSizing:'border-box', outline:'none'}}
                  value={form.quantity}
                  onChange={e=>setForm({...form, quantity: e.target.value})}
                />
              </div>

              <div>
                <label style={{fontSize:'11px', fontWeight:'bold', color:'#94a3b8', display:'block', marginBottom:'8px', letterSpacing:'0.5px'}}>ORIGIN FIELD</label>
                <input 
                  type="text" 
                  placeholder="e.g. Field 14" 
                  style={{width:'100%', padding:'12px 15px', background:'#0b0f17', color:'#fff', border:'1px solid #2a3447', borderRadius:'6px', fontSize:'14px', boxSizing:'border-box', outline:'none'}}
                  value={form.field}
                  onChange={e=>setForm({...form, field: e.target.value})}
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={submitting}
              style={{marginTop:'15px', padding:'15px', background:'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', color:'#000', border:'none', fontWeight:'900', fontSize:'14px', cursor:'pointer', borderRadius:'6px', textTransform:'uppercase', letterSpacing:'1px', display:'flex', alignItems:'center', justifyContent:'center', gap:'8px', boxShadow:'0 4px 12px rgba(245, 158, 11, 0.3)'}}
            >
              <Send size={16} />
              {submitting ? 'PROCESSING LOG...' : 'HEAD TO CONFIRMATION PAGE'}
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}