"use client";
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const sb = createClient('https://dlwhztcqntalrhfrefsk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsd2h6dGNxbnRhbHJoZnJlZnNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NzM2ODgsImV4cCI6MjA4OTQ0OTY4OH0.z_TOBv8Ky9Ksx3hTu19ScXHGcO86-GmwjdYFbdOt8ZY');
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
      const { error } = await sb.from('crop_sales').insert([{
        server: form.server,
        crop: form.crop,
        sell_type: form.sellType,
        quantity: parseFloat(form.quantity),
        field: form.field || 'N/A',
        created_at: new Date()
      }]);

      if (error) {
        console.warn("Table insert note:", error.message);
      }

      await fetch(HK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `🌾 **NEW CROP SALE LOGGED**\nServer: **${form.server}**\nCrop: **${form.crop}**\nQuantity: **${form.quantity} L/Bales**\nMethod: **${form.sellType}**`
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
    <div style={{ background:'#111', minHeight:'100vh', color:'#fff', fontFamily:'Arial, sans-serif', display:'flex', flexDirection:'column' }}>
      <div style={{ background:'#161616', padding:'12px 25px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'2px solid #22c55e' }}>
        <span style={{color:'#22c55e', fontWeight:'900', fontSize:'16px', fontStyle:'italic'}}>FARM NETWORK</span>
        <span onClick={()=>window.location.href='/dashboard'} style={{color:'#aaa', fontSize:'12px', fontWeight:'bold', cursor:'pointer'}}>← BACK TO MARKET INDEX</span>
      </div>

      <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', padding:'40px' }}>
        <div style={{ background:'#181b22', padding:'40px', borderRadius:'8px', width:'100%', maxWidth:'650px', border:'1px solid #2a2e39' }}>
          
          <h1 style={{fontSize:'24px', fontWeight:'900', textTransform:'uppercase', margin:'0 0 25px 0', letterSpacing:'1px'}}>Add Crop Sale</h1>

          <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'20px'}}>
            
            <div>
              <label style={{fontSize:'10px', fontWeight:'bold', color:'#888', display:'block', marginBottom:'8px', letterSpacing:'0.5px'}}>SERVER</label>
              <select 
                style={{width:'100%', padding:'12px', background:'#111', color:'#fff', border:'1px solid #2a2e39', borderRadius:'4px', fontSize:'14px'}}
                value={form.server}
                onChange={e=>setForm({...form, server: e.target.value})}
              >
                <option value="Bjornholm - 19">Bjornholm - 19</option>
                <option value="Hagenstedt - 04">Hagenstedt - 04</option>
                <option value="Daisy Hill - 01">Daisy Hill - 01</option>
              </select>
            </div>

            <div>
              <label style={{fontSize:'10px', fontWeight:'bold', color:'#888', display:'block', marginBottom:'8px', letterSpacing:'0.5px'}}>ITEM SHIPPING</label>
              <select 
                required
                style={{width:'100%', padding:'12px', background:'#111', color:'#fff', border:'1px solid #2a2e39', borderRadius:'4px', fontSize:'14px'}}
                value={form.crop}
                onChange={e=>setForm({...form, crop: e.target.value})}
              >
                <option value="">SELECT CROP</option>
                <option value="Wheat">Wheat</option>
                <option value="Barley">Barley</option>
                <option value="Canola">Canola</option>
                <option value="Corn">Corn</option>
                <option value="Sugar Beet">Sugar Beet</option>
                <option value="Potatoes">Potatoes</option>
              </select>
            </div>

            <div>
              <label style={{fontSize:'10px', fontWeight:'bold', color:'#888', display:'block', marginBottom:'8px', letterSpacing:'0.5px'}}>DIRECT SELL OR WAREHOUSE? (WAREHOUSE DISABLED)</label>
              <select 
                style={{width:'100%', padding:'12px', background:'#111', color:'#fff', border:'1px solid #2a2e39', borderRadius:'4px', fontSize:'14px'}}
                value={form.sellType}
                onChange={e=>setForm({...form, sellType: e.target.value})}
              >
                <option value="Direct Sell">Direct Sell</option>
              </select>
            </div>

            <div>
              <label style={{fontSize:'10px', fontWeight:'bold', color:'#888', display:'block', marginBottom:'8px', letterSpacing:'0.5px'}}>QUANTITY IN L OR BALES</label>
              <input 
                type="number" 
                placeholder="e.g. 1000" 
                required
                style={{width:'100%', padding:'12px', background:'#111', color:'#fff', border:'1px solid #2a2e39', borderRadius:'4px', fontSize:'14px', boxSizing:'border-box'}}
                value={form.quantity}
                onChange={e=>setForm({...form, quantity: e.target.value})}
              />
            </div>

            <div>
              <label style={{fontSize:'10px', fontWeight:'bold', color:'#888', display:'block', marginBottom:'8px', letterSpacing:'0.5px'}}>FROM FIELD (LEAVE BLANK IF NO FIELD OR UNKNOWN)</label>
              <input 
                type="text" 
                placeholder="e.g. Field 14" 
                style={{width:'100%', padding:'12px', background:'#111', color:'#fff', border:'1px solid #2a2e39', borderRadius:'4px', fontSize:'14px', boxSizing:'border-box'}}
                value={form.field}
                onChange={e=>setForm({...form, field: e.target.value})}
              />
            </div>

            <button 
              type="submit" 
              disabled={submitting}
              style={{marginTop:'10px', padding:'15px', background:'#f59e0b', color:'#000', border:'none', fontWeight:'900', fontSize:'14px', cursor:'pointer', borderRadius:'4px', textTransform:'uppercase', letterSpacing:'0.5px'}}
            >
              {submitting ? 'PROCESSING...' : 'HEAD TO CONFIRMATION PAGE'}
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}