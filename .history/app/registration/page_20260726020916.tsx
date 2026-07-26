'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { UserPlus, ArrowLeft, KeyRound, Mail, MessageSquare, User } from 'lucide-react';

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    discord: '',
    reason: '',
    referrer: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration Data:', formData);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#05070a', color: '#ffffff', fontFamily: 'sans-serif' }}>
      <header style={{ backgroundColor: '#0b0e14', borderBottom: '1px solid #27272a', padding: '16px 24px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 900 }}>IRON DAISY AGRI</Link>
            <span style={{ color: '#52525b' }}>|</span>
            <span style={{ color: '#34d399' }}>Personnel Registration</span>
          </div>
          <Link href="/" style={{ backgroundColor: '#27272a', color: '#ffffff', border: '1px solid #3f3f46', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ArrowLeft size={14} /> Back to Command
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ marginBottom: '32px', borderBottom: '1px solid #27272a', paddingBottom: '20px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 900, textTransform: 'uppercase', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <UserPlus color="#34d399" size={24} /> Operator Onboarding
          </h1>
          <p style={{ fontSize: '12px', color: '#71717a', margin: '4px 0 0 0', textTransform: 'uppercase' }}>Provide your details to register and request access to the regional agricultural network.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px', alignItems: 'start' }}>
          <div style={{ backgroundColor: '#0f1117', border: '1px solid #27272a', padding: '32px', borderRadius: '12px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', margin: '0 0 24px 0', textTransform: 'uppercase' }}>Registration Form</h2>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#a1a1aa', marginBottom: '6px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <User size={14} /> Username
                </label>
                <input 
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Choose a unique username"
                  required
                  style={{ width: '100%', padding: '12px', backgroundColor: '#05070a', color: '#ffffff', border: '1px solid #3f3f46', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#a1a1aa', marginBottom: '6px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <KeyRound size={14} /> Password
                </label>
                <input 
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create a secure password"
                  required
                  style={{ width: '100%', padding: '12px', backgroundColor: '#05070a', color: '#ffffff', border: '1px solid #3f3f46', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#a1a1aa', marginBottom: '6px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Mail size={14} /> Email Address
                </label>
                <input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your operational email"
                  required
                  style={{ width: '100%', padding: '12px', backgroundColor: '#05070a', color: '#ffffff', border: '1px solid #3f3f46', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#a1a1aa', marginBottom: '6px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MessageSquare size={14} /> Discord Handle (Example#1234)
                </label>
                <input 
                  name="discord"
                  type="text"
                  value={formData.discord}
                  onChange={handleInputChange}
                  placeholder="Your Discord username and tag"
                  required
                  style={{ width: '100%', padding: '12px', backgroundColor: '#05070a', color: '#ffffff', border: '1px solid #3f3f46', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#a1a1aa', marginBottom: '6px', fontWeight: 'bold' }}>
                  Why do you think Iron Daisy is for you? Be thorough!
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  placeholder="Explain your interest in joining our agricultural operations..."
                  required
                  rows={5}
                  style={{ width: '100%', padding: '12px', backgroundColor: '#05070a', color: '#ffffff', border: '1px solid #3f3f46', borderRadius: '6px', fontSize: '14px', resize: 'vertical' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#a1a1aa', marginBottom: '6px', fontWeight: 'bold' }}>
                  Did someone refer you? Enter their code here!
                </label>
                <input 
                  name="referrer"
                  type="text"
                  value={formData.referrer}
                  onChange={handleInputChange}
                  placeholder="Optional referral code"
                  style={{ width: '100%', padding: '12px', backgroundColor: '#05070a', color: '#ffffff', border: '1px solid #3f3f46', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>

              <button 
                type="submit"
                style={{ marginTop: '12px', backgroundColor: '#34d399', color: '#05070a', border: 'none', padding: '14px 24px', borderRadius: '6px', fontSize: '14px', fontWeight: 900, textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'background-color 0.2s' }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6ee7b7'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#34d399'}
              >
                <UserPlus size={18} /> Submit Registration Request
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}