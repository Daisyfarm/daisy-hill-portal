'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, MessageSquare, Megaphone, Send, Users, Shield, Hash } from 'lucide-react';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<'discussions' | 'broadcasts'>('discussions');
  const [messageInput, setMessageInput] = useState('');
  
  const [messages, setMessages] = useState([
    {
      id: 1,
      author: 'Operator_Kaelen',
      role: 'Admin',
      content: 'Welcome everyone to the Daisy Hill Community Hub. Keep all logistics channels clean.',
      timestamp: '10:42 AM',
      channel: 'general-chat'
    },
    {
      id: 2,
      author: 'FarmerJim99',
      role: 'Member',
      content: 'Anyone got spare fertilizer for the Judith Plains harvest cycle?',
      timestamp: '10:45 AM',
      channel: 'trade-market'
    }
  ]);

  const broadcasts = [
    {
      id: 1,
      title: 'Mandatory Whitelist Protocol Update',
      author: 'Daisy Hill Command',
      date: 'July 26, 2026',
      content: 'All farm operators must verify their Steam Hex and Discord handles through the registration portal prior to field access.'
    },
    {
      id: 2,
      title: 'Co-op Auction Schedule Adjustment',
      author: 'Logistics Division',
      date: 'July 25, 2026',
      content: 'Surplus machinery lots will now open bidding cycles every Friday at 18:00 UTC.'
    }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      author: 'Current_User',
      role: 'Operator',
      content: messageInput,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      channel: 'general-chat'
    };

    setMessages([...messages, newMessage]);
    setMessageInput('');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#05070a', color: '#ffffff', fontFamily: 'sans-serif' }}>
      {/* Top Header */}
      <header style={{ backgroundColor: '#0b0e14', borderBottom: '1px solid #1f2937', padding: '16px 32px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px', fontWeight: 900, letterSpacing: '0.05em' }}>
            <span style={{ color: '#ffffff' }}>DAISY HILL COMMUNITY FARM</span>
            <span style={{ color: '#4b5563' }}>/</span>
            <span style={{ color: '#fbbf24', textTransform: 'uppercase' }}>Community Hub</span>
          </div>
          <Link href="/" style={{ backgroundColor: '#111827', color: '#e5e7eb', border: '1px solid #374151', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', transition: 'background 0.2s' }}>
            <ArrowLeft size={14} /> Back to Command
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 32px' }}>
        {/* Banner Section */}
        <div style={{ marginBottom: '32px', borderBottom: '1px solid #1f2937', paddingBottom: '24px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 900, textTransform: 'uppercase', margin: '0 0 8px 0', letterSpacing: '0.02em', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Users color="#fbbf24" size={28} /> Daisy Hill Farming Network Hub
          </h1>
          <p style={{ fontSize: '13px', color: '#9ca3af', margin: 0, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
            Welcome to the centralized community network for Daisy Hill. Engage with fellow farmers, participate in discussions, and track community-wide updates.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
          <button
            onClick={() => setActiveTab('discussions')}
            style={{
              backgroundColor: activeTab === 'discussions' ? '#fbbf24' : '#111827',
              color: activeTab === 'discussions' ? '#000000' : '#e5e7eb',
              border: '1px solid #374151',
              padding: '10px 20px',
              borderRadius: '8px',
              fontWeight: 900,
              cursor: 'pointer',
              textTransform: 'uppercase',
              fontSize: '11px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              letterSpacing: '0.05em'
            }}
          >
            <MessageSquare size={15} /> Active Discussions
          </button>
          <button
            onClick={() => setActiveTab('broadcasts')}
            style={{
              backgroundColor: activeTab === 'broadcasts' ? '#fbbf24' : '#111827',
              color: activeTab === 'broadcasts' ? '#000000' : '#e5e7eb',
              border: '1px solid #374151',
              padding: '10px 20px',
              borderRadius: '8px',
              fontWeight: 900,
              cursor: 'pointer',
              textTransform: 'uppercase',
              fontSize: '11px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              letterSpacing: '0.05em'
            }}
          >
            <Megaphone size={15} /> Network Broadcasts
          </button>
        </div>

        {/* Tab Content: Active Discussions */}
        {activeTab === 'discussions' && (
          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '24px', backgroundColor: '#0b0e14', border: '1px solid #1f2937', borderRadius: '12px', overflow: 'hidden', minHeight: '500px' }}>
            {/* Sidebar Channels */}
            <div style={{ backgroundColor: '#080a0f', borderRight: '1px solid #1f2937', padding: '20px' }}>
              <h3 style={{ fontSize: '11px', fontWeight: 900, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
                Network Channels
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', backgroundColor: 'rgba(251, 191, 36, 0.1)', color: '#fbbf24', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold', border: '1px solid rgba(251, 191, 36, 0.2)' }}>
                  <Hash size={14} /> general-chat
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', color: '#9ca3af', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' }}>
                  <Hash size={14} /> trade-market
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', color: '#9ca3af', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' }}>
                  <Hash size={14} /> machinery-ops
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px' }}>
              <div>
                <div style={{ borderBottom: '1px solid #1f2937', paddingBottom: '12px', marginBottom: '20px' }}>
                  <h2 style={{ fontSize: '14px', fontWeight: 900, color: '#ffffff', margin: 0, textTransform: 'uppercase' }}>
                    # general-chat
                  </h2>
                  <p style={{ fontSize: '11px', color: '#9ca3af', margin: '4px 0 0 0' }}>
                    Join real-time network discussions and share operational insights.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '350px', overflowY: 'auto', paddingRight: '8px' }}>
                  {messages.map((msg) => (
                    <div key={msg.id} style={{ backgroundColor: '#111827', border: '1px solid #1f2937', borderRadius: '8px', padding: '14px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '13px', fontWeight: '900', color: '#ffffff' }}>{msg.author}</span>
                          <span style={{ fontSize: '9px', fontWeight: 800, backgroundColor: msg.role === 'Admin' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(59, 130, 246, 0.1)', color: msg.role === 'Admin' ? '#f87171' : '#60a5fa', padding: '2px 6px', borderRadius: '4px', textTransform: 'uppercase' }}>
                            {msg.role}
                          </span>
                        </div>
                        <span style={{ fontSize: '10px', color: '#6b7280' }}>{msg.timestamp}</span>
                      </div>
                      <p style={{ fontSize: '13px', color: '#d1d5db', margin: 0, lineHeight: '1.4' }}>
                        {msg.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message Input Form */}
              <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '12px', marginTop: '20px', borderTop: '1px solid #1f2937', paddingTop: '20px' }}>
                <input 
                  type="text" 
                  placeholder="Type operational message..." 
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  style={{ flex: 1, backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '8px', padding: '12px 16px', color: '#ffffff', fontSize: '13px', outline: 'none' }}
                />
                <button 
                  type="submit" 
                  style={{ backgroundColor: '#fbbf24', color: '#000000', border: 'none', padding: '0 20px', borderRadius: '8px', fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', textTransform: 'uppercase', fontSize: '11px' }}
                >
                  <Send size={14} /> Send
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Tab Content: Network Broadcasts */}
        {activeTab === 'broadcasts' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ borderBottom: '1px solid #1f2937', paddingBottom: '16px' }}>
              <h2 style={{ fontSize: '16px', fontWeight: 900, color: '#ffffff', margin: 0, textTransform: 'uppercase' }}>
                Official Announcements & Guidelines
              </h2>
              <p style={{ fontSize: '12px', color: '#9ca3af', margin: '4px 0 0 0' }}>
                Review official announcements and community guidelines.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '20px' }}>
              {broadcasts.map((broadcast) => (
                <div key={broadcast.id} style={{ backgroundColor: '#0b0e14', border: '1px solid #1f2937', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', backgroundColor: 'rgba(251, 191, 36, 0.1)', color: '#fbbf24', padding: '4px 8px', borderRadius: '4px', border: '1px solid rgba(251, 191, 36, 0.2)' }}>
                        Official Notice
                      </span>
                      <span style={{ fontSize: '11px', color: '#6b7280' }}>{broadcast.date}</span>
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', margin: '0 0 8px 0' }}>
                      {broadcast.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#9ca3af', margin: '0 0 20px 0', lineHeight: '1.5' }}>
                      {broadcast.content}
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid #1f2937', paddingTop: '12px', fontSize: '11px', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Shield size={14} color="#fbbf24" /> Broadcast Source: <strong style={{ color: '#d1d5db' }}>{broadcast.author}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}