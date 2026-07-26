'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { UserPlus, ArrowLeft, KeyRound, Mail, MessageSquare, User, LogIn } from 'lucide-react';

export default function RegistrationPage() {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [regData, setRegData] = useState({
    username: '',
    password: '',
    email: '',
    discord: '',
    reason: '',
    referrer: '',
  });

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', loginData);
  };

  const handleRegSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration attempt:', regData);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#05070a', color: '#ffffff', fontFamily: 'sans-serif' }}>
      <header style={{ backgroundColor: '#0b0e14', borderBottom: '1px solid #27272a', padding: '16px 24px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 900 }}>IRON DAISY AGRI</Link>
            <span style={{ color: '#52525b' }}>|</span>
            <span style={{ color: '#34d399' }}>Portal Access & Onboarding</span>
          </div>
          <Link href="/" style={{ backgroundColor: '#27272a', color: '#ffffff', border: '1px solid #3f3f46', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ArrowLeft size={14} /> Back to Command
          </Link>
        </div>
      </header>

      {/* Top Pre-Member Login Section */}
      <section style={{ backgroundColor: '#0f1117', borderBottom: '1px solid #27272a', padding: '32px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ fontSize: '12px', color: '#34d399', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '16px', letterSpacing: '0.05em' }}>
              Pre-Member Login
            </h2>
            <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
              <input 
                type="text" 
                placeholder="Username" 
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                required
                style={{ padding: '10px 14px', backgroundColor: '#05070a', color: '#ffffff', border: '1px solid #3f3f46', borderRadius: '6px', fontSize: '13px' }}
              />
              <input 
                type="password" 
                placeholder="Password" 
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                required
                style={{ padding: '10px 14px', backgroundColor: '#05070a', color: '#ffffff', border: '1px solid #3f3f46', borderRadius: '6px', fontSize: '13px' }}
              />
              <button 
                type="submit"
                style={{ backgroundColor: '#2563eb', color: '#ffffff', border: 'none', padding: '10px 16px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
              >
                <LogIn size={14} /> Login
              </button>
            </form>
          </div>

          <div style={{ textAlign: 'right' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '0.05em', margin: 0, color: '#ffffff' }}>
              IRON <span style={{ color: '#34d399' }}>DAISY</span>
            </h1>
            <p style={{ fontSize: '14px', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '4px 0 0 0', fontWeight: 'bold' }}>
              Agricultural Command Network
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid: Welcome Panel Left, Registration Right */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'start' }}>
        
        {/* Welcome Section */}
        <div style={{ backgroundColor: '#0f1117', border: '1px solid #27272a', padding: '32px', borderRadius: '12px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#34d399', textTransform: 'uppercase', margin: '0 0 16px 0' }}>
            Welcome!
          </h2>
          <p style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.6, margin: '0 0 16px 0' }}>
            On behalf of everyone at Iron Daisy, thank you for coming along to give us a shot. You simply will not find another experience like this anywhere. Due to that fact, and our popularity with players, this portal is designed to do several things:
          </p>
          <ul style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.8, paddingLeft: '20px', margin: '0 0 20px 0' }}>
            <li>Get you signed up.</li>
            <li>Make sure we&apos;re a good fit.</li>
            <li>Help you participate in the network before your whitelisting!</li>
          </ul>
          <p style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.6, margin: 0 }}>
            In order for us to do the above, we&apos;ll need you to fill out the form to the right. Be sure to fill it out completely and be thorough with your answers so we can best ensure proper handling of your application. Once you have signed up, you can check back daily to see your status, as well as participate in pre-whitelisting tasks that can help you jump start your career!
          </p>
        </div>

        {/* Registration Form Section */}
        <div style={{ backgroundColor: '#0f1117', border: '1px solid #27272a', padding: '32px', borderRadius: '12px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <UserPlus size={18} color="#34d399" /> Registration
          </h2>

          <form onSubmit={handleRegSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#a1a1aa', marginBottom: '6px', fontWeight: 'bold' }}>
                Username
              </label>
              <input 
                type="text"
                value={regData.username}
                onChange={(e) => setRegData({ ...regData, username: e.target.value })}
                required
                style={{ width: '100%', padding: '10px 12px', backgroundColor: '#05070a', color: '#ffffff', border: '1px solid #3f3f46', borderRadius: '6px', fontSize: '13px' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#a1a1aa', marginBottom: '6px', fontWeight: 'bold' }}>
                Password
              </label>
              <input 
                type="password"
                value={regData.password}
                onChange={(e) => setRegData({ ...regData, password: e.target.value })}
                required
                style={{ width: '100%', padding: '10px 12px', backgroundColor: '#05070a', color: '#ffffff', border: '1px solid #3f3f46', borderRadius: '6px', fontSize: '13px' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#a1a1aa', marginBottom: '6px', fontWeight: 'bold' }}>
                Email
              </label>
              <input 
                type="email"
                value={regData.email}
                onChange={(e) => setRegData({ ...regData, email: e.target.value })}
                required
                style={{ width: '100%', padding: '10px 12px', backgroundColor: '#05070a', color: '#ffffff', border: '1px solid #3f3f46', borderRadius: '6px', fontSize: '13px' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#a1a1aa', marginBottom: '6px', fontWeight: 'bold' }}>
                Discord Handle (Include the 4 digits eg: Example#1234)
              </label>
              <input 
                type="text"
                value={regData.discord}
                onChange={(e) => setRegData({ ...regData, discord: e.target.value })}
                required
                style={{ width: '100%', padding: '10px 12px', backgroundColor: '#05070a', color: '#ffffff', border: '1px solid #3f3f46', borderRadius: '6px', fontSize: '13px' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#a1a1aa', marginBottom: '6px', fontWeight: 'bold' }}>
                Why do you think Iron Daisy is for you? Be thorough!
              </label>
              <textarea
                value={regData.reason}
                onChange={(e) => setRegData({ ...regData, reason: e.target.value })}
                required
                rows={4}
                style={{ width: '100%', padding: '10px 12px', backgroundColor: '#05070a', color: '#ffffff', border: '1px solid #3f3f46', borderRadius: '6px', fontSize: '13px', resize: 'vertical' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#a1a1aa', marginBottom: '6px', fontWeight: 'bold' }}>
                Came from your favorite streamer or youtuber? Enter their code here!
              </label>
              <input 
                type="text"
                value={regData.referrer}
                onChange={(e) => setRegData({ ...regData, referrer: e.target.value })}
                style={{ width: '100%', padding: '10px 12px', backgroundColor: '#05070a', color: '#ffffff', border: '1px solid #3f3f46', borderRadius: '6px', fontSize: '13px' }}
              />
            </div>

            <button 
              type="submit"
              style={{ marginTop: '8px', backgroundColor: '#34d399', color: '#05070a', border: 'none', padding: '12px 20px', borderRadius: '6px', fontSize: '13px', fontWeight: 900, textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              Submit Registration
            </button>
          </form>
        </div>

      </main>
    </div>
  );
}