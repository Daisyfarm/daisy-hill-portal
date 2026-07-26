'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Building2, ShieldCheck, MapPin, Users, Briefcase, PlusCircle } from 'lucide-react';

export default function CompaniesPage() {
  const [companies] = useState([
    {
      id: 1,
      name: 'Judith Plains Grain & Logistics',
      sector: 'Crop Production & Transport',
      location: 'Sector 4 - Central Silos',
      employees: 14,
      status: 'Active Partner',
      description: 'Primary grain aggregator and heavy transport management network handling regional crop distribution.'
    },
    {
      id: 2,
      name: 'Montana Heavy Machinery Co.',
      sector: 'Equipment & Maintenance',
      location: 'Sector 2 - Industrial Yard',
      employees: 8,
      status: 'Contractor',
      description: 'Specialized maintenance, repair, and auction liquidation provider for heavy agricultural tractors and implements.'
    }
  ]);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#05070a', color: '#ffffff', fontFamily: 'sans-serif' }}>
      <header style={{ backgroundColor: '#0b0e14', borderBottom: '1px solid #1f2937', padding: '16px 32px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px', fontWeight: 900, letterSpacing: '0.05em' }}>
            <span style={{ color: '#ffffff' }}>DAISY HILL COMMUNITY FARM</span>
            <span style={{ color: '#4b5563' }}>/</span>
            <span style={{ color: '#fbbf24', textTransform: 'uppercase' }}>Affiliated Companies</span>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Link href="/companies/register" style={{ backgroundColor: '#fbbf24', color: '#000000', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontSize: '11px', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '6px', textTransform: 'uppercase' }}>
              <PlusCircle size={14} /> Register Company
            </Link>
            <Link href="/" style={{ backgroundColor: '#111827', color: '#e5e7eb', border: '1px solid #374151', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ArrowLeft size={14} /> Back to Command
            </Link>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 32px' }}>
        <div style={{ marginBottom: '32px', borderBottom: '1px solid #1f2937', paddingBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ backgroundColor: 'rgba(251, 191, 36, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(251, 191, 36, 0.2)' }}>
              <Building2 color="#fbbf24" size={26} />
            </div>
            <h1 style={{ fontSize: '28px', fontWeight: 900, textTransform: 'uppercase', margin: 0, letterSpacing: '0.02em' }}>
              Affiliated Network Companies
            </h1>
          </div>
          <p style={{ fontSize: '13px', color: '#9ca3af', margin: 0, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
            Registered commercial entities, co-ops, and player-run operations active within the Daisy Hill network.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '24px' }}>
          {companies.map((comp) => (
            <div key={comp.id} style={{ backgroundColor: '#0b0e14', border: '1px solid #1f2937', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#34d399', padding: '4px 10px', borderRadius: '4px', border: '1px solid rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <ShieldCheck size={12} /> {comp.status}
                  </span>
                  <span style={{ fontSize: '11px', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={12} color="#fbbf24" /> {comp.location}
                  </span>
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', margin: '0 0 6px 0', letterSpacing: '0.01em' }}>
                  {comp.name}
                </h3>
                <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#fbbf24', textTransform: 'uppercase', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Briefcase size={13} /> {comp.sector}
                </div>
                <p style={{ fontSize: '13px', color: '#9ca3af', margin: '0 0 20px 0', lineHeight: '1.5' }}>
                  {comp.description}
                </p>
              </div>

              <div style={{ borderTop: '1px solid #1f2937', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Users size={14} color="#60a5fa" /> Workforce: <strong style={{ color: '#ffffff' }}>{comp.employees} Operators</strong>
                </span>
                <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#fbbf24', textTransform: 'uppercase', backgroundColor: 'rgba(251, 191, 36, 0.05)', padding: '6px 12px', borderRadius: '4px', border: '1px solid rgba(251, 191, 36, 0.15)' }}>
                  Verified Registry
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}