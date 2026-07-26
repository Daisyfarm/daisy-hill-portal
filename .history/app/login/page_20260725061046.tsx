'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [callsign, setCallsign] = useState('');
  const [clearanceCode, setClearanceCode] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#05070a', 
      color: '#ffffff', 
      fontFamily: 'sans-serif',
      backgroundImage: 'linear-gradient(rgba(5, 7, 10, 0.6), rgba(5, 7, 10, 0.75)), url("/hero-farm.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '440px', 
        backgroundColor: 'rgba(11, 14, 20, 0.85)', 
        backdropFilter: 'blur(16px)', 
        border: '1px solid rgba(255, 255, 255, 0.15)', 
        borderRadius: '20px', 
        padding: '40px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ color: '#34d399', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.1em' }}>
            FSN Secure Authentication
          </div>
          <h1 style={{ fontSize: '28px', fontWeight: 900, textTransform: 'uppercase', margin: 0, letterSpacing: '0.05em' }}>
            Command Access
          </h1>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', color: '#a1a1aa', marginBottom: '8px' }}>
              Operator Callsign / Discord ID
            </label>
            <input 
              type="text" 
              placeholder="e.g., Hauler_Alpha_99" 
              value={callsign}
              onChange={(e) => setCallsign(e.target.value)}
              required
              style={{ 
                width: '100%', 
                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                border: '1px solid rgba(255, 255, 255, 0.2)', 
                borderRadius: '8px', 
                padding: '14px', 
                color: '#ffffff',
                fontSize: '14px',
                outline: 'none'
              }} 
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', color: '#a1a1aa', marginBottom: '8px' }}>
              Security Clearance Passcode
            </label>
            <input 
              type="password" 
              placeholder="••••••••••••" 
              value={clearanceCode}
              onChange={(e) => setClearanceCode(e.target.value)}
              required
              style={{ 
                width: '100%', 
                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                border: '1px solid rgba(255, 255, 255, 0.2)', 
                borderRadius: '8px', 
                padding: '14px', 
                color: '#ffffff',
                fontSize: '14px',
                outline: 'none'
              }} 
            />
          </div>

          <button 
            type="submit" 
            style={{ 
              backgroundColor: '#34d399', 
              color: '#05070a', 
              fontWeight: 900, 
              textTransform: 'uppercase', 
              padding: '14px', 
              borderRadius: '8px', 
              border: 'none', 
              cursor: 'pointer', 
              fontSize: '13px',
              letterSpacing: '0.05em',
              marginTop: '8px',
              boxShadow: '0 4px 14px rgba(52, 211, 153, 0.4)'
            }}
          >
            Authorize Connection
          </button>
        </form>

        <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '12px', color: '#a1a1aa' }}>
          Need pre-whitelist clearance? <br />
          <Link href="/whitelist" style={{ color: '#34d399', fontWeight: 700, textDecoration: 'none', display: 'inline-block', marginTop: '6px' }}>
            Complete Whitelist Tasks →
          </Link>
        </div>
      </div>
    </div>
  );
}