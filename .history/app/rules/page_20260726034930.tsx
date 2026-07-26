'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, ShieldAlert, CheckCircle, ArrowLeft, Tractor } from 'lucide-react';

export default function RulesPage() {
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
      <header style={{ backgroundColor: 'rgba(11, 14, 20, 0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', padding: '12px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ backgroundColor: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.4)', padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Tractor size={20} color="#34d399" />
            </div>
            <div>
              <span style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '0.05em', color: '#ffffff', display: 'block' }}>DHFC PORTAL</span>
              <span style={{ fontSize: '9px', color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold' }}>Community Rules</span>
            </div>
          </div>
          <Link href="/dashboard/player" style={{ backgroundColor: 'rgba(39, 39, 42, 0.8)', color: '#ffffff', border: '1px solid #3f3f46', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ArrowLeft size={14} /> Back to Dashboard
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Intro Card */}
        <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(52, 211, 153, 0.4)', padding: '32px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <BookOpen size={28} color="#34d399" />
            <div>
              <h1 style={{ fontSize: '20px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
                Server Regulations & Code of Conduct
              </h1>
              <p style={{ fontSize: '12px', color: '#a1a1aa', margin: '4px 0 0 0' }}>
                Daisy Hill Farming Community is built on immersive gameplay, mutual respect, and realistic farming simulation.
              </p>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: '#e4e4e7', lineHeight: 1.6, margin: 0, borderTop: '1px solid rgba(39, 39, 42, 0.6)', paddingTop: '16px' }}>
            All members and whitelisted players are required to follow these guidelines while interacting on our game servers and community Discord channels.
          </p>
        </div>

        {/* Rule Sections */}
        <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '32px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#34d399', textTransform: 'uppercase', margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={18} /> 1. General & Community Respect
            </h3>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#e4e4e7', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Treat all members, guests, and staff with absolute respect. Harassment, toxicity, or discrimination of any kind will result in immediate removal.</li>
              <li>Keep chat and voice channels clean and appropriate. Avoid excessive spam or disruptive background noise.</li>
            </ul>
          </div>

          <div style={{ borderTop: '1px solid rgba(39, 39, 42, 0.6)', paddingTop: '20px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#34d399', textTransform: 'uppercase', margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={18} /> 2. Gameplay & Farm Operations
            </h3>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#e4e4e7', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Respect player-owned plots, machinery, and active crop yields. Do not tamper with or steal equipment belonging to other farmers.</li>
              <li>Maintain realistic driving speeds and follow property boundaries while operating heavy agricultural machinery across public roads.</li>
              <li>Ensure proper cleanup of dropped objects, trailers, and pallets to preserve server optimization and performance.</li>
            </ul>
          </div>

          <div style={{ borderTop: '1px solid rgba(39, 39, 42, 0.6)', paddingTop: '20px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#f59e0b', textTransform: 'uppercase', margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldAlert size={18} /> 3. Enforcement & Penalties
            </h3>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#e4e4e7', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Staff decisions regarding rule violations and server balance are final.</li>
              <li>Violations can result in temporary suspensions, formal warnings, or permanent revocation of whitelist status.</li>
            </ul>
          </div>

        </div>

      </main>
    </div>
  );
}