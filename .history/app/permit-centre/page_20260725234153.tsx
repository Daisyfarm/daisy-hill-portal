'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { ShieldCheck, FileText, CheckCircle2, AlertCircle, PlusCircle } from 'lucide-react';

const sb = createClient('https://dlwhztcqntalrhfrefsk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsd2h6dGNxbnRhbHJoZnJlZnNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NzM2ODgsImV4cCI6MjA4OTQ0OTY4OH0.z_TOBv8Ky9Ksx3hTu19ScXHGcO86-GmwjdYFbdOt8ZY');
const HK = "https://discord.com/api/webhooks/1484184649847804016/o_bj5hINtTTZEux2RBegwBEqLUlNYIMS7Azomm4xadN7S6g353sEJhaaIiExvh0Ct4Za";

export default function PermitCentrePage() {
    const [u, setU] = useState<any>(null);
    const [permits, setPermits] = useState<any[]>([]);
    const [ld, setLd] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [permitType, setPermitType] = useState('Land Development Permit');
    const [sector, setSector] = useState('Judith Plains North');
    const [details, setDetails] = useState('');

    const load = async () => {
        const { data: { user } } = await sb.auth.getUser();
        if (user) {
            const { data: profile } = await sb.from('profiles').select('*').eq('id', user.id).single();
            setU(profile);
        }

        const { data } = await sb
            .from('permits')
            .select('*, applicant:profiles!permits_applicant_id_fkey(username)')
            .order('created_at', { ascending: false });

        if (data && data.length > 0) {
            setPermits(data);
        } else {
            // Fallback static list if database table is empty or unpopulated
            setPermits([
                { id: 1, permit_type: 'Land Development Permit', sector: 'Judith Plains North', details: 'Clearing timber for commercial grain silo construction', status: 'Approved', applicant: { username: 'Samuel Founder' } },
                { id: 2, permit_type: 'Heavy Transport License', sector: 'Judith Plains South', details: 'Oversized Class-8 combine harvester escort routing', status: 'Pending Review', applicant: { username: 'DaisyFarmer' } }
            ]);
        }
        setLd(false);
    };

    useEffect(() => { load(); }, []);

    const handleApplyPermit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!u) {
            alert("Please log in to submit a permit application.");
            return;
        }

        const { error } = await sb.from('permits').insert([{
            applicant_id: u.id,
            permit_type: permitType,
            sector,
            details,
            status: 'Pending Review'
        }]);

        if (!error) {
            await fetch(HK, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    content: `🪪 **NEW PERMIT APPLICATION SUBMITTED**\n**Applicant:** ${u.username}\n**Type:** ${permitType}\n**Sector:** ${sector}\n**Details:** ${details}`
                })
            });

            alert("Permit application submitted successfully for review!");
            setDetails('');
            setShowForm(false);
            load();
        } else {
            alert("Error submitting permit application: " + error.message);
        }
    };

    if (ld) return <div style={{background:'#030712',color:'#fff',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>Accessing Permit Bureau...</div>;

    return (
        <div style={{ 
            minHeight: 'calc(100vh - 90px)', 
            backgroundImage: 'linear-gradient(rgba(3, 7, 18, 0.75), rgba(3, 7, 18, 0.85)), url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=80")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundAttachment: 'fixed',
            color: '#f3f4f6', 
            padding: '40px 20px', 
            fontFamily: 'Arial, sans-serif' 
        }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
                    <Link href="/" style={{ color: '#34d399', textDecoration: 'none', fontSize: '13px', fontWeight: 'bold' }}>
                        ← Back to Network Hub
                    </Link>
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        {u && <span style={{ fontSize: '12px', color: '#34d399', fontWeight: 'bold' }}>BAL: ${u.balance?.toLocaleString()}</span>}
                        <button 
                            onClick={() => setShowForm(!showForm)}
                            style={{ background: '#34d399', color: '#030712', border: 'none', padding: '10px 18px', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}
                        >
                            + Apply for Permit
                        </button>
                    </div>
                </div>

                <div style={{ 
                    background: 'rgba(17, 24, 39, 0.9)', 
                    backdropFilter: 'blur(12px)', 
                    border: '1px solid rgba(255, 255, 255, 0.1)', 
                    borderRadius: '16px', 
                    padding: '40px',
                    boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.6)',
                    marginBottom: '30px'
                }}>
                    <div style={{ fontSize: '32px', marginBottom: '10px' }}>🪪</div>
                    <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#ffffff', margin: '0 0 10px 0' }}>
                        Permit Centre
                    </h1>
                    <p style={{ fontSize: '14px', color: '#9ca3af', lineHeight: '1.6' }}>
                        Apply for and manage land development permits, transport licenses, and operating credentials across <span style={{ color: '#34d399', fontWeight: 'bold' }}>Judith Plains Montana 4X</span>.
                    </p>
                </div>

                {/* Permit Application Form Modal / Box */}
                {showForm && (
                    <form onSubmit={handleApplyPermit} style={{ background: 'rgba(31, 41, 55, 0.95)', border: '1px solid #374151', borderRadius: '12px', padding: '25px', marginBottom: '30px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', color: '#fff' }}>Submit Official Permit Application</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginBottom: '15px' }}>
                            <select 
                                value={permitType} 
                                onChange={(e) => setPermitType(e.target.value)}
                                style={{ padding: '10px', background: '#374151', color: '#fff', border: '1px solid #4b5563', borderRadius: '6px', fontSize: '13px' }}
                            >
                                <option>Land Development Permit</option>
                                <option>Heavy Transport License</option>
                                <option>Water Rights & Irrigation Permit</option>
                                <option>Commercial Zoning Clearance</option>
                            </select>
                            <select 
                                value={sector} 
                                onChange={(e) => setSector(e.target.value)}
                                style={{ padding: '10px', background: '#374151', color: '#fff', border: '1px solid #4b5563', borderRadius: '6px', fontSize: '13px' }}
                            >
                                <option>Judith Plains North</option>
                                <option>Judith Plains South</option>
                                <option>North-West Valley Sector</option>
                                <option>Eastern Plateau</option>
                            </select>
                        </div>
                        <textarea 
                            placeholder="Detailed justification / project overview (e.g. constructing greenhouse complex on Plot 14)..." 
                            value={details} 
                            onChange={(e) => setDetails(e.target.value)}
                            style={{ width: '100%', padding: '12px', background: '#374151', color: '#fff', border: '1px solid #4b5563', borderRadius: '6px', fontSize: '13px', minHeight: '90px', marginBottom: '15px', boxSizing: 'border-box' }}
                            required
                        />
                        <button type="submit" style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '10px 20px', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}>
                            Submit Application
                        </button>
                    </form>
                )}

                {/* Permits Registry List */}
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Active Permits & License Registry</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px' }}>
                    {permits.map((p) => (
                        <div key={p.id} style={{ background: 'rgba(17, 24, 39, 0.85)', border: '1px solid #374151', borderRadius: '12px', padding: '22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                    <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#34d399', textTransform: 'uppercase' }}>{p.permit_type}</span>
                                    <span style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '4px', background: p.status === 'Approved' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(234, 179, 8, 0.2)', color: p.status === 'Approved' ? '#34d399' : '#facc15', fontWeight: 'bold' }}>
                                        {p.status || 'Pending Review'}
                                    </span>
                                </div>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#fff', margin: '0 0 6px 0' }}>{p.sector}</h3>
                                <p style={{ fontSize: '13px', color: '#9ca3af', margin: '0 0 15px 0', lineHeight: '1.4' }}>{p.details}</p>
                            </div>
                            <div style={{ borderTop: '1px solid #374151', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#9ca3af' }}>
                                <span>Applicant: <strong style={{ color: '#fff' }}>{p.applicant?.username || p.applicant || 'Operator'}</strong></span>
                                <span>Judith Plains Bureau</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}