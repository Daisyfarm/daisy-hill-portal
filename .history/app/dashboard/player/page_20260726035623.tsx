'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Tractor, User, Mail, Calendar, CheckCircle2, Clock, AlertCircle, ExternalLink } from 'lucide-react';

export default function PlayerDashboard() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundImage: 'linear-gradient(rgba(5, 7, 10, 0.4), rgba(5, 7, 10, 0.5)), url("/JD2.jpg")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundAttachment: 'fixed',
      color: '#ffffff', 
      fontFamily: 'sans-serif',
      paddingBottom: '40px'
    }}>
      
      {/* Sub-Header bar for Dashboard context */}
      <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.6)', borderBottom: '1px solid rgba(39, 39, 42, 0.4)', padding: '12px 24px', marginBottom: '32px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.1em', color: '#a1a1aa', textTransform: 'uppercase' }}>
            Daisy Hill Farming Community | <span style={{ color: '#34d399' }}>Member Status Dashboard</span>
          </span>
          <Link href="/dashboard" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#f87171', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase' }}>
            Log Out
          </Link>
        </div>
      </div>

      {/* Main Grid Content */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px' }}>
        
        {/* Left Column: Profile & Identifiers */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Profile Details Box */}
          <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '24px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
            <h3 style={{ fontSize: '13px', fontWeight: 900, color: '#34d399', textTransform: 'uppercase', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px', letterSpacing: '0.05em' }}>
              <User size={16} /> Profile Details
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '12px' }}>
              <div>
                <span style={{ color: '#71717a', display: 'block', fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold' }}>Username</span>
                <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '13px' }}>FarmerJoe</span>
              </div>
              <div>
                <span style={{ color: '#71717a', display: 'block', fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold' }}>Email</span>
                <span style={{ color: '#e4e4e7' }}>joe@example.com</span>
              </div>
              <div>
                <span style={{ color: '#71717a', display: 'block', fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold' }}>Registered Date</span>
                <span style={{ color: '#e4e4e7' }}>July 26, 2026</span>
              </div>
            </div>
          </div>

          {/* Linked Identifiers Box */}
          <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '24px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
            <h3 style={{ fontSize: '13px', fontWeight: 900, color: '#34d399', textTransform: 'uppercase', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px', letterSpacing: '0.05em' }}>
              <Shield size={16} /> Linked Identifiers
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '12px' }}>
              <div style={{ backgroundColor: 'rgba(5, 7, 10, 0.6)', padding: '10px 14px', borderRadius: '6px', border: '1px solid #27272a' }}>
                <span style={{ color: '#71717a', display: 'block', fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold' }}>Discord</span>
                <span style={{ color: '#e4e4e7', fontWeight: 'bold' }}>FarmerJoe#1234</span>
              </div>
              <div style={{ backgroundColor: 'rgba(5, 7, 10, 0.6)', padding: '10px 14px', borderRadius: '6px', border: '1px solid rgba(52, 211, 153, 0.3)' }}>
                <span style={{ color: '#71717a', display: 'block', fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold' }}>Steam Hex / Game ID</span>
                <span style={{ color: '#34d399', fontWeight: 'bold', fontFamily: 'monospace' }}>steam:11000010f234abc</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Status & Checklist */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Status Banner */}
          <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(245, 158, 11, 0.4)', padding: '24px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <Clock size={24} color="#f59e0b" />
              <div>
                <h2 style={{ fontSize: '16px', fontWeight: 900, color: '#f59e0b', textTransform: 'uppercase', margin: 0 }}>
                  Application Status: Pending Review
                </h2>
                <p style={{ fontSize: '11px', color: '#a1a1aa', margin: '2px 0 0 0' }}>
                  Our staff team is currently reviewing your registration details and background information.
                </p>
              </div>
            </div>
            <p style={{ fontSize: '12px', color: '#e4e4e7', margin: 0, borderTop: '1px solid rgba(39, 39, 42, 0.6)', paddingTop: '12px', lineHeight: 1.5 }}>
              While you wait, you can review community rules or jump into pre-whitelisting tasks below to help speed up your integration into the server once approved!
            </p>
          </div>

          {/* Pre-Whitelisting Progress Checklist */}
          <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '24px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
            <h3 style={{ fontSize: '13px', fontWeight: 900, color: '#34d399', textTransform: 'uppercase', margin: '0 0 4px 0', display: 'flex', alignItems: 'center', gap: '8px', letterSpacing: '0.05em' }}>
              <CheckCircle2 size={16} /> Pre-Whitelisting Progress
            </h3>
            <p style={{ fontSize: '11px', color: '#a1a1aa', margin: '0 0 16px 0' }}>Completed: 2 of 4 Tasks</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              
              {/* Task 1 */}
              <Link href="/rules" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(5, 7, 10, 0.6)', padding: '12px 16px', borderRadius: '6px', border: '1px solid #27272a' }}>
                <span style={{ fontSize: '12px', color: '#e4e4e7', fontWeight: 'bold' }}>1. Read Community Guidelines & Server Rules</span>
                <span style={{ backgroundColor: 'rgba(52, 211, 153, 0.1)', color: '#34d399', border: '1px solid rgba(52, 211, 153, 0.3)', padding: '3px 10px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                  Completed
                </span>
              </Link>

              {/* Task 2 */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(5, 7, 10, 0.6)', padding: '12px 16px', borderRadius: '6px', border: '1px solid #27272a' }}>
                <span style={{ fontSize: '12px', color: '#e4e4e7', fontWeight: 'bold' }}>2. Join Official Discord & Link Role</span>
                <span style={{ backgroundColor: 'rgba(52, 211, 153, 0.1)', color: '#34d399', border: '1px solid rgba(52, 211, 153, 0.3)', padding: '3px 10px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                  Completed
                </span>
              </div>

              {/* Task 3 (Linked to Survey) */}
              <Link href="/survey" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(5, 7, 10, 0.6)', padding: '12px 16px', borderRadius: '6px', border: '1px solid rgba(245, 158, 11, 0.4)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '12px', color: '#ffffff', fontWeight: 'bold' }}>3. Complete New Farmer Orientation Survey</span>
                  <ExternalLink size={14} color="#f59e0b" />
                </div>
                <span style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', border: '1px solid rgba(245, 158, 11, 0.3)', padding: '3px 10px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                  Pending
                </span>
              </Link>

              {/* Task 4 */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(5, 7, 10, 0.4)', padding: '12px 16px', borderRadius: '6px', border: '1px solid #18181b', opacity: 0.6 }}>
                <span style={{ fontSize: '12px', color: '#71717a', fontWeight: 'bold' }}>4. Verify Game Version & DLC Compatibility</span>
                <span style={{ backgroundColor: 'rgba(113, 113, 122, 0.1)', color: '#71717a', border: '1px solid rgba(113, 113, 122, 0.2)', padding: '3px 10px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                  Locked
                </span>
              </div>

            </div>
          </div>

        </div>

      </main>
    </div>
  );
}