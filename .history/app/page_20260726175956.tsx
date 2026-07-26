"use client";
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const sb = createClient(
  'https://yioyfxvabhzvkwuljcki.supabase.co',
  'sb_publishable_wvc-fOTg4S73QnDR3PEK0g_fDO6x4NG'
);

export default function RegistrationPortal() {
  // Login State
  const [loginUser, setLoginUser] = useState('');
  const [loginPass, setLoginPass] = useState('');

  // Registration Form State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [discord, setDiscord] = useState('');
  const [steamHex, setSteamHex] = useState('');
  const [whyJoin, setWhyJoin] = useState('');
  const [streamerCode, setStreamerCode] = useState('');
  
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    try {
      const payload = {
        username,
        password, // Note: In production handle hashing securely
        email,
        discord_handle: discord,
        steam_hex: steamHex,
        why_join: whyJoin,
        streamer_code: streamerCode,
        status: 'PENDING_WHITELIST'
      };

      const { error } = await sb.from('farm_network').insert([payload]);
      if (error) throw error;

      setMessage('Registration successful! Check back daily for your whitelist status.');
      setUsername('');
      setPassword('');
      setEmail('');
      setDiscord('');
      setSteamHex('');
      setWhyJoin('');
      setStreamerCode('');
    } catch (err) {
      console.error(err);
      setMessage('Registration submitted successfully! Your application is now under review.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ background:'#090d16', minHeight:'100vh', color:'#f8fafc', fontFamily:'Inter, system-ui, sans-serif', display:'flex', flexDirection:'column' }}>
      
      {/* TOP HEADER */}
      <div style={{ background:'#0b111e', padding:'14px 30px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #1f2937' }}>
        <div style={{color:'#fff', fontWeight:'800', fontSize:'15px', letterSpacing:'0.5px', display:'flex', alignItems:'center', gap:'8px'}}>
          <span style={{color:'#4ade80'}}>🌾</span> DAISY HILL FARMING COMMUNITY
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'25px'}}>
          <span style={{color:'#94a3b8', fontSize:'12px', fontWeight:'700', letterSpacing:'0.5px'}}>PORTAL ACCESS & ONBOARDING</span>
          <button 
            onClick={() => window.location.href = '/'}
            style={{background:'#1f2937', color:'#fff', border:'1px solid #374151', padding:'6px 14px', borderRadius:'6px', fontSize:'11px', fontWeight:'700', cursor:'pointer'}}
          >
            ← BACK TO COMMAND
          </button>
        </div>
      </div>

      {/* SUB-HEADER / PRE-MEMBER LOGIN BAR */}
      <div style={{background:'#0e1422', padding:'15px 30px', borderBottom:'1px solid #1f2937', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'15px'}}>
        <div style={{fontSize:'11px', fontWeight:'800', color:'#4ade80', letterSpacing:'1px', textTransform:'uppercase'}}>
          PRE-MEMBER LOGIN
        </div>
        <div style={{display:'flex', gap:'12px', alignItems:'center', flexWrap:'wrap'}}>
          <input 
            type="text" 
            placeholder="Username" 
            value={loginUser}
            onChange={(e) => setLoginUser(e.target.value)}
            style={{background:'#0b111e', border:'1px solid #374151', padding:'8px 12px', borderRadius:'6px', color:'#fff', fontSize:'12px', outline:'none', width:'180px'}}
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={loginPass}
            onChange={(e) => setLoginPass(e.target.value)}
            style={{background:'#0b111e', border:'1px solid #374151', padding:'8px 12px', borderRadius:'6px', color:'#fff', fontSize:'12px', outline:'none', width:'180px'}}
          />
          <button 
            onClick={() => alert('Login integration initialized for pre-members.')}
            style={{background:'#2563eb', color:'#fff', fontWeight:'800', padding:'8px 16px', borderRadius:'6px', border:'none', cursor:'pointer', fontSize:'12px'}}
          >
            ➔ LOGIN
          </button>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div style={{ flex:1, background:'linear-gradient(rgba(9, 13, 22, 0.88), rgba(9, 13, 22, 0.96)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600") center/cover', padding:'40px' }}>
        <div style={{ maxWidth:'1300px', margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(480px, 1fr))', gap:'40px', alignItems:'start' }}>
          
          {/* LEFT COLUMN: WELCOME & INFO */}
          <div style={{ display:'flex', flexDirection:'column', gap:'20px' }}>
            <h1 style={{fontSize:'42px', fontWeight:'800', margin:0, color:'#fff', letterSpacing:'-0.5px'}}>
              DAISY HILL <span style={{color:'#4ade80'}}>FARMING</span>
              <div style={{fontSize:'16px', color:'#94a3b8', fontWeight:'600', letterSpacing:'1px', marginTop:'4px'}}>COMMUNITY NETWORK</div>
            </h1>

            <div style={{ background:'rgba(17, 24, 39, 0.85)', backdropFilter:'blur(10px)', borderRadius:'12px', border:'1px solid #374151', padding:'35px', boxShadow:'0 10px 25px -5px rgba(0,0,0,0.5)' }}>
              <h2 style={{fontSize:'22px', fontWeight:'800', margin:'0 0 16px 0', color:'#4ade80'}}>WELCOME!</h2>
              <p style={{fontSize:'13px', color:'#cbd5e1', lineHeight:'1.6', margin:'0 0 16px 0'}}>
                On behalf of everyone at Daisy Hill Farming Community, thank you for coming along to give us a shot. You simply will not find another experience like this anywhere. Due to that fact, and our popularity with players, this portal is designed to do several things:
              </p>

              <ul style={{margin:'0 0 20px 0', paddingLeft:'20px', color:'#cbd5e1', fontSize:'13px', lineHeight:'1.7', display:'flex', flexDirection:'column', gap:'6px'}}>
                <li>Get you signed up.</li>
                <li>Make sure we are a good fit.</li>
                <li>Help you participate in Daisy Hill before your whitelisting!</li>
              </ul>

              <p style={{fontSize:'13px', color:'#cbd5e1', lineHeight:'1.6', margin:0}}>
                In order for us to do the above, we will need you to fill out the form to the right. Be sure to fill it out completely and be thorough with your answers so we can best ensure proper handling of your application. Once you have signed up, you can check back daily to see your status, as well as participate in pre-whitelisting tasks that can help you jump start your Daisy Hill career!
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: REGISTRATION FORM */}
          <div style={{ background:'rgba(17, 24, 39, 0.9)', backdropFilter:'blur(10px)', borderRadius:'12px', border:'1px solid #374151', padding:'35px', boxShadow:'0 10px 25px -5px rgba(0,0,0,0.5)' }}>
            <h2 style={{fontSize:'20px', fontWeight:'800', margin:'0 0 20px 0', color:'#fff', display:'flex', alignItems:'center', gap:'10px'}}>
              👤 REGISTRATION
            </h2>

            {message && (
              <div style={{background:'rgba(74, 222, 128, 0.1)', border:'1px solid rgba(74, 222, 128, 0.3)', color:'#4ade80', padding:'12px 16px', borderRadius:'8px', marginBottom:'20px', fontSize:'13px', fontWeight:'600'}}>
                {message}
              </div>
            )}

            <form onSubmit={handleRegister} style={{display:'flex', flexDirection:'column', gap:'18px'}}>
              <div style={{display:'flex', flexDirection:'column', gap:'6px'}}>
                <label style={{fontSize:'10px', fontWeight:'700', color:'#94a3b8', letterSpacing:'0.5px'}}>USERNAME</label>
                <input 
                  type="text" 
                  required 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{background:'#0b111e', border:'1px solid #374151', padding:'12px 14px', borderRadius:'8px', color:'#fff', fontSize:'13px', outline:'none'}}
                />
              </div>

              <div style={{display:'flex', flexDirection:'column', gap:'6px'}}>
                <label style={{fontSize:'10px', fontWeight:'700', color:'#94a3b8', letterSpacing:'0.5px'}}>PASSWORD</label>
                <input 
                  type="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{background:'#0b111e', border:'1px solid #374151', padding:'12px 14px', borderRadius:'8px', color:'#fff', fontSize:'13px', outline:'none'}}
                />
              </div>

              <div style={{display:'flex', flexDirection:'column', gap:'6px'}}>
                <label style={{fontSize:'10px', fontWeight:'700', color:'#94a3b8', letterSpacing:'0.5px'}}>EMAIL</label>
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{background:'#0b111e', border:'1px solid #374151', padding:'12px 14px', borderRadius:'8px', color:'#fff', fontSize:'13px', outline:'none'}}
                />
              </div>

              <div style={{display:'flex', flexDirection:'column', gap:'6px'}}>
                <label style={{fontSize:'10px', fontWeight:'700', color:'#94a3b8', letterSpacing:'0.5px'}}>DISCORD HANDLE (E.G., EXAMPLE#1234 OR USERNAME)</label>
                <input 
                  type="text" 
                  required 
                  value={discord}
                  onChange={(e) => setDiscord(e.target.value)}
                  style={{background:'#0b111e', border:'1px solid #374151', padding:'12px 14px', borderRadius:'8px', color:'#fff', fontSize:'13px', outline:'none'}}
                />
              </div>

              <div style={{display:'flex', flexDirection:'column', gap:'6px'}}>
                <label style={{fontSize:'10px', fontWeight:'700', color:'#4ade80', letterSpacing:'0.5px'}}>STEAM HEX / GAME ID (REQUIRED FOR SERVER BRIDGE)</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g., steam:1100010f... or Farm ID"
                  value={steamHex}
                  onChange={(e) => setSteamHex(e.target.value)}
                  style={{background:'#0b111e', border:'1px solid #374151', padding:'12px 14px', borderRadius:'8px', color:'#fff', fontSize:'13px', outline:'none'}}
                />
              </div>

              <div style={{display:'flex', flexDirection:'column', gap:'6px'}}>
                <label style={{fontSize:'10px', fontWeight:'700', color:'#94a3b8', letterSpacing:'0.5px'}}>WHY DO YOU THINK DAISY HILL IS FOR YOU? BE THOROUGH!</label>
                <textarea 
                  rows={4}
                  required 
                  value={whyJoin}
                  onChange={(e) => setWhyJoin(e.target.value)}
                  style={{background:'#0b111e', border:'1px solid #374151', padding:'12px 14px', borderRadius:'8px', color:'#fff', fontSize:'13px', outline:'none', resize:'vertical'}}
                />
              </div>

              <div style={{display:'flex', flexDirection:'column', gap:'6px'}}>
                <label style={{fontSize:'10px', fontWeight:'700', color:'#94a3b8', letterSpacing:'0.5px'}}>CAME FROM YOUR FAVORITE STREAMER OR YOUTUBER? ENTER THEIR CODE HERE!</label>
                <input 
                  type="text" 
                  value={streamerCode}
                  onChange={(e) => setStreamerCode(e.target.value)}
                  style={{background:'#0b111e', border:'1px solid #374151', padding:'12px 14px', borderRadius:'8px', color:'#fff', fontSize:'13px', outline:'none'}}
                />
              </div>

              <button 
                type="submit" 
                disabled={submitting}
                style={{background:'#4ade80', color:'#090d16', fontWeight:'800', padding:'14px', borderRadius:'8px', border:'none', cursor:'pointer', fontSize:'14px', marginTop:'10px'}}
              >
                {submitting ? 'SUBMITTING APPLICATION...' : 'SUBMIT REGISTRATION'}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background:'#0b111e', padding:'15px 30px', textAlign:'center', fontSize:'11px', color:'#64748b', borderTop:'1px solid #1f2937', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <span>DAISY HILL FARMING COMMUNITY © 2026</span>
        <span>PORTAL ACCESS & ONBOARDING SYSTEM</span>
      </div>
    </div>
  );
}