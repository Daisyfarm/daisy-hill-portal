'use client';

import React from 'react';
import Link from 'next/link';

export default function FinanceDashboard() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#05070a', 
      color: '#ffffff', 
      fontFamily: 'sans-serif',
      backgroundImage: 'linear-gradient(rgba(5, 7, 10, 0.55), rgba(5, 7, 10, 0.65)), url("/hero-farm.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Top Header Nav */}
      <header style={{ backgroundColor: 'rgba(11, 14, 20, 0.65)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', padding: '16px 24px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Link href="/" style={{ color: '#ffffff', fontWeight: 900, textDecoration: 'none' }}>FARM NETWORK</Link>
            <span style={{ color: '#71717a' }}>|</span>
            <span style={{ color: '#34d399' }}>Enterprise Command System v2.4</span>
          </div>
          <div style={{ display: 'flex', gap: '20px', fontSize: '11px' }}>
            <Link href="/market" style={{ color: '#d4d4d8', textDecoration: 'none' }}>Market Index</Link>
            <Link href="/contracts" style={{ color: '#d4d4d8', textDecoration: 'none' }}>Contracts</Link>
            <Link href="/fleet" style={{ color: '#d4d4d8', textDecoration: 'none' }}>Fleet</Link>
            <Link href="/dispatch" style={{ color: '#d4d4d8', textDecoration: 'none' }}>Dispatch</Link>
            <Link href="/event-center" style={{ color: '#d4d4d8', textDecoration: 'none' }}>Events</Link>
            <Link href="/field-work" style={{ color: '#d4d4d8', textDecoration: 'none' }}>Fields</Link>
            <Link href="/import-export" style={{ color: '#d4d4d8', textDecoration: 'none' }}>Imports</Link>
            <Link href="/finance" style={{ color: '#34d399', textDecoration: 'none' }}>Finance</Link>
          </div>
        </div>
      </header>

      {/* Main Command Center Layout */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
          <div>
            <div style={{ color: '#34d399', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.1em', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
              Financial Sector Alpha • Status: Secure Ledger
            </div>
            <h1 style={{ fontSize: '36px', fontWeight: 900, textTransform: 'uppercase', margin: 0, letterSpacing: '0.05em', textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>
              Financial Operations Command
            </h1>
          </div>
          <div style={{ backgroundColor: 'rgba(11, 14, 20, 0.75)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '12px 20px', borderRadius: '8px', fontSize: '12px', display: 'flex', gap: '16px' }}>
            <div>
              <span style={{ color: '#a1a1aa' }}>Ledger Sync: </span>
              <span style={{ color: '#34d399', fontWeight: 900 }}>ACTIVE</span>
            </div>
            <span style={{ color: '#3f3f46' }}>|</span>
            <div>
              <span style={{ color: '#a1a1aa' }}>Audit Status: </span>
              <span style={{ color: '#60a5fa', fontWeight: 900 }}>OPTIMAL</span>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          <div style={{ backgroundColor: 'rgba(11, 14, 20, 0.75)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ fontSize: '10px', fontWeight: 900, color: '#a1a1aa', textTransform: 'uppercase', marginBottom: '8px' }}>Gross Liquidity</div>
            <div style={{ fontSize: '28px', fontWeight: 900, color: '#ffffff' }}>$128,430.50</div>
            <div style={{ fontSize: '11px', color: '#34d399', marginTop: '4px' }}>+14.2% vs previous cycle</div>
          </div>
          <div style={{ backgroundColor: 'rgba(11, 14, 20, 0.75)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ fontSize: '10px', fontWeight: 900, color: '#a1a1aa', textTransform: 'uppercase', marginBottom: '8px' }}>Monthly Inflow</div>
            <div style={{ fontSize: '28px', fontWeight: 900, color: '#34d399' }}>+$45,231.89</div>
            <div style={{ fontSize: '11px', color: '#d4d4d8', marginTop: '4px' }}>Verified grain & contract clearance</div>
          </div>
          <div style={{ backgroundColor: 'rgba(11, 14, 20, 0.75)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ fontSize: '10px', fontWeight: 900, color: '#a1a1aa', textTransform: 'uppercase', marginBottom: '8px' }}>Operational Outflows</div>
            <div style={{ fontSize: '28px', fontWeight: 900, color: '#ef4444' }}>-$12,450.00</div>
            <div style={{ fontSize: '11px', color: '#d4d4d8', marginTop: '4px' }}>Infrastructure & fuel logistics</div>
          </div>
          <div style={{ backgroundColor: 'rgba(11, 14, 20, 0.75)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ fontSize: '10px', fontWeight: 900, color: '#a1a1aa', textTransform: 'uppercase', marginBottom: '8px' }}>Pending Authorization</div>
            <div style={{ fontSize: '28px', fontWeight: 900, color: '#eab308' }}>$3,420.00</div>
            <div style={{ fontSize: '11px', color: '#d4d4d8', marginTop: '4px' }}>3 items awaiting review</div>
          </div>
        </div>

        {/* Transaction Records Table Section */}
        <div style={{ backgroundColor: 'rgba(11, 14, 20, 0.75)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ padding: '24px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 900, textTransform: 'uppercase', margin: 0, letterSpacing: '0.05em', color: '#ffffff' }}>
                System Transaction Ledger
              </h3>
              <p style={{ fontSize: '11px', color: '#d4d4d8', margin: '4px 0 0 0' }}>Real-time tracking of network financial traffic.</p>
            </div>
            <span style={{ fontSize: '11px', color: '#34d399', fontWeight: 900, textTransform: 'uppercase' }}>● LIVE FEED</span>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: 'rgba(5, 7, 10, 0.5)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', color: '#a1a1aa', fontSize: '11px', textTransform: 'uppercase' }}>
                  <th style={{ padding: '16px' }}>Transaction Reference</th>
                  <th style={{ padding: '16px' }}>Classification</th>
                  <th style={{ padding: '16px' }}>Timestamp</th>
                  <th style={{ padding: '16px' }}>Status</th>
                  <th style={{ padding: '16px', textAlign: 'right' }}>Net Value</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: '13px' }}>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '16px', fontWeight: 'bold', color: '#ffffff' }}>Client Payment #1042</td>
                  <td style={{ padding: '16px', color: '#d4d4d8' }}>Inbound Revenue</td>
                  <td style={{ padding: '16px', color: '#71717a' }}>July 25, 2026 - 04:12</td>
                  <td style={{ padding: '16px' }}>
                    <span style={{ backgroundColor: 'rgba(52, 211, 153, 0.1)', color: '#34d399', border: '1px solid rgba(52, 211, 153, 0.2)', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase' }}>
                      Cleared
                    </span>
                  </td>
                  <td style={{ padding: '16px', textAlign: 'right', fontWeight: 'bold', color: '#34d399' }}>+$1,250.00</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '16px', fontWeight: 'bold', color: '#ffffff' }}>Cloud Server Infrastructure</td>
                  <td style={{ padding: '16px', color: '#d4d4d8' }}>Hosting & Node Cost</td>
                  <td style={{ padding: '16px', color: '#71717a' }}>July 24, 2026 - 18:30</td>
                  <td style={{ padding: '16px' }}>
                    <span style={{ backgroundColor: 'rgba(52, 211, 153, 0.1)', color: '#34d399', border: '1px solid rgba(52, 211, 153, 0.2)', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase' }}>
                      Cleared
                    </span>
                  </td>
                  <td style={{ padding: '16px', textAlign: 'right', fontWeight: 'bold', color: '#ef4444' }}>-$140.00</td>
                </tr>
                <tr>
                  <td style={{ padding: '16px', fontWeight: 'bold', color: '#ffffff' }}>Enterprise Software Suite</td>
                  <td style={{ padding: '16px', color: '#d4d4d8' }}>Tooling & Licenses</td>
                  <td style={{ padding: '16px', color: '#71717a' }}>July 22, 2026 - 09:15</td>
                  <td style={{ padding: '16px' }}>
                    <span style={{ backgroundColor: 'rgba(234, 179, 8, 0.1)', color: '#eab308', border: '1px solid rgba(234, 179, 8, 0.2)', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase' }}>
                      Auditing
                    </span>
                  </td>
                  <td style={{ padding: '16px', textAlign: 'right', fontWeight: 'bold', color: '#ef4444' }}>-$45.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}