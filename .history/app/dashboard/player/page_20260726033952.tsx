'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Clock, User, Gamepad2, MessageSquare, LogOut } from 'lucide-react';

export default function PlayerStatusDashboard() {
  const [userData] = useState({
    username: 'FarmerJoe',
    email: 'joe@example.com',
    discord: 'FarmerJoe#1234',
    steamId: 'steam:11000010f234abc',
    status: 'PENDING_REVIEW',
    submittedDate: 'July 26, 2026',
    preWhitelistTasksCompleted: 2,
    totalPreWhitelistTasks: 4,
  });

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
            <span style={{ color: '#34d399' }}>Player Status Dashboard</span>
          </div>
          <Link href="/registration" style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)', color: '#fca5a5', border: '1px solid rgba(239, 68, 68, 0.4)', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <LogOut size={14} /> Log Out
          </Link>
        </div>
      </header>

      {/* Main Dashboard Grid */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px', alignItems: 'start' }}>
        
        {/* Left Column: Profile & Linked Identifiers Summary */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* User Profile Card */}
          <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '24px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <User size={18} color="#34d399" /> Profile Details
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
              <div>
                <span style={{ color: '#71717a', display: 'block', fontSize: '10px', textTransform: 'uppercase' }}>Username</span>
                <span style={{ fontWeight: 'bold', color: '#ffffff' }}>{userData.username}</span>
              </div>
              <div>
                <span style={{ color: '#71717a', display: 'block', fontSize: '10px', textTransform: 'uppercase' }}>Email</span>
                <span style={{ color: '#e4e4e7' }}>{userData.email}</span>
              </div>
              <div>
                <span style={{ color: '#71717a', display: 'block', fontSize: '10px', textTransform: 'uppercase' }}>Registered Date</span>
                <span style={{ color: '#e4e4e7' }}>{userData.submittedDate}</span>
              </div>
            </div>
          </div>

          {/* Linked Identifiers Card */}
          <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '24px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Gamepad2 size={18} color="#34d399" /> Linked Identifiers
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13px' }}>
              <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(5, 7, 10, 0.6)', padding: '10px', borderRadius: '6px', border: '1px solid #3f3f46' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MessageSquare size={16} color="#5865F2" />
                  <div>
                    <span style={{ color: '#71717a', display: 'block', fontSize: '10px', textTransform: 'uppercase' }}>Discord</span>
                    <span style={{ color: '#e4e4e7', fontSize: '12px' }}>{userData.discord}</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(5, 7, 10, 0.6)', padding: '10px', borderRadius: '6px', border: '1px solid #34d399' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Gamepad2 size={16} color="#34d399" />
                  <div>
                    <span style={{ color: '#71717a', display: 'block', fontSize: '10px', textTransform: 'uppercase' }}>Steam Hex / Game ID</span>
                    <span style={{ color: '#34d399', fontSize: '12px', fontFamily: 'monospace' }}>{userData.steamId}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Whitelist Status & Next Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Whitelist Status Banner */}
          <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(52, 211, 153, 0.4)', padding: '32px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Clock size={28} color="#f59e0b" />
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
                  Application Status: <span style={{ color: '#f59e0b' }}>Pending Review</span>
                </h2>
                <p style={{ fontSize: '12px', color: '#a1a1aa', margin: '4px 0 0 0' }}>
                  Our staff team is currently reviewing your registration details and background information.
                </p>
              </div>
            </div>
            <p style={{ fontSize: '13px', color: '#e4e4e7', lineHeight: 1.6, margin: '0 0 20px 0', borderTop: '1px solid rgba(39, 39, 42, 0.6)', paddingTop: '16px' }}>
              While you wait, you can review community rules or jump into pre-whitelisting tasks below to help speed up your integration into the server once approved!
            </p>
          </div>

          {/* Pre-Whitelisting Tasks Panel */}
          <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '32px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={18} color="#34d399" /> Pre-Whitelisting Progress
            </h3>
            <p style={{ fontSize: '13px', color: '#a1a1aa', margin: '0 0 20px 0' }}>
              Completed: {userData.preWhitelistTasksCompleted} of {userData.totalPreWhitelistTasks} Tasks
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(5, 7, 10, 0.6)', padding: '12px 16px', borderRadius: '6px', border: '1px solid #3f3f46' }}>
                <span style={{ fontSize: '13px', color: '#e4e4e7' }}>1. Read Community Guidelines & Server Rules</span>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#34d399', background: 'rgba(52, 211, 153, 0.1)', padding: '4px 8px', borderRadius: '4px' }}>Completed</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(5, 7, 10, 0.6)', padding: '12px 16px', borderRadius: '6px', border: '1px solid #3f3f46' }}>
                <span style={{ fontSize: '13px', color: '#e4e4e7' }}>2. Join Official Discord & Link Role</span>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#34d399', background: 'rgba(52, 211, 153, 0.1)', padding: '4px 8px', borderRadius: '4px' }}>Completed</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(5, 7, 10, 0.6)', padding: '12px 16px', borderRadius: '6px', border: '1px solid #3f3f46' }}>
                <span style={{ fontSize: '13px', color: '#e4e4e7' }}>3. Complete New Farmer Orientation Survey</span>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#f59e0b', background: 'rgba(245, 158, 11, 0.1)', padding: '4px 8px', borderRadius: '4px' }}>Pending</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(5, 7, 10, 0.6)', padding: '12px 16px', borderRadius: '6px', border: '1px solid #3f3f46' }}>
                <span style={{ fontSize: '13px', color: '#e4e4e7' }}>4. Verify Game Version & DLC Compatibility</span>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#71717a', background: 'rgba(113, 113, 122, 0.1)', padding: '4px 8px', borderRadius: '4px' }}>Locked</span>
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}