TypeScript
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { User, Shield, Terminal, DollarSign, Key, Cpu } from 'lucide-react';

const sb = createClient('https://dlwhztcqntalrhfrefsk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsd2h6dGNxbnRhbHJoZnJlZnNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NzM2ODgsImV4cCI6MjA4OTQ0OTY4OH0.z_TOBv8Ky9Ksx3hTu19ScXHGcO86-GmwjdYFbdOt8ZY');
const HK = "https://discord.com/api/webhooks/1484184649847804016/o_bj5hINtTTZEux2RBegwBEqLUlNYIMS7Azomm4xadN7S6g353sEJhaaIiExvh0Ct4Za";

export default function MyselfPage() {
  const [u, setU] = useState<any>(null);
  const [ld, setLd] = useState(true);

  const load = async () => {
    const { data: { user } } = await sb.auth.getUser();
    if (user) {
      const { data: profile } = await sb.from('profiles').select('*').eq('id', user.id).single();
      setU(profile);
    }
    setLd(false);
  };

  useEffect(() => { load(); }, []);

  if (ld) return <div style={{background:'#05070a',color:'#fff',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>Accessing Operator Profile...</div>;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#05070a', color: '#ffffff', fontFamily: 'sans-serif' }}>
      <header style={{ backgroundColor: '#0b0e14', borderBottom: '1px solid #27272a', padding: '16px 24px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 900 }}>FARM NETWORK</Link>
            <span style={{ color: '#52525b' }}>|</span>
            <span style={{ color: '#34d399' }}>Operator Profile // {u ? `${u.username} (#${u.id?.slice(0, 4)})` : 'Guest Access'}</span>
          </div>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            {u && <span style={{ color: '#34d399', fontSize: '11px', fontWeight: '900' }}>BAL: ${u.balance?.toLocaleString()}</span>}
            <Link href="/" style={{ backgroundColor: '#27272a', color: '#ffffff', border: '1px solid #3f3f46', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold' }}>
              Back to Command
            </Link>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ marginBottom: '32px', borderBottom: '1px solid #27272a', paddingBottom: '20px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>Operator Profile & Permissions</h1>
          <p style={{ fontSize: '12px', color: '#71717a', margin: '4px 0 0 0', textTransform: 'uppercase' }}>Manage security clearances, assigned machinery nodes, and personal network stats.</p>
        </div>

        {u ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{ backgroundColor: '#0f1117', border: '1px solid #27272a', padding: '24px', borderRadius: '12px' }}>
              <span style={{ fontSize: '10px', color: '#71717a', fontWeight: 'bold', textTransform: 'uppercase' }}>Operator Credentials</span>
              <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', margin: '8px 0 16px 0' }}>{u.username}</h3>
              <div style={{ fontSize: '12px', color: '#a1a1aa', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <p style={{ margin: 0 }}>Security Clearance: <strong style={{ color: '#34d399' }}>{u.role || 'Verified Operator'}</strong></p>
                <p style={{ margin: 0 }}>Assigned Sector: Judith Plains North & South</p>
                <p style={{ margin: 0 }}>Treasury Balance: <strong style={{ color: '#34d399' }}>${u.balance?.toLocaleString()}</strong></p>
                <p style={{ margin: 0 }}>Status: Authorized Administrator</p>
              </div>
            </div>

            <div style={{ backgroundColor: '#0f1117', border: '1px solid #27272a', padding: '24px', borderRadius: '12px' }}>
              <span style={{ fontSize: '10px', color: '#71717a', fontWeight: 'bold', textTransform: 'uppercase' }}>Fleet & Contract Access</span>
              <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', margin: '8px 0 16px 0' }}>Active Authorizations</h3>
              <div style={{ fontSize: '12px', color: '#a1a1aa', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <p style={{ margin: 0 }}>Heavy Machinery Overrides: <span style={{ color: '#34d399', fontWeight: 'bold' }}>Unlocked</span></p>
                <p style={{ margin: 0 }}>Treasury Vault Access: <span style={{ color: '#34d399', fontWeight: 'bold' }}>Full Control</span></p>
                <p style={{ margin: 0 }}>Node Dispatch Rights: <span style={{ color: '#34d399', fontWeight: 'bold' }}>Active</span></p>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ backgroundColor: '#0f1117', border: '1px solid #27272a', padding: '40px', borderRadius: '12px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fff', marginBottom: '10px' }}>No Active Operator Session</h3>
            <p style={{ fontSize: '13px', color: '#71717a', marginBottom: '20px' }}>Please authenticate your profile via Supabase credentials to access your operator permissions.</p>
            <Link href="/login" style={{ background: '#34d399', color: '#05070a', padding: '10px 20px', borderRadius: '6px', fontWeight: '900', fontSize: '12px', textDecoration: 'none', textTransform: 'uppercase' }}>
              Operator Login
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}