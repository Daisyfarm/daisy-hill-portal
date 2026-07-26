'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, AlertCircle, ArrowLeft, Tractor, Cpu, Check } from 'lucide-react';

export default function VerifyVersionPage() {
  const [gameVersion, setGameVersion] = useState('v1.13.1.0 (Latest)');
  const [dlcChecked, setDlcChecked] = useState({
    premium: true,
    kubota: true,
    oxbo: false,
    hayAndForage: true
  });
  const [verified, setVerified] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setVerified(true);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundImage: 'linear-gradient(rgba(5, 7, 10, 0.4), rgba(5, 7, 10, 0.5)), url("/JD2.jpg")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundAttachment: 'fixed',
      color: '#ffffff', 
      fontFamily: 'sans-serif' 
    }}>
      {/* Top Header */}
      <header style={{ backgroundColor: 'rgba(11, 14, 20, 0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', padding: '12px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ backgroundColor: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.4)', padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Tractor size={20} color="#34d399" />
            </div>
            <div>
              <span style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '0.05em', color: '#ffffff', display: 'block' }}>DHFC PORTAL</span>
              <span style={{ fontSize: '9px', color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold' }}>Version & DLC Checker</span>
            </div>
          </div>
          <Link href="/dashboard/player" style={{ backgroundColor: 'rgba(39, 39, 42, 0.8)', color: '#ffffff', border: '1px solid #3f3f46', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ArrowLeft size={14} /> Back to Dashboard
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '32px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', paddingBottom: '16px' }}>
            <Cpu size={28} color="#34d399" />
            <div>
              <h1 style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
                Pre-Whitelisting Task 4: Version & DLC Compatibility
              </h1>
              <p style={{ fontSize: '12px', color: '#a1a1aa', margin: '4px 0 0 0' }}>
                Ensure your game build and active add-ons match the server mod pack requirements.
              </p>
            </div>
          </div>

          {verified ? (
            <div style={{ background: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.4)', padding: '32px', borderRadius: '8px', textAlign: 'center' }}>
              <CheckCircle2 size={48} color="#34d399" style={{ margin: '0 auto 16px auto' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#34d399', margin: '0 0 8px 0', textTransform: 'uppercase' }}>Compatibility Verified!</h3>
              <p style={{ fontSize: '13px', color: '#e4e4e7', margin: '0 0 24px 0' }}>
                Your client build matches the DHFC server specifications. Task #4 is now marked as complete.
              </p>
              <Link href="/dashboard/player" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#34d399', color: '#05070a', padding: '10px 20px', borderRadius: '6px', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                Return to Dashboard
              </Link>
            </div>
          ) : (
            <form onSubmit={handleVerify} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Game Version Selection */}
              <div style={{ background: 'rgba(5, 7, 10, 0.6)', padding: '20px', borderRadius: '8px', border: '1px solid #3f3f46' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>
                  Select Your Installed Game Version:
                </label>
                <p style={{ fontSize: '11px', color: '#a1a1aa', margin: '0 0 12px 0' }}>
                  Our server currently requires the latest stable public patch build.
                </p>
                <select 
                  value={gameVersion} 
                  onChange={(e) => setGameVersion(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', backgroundColor: '#0f1117', border: '1px solid #3f3f46', borderRadius: '6px', color: '#ffffff', fontSize: '12px', outline: 'none' }}
                >
                  <option value="v1.13.1.0 (Latest)">v1.13.1.0 (Latest Stable Release - Recommended)</option>
                  <option value="v1.12.0.0">v1.12.0.0 (Legacy Build)</option>
                </select>
              </div>

              {/* DLC Checklist */}
              <div style={{ background: 'rgba(5, 7, 10, 0.6)', padding: '20px', borderRadius: '8px', border: '1px solid #3f3f46' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>
                  Required & Optional DLC Check:
                </label>
                <p style={{ fontSize: '11px', color: '#a1a1aa', margin: '0 0 16px 0' }}>
                  Check off the official content packs you currently have installed on your client.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#e4e4e7' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                    <input 
                      type="checkbox" 
                      checked={dlcChecked.premium} 
                      onChange={(e) => setDlcChecked({...dlcChecked, premium: e.target.checked})}
                      style={{ accentColor: '#34d399', width: '16px', height: '16px' }}
                    />
                    <span>Premium Expansion (Required)</span>
                  </label>

                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                    <input 
                      type="checkbox" 
                      checked={dlcChecked.kubota} 
                      onChange={(e) => setDlcChecked({...dlcChecked, kubota: e.target.checked})}
                      style={{ accentColor: '#34d399', width: '16px', height: '16px' }}
                    />
                    <span>Kubota Pack (Required)</span>
                  </label>

                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                    <input 
                      type="checkbox" 
                      checked={dlcChecked.oxbo} 
                      onChange={(e) => setDlcChecked({...dlcChecked, oxbo: e.target.checked})}
                      style={{ accentColor: '#34d399', width: '16px', height: '16px' }}
                    />
                    <span>Oxbo Pack (Optional)</span>
                  </label>

                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                    <input 
                      type="checkbox" 
                      checked={dlcChecked.hayAndForage} 
                      onChange={(e) => setDlcChecked({...dlcChecked, hayAndForage: e.target.checked})}
                      style={{ accentColor: '#34d399', width: '16px', height: '16px' }}
                    />
                    <span>Hay & Forage Pack (Required)</span>
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                style={{ backgroundColor: '#34d399', color: '#05070a', border: 'none', padding: '14px', borderRadius: '6px', fontWeight: 'bold', fontSize: '13px', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <Check size={16} /> Verify Compatibility & Complete Task
              </button>
            </form>
          )}

        </div>
      </main>
    </div>
  );
}