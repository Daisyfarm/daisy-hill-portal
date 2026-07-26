'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Building2, PlusCircle, CheckCircle2 } from 'lucide-react';

export default function RegisterCompanyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    sector: 'Crop Production',
    location: 'Sector 1',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#05070a', color: '#ffffff', fontFamily: 'sans-serif' }}>
      <header style={{ backgroundColor: '#0b0e14', borderBottom: '1px solid #1f2937', padding: '16px 32px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px', fontWeight: 900, letterSpacing: '0.05em' }}>
            <span style={{ color: '#ffffff' }}>DAISY HILL COMMUNITY FARM</span>
            <span style={{ color: '#4b5563' }}>/</span>
            <span style={{ color: '#fbbf24', textTransform: 'uppercase' }}>Company Registry</span>
          </div>
          <Link href="/companies" style={{ backgroundColor: '#111827', color: '#e5e7eb', border: '1px solid #374151', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ArrowLeft size={14} /> Back to Directory
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: '800px', margin: '40px auto', padding: '0 24px' }}>
        <div style={{ marginBottom: '32px', borderBottom: '1px solid #1f2937', paddingBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ backgroundColor: 'rgba(251, 191, 36, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(251, 191, 36, 0.2)' }}>
              <Building2 color="#fbbf24" size={26} />
            </div>
            <h1 style={{ fontSize: '28px', fontWeight: 900, textTransform: 'uppercase', margin: 0, letterSpacing: '0.02em' }}>
              Register a New Company
            </h1>
          </div>
          <p style={{ fontSize: '13px', color: '#9ca3af', margin: 0, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
            Establish a formal commercial enterprise or cooperative within the Daisy Hill network framework.
          </p>
        </div>

        {submitted ? (
          <div style={{ backgroundColor: '#0b0e14', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
            <CheckCircle2 color="#34d399" size={48} style={{ margin: '0 auto 16px auto' }} />
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#ffffff', marginBottom: '8px' }}>REGISTRATION SUBMITTED</h2>
            <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '24px' }}>
              Your application for <strong style={{ color: '#fbbf24' }}>{formData.name}</strong> has been logged into the network queue for verification.
            </p>
            <Link href="/companies" style={{ backgroundColor: '#fbbf24', color: '#000000', padding: '10px 20px', borderRadius: '6px', textDecoration: 'none', fontSize: '12px', fontWeight: 900, textTransform: 'uppercase' }}>
              Return to Directory
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ backgroundColor: '#0b0e14', border: '1px solid #1f2937', borderRadius: '12px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#9ca3af', marginBottom: '8px' }}>
                Company Name
              </label>
              <input 
                type="text" 
                required
                placeholder="e.g., Red River Logistics"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{ width: '100%', padding: '12px', backgroundColor: '#05070a', border: '1px solid #374151', borderRadius: '6px', color: '#ffffff', fontSize: '14px', outline: 'none' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#9ca3af', marginBottom: '8px' }}>
                  Operational Sector
                </label>
                <select 
                  value={formData.sector}
                  onChange={(e) => setFormData({...formData, sector: e.target.value})}
                  style={{ width: '100%', padding: '12px', backgroundColor: '#05070a', border: '1px solid #374151', borderRadius: '6px', color: '#ffffff', fontSize: '14px', outline: 'none' }}
                >
                  <option value="Crop Production">Crop Production & Transport</option>
                  <option value="Equipment & Maintenance">Equipment & Maintenance</option>
                  <option value="Supplies & Nutrients">Supplies & Nutrients</option>
                  <option value="General Trade">General Trade & Services</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#9ca3af', marginBottom: '8px' }}>
                  Assigned Location / Yard
                </label>
                <select 
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  style={{ width: '100%', padding: '12px', backgroundColor: '#05070a', border: '1px solid #374151', borderRadius: '6px', color: '#ffffff', fontSize: '14px', outline: 'none' }}
                >
                  <option value="Sector 1">Sector 1 - Research Facility</option>
                  <option value="Sector 2">Sector 2 - Industrial Yard</option>
                  <option value="Sector 3">Sector 3 - Distribution Hub</option>
                  <option value="Sector 4">Sector 4 - Central Silos</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#9ca3af', marginBottom: '8px' }}>
                Enterprise Overview
              </label>
              <textarea 
                rows={4}
                required
                placeholder="Briefly describe your company's mission and services..."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                style={{ width: '100%', padding: '12px', backgroundColor: '#05070a', border: '1px solid #374151', borderRadius: '6px', color: '#ffffff', fontSize: '14px', outline: 'none', resize: 'vertical' }}
              />
            </div>

            <button type="submit" style={{ backgroundColor: '#fbbf24', color: '#000000', padding: '14px', borderRadius: '6px', border: 'none', fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '10px' }}>
              <PlusCircle size={16} /> Submit Registration Protocol
            </button>
          </form>
        )}
      </main>
    </div>
  );
}