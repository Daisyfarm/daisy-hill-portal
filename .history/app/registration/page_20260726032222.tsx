'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { UserPlus, ArrowLeft, LogIn } from 'lucide-react';

export default function RegistrationPage() {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [regData, setRegData] = useState({
    username: '',
    password: '',
    email: '',
    discord: '',
    steamId: '',
    reason: '',
    referrer: '',
  });

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', loginData);
  };

  const handleRegSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration attempt with linked identifiers:', regData);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundImage: 'linear-gradient(rgba(5, 7, 10, 0.35), rgba(5, 7, 10, 0.45)), url("/JD2.jpg")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundAttachment: 'fixed',
      color: '#ffffff', 
      fontFamily: 'sans-serif' 
    }}>
      <header style={{ backgroundColor: 'rgba(11, 14, 20, 0.85)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', padding: '16px 24px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 900 }}>DAISY HILL FARMING COMMUNITY</Link>
            <span style={{ color: '#52525b' }}>|</span>
            <span style={{ color: '#34d399' }}>Portal Access & Onboarding</span>
          </div>
          <Link href="/" style={{ backgroundColor: 'rgba(39, 39, 42, 0.8)', color: '#ffffff', border: '1px solid #3f3f46', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ArrowLeft size={14} /> Back to Command
          </Link>
        </div>
      </header>

      {/* Top Pre-Member Login Section */}
      <section style={{ backgroundColor: 'rgba(15, 17, 23, 0.75)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', padding: '32px 24px' }}>
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
                style={{ padding: '10px 14px', backgroundColor: 'rgba(5, 7, 10, 0.8)', color: '#ffffff', border: '1px solid #3f3f46', borderRadius: '6px', fontSize: '13px' }}
              />
              <input 
                type="password" 
                placeholder="Password" 
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                required
                style={{ padding: '10px 14px', backgroundColor: 'rgba(5, 7, 10, 0.8)', color: '#ffffff', border: '1px solid #3f3f46', borderRadius: '6px', fontSize: '13px' }}
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
            <h1 style={{ fontSize: '28px', fontWeight: 900, letterSpacing: '0.05em', margin: 0, color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
              DAISY HILL <span style={{ color: '#34d399' }}>FARMING</span>
            </h1>
            <p style={{ fontSize: '14px', color: '#e4e4e7', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '4px 0 0 0', fontWeight: 'bold', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
              Community Network
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid: Welcome Panel Left, Registration Right */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'start' }}>
        
        {/* Welcome Section */}
        <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '32px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#34d399', textTransform: 'uppercase', margin: '0 0 16px 0' }}>
            Welcome!
          </h2>
          <p style={{ fontSize: '13px', color: '#e4e4e7', lineHeight: 1.6, margin: '0 0 16px 0' }}>
            On behalf of everyone at Daisy Hill Farming Community, thank you for coming along to give us a shot. You simply will not find another experience like this anywhere. Due to that fact, and our popularity with players, this portal is designed to do several things:
          </p>
          <ul style={{ fontSize: '13px', color: '#e4e4e7', lineHeight: 1.8, paddingLeft: '20px', margin: '0 0 20px 0' }}>
            <li>Get you signed up.</li>
            <li>Make sure we&apos;re a good fit.</li>
            <li>Help you participate in Daisy Hill before your whitelisting!</li>
          </ul>
          <p style={{ fontSize: '13px', color: '#e4e4e7', lineHeight: 1.6, margin: 0 }}>
            In order for us to do the above, we&apos;ll need you to fill out the form to the right. Be sure to fill it out completely and be thorough with your answers so we can best ensure proper handling of your application. Once you have signed up, you can check back daily to see your status, as well as participate in pre-whitelisting tasks that can help you jump start your Daisy Hill career!
          </p>
        </div>

        {/* Registration Form Section */}
        <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '32px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <UserPlus size={18} color="#34d399" /> Registration
          </h2>

          <form onSubmit={handleRegSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#e4e4e7', marginBottom: '6px', fontWeight: 'bold' }}>
                Username
              </label>
              <input 
                type="text"
                value={regData.username}
                onChange={(e) => setRegData({ ...regData, username: e.target.value })}
                required
                style={{ width: '100%', padding: '10px 12px', backgroundColor: 'rgba(5, 7, 10, 0.8)', color: '#ffffff', border: '1px solid #3f3f46', borderRadius: '6px', fontSize: '13px' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#e4e4e7', marginBottom: '6px', fontWeight: 'bold' }}>
                Password
              </label>
              <input 
                type="password"
                value={regData.password}
                onChange={(e) => setRegData({ ...regData, password: e.target.value })}
                required
                style={{ width: '100%', padding: '10px 12px', backgroundColor: 'rgba(5, 7, 10, 0.8)', color: '#ffffff', border: '1px solid #3f3f46', borderRadius: '6px', fontSize: '13px' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#e4e4e7', marginBottom: '6px', fontWeight: 'bold' }}>
                Email
              </label>
              <input 
                type="email"
                value={regData.email}
                onChange={(e) => setRegData({ ...regData, email: e.target.value })}
                required
                style={{ width: '100%', padding: '10px 12px', backgroundColor: 'rgba(5, 7, 10, 0.8)', color: '#ffffff', border: '1px solid #3f3f46', borderRadius: '6px', fontSize: '13px' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#e4e4e7', marginBottom: '6px', fontWeight: 'bold' }}>
                Discord Handle (e.g., Example#1234 or Username)
              </label>
              <input 
                type="text"
                value={regData.discord}
                onChange={(e) => setRegData({ ...regData, discord: e.target.value })}
                required
                style={{ width: '100%', padding: '10px 12px', backgroundColor: 'rgba(5, 7, 10, 0.8)', color: '#ffffff', border: '1px solid #3f3f46', borderRadius: '6px', fontSize: '13px' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#34d399', marginBottom: '6px', fontWeight: 'bold' }}>
                Steam Hex / Game ID (Required for Server Bridge)
              </label>
              <input 
                type="text"
                placeholder="e.g., steam:11000010f... or Farm ID"
                value={regData.steamId}
                onChange={(e) => setRegData({ ...regData, steamId: e.target.value })}
                required
                style={{ width: '100%', padding: '10px 12px', backgroundColor: 'rgba(5, 7, 10, 0.8)', color: '#ffffff', border: '1px solid #34d399', borderRadius: '6px', fontSize: '13px' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#e4e4e7', marginBottom: '6px', fontWeight: 'bold' }}>
                Why do you think Daisy Hill is for you? Be thorough!
              </label>
              <textarea
                value={regData.reason}
                onChange={(e) => setRegData({ ...regData, reason: e.target.value })}
                required
                rows={4}
                style={{ width: '100%', padding: '10px 12px', backgroundColor: 'rgba(5, 7, 10, 0.8)', color: '#ffffff', border: '1px solid #3f3f46', borderRadius: '6px', fontSize: '13px', resize: 'vertical' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#e4e4e7', marginBottom: '6px', fontWeight: 'bold' }}>
                Came from your favorite streamer or youtuber? Enter their code here!
              </label>
              <input 
                type="text"
                value={regData.referrer}
                onChange={(e) => setRegData({ ...regData, referrer: e.target.value })}
                style={{ width: '100%', padding: '10px 12px', backgroundColor: 'rgba(5, 7, 10, 0.8)', color: '#ffffff', border: '1px solid #3f3f46', borderRadius: '6px', fontSize: '13px' }}
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