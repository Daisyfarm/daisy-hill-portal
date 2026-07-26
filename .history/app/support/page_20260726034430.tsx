'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, MessageSquare, BookOpen, Send, CheckCircle2, ArrowLeft, Tractor } from 'lucide-react';

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: 'FarmerJoe',
    category: 'Whitelist & Steam ID',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
      <header style={{ backgroundColor: 'rgba(11, 14, 20, 0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', padding: '12px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ backgroundColor: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.4)', padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Tractor size={20} color="#34d399" />
            </div>
            <div>
              <span style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '0.05em', color: '#ffffff', display: 'block' }}>DHFC PORTAL</span>
              <span style={{ fontSize: '9px', color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold' }}>Community Support</span>
            </div>
          </div>
          <Link href="/dashboard/player" style={{ backgroundColor: 'rgba(39, 39, 42, 0.8)', color: '#ffffff', border: '1px solid #3f3f46', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ArrowLeft size={14} /> Back to Dashboard
          </Link>
        </div>
      </header>

      {/* Main Content Container */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'start' }}>
        
        {/* Left Column: FAQs & Community Help */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '24px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HelpCircle size={18} color="#34d399" /> Frequently Asked Questions
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '13px' }}>
              <div style={{ background: 'rgba(5, 7, 10, 0.6)', padding: '12px 16px', borderRadius: '6px', border: '1px solid #3f3f46' }}>
                <strong style={{ color: '#ffffff', display: 'block', marginBottom: '4px' }}>How long does whitelist review take?</strong>
                <span style={{ color: '#a1a1aa' }}>Staff reviews applications within 24 hours. Make sure your Steam Hex ID is accurate.</span>
              </div>

              <div style={{ background: 'rgba(5, 7, 10, 0.6)', padding: '12px 16px', borderRadius: '6px', border: '1px solid #3f3f46' }}>
                <strong style={{ color: '#ffffff', display: 'block', marginBottom: '4px' }}>Where do I find my Steam Hex ID?</strong>
                <span style={{ color: '#a1a1aa' }}>You can use lookup tools like VACDB or SteamID.io by pasting your profile URL.</span>
              </div>

              <div style={{ background: 'rgba(5, 7, 10, 0.6)', padding: '12px 16px', borderRadius: '6px', border: '1px solid #3f3f46' }}>
                <strong style={{ color: '#ffffff', display: 'block', marginBottom: '4px' }}>How do I connect to the server?</strong>
                <span style={{ color: '#a1a1aa' }}>Once approved, your Steam ID automatically synchronizes with the server whitelist.</span>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '24px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookOpen size={18} color="#f59e0b" /> Official Resources
            </h3>
            <p style={{ fontSize: '13px', color: '#a1a1aa', margin: '0 0 16px 0' }}>
              Need direct assistance? Join our official community channels for live support from our moderation team.
            </p>
            <a href="https://discord.com" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#5865F2', color: '#ffffff', padding: '10px 16px', borderRadius: '6px', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold' }}>
              <MessageSquare size={16} /> Open Discord Ticket
            </a>
          </div>

        </div>

        {/* Right Column: Support Ticket Submission Form */}
        <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '32px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Send size={18} color="#34d399" /> Contact Support Team
          </h3>
          <p style={{ fontSize: '13px', color: '#a1a1aa', margin: '0 0 24px 0' }}>
            Submit an inquiry if you are running into technical issues or account lockouts.
          </p>

          {submitted ? (
            <div style={{ background: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.4)', padding: '24px', borderRadius: '8px', textAlign: 'center' }}>
              <CheckCircle2 size={36} color="#34d399" style={{ margin: '0 auto 12px auto' }} />
              <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#34d399', margin: '0 0 8px 0' }}>Ticket Submitted!</h4>
              <p style={{ fontSize: '13px', color: '#e4e4e7', margin: 0 }}>
                Our staff team has received your message and will review it shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#a1a1aa', fontWeight: 'bold', marginBottom: '6px' }}>Your Username</label>
                <input 
                  type="text" 
                  value={formData.name} 
                  disabled 
                  style={{ width: '100%', background: 'rgba(5, 7, 10, 0.6)', border: '1px solid #3f3f46', padding: '10px 14px', borderRadius: '6px', color: '#71717a', fontSize: '13px' }} 
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#a1a1aa', fontWeight: 'bold', marginBottom: '6px' }}>Inquiry Category</label>
                <select 
                  value={formData.category} 
                  onChange={(e5) => setFormData({...formData, category: e5.target.value})}
                  style={{ width: '100%', background: 'rgba(5, 7, 10, 0.9)', border: '1px solid #3f3f46', padding: '10px 14px', borderRadius: '6px', color: '#ffffff', fontSize: '13px' }}
                >
                  <option>Whitelist & Steam ID</option>
                  <option>Account Access</option>
                  <option>Rule Clarification</option>
                  <option>Other Technical Issue</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#a1a1aa', fontWeight: 'bold', marginBottom: '6px' }}>Describe Your Issue</label>
                <textarea 
                  rows={4} 
                  placeholder="Provide details about the problem you are experiencing..." 
                  value={formData.message}
                  onChange={(e6) => setFormData({...formData, message: e6.target.value})}
                  required
                  style={{ width: '100%', background: 'rgba(5, 7, 10, 0.9)', border: '1px solid #3f3f46', padding: '10px 14px', borderRadius: '6px', color: '#ffffff', fontSize: '13px', resize: 'vertical' }}
                />
              </div>

              <button 
                type="submit" 
                style={{ backgroundColor: '#34d399', color: '#05070a', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 'bold', fontSize: '13px', textTransform: 'uppercase', cursor: 'pointer', marginTop: '8px' }}
              >
                Submit Support Ticket
              </button>
            </form>
          )}

        </div>

      </main>
    </div>
  );
}