'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function RegistrationPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#05070a', color: '#ffffff', fontFamily: 'sans-serif', padding: '40px 24px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#0b0e14', border: '1px solid #27272a', padding: '32px', borderRadius: '12px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '8px' }}>IRON DAISY AGRI Registration</h1>
        <p style={{ fontSize: '12px', color: '#a1a1aa', textTransform: 'uppercase', marginBottom: '24px' }}>Secure your access to the command network.</p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '6px', color: '#d4d4d8' }}>Operator Alias</label>
            <input type="text" placeholder="Enter callsign" style={{ width: '100%', padding: '10px 14px', backgroundColor: '#181b22', border: '1px solid #27272a', borderRadius: '6px', color: '#ffffff', fontSize: '14px' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '6px', color: '#d4d4d8' }}>Access Frequency / Email</label>
            <input type="email" placeholder="name@domain.com" style={{ width: '100%', padding: '10px 14px', backgroundColor: '#181b22', border: '1px solid #27272a', borderRadius: '6px', color: '#ffffff', fontSize: '14px' }} />
          </div>
          <button type="submit" style={{ marginTop: '8px', backgroundColor: '#34d399', color: '#05070a', fontWeight: 900, padding: '12px', borderRadius: '6px', border: 'none', cursor: 'pointer', textTransform: 'uppercase', fontSize: '12px' }}>
            Initialize Registration
          </button>
        </form>
        
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Link href="/" style={{ fontSize: '11px', color: '#a1a1aa', textDecoration: 'none' }}>← Return to Command Center</Link>
        </div>
      </div>
    </div>
  );
}