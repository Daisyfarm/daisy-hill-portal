'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldAlert, CheckCircle, XCircle, Users, ArrowLeft, RefreshCw } from 'lucide-react';

export default function StaffDashboardPage() {
  // Mock list of pending/registered players pulled from the database
  const [registrations, setRegistrations] = useState([
    { id: 1, username: 'FarmerJoe', email: 'joe@example.com', discord: 'FarmerJoe#1234', steamId: 'steam:11000010f234abc', status: 'PENDING' },
    { id: 2, username: 'TractorTom', email: 'tom@example.com', discord: 'TomFarms#5678', steamId: 'steam:11000010f987xyz', status: 'PENDING' },
    { id: 3, username: 'HarvestHarry', email: 'harry@example.com', discord: 'HarryH#9999', steamId: 'steam:11000010f555def', status: 'APPROVED' },
  ]);

  const handleStatusChange = (id: number, newStatus: string) => {
    setRegistrations(prev =>
      prev.map(reg => (reg.id === id ? { ...reg, status: newStatus } : reg))
    );
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
      <header style={{ backgroundColor: 'rgba(11, 14, 20, 0.85)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', padding: '16px 24px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 900 }}>DAISY HILL FARMING COMMUNITY</Link>
            <span style={{ color: '#52525b' }}>|</span>
            <span style={{ color: '#f59e0b' }}>Staff Control Panel</span>
          </div>
          <Link href="/dashboard" style={{ backgroundColor: 'rgba(39, 39, 42, 0.8)', color: '#ffffff', border: '1px solid #3f3f46', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ArrowLeft size={14} /> Back to Dashboard
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Title Bar */}
        <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '24px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
          <div>
            <h1 style={{ fontSize: '20px', fontWeight: 900, textTransform: 'uppercase', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Users size={22} color="#f59e0b" /> Whitelist Applications Manager
            </h1>
            <p style={{ fontSize: '12px', color: '#a1a1aa', margin: '4px 0 0 0' }}>
              Review player credentials, manage server bridge Steam IDs, and approve access.
            </p>
          </div>
        </div>

        {/* Applications Table Card */}
        <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 900, textTransform: 'uppercase', margin: 0, color: '#ffffff' }}>
              Incoming Registrations
            </h3>
            <span style={{ fontSize: '11px', color: '#a1a1aa' }}>Total Records: {registrations.length}</span>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
              <thead>
                <tr style={{ backgroundColor: 'rgba(5, 7, 10, 0.6)', color: '#71717a', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(39, 39, 42, 0.6)' }}>
                  <th style={{ padding: '14px 24px' }}>Username</th>
                  <th style={{ padding: '14px 24px' }}>Discord</th>
                  <th style={{ padding: '14px 24px' }}>Steam Hex / ID</th>
                  <th style={{ padding: '14px 24px' }}>Status</th>
                  <th style={{ padding: '14px 24px', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((reg) => (
                  <tr key={reg.id} style={{ borderBottom: '1px solid rgba(39, 39, 42, 0.4)' }}>
                    <td style={{ padding: '16px 24px', fontWeight: 'bold', color: '#ffffff' }}>
                      {reg.username}
                      <span style={{ display: 'block', fontSize: '11px', color: '#71717a', fontWeight: 'normal' }}>{reg.email}</span>
                    </td>
                    <td style={{ padding: '16px 24px', color: '#e4e4e7' }}>{reg.discord}</td>
                    <td style={{ padding: '16px 24px', color: '#34d399', fontFamily: 'monospace', fontSize: '12px' }}>{reg.steamId}</td>
                    <td style={{ padding: '16px 24px' }}>
                      <span style={{ 
                        fontSize: '11px', 
                        fontWeight: 'bold', 
                        padding: '4px 8px', 
                        borderRadius: '4px', 
                        backgroundColor: reg.status === 'APPROVED' ? 'rgba(52, 211, 153, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                        color: reg.status === 'APPROVED' ? '#34d399' : '#f59e0b',
                        border: reg.status === 'APPROVED' ? '1px solid rgba(52, 211, 153, 0.3)' : '1px solid rgba(245, 158, 11, 0.3)'
                      }}>
                        {reg.status}
                      </span>
                    </td>
                    <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                        <button 
                          onClick={() => handleStatusChange(reg.id, 'APPROVED')}
                          style={{ backgroundColor: 'rgba(52, 211, 153, 0.2)', color: '#34d399', border: '1px solid rgba(52, 211, 153, 0.4)', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}
                        >
                          <CheckCircle size={14} /> Approve
                        </button>
                        <button 
                          onClick={() => handleStatusChange(reg.id, 'REJECTED')}
                          style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)', color: '#fca5a5', border: '1px solid rgba(239, 68, 68, 0.4)', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}
                        >
                          <XCircle size={14} /> Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}