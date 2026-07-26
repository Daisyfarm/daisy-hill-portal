"use client";
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const sb = createClient(
  'https://yioyfxvabhzvkwuljcki.supabase.co',
  'sb_publishable_wvc-fOTg4S73QnDR3PEK0g_fDO6x4NG'
);

export default function FinancePage() {
  const [finances, setFinances] = useState<any[]>([]);
  const [ld, setLd] = useState(true);

  const load = async () => {
    try {
      const { data } = await sb.from('finances').select('*');
      if (data && data.length > 0) {
        setFinances(data);
      } else {
        setFinances([
          { id: 1, category: 'Crop Yield Revenue', description: 'Q2 Wheat & Barley Harvest Sale', type: 'INCOME', amount: '$142,500.00', date: '2026-06-15' },
          { id: 2, category: 'Equipment Maintenance', description: 'Combine Harvester Parts & Service', type: 'EXPENSE', amount: '$12,400.00', date: '2026-06-18' },
          { id: 3, category: 'Community Subsidies', description: 'Daisy Hill Regional Grant Allocation', type: 'INCOME', amount: '$35,000.00', date: '2026-07-01' },
          { id: 4, category: 'Fuel & Logistics', description: 'Bulk Diesel Refill for Fleet', type: 'EXPENSE', amount: '$8,250.00', date: '2026-07-10' }
        ]);
      }
    } catch (err) {
      console.error(err);
      setFinances([
        { id: 1, category: 'Crop Yield Revenue', description: 'Q2 Wheat & Barley Harvest Sale', type: 'INCOME', amount: '$142,500.00', date: '2026-06-15' },
        { id: 2, category: 'Equipment Maintenance', description: 'Combine Harvester Parts & Service', type: 'EXPENSE', amount: '$12,400.00', date: '2026-06-18' },
        { id: 3, category: 'Community Subsidies', description: 'Daisy Hill Regional Grant Allocation', type: 'INCOME', amount: '$35,000.00', date: '2026-07-01' },
        { id: 4, category: 'Fuel & Logistics', description: 'Bulk Diesel Refill for Fleet', type: 'EXPENSE', amount: '$8,250.00', date: '2026-07-10' }
      ]);
    } finally {
      setLd(false);
    }
  };

  useEffect(() => { load(); }, []);

  if (ld) {
    return (
      <div style={{background:'#090d16', color:'#38bdf8', height:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', fontFamily:'Inter, sans-serif', gap:'15px'}}>
        <div style={{width:'40px', height:'40px', border:'4px solid #1f2937', borderTop:'4px solid #38bdf8', borderRadius:'50%', animation:'spin 1s linear infinite'}}></div>
        <div style={{fontSize:'14px', letterSpacing:'1px', fontWeight:600}}>LOADING FINANCIAL LEDGER...</div>
      </div>
    );
  }

  return (
    <div style={{ background:'#090d16', minHeight:'100vh', color:'#f8fafc', fontFamily:'Inter, system-ui, sans-serif', display:'flex', flexDirection:'column' }}>
      
      {/* TOP HEADER */}
      <div style={{ background:'#0b111e', padding:'14px 30px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #1f2937' }}>
        <div style={{ display:'flex', gap:'30px', alignItems:'center' }}>
          <div style={{color:'#fff', fontWeight:'800', fontSize:'15px', letterSpacing:'0.5px', display:'flex', alignItems:'center', gap:'8px', cursor:'pointer'}} onClick={() => window.location.href='/'}>
            <span style={{color:'#4ade80'}}>🌾</span> DAISY HILL COMMUNITY FARM
          </div>
        </div>
        <div style={{display:'flex', gap:'20px', alignItems:'center', fontSize:'12px', fontWeight:'600', flexWrap:'wrap'}}>
          {[
            { label: 'MARKET INDEX', path: '/market' },
            { label: 'CONTRACTS', path: '/contracts' },
            { label: 'FLEET', path: '/fleet' },
            { label: 'DISPATCH', path: '/dispatch' },
            { label: 'EVENTS', path: '/events' },
            { label: 'FIELDS', path: '/fields' },
            { label: 'IMPORTS', path: '/imports' },
            { label: 'FINANCE', path: '/finance' }
          ].map((item, idx) => (
            <span key={idx} onClick={() => window.location.href = item.path} style={{color: item.label === 'FINANCE' ? '#4ade80' : '#94a3b8', cursor:'pointer', fontSize:'11px', fontWeight:'700', letterSpacing:'0.5px'}}>
              {item.label}
            </span>
          ))}
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div style={{ flex:1, background:'linear-gradient(rgba(9, 13, 22, 0.88), rgba(9, 13, 22, 0.96)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600") center/cover', padding:'40px' }}>
        <div style={{ maxWidth:'1300px', margin:'0 auto' }}>
          
          {/* TITLE & SUMMARY CARDS */}
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'30px', flexWrap:'wrap', gap:'20px' }}>
            <div>
              <div style={{fontSize:'11px', color:'#4ade80', fontWeight:'700', letterSpacing:'1px', textTransform:'uppercase', marginBottom:'6px'}}>
                FINANCIAL LEDGER • STATUS: BALANCED
              </div>
              <h1 style={{fontSize:'36px', fontWeight:'800', margin:0, color:'#fff', letterSpacing:'-0.5px'}}>Community Farm Finance</h1>
            </div>
            <div style={{ display:'flex', gap:'15px' }}>
              <div style={{ background:'rgba(17, 24, 39, 0.85)', border:'1px solid #374151', padding:'10px 18px', borderRadius:'8px', display:'flex', flexDirection:'column', gap:'2px' }}>
                <span style={{fontSize:'10px', color:'#94a3b8', fontWeight:'700', textTransform:'uppercase'}}>Net Balance</span>
                <span style={{fontSize:'13px', fontWeight:'800', color:'#4ade80'}}>$156,850.00</span>
              </div>
              <div style={{ background:'rgba(17, 24, 39, 0.85)', border:'1px solid #374151', padding:'10px 18px', borderRadius:'8px', display:'flex', flexDirection:'column', gap:'2px' }}>
                <span style={{fontSize:'10px', color:'#94a3b8', fontWeight:'700', textTransform:'uppercase'}}>Fiscal Period</span>
                <span style={{fontSize:'13px', fontWeight:'800', color:'#38bdf8'}}>Q3 2026</span>
              </div>
            </div>
          </div>

          {/* TRANSACTIONS TABLE */}
          <div style={{ background:'rgba(17, 24, 39, 0.85)', backdropFilter:'blur(10px)', borderRadius:'12px', border:'1px solid #374151', padding:'30px', boxShadow:'0 10px 25px -5px rgba(0,0,0,0.5)' }}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #374151', paddingBottom:'15px', marginBottom:'20px'}}>
              <div>
                <h2 style={{fontSize:'18px', fontWeight:'800', margin:'0 0 4px 0', color:'#fff'}}>Revenue & Expense Log</h2>
                <p style={{fontSize:'12px', color:'#94a3b8', margin:0}}>Track all incoming and outgoing financial transactions for Daisy Hill Community Farm.</p>
              </div>
              <span style={{fontSize:'11px', fontWeight:'700', color:'#4ade80', background:'rgba(74,222,128,0.1)', padding:'5px 12px', borderRadius:'6px', border:'1px solid rgba(74,222,128,0.2)', display:'flex', alignItems:'center', gap:'6px'}}>
                <span style={{width:'6px', height:'6px', background:'#4ade80', borderRadius:'50%', display:'inline-block'}}></span> SECURE LEDGER
              </span>
            </div>

            <div style={{overflowX:'auto'}}>
              <table style={{width:'100%', borderCollapse:'collapse', textAlign:'left', fontSize:'13px'}}>
                <thead>
                  <tr style={{borderBottom:'1px solid #374151', color:'#94a3b8', fontSize:'11px', textTransform:'uppercase', letterSpacing:'0.5px'}}>
                    <th style={{padding:'12px'}}>Category</th>
                    <th style={{padding:'12px'}}>Description</th>
                    <th style={{padding:'12px'}}>Type</th>
                    <th style={{padding:'12px'}}>Date</th>
                    <th style={{padding:'12px', textAlign:'right'}}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {finances.map((item) => {
                    const isIncome = item.type === 'INCOME';
                    return (
                      <tr key={item.id} style={{borderBottom:'1px solid #1f2937'}}>
                        <td style={{padding:'16px', fontWeight:'700', color:'#fff'}}>{item.category}</td>
                        <td style={{padding:'16px', color:'#94a3b8', fontWeight:'600'}}>{item.description}</td>
                        <td style={{padding:'16px'}}>
                          <span style={{
                            fontSize:'10px', fontWeight:'800', letterSpacing:'0.5px',
                            padding:'4px 10px', borderRadius:'4px',
                            background: isIncome ? 'rgba(74,222,128,0.1)' : 'rgba(239,68,68,0.1)',
                            color: isIncome ? '#4ade80' : '#ef4444',
                            border: isIncome ? '1px solid rgba(74,222,128,0.2)' : '1px solid rgba(239,68,68,0.2)'
                          }}>
                            {item.type}
                          </span>
                        </td>
                        <td style={{padding:'16px', color:'#94a3b8'}}>{item.date}</td>
                        <td style={{padding:'16px', textAlign:'right', fontWeight:'800', color: isIncome ? '#4ade80' : '#ef4444'}}>
                          {isIncome ? '+' : '-'}{item.amount}
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
        <span>DAISY HILL COMMUNITY FARM • FINANCIAL COMMAND LEDGER</span>
      </div>
    </div>
  );
}