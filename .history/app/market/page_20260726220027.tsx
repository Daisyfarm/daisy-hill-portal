"use client";
import { useState } from 'react';
import { TrendingUp, ArrowLeft, DollarSign } from 'lucide-react';

export default function MarketPage() {
  const [crops] = useState([
    { name: 'Wheat', price: 1350, trend: '+4.2%', bestSell: 'Central Grain Mill' },
    { name: 'Barley', price: 1220, trend: '-1.1%', bestSell: 'Daisy Hill Brewery' },
    { name: 'Canola', price: 2100, trend: '+8.5%', bestSell: 'Oil Plant South' },
    { name: 'Corn', price: 1450, trend: '+2.0%', bestSell: 'Animal Feed Co.' },
    { name: 'Sugar Beet', price: 420, trend: '0.0%', bestSell: 'Sugar Factory' }
  ]);

  return (
    <div style={{ background:'#0b0f17', minHeight:'100vh', color:'#fff', fontFamily:'Arial, sans-serif', display:'flex', flexDirection:'column' }}>
      
      {/* Top Header */}
      <div style={{ background:'#111622', padding:'16px 30px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'2px solid #22c55e' }}>
        <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
          <TrendingUp size={20} color="#22c55e" />
          <span style={{color:'#22c55e', fontWeight:'900', fontSize:'16px', fontStyle:'italic', letterSpacing:'0.5px'}}>DAISY HILL COMMODITY MARKET</span>
        </div>
        <span onClick={()=>window.location.href='/dashboard'} style={{color:'#94a3b8', fontSize:'12px', fontWeight:'bold', cursor:'pointer', display:'flex', alignItems:'center', gap:'6px'}}>
          <ArrowLeft size={14}/> BACK TO DASHBOARD
        </span>
      </div>

      {/* Content Area */}
      <div style={{ flex:1, padding:'40px', maxWidth:'1200px', margin:'0 auto', width:'100%', boxSizing:'border-box' }}>
        <div style={{marginBottom:'30px', borderBottom:'1px solid #1e293b', paddingBottom:'15px'}}>
          <h1 style={{fontSize:'26px', fontWeight:'900', textTransform:'uppercase', margin:'0 0 5px 0', letterSpacing:'1px', color:'#f8fafc'}}>Live Crop Prices</h1>
          <p style={{fontSize:'12px', color:'#94a3b8', margin:0}}>Track live market demands and find the most profitable selling station on your server.</p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px, 1fr))', gap:'20px' }}>
          {crops.map((c, i) => (
            <div key={i} style={{ background:'#131826', padding:'25px', borderRadius:'10px', border:'1px solid #1e293b', display:'flex', flexDirection:'column', gap:'15px' }}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <h3 style={{fontSize:'18px', fontWeight:'bold', margin:0, color:'#f8fafc'}}>{c.name}</h3>
                <span style={{fontSize:'11px', fontWeight:'bold', color: c.trend.startsWith('+') ? '#22c55e' : c.trend.startsWith('-') ? '#ef4444' : '#94a3b8', background:'rgba(255,255,255,0.05)', padding:'4px 8px', borderRadius:'4px'}}>
                  {c.trend}
                </span>
              </div>

              <div style={{background:'#0b0f17', padding:'12px 15px', borderRadius:'6px', display:'flex', justifyContent:'space-between', alignItems:'center', border:'1px solid #1e293b'}}>
                <span style={{fontSize:'11px', color:'#94a3b8', fontWeight:'bold'}}>PRICE PER 1,000L</span>
                <span style={{fontSize:'16px', fontWeight:'900', color:'#22c55e'}}>${c.price.toLocaleString()}</span>
              </div>

              <div style={{fontSize:'11px', color:'#94a3b8'}}>
                Best Sell Point: <strong style={{color:'#fff'}}>{c.bestSell}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}