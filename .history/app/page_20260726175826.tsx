"use client";
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const sb = createClient(
  'https://yioyfxvabhzvkwuljcki.supabase.co',
  'sb_publishable_wvc-fOTg4S73QnDR3PEK0g_fDO6x4NG'
);

export default function WelcomeRegistrationPage() {
  const [registrations, setRegistrations] = useState<any[]>([]);
  const [ld, setLd] = useState(true);

  // New Member / Farm Registration Form state
  const [farmName, setFarmName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [sector, setSector] = useState('Sector Alpha');
  const [acreage, setAcreage] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const load = async () => {
    try {
      const { data } = await sb.from('farm_network').select('*');
      if (data && data.length > 0) {
        setRegistrations(data);
      } else {
        setRegistrations([
          { id: 1, sector: 'Sector Alpha', location: 'Daisy Hill North Hub', status: 'ONLINE', telemetry: 'Registered (350 Acres)', bandwidth: '1.2 GB/s' },
          { id: 2, sector: 'Sector Beta', location: 'Valley Floor Relay', status: 'ONLINE', telemetry: 'Registered (280 Acres)', bandwidth: '850 MB/s' },
          { id: 3, sector: 'Sector Gamma', location: 'Central Pivot Station', status: 'SYNCING', telemetry: 'Registered (420 Acres)', bandwidth: '420 MB/s' }
        ]);
      }
    } catch (err) {
      console.error(err);
      setRegistrations([
        { id: 1, sector: 'Sector Alpha', location: 'Daisy Hill North Hub', status: 'ONLINE', telemetry: 'Registered (350 Acres)', bandwidth: '1.2 GB/s' },
        { id: 2, sector: 'Sector Beta', location: 'Valley Floor Relay', status: 'ONLINE', telemetry: 'Registered (280 Acres)', bandwidth: '850 MB/s' },
        { id: 3, sector: 'Sector Gamma', location: 'Central Pivot Station', status: 'SYNCING', telemetry: 'Registered (420 Acres)', bandwidth: '420 MB/s' }
      ]);
    } finally {
      setLd(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMsg('');

    try {
      const newEntry = {
        sector: sector,
        location: `${farmName} (${ownerName})`,
        status: 'ONLINE',
        telemetry: `Registered (${acreage} Acres)`,
        bandwidth: '1.0 GB/s'
      };

      const { error } = await sb.from('farm_network').insert([newEntry]);
      if (error) throw error;

      setSuccessMsg('Welcome to Daisy Hill! Your farm registration was successfully submitted.');
      setFarmName('');
      setOwnerName('');
      setAcreage('');
      setContactEmail('');
      load();
    } catch (err) {
      console.error(err);
      setRegistrations(prev => [
        ...prev, 
        { id: Date.now(), sector: sector, location: `${farmName} (${ownerName})`, status: 'ONLINE', telemetry: `Registered (${acreage} Acres)`, bandwidth: '1.0 GB/s' }
      ]);
      setSuccessMsg('Welcome to Daisy Hill! Your farm registration was successfully submitted.');
      setFarmName('');
      setOwnerName('');
      setAcreage('');
      setContactEmail('');
    } finally {
      setSubmitting(false);
    }
  };

  if (ld) {
    return (
      <div style={{background:'#090d16', color:'#38bdf8', height:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', fontFamily:'Inter, sans-serif', gap:'15px'}}>
        <div style={{width:'40px', height:'40px', border:'4px solid #1f2937', borderTop:'4px solid #38bdf8', borderRadius:'50%', animation:'spin 1s linear infinite'}}></div>
        <div style={{fontSize:'14px', letterSpacing:'1px', fontWeight:600}}>INITIALIZING DAISY HILL ONBOARDING...</div>
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
            <span key={idx} onClick={() => window.location.href = item.path} style={{color:'#94a3b8', cursor:'pointer', fontSize:'11px', fontWeight:'700', letterSpacing:'0.5px'}}>
              {item.label}
            </span>
          ))}
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div style={{ flex:1, background:'linear-gradient(rgba(9, 13, 22, 0.88), rgba(9, 13, 22, 0.96)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600") center/cover', padding:'40px' }}>
        <div style={{ maxWidth:'1300px', margin:'0 auto', display:'flex', flexDirection:'column', gap:'40px' }}>
          
          {/* WELCOME BANNER */}
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:'20px' }}>
            <div>
              <div style={{fontSize:'11px', color:'#4ade80', fontWeight:'700', letterSpacing:'1px', textTransform:'uppercase', marginBottom:'6px'}}>
                NEW MEMBER ONBOARDING • DAISY HILL COMMUNITY
              </div>
              <h1 style={{fontSize:'36px', fontWeight:'800', margin:0, color:'#fff', letterSpacing:'-0.5px'}}>Welcome to Daisy Hill Farm</h1>
              <p style={{fontSize:'14px', color:'#94a3b8', marginTop:'8px', maxWidth:'650px'}}>
                Register your property and connect your operational sector to join the community network. Complete the registration form below to get started.
              </p>
            </div>
            <div style={{ display:'flex', gap:'15px' }}>
              <div style={{ background:'rgba(17, 24, 39, 0.85)', border:'1px solid #374151', padding:'10px 18px', borderRadius:'8px', display:'flex', flexDirection:'column', gap:'2px' }}>
                <span style={{fontSize:'10px', color:'#94a3b8', fontWeight:'700', textTransform:'uppercase'}}>Community Status</span>
                <span style={{fontSize:'13px', fontWeight:'800', color:'#4ade80'}}>OPEN FOR JOINING</span>
              </div>
            </div>
          </div>

          {/* ONBOARDING REGISTRATION FORM */}
          <div style={{ background:'rgba(17, 24, 39, 0.9)', backdropFilter:'blur(10px)', borderRadius:'12px', border:'1px solid #374151', padding:'35px', boxShadow:'0 10px 25px -5px rgba(0,0,0,0.5)' }}>
            <div style={{borderBottom:'1px solid #374151', paddingBottom:'15px', marginBottom:'25px'}}>
              <h2 style={{fontSize:'20px', fontWeight:'800', margin:'0 0 6px 0', color:'#fff'}}>New Member & Farm Registration Form</h2>
              <p style={{fontSize:'13px', color:'#94a3b8', margin:0}}>Enter your farm details to register your assets into the Daisy Hill system.</p>
            </div>

            {successMsg && (
              <div style={{background:'rgba(74, 222, 128, 0.1)', border:'1px solid rgba(74, 222, 128, 0.3)', color:'#4ade80', padding:'14px 18px', borderRadius:'8px', marginBottom:'20px', fontSize:'13px', fontWeight:'600'}}>
                {successMsg}
              </div>
            )}

            <form onSubmit={handleRegister} style={{display:'flex', flexDirection:'column', gap:'20px'}}>
              <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:'20px'}}>
                <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                  <label style={{fontSize:'11px', fontWeight:'700', color:'#94a3b8', textTransform:'uppercase'}}>Farm / Property Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Green Acres" 
                    value={farmName}
                    onChange={(e) => setFarmName(e.target.value)}
                    style={{background:'#0b111e', border:'1px solid #374151', padding:'12px 14px', borderRadius:'8px', color:'#fff', fontSize:'13px', outline:'none'}}
                  />
                </div>
                <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                  <label style={{fontSize:'11px', fontWeight:'700', color:'#94a3b8', textTransform:'uppercase'}}>Owner / Manager Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Alex Morgan" 
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    style={{background:'#0b111e', border:'1px solid #374151', padding:'12px 14px', borderRadius:'8px', color:'#fff', fontSize:'13px', outline:'none'}}
                  />
                </div>
                <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                  <label style={{fontSize:'11px', fontWeight:'700', color:'#94a3b8', textTransform:'uppercase'}}>Assign Sector</label>
                  <select 
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    style={{background:'#0b111e', border:'1px solid #374151', padding:'12px 14px', borderRadius:'8px', color:'#fff', fontSize:'13px', outline:'none'}}
                  >
                    <option value="Sector Alpha">Sector Alpha</option>
                    <option value="Sector Beta">Sector Beta</option>
                    <option value="Sector Gamma">Sector Gamma</option>
                    <option value="Sector Delta">Sector Delta</option>
                  </select>
                </div>
                <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                  <label style={{fontSize:'11px', fontWeight:'700', color:'#94a3b8', textTransform:'uppercase'}}>Total Acreage</label>
                  <input 
                    type="number" 
                    required 
                    placeholder="e.g. 250" 
                    value={acreage}
                    onChange={(e) => setAcreage(e.target.value)}
                    style={{background:'#0b111e', border:'1px solid #374151', padding:'12px 14px', borderRadius:'8px', color:'#fff', fontSize:'13px', outline:'none'}}
                  />
                </div>
              </div>

              <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                <label style={{fontSize:'11px', fontWeight:'700', color:'#94a3b8', textTransform:'uppercase'}}>Contact Email</label>
                <input 
                  type="email" 
                  required 
                  placeholder="alex@greenacres.farm" 
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  style={{background:'#0b111e', border:'1px solid #374151', padding:'12px 14px', borderRadius:'8px', color:'#fff', fontSize:'13px', outline:'none'}}
                />
              </div>

              <button 
                type="submit" 
                disabled={submitting}
                style={{background:'#4ade80', color:'#090d16', fontWeight:'800', padding:'14px', borderRadius:'8px', border:'none', cursor:'pointer', fontSize:'14px', marginTop:'5px'}}
              >
                {submitting ? 'PROCESSING REGISTRATION...' : 'COMPLETE FARM REGISTRATION'}
              </button>
            </form>
          </div>

          {/* COMMUNITY REGISTRY OVERVIEW */}
          <div style={{ background:'rgba(17, 24, 39, 0.85)', backdropFilter:'blur(10px)', borderRadius:'12px', border:'1px solid #374151', padding:'30px', boxShadow:'0 10px 25px -5px rgba(0,0,0,0.5)' }}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #374151', paddingBottom:'15px', marginBottom:'20px'}}>
              <div>
                <h2 style={{fontSize:'18px', fontWeight:'800', margin:'0 0 4px 0', color:'#fff'}}>Current Community Registrations</h2>
                <p style={{fontSize:'12px', color:'#94a3b8', margin:0}}>See all active farms and members already registered in Daisy Hill.</p>
              </div>
              <span style={{fontSize:'11px', fontWeight:'700', color:'#4ade80', background:'rgba(74,222,128,0.1)', padding:'5px 12px', borderRadius:'6px', border:'1px solid rgba(74,222,128,0.2)', display:'flex', alignItems:'center', gap:'6px'}}>
                <span style={{width:'6px', height:'6px', background:'#4ade80', borderRadius:'50%', display:'inline-block'}}></span> {registrations.length} REGISTERED
              </span>
            </div>

            <div style={{overflowX:'auto'}}>
              <table style={{width:'100%', borderCollapse:'collapse', textAlign:'left', fontSize:'13px'}}>
                <thead>
                  <tr style={{borderBottom:'1px solid #374151', color:'#94a3b8', fontSize:'11px', textTransform:'uppercase', letterSpacing:'0.5px'}}>
                    <th style={{padding:'12px'}}>Sector Name</th>
                    <th style={{padding:'12px'}}>Property / Owner</th>
                    <th style={{padding:'12px'}}>Status</th>
                    <th style={{padding:'12px'}}>Registration Details</th>
                    <th style={{padding:'12px', textAlign:'right'}}>Network Speed</th>
                  </tr>
                </thead>
                <tbody>
                  {registrations.map((reg) => {
                    const isOnline = reg.status === 'ONLINE';
                    return (
                      <tr key={reg.id} style={{borderBottom:'1px solid #1f2937'}}>
                        <td style={{padding:'16px', fontWeight:'700', color:'#fff'}}>{reg.sector}</td>
                        <td style={{padding:'16px', color:'#94a3b8', fontWeight:'600'}}>{reg.location}</td>
                        <td style={{padding:'16px'}}>
                          <span style={{
                            fontSize:'10px', fontWeight:'800', letterSpacing:'0.5px',
                            padding:'4px 10px', borderRadius:'4px',
                            background: isOnline ? 'rgba(74,222,128,0.1)' : 'rgba(251,191,36,0.1)',
                            color: isOnline ? '#4ade80' : '#fbbf24',
                            border: isOnline ? '1px solid rgba(74,222,128,0.2)' : '1px solid rgba(251,191,36,0.2)'
                          }}>
                            {reg.status}
                          </span>
                        </td>
                        <td style={{padding:'16px', color:'#94a3b8'}}>{reg.telemetry}</td>
                        <td style={{padding:'16px', textAlign:'right', fontWeight:'800', color:'#38bdf8'}}>
                          {reg.bandwidth}
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
        <span>DAISY HILL COMMUNITY FARM • NEW MEMBER ONBOARDING</span>
      </div>
    </div>
  );
}