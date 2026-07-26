'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { TrendingUp, TrendingDown, Activity, DollarSign } from 'lucide-react';

const sb = createClient('https://dlwhztcqntalrhfrefsk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsd2h6dGNxbnRhbHJoZnJlZnNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NzM2ODgsImV4cCI6MjA4OTQ0OTY4OH0.z_TOBv8Ky9Ksx3hTu19ScXHGcO86-GmwjdYFbdOt8ZY');
const HK = "https://discord.com/api/webhooks/1484184649847804016/o_bj5hINtTTZEux2RBegwBEqLUlNYIMS7Azomm4xadN7S6g353sEJhaaIiExvh0Ct4Za";

export default function MarketPage() {
  const [u, setU] = useState<any>(null);
  const [commodities, setCommodities] = useState<any[]>([]);
  const [ld, setLd] = useState(true);

  const load = async () => {
    const { data: { user } } = await sb.auth.getUser();
    if (user) {
      const { data: profile } = await sb.from('profiles').select('*').eq('id', user.id).single();
      setU(profile);
    }

    const { data } = await sb.from('commodities').select('*').order('name', { ascending: true });
    if (data && data.length > 0) {
      setCommodities(data);
    } else {
      // Default fallback commodities if database table is empty
      setCommodities([
        { id: 1, name: 'Wheat (Grade A)', price: 1842, change: '+4.2%', status: 'Bullish' },
        { id: 2, name: 'Yellow Corn', price: 930, change: '+1.5%', status: 'Stable' },
        { id: 3, name: 'Soybeans', price: 2150, change: '-0.8%', status: 'Correction' },
        { id: 4, name: 'Barley', price: 760, change: '+2.9%', status: 'Active' },
      ]);
    }
    setLd(false);
  };

  useEffect(() => { load(); }, []);

  const tradeCommodity = async (item: any) => {
    if (!u) {
      alert("Please log in to execute market transactions.");
      return;
    }

    const qtyStr = prompt(`Enter tons of ${item.name} to purchase at $${item.price.toLocaleString()}/T:`, "10");
    if (!qtyStr) return;
    const qty = parseFloat(qtyStr);
    if (isNaN(qty) || qty <= 0) return;

    const totalCost = qty * item.price;
    if ((u.balance || 0) < totalCost) {
      alert("Insufficient funds for this trade quantity.");
      return;
    }

    const newBalance = (u.balance || 0) - totalCost;
    const { error } = await sb.from('profiles').update({ balance: newBalance }).eq('id', u.id);

    if (error) {
      alert("Transaction Error: " + error.message);
      return;
    }

    await fetch(HK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `📈 **MARKET TRADE EXECUTED**\n**Operator:** ${u.username}\n**Commodity:** ${qty} Tons of ${item.name}\n**Total Cost:** $${totalCost.toLocaleString()}`
      })
    });

    alert(`Successfully purchased ${qty} Tons of ${item.name} for $${totalCost.toLocaleString()}!`);
    load();
  };

  if (ld) return <div style={{background:'#05070a',color:'#fff',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>Accessing Market Feed...</div>;

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#05070a', 
      color: '#ffffff', 
      fontFamily: 'sans-serif',
      backgroundImage: 'linear-gradient(rgba(5, 7, 10, 0.55), rgba(5, 7, 10, 0.65)), url("/hero-farm.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Top Header Nav */}
      <header style={{ backgroundColor: 'rgba(11, 14, 20, 0.65)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', padding: '16px 24px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 900 }}>FARM NETWORK</Link>
            <span style={{ color: '#71717a' }}>|</span>
            <span style={{ color: '#34d399' }}>Enterprise Command System v2.4</span>
          </div>
          <div style={{ display: 'flex', gap: '20px', fontSize: '11px', alignItems: 'center' }}>
            <Link href="/market" style={{ color: '#34d399', textDecoration: 'none', fontWeight: 900 }}>Market Index</Link>
            <Link href="/contracts" style={{ color: '#d4d4d8', textDecoration: 'none' }}>Contracts</Link>
            <Link href="/fleet" style={{ color: '#d4d4d8', textDecoration: 'none' }}>Fleet</Link>
            <Link href="/dispatch" style={{ color: '#d4d4d8', textDecoration: 'none' }}>Dispatch</Link>
            <Link href="/event-center" style={{ color: '#d4d4d8', textDecoration: 'none' }}>Events</Link>
            <Link href="/field-work" style={{ color: '#d4d4d8', textDecoration: 'none' }}>Fields</Link>
            <Link href="/import-export" style={{ color: '#d4d4d8', textDecoration: 'none' }}>Imports</Link>
            {u && <span style={{ color: '#34d399', fontWeight: '900', marginLeft: '10px' }}>BAL: ${u.balance?.toLocaleString()}</span>}
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
          <div>
            <div style={{ color: '#34d399', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.1em', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
              Commodities & Pricing Feed • Status: Live
            </div>
            <h1 style={{ fontSize: '36px', fontWeight: 900, textTransform: 'uppercase', margin: 0, letterSpacing: '0.05em', textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>
              Market Index
            </h1>
          </div>
          <Link href="/" style={{ backgroundColor: 'rgba(11, 14, 20, 0.75)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '12px 20px', borderRadius: '8px', fontSize: '12px', color: '#ffffff', textDecoration: 'none', fontWeight: 900, textTransform: 'uppercase' }}>
            ← Back to Command Center
          </Link>
        </div>

        {/* Market Index Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {commodities.map((item, idx) => {
            const isBullish = String(item.change || '').startsWith('+');
            return (
              <div key={item.id || idx} style={{ backgroundColor: 'rgba(11, 14, 20, 0.75)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 900, color: '#a1a1aa', textTransform: 'uppercase', marginBottom: '8px' }}>{item.name || item.crop}</div>
                  <div style={{ fontSize: '32px', fontWeight: 900, color: '#ffffff', marginBottom: '8px' }}>${(item.price || 0).toLocaleString()} / T</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 900, marginBottom: '20px' }}>
                    <span style={{ color: isBullish ? '#34d399' : '#ef4444' }}>{item.change}</span>
                    <span style={{ color: '#60a5fa', textTransform: 'uppercase' }}>{item.status}</span>
                  </div>
                </div>
                <button 
                  onClick={() => tradeCommodity(item)}
                  style={{ width: '100%', backgroundColor: '#34d399', color: '#05070a', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', cursor: 'pointer', boxShadow: '0 4px 14px rgba(52, 211, 153, 0.3)' }}
                >
                  Trade / Buy Tonnage
                </button>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}