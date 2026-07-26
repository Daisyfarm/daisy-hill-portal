"use client";
import { useState } from 'react';
import { Landmark, ArrowLeft, DollarSign, CreditCard, ShieldCheck } from 'lucide-react';

export default function BankingPage() {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [activeLoan, setActiveLoan] = useState(25000);
  const [creditScore] = useState(750);

  const takeLoan = () => {
    setActiveLoan(prev => prev + loanAmount);
    alert(`Successfully secured a cooperative bank loan of $${loanAmount.toLocaleString()}`);
  };

  const repayLoan = () => {
    if (activeLoan <= 0) return alert("No active balance due.");
    setActiveLoan(0);
    alert("Loan completely repaid and closed!");
  };

  return (
    <div style={{ background:'#090d16', minHeight:'100vh', color:'#f8fafc', fontFamily:'Inter, system-ui, sans-serif', display:'flex', flexDirection:'column' }}>
      
      {/* Top Header */}
      <div style={{ background:'#111827', padding:'16px 30px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #1f2937' }}>
        <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
          <Landmark size={20} color="#4ade80" />
          <span style={{color:'#4ade80', fontWeight:'800', fontSize:'15px', letterSpacing:'0.5px'}}>COOPERATIVE CENTRAL BANK</span>
        </div>
        <span onClick={()=>window.location.href='/dashboard'} style={{color:'#94a3b8', fontSize:'12px', fontWeight:'bold', cursor:'pointer', display:'flex', alignItems:'center', gap:'6px'}}>
          <ArrowLeft size={14}/> BACK TO DASHBOARD
        </span>
      </div>

      {/* Main Content */}
      <div style={{ flex:1, padding:'40px', maxWidth:'1000px', margin:'0 auto', width:'100%', boxSizing:'border-box', display:'flex', flexDirection:'column', gap:'30px' }}>
        
        <div style={{borderBottom:'1px solid #1f2937', paddingBottom:'15px'}}>
          <h1 style={{fontSize:'24px', fontWeight:'800', margin:'0 0 5px 0', color:'#fff'}}>Agricultural Finance & Credit</h1>
          <p style={{fontSize:'12px', color:'#94a3b8', margin:0}}>Secure capital for land acquisitions, new equipment leases, and facility upgrades.</p>
        </div>

        {/* Overview Cards */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'20px' }}>
          
          <div style={{background:'#111827', padding:'25px', borderRadius:'12px', border:'1px solid #374151', display:'flex', flexDirection:'column', gap:'10px'}}>
            <span style={{fontSize:'11px', fontWeight:'700', color:'#94a3b8', display:'flex', alignItems:'center', gap:'6px'}}>
              <CreditCard size={14}/> ACTIVE LOAN BALANCE
            </span>
            <span style={{fontSize:'24px', fontWeight:'800', color:'#f87171'}}>${activeLoan.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
            <button onClick={repayLoan} style={{marginTop:'10px', background:'#1f2937', border:'1px solid #374151', color:'#4ade80', padding:'8px', borderRadius:'6px', fontSize:'11px', fontWeight:'700', cursor:'pointer'}}>
              Repay Full Balance
            </button>
          </div>

          <div style={{background:'#111827', padding:'25px', borderRadius:'12px', border:'1px solid #374151', display:'flex', flexDirection:'column', gap:'10px'}}>
            <span style={{fontSize:'11px', fontWeight:'700', color:'#94a3b8', display:'flex', alignItems:'center', gap:'6px'}}>
              <ShieldCheck size={14}/> OPERATOR CREDIT RATING
            </span>
            <span style={{fontSize:'24px', fontWeight:'800', color:'#fbbf24'}}>{creditScore} PTS</span>
            <span style={{fontSize:'11px', color:'#94a3b8', marginTop:'10px'}}>Tier: Prime Commercial Borrower</span>
          </div>

        </div>

        {/* Loan Application Module */}
        <div style={{background:'#111827', padding:'30px', borderRadius:'12px', border:'1px solid #374151', display:'flex', flexDirection:'column', gap:'20px'}}>
          <h2 style={{fontSize:'18px', fontWeight:'700', margin:0}}>Request Equipment / Land Capital</h2>
          <p style={{fontSize:'12px', color:'#94a3b8', margin:0}}>Select funding amount to deposit directly into your community account ledger.</p>
          
          <div style={{display:'flex', gap:'15px', alignItems:'center', flexWrap:'wrap'}}>
            <select 
              value={loanAmount} 
              onChange={(e)=>setLoanAmount(Number(e.target.value))}
              style={{flex:1, minWidth:'250px', background:'#1f2937', border:'1px solid #374151', borderRadius:'8px', padding:'12px', color:'#fff', fontSize:'13px', outline:'none'}}
            >
              <option value={25000}>$25,000 - Light Machinery Loan</option>
              <option value={50000}>$50,000 - Standard Equipment Lease</option>
              <option value={150000}>$150,000 - Large Acreage / Combine Loan</option>
              <option value={500000}>$500,000 - Industrial Farm Expansion</option>
            </select>

            <button onClick={takeLoan} style={{background:'#4ade80', border:'none', color:'#090d16', padding:'12px 25px', borderRadius:'8px', fontWeight:'700', cursor:'pointer', fontSize:'13px'}}>
              Authorize Capital Loan
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}