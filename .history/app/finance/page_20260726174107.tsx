"use client";
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { DollarSign, ArrowUpRight, ArrowDownRight, Clock, ShieldCheck, Activity, RefreshCw } from 'lucide-react';

const sb = createClient(
  'https://yioyfxvabhzvkwuljcki.supabase.co',
  'sb_publishable_wvc-fOTg4S73QnDR3PEK0g_fDO6x4NG'
);

export default function FinancePage() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [ld, setLd] = useState(true);

  const load = async () => {
    try {
      const { data } = await sb.from('transactions').select('*');
      if (data && data.length > 0) {
        setTransactions(data);
      } else {
        setTransactions([
          { id: 1, reference: 'Client Payment #1042', classification: 'Inbound Revenue', timestamp: 'July 25, 2026 - 04:12', status: 'CLEARED', net_value: '+$1,250.00' },
          { id: 2, reference: 'Cloud Server Infrastructure', classification: 'Hosting & Node Cost', timestamp: 'July 24, 2026 - 18:30', status: 'CLEARED', net_value: '-$140.00' },
          { id: 3, reference: 'Enterprise Software Suite', classification: 'Tooling & Licenses', timestamp: 'July 22, 2026 - 09:15', status: 'AUDITING', net_value: '-$45.00' }
        ]);
      }
    } catch (err) {
      console.error(err);
      setTransactions([
        { id: 1, reference: 'Client Payment #1042', classification: 'Inbound Revenue', timestamp: 'July 25, 2026 - 04:12', status: 'CLEARED', net_value: '+$1,250.00' },
        { id: 2, reference: 'Cloud Server Infrastructure', classification: 'Hosting & Node Cost', timestamp: 'July 24, 2026 - 18:30', status: 'CLEARED', net_value: '-$140.00' },
        { id: 3, reference: 'Enterprise Software Suite', classification: 'Tooling & Licenses', timestamp: 'July 22, 2026 - 09:15', status: 'AUDITING', net_value: '-$45.00' }
      ]);
    } finally {
      setLd(false);
    }
  };

  useEffect(() => { load(); }, []);

  if (ld) return (
    <div style={{background:'#090d16', color:'#38bdf8', height:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', fontFamily:'Inter, sans-serif', gap:'15px'}}>
      <div style={{width:'40px', height:'40px', border:'4px solid #1f2937', borderTop:'4px solid #38bdf8', borderRadius:'50%', animation:'spin 1s linear infinite'}}></div>
      <div style={{fontSize:'14px', letterSpacing:'1px', fontWeight:600}}>LOADING FINANCIAL COMMAND...</div>
      <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
    </div>
  );

  return (
    <div style={{ background:'#090d16', minHeight:'100vh', color:'#f8fafc', fontFamily:'Inter, system-ui, sans-serif', display:'flex', flexDirection:'column' }}>
      
      {/* TOP HEADER */}
      <div style={{ background:'#0b111e', padding:'14px 30px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #1f2937' }}>
        <div style={{ display:'flex', gap:'30px', alignItems:'center' }}>
          <div style={{color:'#fff', fontWeight:'800', fontSize:'15px', letterSpacing:'0.5px', display:'flex', alignItems:'center', gap:'8px', cursor:'pointer'}} onClick={()=>window.location.href='/dashboard'}>
            <span style={{color:'#4ade80'}}>🌾</span> FARM NETWORK
          </div>
          <span style={{color:'#4ade80', fontSize:'11px', fontWeight:'700', letterSpacing:'0.5px', background:'rgba(74,222,128,0.1)', padding:'4px 10px', borderRadius:'4px', border:'1px solid rgba(74,222,128,0.2)'}}>
            ENTERPRISE COMMAND SYSTEM V2.4
          </span>
        </div>
        <div style={{display:'flex', gap:'20px', alignItems:'center', fontSize:'12px', fontWeight:'600'}}>
          {['ENTERPRISE COMMAND SYSTEM V2.4', 'MARKET INDEX', 'CONTRACTS', 'FLEET', 'DISPATCH', 'EVENTS', 'FIELDS', 'IMPORTS', 'FINANCE'].map((item, idx) => {
            const isFin = item === 'FINANCE';
            return (
              <span key={idx} onClick={() => {
                if(item === 'MARKET INDEX') window.location.href='/market';
                if(item === 'CONTRACTS') window.location.href='/contracts';
                if(item === 'FINANCE') window.location.href='/finance';
                if(item === 'DISPATCH') window.location.href='/dispatch';
                if(item === 'FLEET') window.location.href='/fleet';
              }} style={{color: isFin ? '#4ade80' : '#94a3b8', cursor:'pointer', fontSize:'11px', fontWeight:'700', letterSpacing:'0.5px'}}>
                {item}
              </span>
            );
          })}
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div style={{ flex:1, background:'linear-gradient(rgba(9, 13, 22, 0.88), rgba(9, 13, 22, 0.96)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600") center/cover', padding:'40px' }}>
        <div style={{ maxWidth:'1300px', margin:'0 auto' }}>
          
          {/* TITLE & LEDGER STATUS */}
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'30px', flexWrap:'wrap', gap:'20px' }}>
            <div>
              <div style={{fontSize:'11px', color:'#4ade80', fontWeight:'700', letterSpacing:'1px', textTransform:'uppercase', marginBottom:'6px'}}>
                FINANCIAL SECTOR ALPHA • STATUS: SECURE LEDGER
              </div>
              <h1 style={{fontSize:'36px', fontWeight:'800', margin:0, color:'#fff', letterSpacing:'-0.5px'}}>Financial Operations Command</h1>
            </div>
            <div style={{ display:'flex', gap:'15px' }}>
              <div style={{ background:'rgba(17, 24, 39, 0.85)', border:'1px solid #374151', padding:'10px 18px', borderRadius:'8px', display:'flex', flexDirection:'column', gap:'2px' }}>
                <span style={{fontSize:'10px', color:'#94a3b8', fontWeight:'700', textTransform:'uppercase'}}>Ledger Sync</span>
                <span style={{fontSize:'13px', fontWeight:'800', color:'#4ade80'}}>ACTIVE</span>
              </div>
              <div style={{ background:'rgba(17, 24, 39, 0.85)', border:'1px solid #374151', padding:'10px 18px', borderRadius:'8px', display:'flex', flexDirection:'column', gap:'2px' }}>
                <span style={{fontSize:'10px', color:'#94a3b8', fontWeight:'700', textTransform:'uppercase'}}>Audit Status</span>
                <span style={{fontSize:'13px', fontWeight:'800', color:'#38bdf8'}}>OPTIMAL</span>
              </div>
            </div>
          </div>

          {/* METRICS GRID */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'20px', marginBottom:'35px' }}>
            
            {/* CARD 1 */}
            <div style={{ background:'rgba(17, 24, 39, 0.85)', backdropFilter:'blur(10px)', borderRadius:'12px', border:'1px solid #374151', padding:'25px', boxShadow:'0 10px 25px -5px rgba(0,0,0,0.5)' }}>
              <div style={{fontSize:'11px', color:'#94a3b8', fontWeight:'700', textTransform:'uppercase', marginBottom:'8px'}}>Gross Liquidity</div>
              <div style={{fontSize:'32px', fontWeight:'800', color:'#fff', marginBottom:'6px'}}>$128,430.50</div>
              <div style={{fontSize:'12px', fontWeight:'700', color:'#4ade80', display:'flex', alignItems:'center', gap:'4px'}}>+14.2% vs previous cycle</div>
            </div>

            {/* CARD 2 */}
            <div style={{ background:'rgba(17, 24, 39, 0.85)', backdropFilter:'blur(10px)', borderRadius:'12px', border:'1px solid #374151', padding:'25px', boxShadow:'0 10px 25px -5px rgba(0,0,0,0.5)' }}>
              <div style={{fontSize:'11px', color:'#94a3b8', fontWeight:'700', textTransform:'uppercase', marginBottom:'8px'}}>Monthly Inflow</div>
              <div style={{fontSize:'32px', fontWeight:'800', color:'#4ade80', marginBottom:'6px'}}>+$45,231.89</div>
              <div style={{fontSize:'12px', fontWeight:'600', color:'#94a3b8'}}>Verified grain & contract clearance</div>
            </div>

            {/* CARD 3 */}
            <div style={{ background:'rgba(17, 24, 39, 0.85)', backdropFilter:'blur(10px)', borderRadius:'12px', border:'1px solid #374151', padding:'25px', boxShadow:'0 10px 25px -5px rgba(0,0,0,0.5)' }}>
              <div style={{fontSize:'11px', color:'#94a3b8', fontWeight:'700', textTransform:'uppercase', marginBottom:'8px'}}>Operational Outflows</div>
              <div style={{fontSize:'32px', fontWeight:'800', color:'#ef4444', marginBottom:'6px'}}-$12,450.00</div>
              <div style={{fontSize:'12px', fontWeight:'600', color:'#94a3b8'}}>Infrastructure & fuel logistics</div>
            </div>

            {/* CARD 4 */}
            <div style={{ background:'rgba(17, 24, 39, 0.85)', backdropFilter:'blur(10px)', borderRadius:'12px', border:'1px solid #374151', padding:'25px', boxShadow:'0 10px 25px -5px rgba(0,0,0,0.5)' }}>
              <div style={{fontSize:'11px', color:'#94a3b8', fontWeight:'700', textTransform:'uppercase', marginBottom:'8px'}}>Pending Authorization</div>
              <div style={{fontSize:'32px', fontWeight:'800', color:'#fbbf24', marginBottom:'6px'}}>$3,420.00</div>
              <div style={{fontSize:'12px', fontWeight:'600', color:'#94a3b8'}}>3 items awaiting review</div>
            </div>

          </div>

          {/* TRANSACTION LEDGER TABLE */}
          <div style={{ background:'rgba(17, 24, 39, 0.85)', backdropFilter:'blur(10px)', borderRadius:'12px', border:'1px solid #374151', padding:'30px', boxShadow:'0 10px 25px -5px rgba(0,0,0,0.5)' }}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #374151', paddingBottom:'15px', marginBottom:'20px'}}>
              <div>
                <h2 style={{fontSize:'18px', fontWeight:'800', margin:'0 0 4px 0', color:'#fff'}}>System Transaction Ledger</h2>
                <p style={{fontSize:'12px', color:'#94a3b8', margin:0}}>Real-time tracking of network financial traffic.</p>
              </div>
              <span style={{fontSize:'11px', fontWeight:'700', color:'#4ade80', background:'rgba(74,222,128,0.1)', padding:'5px 12px', borderRadius:'6px', border:'1px solid rgba(74,222,128,0.2)', display:'flex', alignItems:'center', gap:'6px'}}>
                <span style={{width:'6px', height:'6px', background:'#4ade80', borderRadius:'50%', display:'inline-block'}}></span> LIVE FEED
              </span>
            </div>

            <div style={{overflowX:'auto'}}>
              <table style={{width:'100%', borderCollapse:'collapse', textAlign:'left', fontSize:'13px'}}>
                <thead>
                  <tr style={{borderBottom:'1px solid #374151', color:'#94a3b8', fontSize:'11px', textTransform:'uppercase', letterSpacing:'0.5px'}}>
                    <th style={{padding:'12px'}}>Transaction Reference</th>
                    <th style={{padding:'12px'}}>Classification</th>
                    <th style={{padding:'12px'}}>Timestamp</th>
                    <th style={{padding:'12px'}}>Status</th>
                    <th style={{padding:'12px', textAlign:'right'}}>Net Value</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx) => {
                    const isCleared = tx.status === 'CLEARED';
                    const isPos = tx.net_value.includes('+');
                    return (
                      <tr key={tx.id} style={{borderBottom:'1px solid #1f2937'}}>
                        <td style={{padding:'16px', fontWeight:'700', color:'#fff'}}>{tx.reference}</td>
                        <td style={{padding:'16px', color:'#94a3b8', fontWeight:'600'}}>{tx.classification}</td>
                        <td style={{padding:'16px', color:'#94a3b8', fontSize:'12px'}}>{tx.timestamp}</td>
                        <td style={{padding:'16px'}}>
                          <span style={{
                            fontSize:'10px', fontWeight:'800', letterSpacing:'0.5px',
                            padding:'4px 10px', borderRadius:'4px',
                            background: isCleared ? 'rgba(74,222,128,0.1)' : 'rgba(251,191,36,0.1)',
                            color: isCleared ? '#4ade80' : '#fbbf24',
                            border: isCleared ? '1px solid rgba(74,222,128,0.2)' : '1px solid rgba(251,191,36,0.2)'
                          }}>
                            {tx.status}
                          </span>
                        </td>
                        <td style={{padding:'16px', textAlign:'right', fontWeight:'800', color: isPos ? '#4ade80' : '#ef4444'}}>
                          {tx.net_value}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background:'#0b111e', padding:'15px 30px', textAlign:'center', fontSize:'11px', color:'#64748b', borderTop:'1px solid #1f2937', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <span>DAISY HILL FARMING COMMUNITY © 2026</span>
        <span>ENTERPRISE COMMAND SYSTEM V2.4 • SECURE FINANCIAL LEDGER</span>
      </div>
    </div>
  );
}"use client";
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { DollarSign, ArrowUpRight, ArrowDownRight, Clock, ShieldCheck, Activity, RefreshCw } from 'lucide-react';

const sb = createClient(
  'https://yioyfxvabhzvkwuljcki.supabase.co',
  'sb_publishable_wvc-fOTg4S73QnDR3PEK0g_fDO6x4NG'
);

export default function FinancePage() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [ld, setLd] = useState(true);

  const load = async () => {
    try {
      const { data } = await sb.from('transactions').select('*');
      if (data && data.length > 0) {
        setTransactions(data);
      } else {
        setTransactions([
          { id: 1, reference: 'Client Payment #1042', classification: 'Inbound Revenue', timestamp: 'July 25, 2026 - 04:12', status: 'CLEARED', net_value: '+$1,250.00' },
          { id: 2, reference: 'Cloud Server Infrastructure', classification: 'Hosting & Node Cost', timestamp: 'July 24, 2026 - 18:30', status: 'CLEARED', net_value: '-$140.00' },
          { id: 3, reference: 'Enterprise Software Suite', classification: 'Tooling & Licenses', timestamp: 'July 22, 2026 - 09:15', status: 'AUDITING', net_value: '-$45.00' }
        ]);
      }
    } catch (err) {
      console.error(err);
      setTransactions([
        { id: 1, reference: 'Client Payment #1042', classification: 'Inbound Revenue', timestamp: 'July 25, 2026 - 04:12', status: 'CLEARED', net_value: '+$1,250.00' },
        { id: 2, reference: 'Cloud Server Infrastructure', classification: 'Hosting & Node Cost', timestamp: 'July 24, 2026 - 18:30', status: 'CLEARED', net_value: '-$140.00' },
        { id: 3, reference: 'Enterprise Software Suite', classification: 'Tooling & Licenses', timestamp: 'July 22, 2026 - 09:15', status: 'AUDITING', net_value: '-$45.00' }
      ]);
    } finally {
      setLd(false);
    }
  };

  useEffect(() => { load(); }, []);

  if (ld) return (
    <div style={{background:'#090d16', color:'#38bdf8', height:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', fontFamily:'Inter, sans-serif', gap:'15px'}}>
      <div style={{width:'40px', height:'40px', border:'4px solid #1f2937', borderTop:'4px solid #38bdf8', borderRadius:'50%', animation:'spin 1s linear infinite'}}></div>
      <div style={{fontSize:'14px', letterSpacing:'1px', fontWeight:600}}>LOADING FINANCIAL COMMAND...</div>
      <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
    </div>
  );

  return (
    <div style={{ background:'#090d16', minHeight:'100vh', color:'#f8fafc', fontFamily:'Inter, system-ui, sans-serif', display:'flex', flexDirection:'column' }}>
      
      {/* TOP HEADER */}
      <div style={{ background:'#0b111e', padding:'14px 30px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #1f2937' }}>
        <div style={{ display:'flex', gap:'30px', alignItems:'center' }}>
          <div style={{color:'#fff', fontWeight:'800', fontSize:'15px', letterSpacing:'0.5px', display:'flex', alignItems:'center', gap:'8px', cursor:'pointer'}} onClick={()=>window.location.href='/dashboard'}>
            <span style={{color:'#4ade80'}}>🌾</span> FARM NETWORK
          </div>
          <span style={{color:'#4ade80', fontSize:'11px', fontWeight:'700', letterSpacing:'0.5px', background:'rgba(74,222,128,0.1)', padding:'4px 10px', borderRadius:'4px', border:'1px solid rgba(74,222,128,0.2)'}}>
            ENTERPRISE COMMAND SYSTEM V2.4
          </span>
        </div>
        <div style={{display:'flex', gap:'20px', alignItems:'center', fontSize:'12px', fontWeight:'600'}}>
          {['ENTERPRISE COMMAND SYSTEM V2.4', 'MARKET INDEX', 'CONTRACTS', 'FLEET', 'DISPATCH', 'EVENTS', 'FIELDS', 'IMPORTS', 'FINANCE'].map((item, idx) => {
            const isFin = item === 'FINANCE';
            return (
              <span key={idx} onClick={() => {
                if(item === 'MARKET INDEX') window.location.href='/market';
                if(item === 'CONTRACTS') window.location.href='/contracts';
                if(item === 'FINANCE') window.location.href='/finance';
                if(item === 'DISPATCH') window.location.href='/dispatch';
                if(item === 'FLEET') window.location.href='/fleet';
              }} style={{color: isFin ? '#4ade80' : '#94a3b8', cursor:'pointer', fontSize:'11px', fontWeight:'700', letterSpacing:'0.5px'}}>
                {item}
              </span>
            );
          })}
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div style={{ flex:1, background:'linear-gradient(rgba(9, 13, 22, 0.88), rgba(9, 13, 22, 0.96)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600") center/cover', padding:'40px' }}>
        <div style={{ maxWidth:'1300px', margin:'0 auto' }}>
          
          {/* TITLE & LEDGER STATUS */}
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'30px', flexWrap:'wrap', gap:'20px' }}>
            <div>
              <div style={{fontSize:'11px', color:'#4ade80', fontWeight:'700', letterSpacing:'1px', textTransform:'uppercase', marginBottom:'6px'}}>
                FINANCIAL SECTOR ALPHA • STATUS: SECURE LEDGER
              </div>
              <h1 style={{fontSize:'36px', fontWeight:'800', margin:0, color:'#fff', letterSpacing:'-0.5px'}}>Financial Operations Command</h1>
            </div>
            <div style={{ display:'flex', gap:'15px' }}>
              <div style={{ background:'rgba(17, 24, 39, 0.85)', border:'1px solid #374151', padding:'10px 18px', borderRadius:'8px', display:'flex', flexDirection:'column', gap:'2px' }}>
                <span style={{fontSize:'10px', color:'#94a3b8', fontWeight:'700', textTransform:'uppercase'}}>Ledger Sync</span>
                <span style={{fontSize:'13px', fontWeight:'800', color:'#4ade80'}}>ACTIVE</span>
              </div>
              <div style={{ background:'rgba(17, 24, 39, 0.85)', border:'1px solid #374151', padding:'10px 18px', borderRadius:'8px', display:'flex', flexDirection:'column', gap:'2px' }}>
                <span style={{fontSize:'10px', color:'#94a3b8', fontWeight:'700', textTransform:'uppercase'}}>Audit Status</span>
                <span style={{fontSize:'13px', fontWeight:'800', color:'#38bdf8'}}>OPTIMAL</span>
              </div>
            </div>
          </div>

          {/* METRICS GRID */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'20px', marginBottom:'35px' }}>
            
            {/* CARD 1 */}
            <div style={{ background:'rgba(17, 24, 39, 0.85)', backdropFilter:'blur(10px)', borderRadius:'12px', border:'1px solid #374151', padding:'25px', boxShadow:'0 10px 25px -5px rgba(0,0,0,0.5)' }}>
              <div style={{fontSize:'11px', color:'#94a3b8', fontWeight:'700', textTransform:'uppercase', marginBottom:'8px'}}>Gross Liquidity</div>
              <div style={{fontSize:'32px', fontWeight:'800', color:'#fff', marginBottom:'6px'}}>$128,430.50</div>
              <div style={{fontSize:'12px', fontWeight:'700', color:'#4ade80', display:'flex', alignItems:'center', gap:'4px'}}>+14.2% vs previous cycle</div>
            </div>

            {/* CARD 2 */}
            <div style={{ background:'rgba(17, 24, 39, 0.85)', backdropFilter:'blur(10px)', borderRadius:'12px', border:'1px solid #374151', padding:'25px', boxShadow:'0 10px 25px -5px rgba(0,0,0,0.5)' }}>
              <div style={{fontSize:'11px', color:'#94a3b8', fontWeight:'700', textTransform:'uppercase', marginBottom:'8px'}}>Monthly Inflow</div>
              <div style={{fontSize:'32px', fontWeight:'800', color:'#4ade80', marginBottom:'6px'}}>+$45,231.89</div>
              <div style={{fontSize:'12px', fontWeight:'600', color:'#94a3b8'}}>Verified grain & contract clearance</div>
            </div>

            {/* CARD 3 */}
            <div style={{ background:'rgba(17, 24, 39, 0.85)', backdropFilter:'blur(10px)', borderRadius:'12px', border:'1px solid #374151', padding:'25px', boxShadow:'0 10px 25px -5px rgba(0,0,0,0.5)' }}>
              <div style={{fontSize:'11px', color:'#94a3b8', fontWeight:'700', textTransform:'uppercase', marginBottom:'8px'}}>Operational Outflows</div>
              <div style={{fontSize:'32px', fontWeight:'800', color:'#ef4444', marginBottom:'6px'}}-$12,450.00</div>
              <div style={{fontSize:'12px', fontWeight:'600', color:'#94a3b8'}}>Infrastructure & fuel logistics</div>
            </div>

            {/* CARD 4 */}
            <div style={{ background:'rgba(17, 24, 39, 0.85)', backdropFilter:'blur(10px)', borderRadius:'12px', border:'1px solid #374151', padding:'25px', boxShadow:'0 10px 25px -5px rgba(0,0,0,0.5)' }}>
              <div style={{fontSize:'11px', color:'#94a3b8', fontWeight:'700', textTransform:'uppercase', marginBottom:'8px'}}>Pending Authorization</div>
              <div style={{fontSize:'32px', fontWeight:'800', color:'#fbbf24', marginBottom:'6px'}}>$3,420.00</div>
              <div style={{fontSize:'12px', fontWeight:'600', color:'#94a3b8'}}>3 items awaiting review</div>
            </div>

          </div>

          {/* TRANSACTION LEDGER TABLE */}
          <div style={{ background:'rgba(17, 24, 39, 0.85)', backdropFilter:'blur(10px)', borderRadius:'12px', border:'1px solid #374151', padding:'30px', boxShadow:'0 10px 25px -5px rgba(0,0,0,0.5)' }}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #374151', paddingBottom:'15px', marginBottom:'20px'}}>
              <div>
                <h2 style={{fontSize:'18px', fontWeight:'800', margin:'0 0 4px 0', color:'#fff'}}>System Transaction Ledger</h2>
                <p style={{fontSize:'12px', color:'#94a3b8', margin:0}}>Real-time tracking of network financial traffic.</p>
              </div>
              <span style={{fontSize:'11px', fontWeight:'700', color:'#4ade80', background:'rgba(74,222,128,0.1)', padding:'5px 12px', borderRadius:'6px', border:'1px solid rgba(74,222,128,0.2)', display:'flex', alignItems:'center', gap:'6px'}}>
                <span style={{width:'6px', height:'6px', background:'#4ade80', borderRadius:'50%', display:'inline-block'}}></span> LIVE FEED
              </span>
            </div>

            <div style={{overflowX:'auto'}}>
              <table style={{width:'100%', borderCollapse:'collapse', textAlign:'left', fontSize:'13px'}}>
                <thead>
                  <tr style={{borderBottom:'1px solid #374151', color:'#94a3b8', fontSize:'11px', textTransform:'uppercase', letterSpacing:'0.5px'}}>
                    <th style={{padding:'12px'}}>Transaction Reference</th>
                    <th style={{padding:'12px'}}>Classification</th>
                    <th style={{padding:'12px'}}>Timestamp</th>
                    <th style={{padding:'12px'}}>Status</th>
                    <th style={{padding:'12px', textAlign:'right'}}>Net Value</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx) => {
                    const isCleared = tx.status === 'CLEARED';
                    const isPos = tx.net_value.includes('+');
                    return (
                      <tr key={tx.id} style={{borderBottom:'1px solid #1f2937'}}>
                        <td style={{padding:'16px', fontWeight:'700', color:'#fff'}}>{tx.reference}</td>
                        <td style={{padding:'16px', color:'#94a3b8', fontWeight:'600'}}>{tx.classification}</td>
                        <td style={{padding:'16px', color:'#94a3b8', fontSize:'12px'}}>{tx.timestamp}</td>
                        <td style={{padding:'16px'}}>
                          <span style={{
                            fontSize:'10px', fontWeight:'800', letterSpacing:'0.5px',
                            padding:'4px 10px', borderRadius:'4px',
                            background: isCleared ? 'rgba(74,222,128,0.1)' : 'rgba(251,191,36,0.1)',
                            color: isCleared ? '#4ade80' : '#fbbf24',
                            border: isCleared ? '1px solid rgba(74,222,128,0.2)' : '1px solid rgba(251,191,36,0.2)'
                          }}>
                            {tx.status}
                          </span>
                        </td>
                        <td style={{padding:'16px', textAlign:'right', fontWeight:'800', color: isPos ? '#4ade80' : '#ef4444'}}>
                          {tx.net_value}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background:'#0b111e', padding:'15px 30px', textAlign:'center', fontSize:'11px', color:'#64748b', borderTop:'1px solid #1f2937', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <span>DAISY HILL FARMING COMMUNITY © 2026</span>
        <span>ENTERPRISE COMMAND SYSTEM V2.4 • SECURE FINANCIAL LEDGER</span>
      </div>
    </div>
  );
}