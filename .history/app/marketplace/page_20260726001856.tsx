'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Ticket, ArrowLeft } from 'lucide-react';

export default function LottoCenterPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#05070a', color: '#ffffff', fontFamily: 'sans-serif' }}>
      <header style={{ backgroundColor: '#0b0e14', borderBottom: '1px solid #27272a', padding: '16px 24px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 900 }}>IRON DAISY AGRI</Link>
            <span style={{ color: '#52525b' }}>|</span>
            <span style={{ color: '#f43f5e' }}>Lotto & Community Center</span>
          </div>
          <Link href="/" style={{ backgroundColor: '#27272a', color: '#ffffff', border: '1px solid #3f3f46', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ArrowLeft size={14} /> Back to Command
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ marginBottom: '32px', borderBottom: '1px solid #27272a', paddingBottom: '20px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 900, textTransform: 'uppercase', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Ticket color="#f43f5e" size={24} /> Regional Incentive & Community Fund
          </h1>
          <p style={{ fontSize: '12px', color: '#71717a', margin: '4px 0 0 0', textTransform: 'uppercase' }}>Manage cooperative community sweepstakes, worker reward drawings, and bonus funds.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div style={{ backgroundColor: '#0f1117', border: '1px solid #27272a', padding: '24px', borderRadius: '12px' }}>
            <span style={{ fontSize: '10px', color: '#f43f5e', fontWeight: 'bold', textTransform: 'uppercase' }}>Harvest Bonus Draw</span>
            <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', margin: '8px 0 8px 0' }}>Quarterly Worker Incentive</h2>
            <p style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.5, margin: '0 0 16px 0' }}>Allocating community rewards and efficiency prizes for top-performing field operations teams.</p>
            <span style={{ fontSize: '11px', color: '#34d399', fontWeight: 900, textTransform: 'uppercase' }}>● Status: Active Pool</span>
          </div>

          <div style={{ backgroundColor: '#0f1117', border: '1px solid #27272a', padding: '24px', borderRadius: '12px' }}>
            <span style={{ fontSize: '10px', color: '#f43f5e', fontWeight: 'bold', textTransform: 'uppercase' }}>Community Fund #12</span>
            <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', margin: '8px 0 8px 0' }}>Equipment Upgrade Raffle</h2>
            <p style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.5, margin: '0 0 16px 0' }}>Special regional drawing funding automated maintenance gear and safety upgrades for local stations.</p>
            <span style={{ fontSize: '11px', color: '#fbbf24', fontWeight: 'bold', textTransform: 'uppercase' }}>● Status: Drawing Soon</span>
          </div>
        </div>
      </main>
    </div>
  );
}