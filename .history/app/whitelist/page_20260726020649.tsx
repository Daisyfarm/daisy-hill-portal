'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, ArrowLeft, Award, Globe } from 'lucide-react';

export default function WhitelistPage() {
  const [submitted, setSubmitted] = useState(false);
  const [country, setCountry] = useState('AFGHANISTAN');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#05070a', color: '#ffffff', fontFamily: 'sans-serif' }}>
      <header style={{ backgroundColor: '#0b0e14', borderBottom: '1px solid #27272a', padding: '16px 24px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 900 }}>IRON DAISY AGRI</Link>
            <span style={{ color: '#52525b' }}>|</span>
            <span style={{ color: '#a855f7' }}>Whitelist & Access Queue</span>
          </div>
          <Link href="/" style={{ backgroundColor: '#27272a', color: '#ffffff', border: '1px solid #3f3f46', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ArrowLeft size={14} /> Back to Command
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
          <div style={{ backgroundColor: '#0f1117', border: '1px solid #27272a', padding: '16px', borderRadius: '8px' }}>
            <span style={{ fontSize: '10px', color: '#71717a', textTransform: 'uppercase' }}>Identity</span>
            <div style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '4px' }}>WELCOME</div>
          </div>
          <div style={{ backgroundColor: '#0f1117', border: '1px solid #27272a', padding: '16px', borderRadius: '8px' }}>
            <span style={{ fontSize: '10px', color: '#71717a', textTransform: 'uppercase' }}>Clearance Tier</span>
            <div style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '4px', color: '#a855f7' }}>LEVEL 1</div>
          </div>
          <div style={{ backgroundColor: '#0f1117', border: '1px solid #27272a', padding: '16px', borderRadius: '8px' }}>
            <span style={{ fontSize: '10px', color: '#71717a', textTransform: 'uppercase' }}>Credits Balance</span>
            <div style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '4px', color: '#34d399' }}>$0.00</div>
          </div>
          <div style={{ backgroundColor: '#0f1117', border: '1px solid #27272a', padding: '16px', borderRadius: '8px' }}>
            <span style={{ fontSize: '10px', color: '#71717a', textTransform: 'uppercase' }}>Queue Metrics</span>
            <div style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '4px' }}>0 / 0</div>
          </div>
        </div>

        <div style={{ marginBottom: '32px', borderBottom: '1px solid #27272a', paddingBottom: '24px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 900, textTransform: 'uppercase', margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck color="#a855f7" size={22} /> Pre-Whitelist Area
          </h1>
          <p style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.6, margin: '0 0 12px 0' }}>
            Hey there! You&apos;ve made it here because you have signed up but have not been whitelisted. This is an area where you can login daily for a little reward and to help expedite your whitelisting speed.
          </p>
          <p style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.6, margin: '0 0 12px 0' }}>
            The more daily logins and tutorial quizzes you complete, the faster you&apos;ll move up the whitelisting queue, because we want to make sure everyone coming into FSN is going to help contribute to continuing to make it an awesome and unique experience!
          </p>
          <p style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.6, margin: 0 }}>
            Go ahead and get started by checking the daily task each day, answering the 5 daily questions, and then working your way through as many of the starter tutorials as you can!
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'start' }}>
          <div style={{ backgroundColor: '#0f1117', border: '1px solid #27272a', padding: '24px', borderRadius: '12px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: 900, textTransform: 'uppercase', margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px', color: '#fbbf24' }}>
              ⚡ Daily Task
            </h2>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 12px 0' }}>Task #1 - Where are you from?</h3>
            
            <form onSubmit={handleSubmit}>
              <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: '#71717a', marginBottom: '6px', fontWeight: 'bold' }}>
                My Country
              </label>
              <select 
                value={country} 
                onChange={(e) => setCountry(e.target.value)}
                style={{ width: '100%', padding: '10px', backgroundColor: '#05070a', color: '#ffffff', border: '1px solid #3f3f46', borderRadius: '6px', marginBottom: '16px', fontSize: '13px' }}
              >
                <option value="AFGHANISTAN">AFGHANISTAN</option>
                <option value="UNITED STATES">UNITED STATES</option>
                <option value="UNITED KINGDOM">UNITED KINGDOM</option>
                <option value="CANADA">CANADA</option>
                <option value="GERMANY">GERMANY</option>
                <option value="AUSTRALIA">AUSTRALIA</option>
              </select>

              <button 
                type="submit"
                style={{ backgroundColor: '#27272a', color: '#ffffff', border: '1px solid #3f3f46', padding: '8px 16px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', cursor: 'pointer', display: 'block', width: '100%' }}
              >
                Submit Daily Task
              </button>
            </form>

            <div style={{ marginTop: '16px', fontSize: '12px', color: '#a1a1aa', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Award size={14} color="#fbbf24" /> Reward: Gold Bale x 1 {submitted && <span style={{ color: '#34d399', fontWeight: 'bold' }}>(Claimed!)</span>}
            </div>
          </div>

          <div style={{ backgroundColor: '#0f1117', border: '1px solid #27272a', padding: '24px', borderRadius: '12px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: 900, textTransform: 'uppercase', margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8' }}>
              📦 Mod Voting Terminal
            </h2>
            <p style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.5, margin: '0 0 16px 0' }}>
              Place your vote to get mod reviews reviewed for potentially being added. Each time a batch of mods is selected, no uncommon mods will lose its votes, meaning even if you don&apos;t get enough votes for reviewing in this batch, you win the next!
            </p>
            <div style={{ fontSize: '12px', color: '#71717a', marginBottom: '12px' }}>
              Active Status: <strong style={{ color: '#ffffff' }}>Queue Open & Synchronized</strong>
            </div>
            <Link href="#" style={{ fontSize: '12px', color: '#a855f7', textDecoration: 'underline', fontWeight: 'bold' }}>
              Access Rank Tiers & Clearance
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}