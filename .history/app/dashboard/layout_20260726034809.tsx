import React from 'react';
import Link from 'next/link';
import { Shield, Tractor, Users, HelpCircle } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#05070a', color: '#ffffff', fontFamily: 'sans-serif' }}>
      {/* Global Dashboard Navigation Bar */}
      <nav style={{ backgroundColor: 'rgba(11, 14, 20, 0.95)', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', padding: '12px 24px', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(8px)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo Structure (DHFC Brand) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ backgroundColor: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.4)', padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Tractor size={20} color="#34d399" />
            </div>
            <div>
              <span style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '0.05em', color: '#ffffff', display: 'block' }}>DHFC PORTAL</span>
              <span style={{ fontSize: '9px', color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold' }}>Daisy Hill Farming Community</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>
            <Link href="/dashboard/player" style={{ color: '#e4e4e7', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 10px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
              <Shield size={14} color="#34d399" /> Player View
            </Link>
            <Link href="/dashboard/staff" style={{ color: '#e4e4e7', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 10px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
              <Users size={14} color="#f59e0b" /> Staff Control Panel
            </Link>
            <Link href="/support" style={{ color: '#e4e4e7', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 10px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
              <HelpCircle size={14} color="#60a5fa" /> Support
            </Link>
          </div>

        </div>
      </nav>

      {/* Main Content Area */}
      <main>
        {children}
      </main>
    </div>
  );
}