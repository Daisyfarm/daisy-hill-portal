'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Building2, ArrowLeft } from 'lucide-react';

export default function CompaniesPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#05070a', color: '#ffffff', fontFamily: 'sans-serif' }}>
      <header style={{ backgroundColor: '#0b0e14', borderBottom: '1px solid #27272a', padding: '16px 24px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 900 }}>IRON DAISY AGRI</Link>
            <span style={{ color: '#52525b' }}>|</span>
            <span style={{ color: '#60a5fa' }}>Associated Enterprises</span>
          </div>
          <Link href="/" style={{ backgroundColor: '#27272a', color: '#ffffff', border: '1px solid #3f3f46', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ArrowLeft size={14} /> Back to Command
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ marginBottom: '32px', borderBottom: '1px solid #27272a', paddingBottom: '20px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 900, textTransform: 'uppercase', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Building2 color="#60a5fa" size={24} /> Registered Companies & Partners
          </h1>
          <p style={{ fontSize: '12px', color: '#71717a', margin: '4px 0 0 0', textTransform: 'uppercase' }}>Manage affiliated agricultural vendors, logistics networks, and corporate entities.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div style={{ backgroundColor: '#0f1117', border: '1px solid #27272a', padding: '24px', borderRadius: '12px' }}>
            <span style={{ fontSize: '10px', color: '#60a5fa', fontWeight: 'bold', textTransform: 'uppercase' }}>Primary Vendor</span>
            <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', margin: '8px 0 8px 0' }}>AgriCorp Logistics Ltd.</h2>
            <p style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.5, margin: '0 0 16px 0' }}>Managing cross-regional grain shipping routes and heavy transport equipment leasing.</p>
            <span style={{ fontSize: '11px', color: '#34d399', fontWeight: 900, textTransform: 'uppercase' }}>● Status: Verified Partner</span>
          </div>

          <div style={{ backgroundColor: '#0f1117', border: '1px solid #27272a', padding: '24px', borderRadius: '12px' }}>
            <span style={{ fontSize: '10px', color: '#60a5fa', fontWeight: 'bold', textTransform: 'uppercase' }}>Telemetry Supplier</span>
            <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', margin: '8px 0 8px 0' }}>Precision Field Tech</h2>
            <p style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.5, margin: '0 0 16px 0' }}>Providing satellite GPS navigation systems, sensor arrays, and automated diagnostic modules.</p>
            <span style={{ fontSize: '11px', color: '#34d399', fontWeight: 900, textTransform: 'uppercase' }}>● Status: Active Contract</span>
          </div>
        </div>
      </main>
    </div>
  );
}