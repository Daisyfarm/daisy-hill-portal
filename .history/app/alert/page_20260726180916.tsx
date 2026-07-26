"use client";
import { useState } from 'react';

export default function WhitelistPage() {
  const [country, setCountry] = useState('AFGHANISTAN');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitTask = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    alert('Task #1 submitted successfully! Reward: Gold Bale x 1 added to your account.');
  };

  return (
    <div style={{ background:'#000000', minHeight:'100vh', color:'#f8fafc', fontFamily:'Inter, system-ui, sans-serif', display:'flex', flexDirection:'column' }}>
      
      {/* TOP HEADER */}
      <div style={{ background:'#090d16', padding:'16px 30px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #1f2937', flexWrap:'wrap', gap:'15px' }}>
        <div style={{ color:'#fff', fontWeight:'800', fontSize:'16px', letterSpacing:'0.5px', display:'flex', alignItems:'center', gap:'10px' }}>
          <span>DAISY HILL COMMUNITY FARM</span> <span style={{color:'#64748b', fontWeight:'400'}}>|</span> <span style={{color:'#a855f7', fontSize:'13px', fontWeight:'700', letterSpacing:'0.5px'}}>WHITELIST & ACCESS QUEUE</span>
        </div>
        <div>
          <button 
            onClick={() => window.location.href = '/registration'}
            style={{ background:'#111827', color:'#fff', border:'1px solid #374151', padding:'8px 16px', borderRadius:'6px', fontSize:'12px', fontWeight:'700', cursor:'pointer' }}
          >
            ← BACK TO COMMAND
          </button>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div style={{ padding:'35px', maxWidth:'1400px', margin:'0 auto', width:'100%', boxSizing:'border-box', display:'flex', flexDirection:'column', gap:'30px' }}>
        
        {/* TOP METRICS GRID */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:'20px' }}>
          
          <div style={{ background:'#0b111e', border:'1px solid #1f2937', borderRadius:'10px', padding:'20px', display:'flex', flexDirection:'column', gap:'8px' }}>
            <span style={{ fontSize:'10px', fontWeight:'800', color:'#64748b', letterSpacing:'1px', textTransform:'uppercase' }}>IDENTITY</span>
            <span style={{ fontSize:'18px', fontWeight:'800', color:'#fff', letterSpacing:'0.5px' }}>WELCOME</span>
          </div>

          <div style={{ background:'#0b111e', border:'1px solid #1f2937', borderRadius:'10px', padding:'20px', display:'flex', flexDirection:'column', gap:'8px' }}>
            <span style={{ fontSize:'10px', fontWeight:'800', color:'#64748b', letterSpacing:'1px', textTransform:'uppercase' }}>CLEARANCE TIER</span>
            <span style={{ fontSize:'18px', fontWeight:'800', color:'#c084fc', letterSpacing:'0.5px' }}>LEVEL 1</span>
          </div>

          <div style={{ background:'#0b111e', border:'1px solid #1f2937', borderRadius:'10px', padding:'20px', display:'flex', flexDirection:'column', gap:'8px' }}>
            <span style={{ fontSize:'10px', fontWeight:'800', color:'#64748b', letterSpacing:'1px', textTransform:'uppercase' }}>CREDITS BALANCE</span>
            <span style={{ fontSize:'18px', fontWeight:'800', color:'#4ade80', letterSpacing:'0.5px' }}>$0.00</span>
          </div>

          <div style={{ background:'#0b111e', border:'1px solid #1f2937', borderRadius:'10px', padding:'20px', display:'flex', flexDirection:'column', gap:'8px' }}>
            <span style={{ fontSize:'10px', fontWeight:'800', color:'#64748b', letterSpacing:'1px', textTransform:'uppercase' }}>QUEUE METRICS</span>
            <span style={{ fontSize:'18px', fontWeight:'800', color:'#fff', letterSpacing:'0.5px' }}>0 / 0</span>
          </div>

        </div>

        {/* PRE-WHITELIST AREA BANNER */}
        <div style={{ display:'flex', flexDirection:'column', gap:'14px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
            <span style={{ fontSize:'20px', color:'#c084fc' }}>🛡️</span>
            <h1 style={{ fontSize:'26px', fontWeight:'800', margin:0, color:'#fff', letterSpacing:'0.5px' }}>PRE-WHITELIST AREA</h1>
          </div>
          
          <p style={{ fontSize:'13px', color:'#94a3b8', lineHeight:'1.7', margin:0, maxWidth:'1200px' }}>
            Hey there! You've made it here because you have signed up but have not been whitelisted. This is an area where you can login daily for a little reward and to help expedite your whitelisting speed.
          </p>
          <p style={{ fontSize:'13px', color:'#94a3b8', lineHeight:'1.7', margin:0, maxWidth:'1200px' }}>
            The more daily logins and tutorial quizzes you complete, the faster you'll move up the whitelisting queue, because we want to make sure everyone coming into FSN is going to help contribute to continuing to make it an awesome and unique experience!
          </p>
          <p style={{ fontSize:'13px', color:'#94a3b8', lineHeight:'1.7', margin:0, maxWidth:'1200px' }}>
            Go ahead and get started by checking the daily task each day, answering the 5 daily questions, and then working your way through as many of the starter tutorials as you can!
          </p>
        </div>

        <div style={{ borderBottom:'1px solid #1f2937', margin:'10px 0' }}></div>

        {/* BOTTOM INTERACTIVE CARDS: DAILY TASK & MOD VOTING TERMINAL */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(480px, 1fr))', gap:'30px', alignItems:'start' }}>
          
          {/* DAILY TASK CARD */}
          <div style={{ background:'#0b111e', border:'1px solid #1f2937', borderRadius:'12px', padding:'30px', display:'flex', flexDirection:'column', gap:'20px' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
              <span style={{ color:'#facc15' }}>⚡</span>
              <h2 style={{ fontSize:'18px', fontWeight:'800', margin:0, color:'#facc15', letterSpacing:'0.5px' }}>DAILY TASK</h2>
            </div>

            <div>
              <div style={{ fontSize:'15px', fontWeight:'800', color:'#fff', marginBottom:'12px' }}>Task #1 - Where are you from?</div>
              <label style={{ fontSize:'10px', fontWeight:'800', color:'#64748b', letterSpacing:'1px', textTransform:'uppercase', display:'block', marginBottom:'8px' }}>MY COUNTRY</label>
              
              <form onSubmit={handleSubmitTask} style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
                <select 
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  style={{ background:'#05080f', border:'1px solid #374151', padding:'12px 14px', borderRadius:'8px', color:'#fff', fontSize:'13px', outline:'none', fontWeight:'600' }}
                >
                  <option value="AFGHANISTAN">AFGHANISTAN</option>
                  <option value="UNITED STATES">UNITED STATES</option>
                  <option value="UNITED KINGDOM">UNITED KINGDOM</option>
                  <option value="CANADA">CANADA</option>
                  <option value="AUSTRALIA">AUSTRALIA</option>
                  <option value="GERMANY">GERMANY</option>
                </select>

                <button 
                  type="submit"
                  style={{ background:'#111827', color:'#fff', fontWeight:'800', padding:'14px', borderRadius:'8px', border:'1px solid #374151', cursor:'pointer', fontSize:'13px', letterSpacing:'0.5px' }}
                >
                  SUBMIT DAILY TASK
                </button>
              </form>
            </div>

            <div style={{ display:'flex', alignItems:'center', gap:'8px', fontSize:'12px', fontWeight:'700', color:'#facc15', marginTop:'5px' }}>
              <span>🏆</span> Reward: Gold Bale x 1
            </div>
          </div>

          {/* MOD VOTING TERMINAL CARD */}
          <div style={{ background:'#0b111e', border:'1px solid #1f2937', borderRadius:'12px', padding:'30px', display:'flex', flexDirection:'column', gap:'20px' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
              <span style={{ fontSize:'18px' }}>📦</span>
              <h2 style={{ fontSize:'18px', fontWeight:'800', margin:0, color:'#38bdf8', letterSpacing:'0.5px' }}>MOD VOTING TERMINAL</h2>
            </div>

            <p style={{ fontSize:'13px', color:'#94a3b8', lineHeight:'1.7', margin:0 }}>
              Place your vote to get mod reviews reviewed for potentially being added. Each time a batch of mods is selected, no uncommon mods will lose its votes, meaning even if you don't get enough votes for reviewing in this batch, you win the next!
            </p>

            <div style={{ display:'flex', flexDirection:'column', gap:'8px', marginTop:'10px' }}>
              <div style={{ fontSize:'13px', color:'#94a3b8' }}>
                Active Status: <span style={{ color:'#4ade80', fontWeight:'800' }}>Queue Open & Synchronized</span>
              </div>
              <div>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Redirecting to Access Rank Tiers & Clearance guidelines.'); }} style={{ color:'#c084fc', fontSize:'13px', fontWeight:'700', textDecoration:'underline' }}>
                  Access Rank Tiers & Clearance
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}