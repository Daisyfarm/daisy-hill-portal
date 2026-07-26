'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AgreementsPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#05070a', color: '#ffffff', fontFamily: 'sans-serif' }}>
      <header style={{ backgroundColor: '#0b0e14', borderBottom: '1px solid #27272a', padding: '16px 24px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 900 }}>IRON DAISY AGRI</Link>
            <span style={{ color: '#52525b' }}>|</span>
            <span style={{ color: '#34d399' }}>Agreements & Contracts</span>
          </div>
          <Link href="/" style={{ backgroundColor: '#27272a', color: '#ffffff', border: '1px solid #3f3f46', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold' }}>
            Back to Command
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ marginBottom: '32px', borderBottom: '1px solid #27272a', paddingBottom: '20px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>Active Agreements</h1>
          <p style={{ fontSize: '12px', color: '#71717a', margin: '4px 0 0 0', textTransform: 'uppercase' }}>Review operational protocols, logistics deals, and field compacts.</p>
        </div>

        <div style={{ backgroundColor: '#0f1117', border: '1px solid #27272a', padding: '24px', borderRadius: '12px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 900, color: '#ffffff', margin: '0 0 8px 0', textTransform: 'uppercase' }}>Standard Logistics Compact</h2>
          <p style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.5, margin: '0 0 16px 0' }}>All regional grain hauls must maintain strict compliance with Rotterdam port tariffs and safety schedules.</p>
          <span style={{ fontSize: '11px', color: '#34d399', fontWeight: 900, textTransform: 'uppercase' }}>● Status: Active & Validated</span>
        </div>
      </main>
    </div>
  );
}