"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { Gavel, Clock, DollarSign, MapPin, CheckCircle } from 'lucide-react';

const sb = createClient('https://dlwhztcqntalrhfrefsk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsd2h6dGNxbnRhbHJoZnJlZnNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NzM2ODgsImV4cCI6MjA4OTQ0OTY4OH0.z_TOBv8Ky9Ksx3hTu19ScXHGcO86-GmwjdYFbdOt8ZY');

export default function AuctionHousePage() {
    const [parcels, setParcels] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [biddingId, setBiddingId] = useState<number | null>(null);
    const [bidAmount, setBidAmount] = useState('');

    useEffect(() => {
        async function fetchParcels() {
            try {
                const { data, error } = await sb
                    .from('land_parcels')
                    .select('*')
                    .order('parcel_id', { ascending: true });

                if (error) throw error;
                if (data) setParcels(data);
            } catch (err: any) {
                console.error("Error fetching auction data:", err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchParcels();
    }, []);

    const handlePlaceBid = async (parcelId: number) => {
        if (!bidAmount || isNaN(Number(bidAmount))) {
            alert("Please enter a valid bid amount.");
            return;
        }

        setBiddingId(parcelId);
        try {
            alert(`Successfully placed a bid of $${bidAmount} on Parcel #${parcelId}! Note: 48-hour logistical processing window applies upon winning.`);
            setBidAmount('');
            setBiddingId(null);
        } catch (err: any) {
            alert("Error placing bid: " + (err.message || "Unknown error"));
            setBiddingId(null);
        }
    };

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
                <div style={{ marginBottom: '20px' }}>
                    <Link href="/" style={{ color: '#34d399', textDecoration: 'none', fontSize: '13px', fontWeight: 'bold' }}>
                        ← Back to Network Hub
                    </Link>
                </div>

                {/* Main Glass Header */}
                <div style={{ 
                    background: 'rgba(17, 24, 39, 0.9)', 
                    backdropFilter: 'blur(12px)', 
                    border: '1px solid rgba(255, 255, 255, 0.1)', 
                    borderRadius: '16px', 
                    padding: '40px',
                    boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.6)',
                    marginBottom: '30px'
                }}>
                    <div style={{ fontSize: '32px', marginBottom: '10px' }}>🔨</div>
                    <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#ffffff', margin: '0 0 10px 0' }}>
                        Auction House
                    </h1>
                    <p style={{ fontSize: '14px', color: '#9ca3af', lineHeight: '1.6' }}>
                        Bid on heavy machinery, surplus fleet equipment, and land lots available across <span style={{ color: '#34d399', fontWeight: 'bold' }}>Judith Plains Montana 4X</span>.
                    </p>
                </div>

                {/* Auction Items Grid */}
                {loading ? (
                    <div style={{ textAlign: 'center', color: '#9ca3af', padding: '50px', background: 'rgba(17, 24, 39, 0.8)', borderRadius: '12px' }}>
                        Loading live auction registry...
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px' }}>
                        {parcels.map((parcel) => (
                            <div key={parcel.parcel_id} style={{ 
                                background: 'rgba(17, 24, 39, 0.85)', 
                                backdropFilter: 'blur(8px)',
                                border: '1px solid rgba(255, 255, 255, 0.08)', 
                                borderRadius: '12px', 
                                padding: '24px', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent: 'space-between',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
                            }}>
                              
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                                        <div>
                                            <span style={{ background: parcel.region === 'america' ? '#1e3a8a' : '#701a75', color: '#fff', fontSize: '10px', fontWeight: 'bold', padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                                                {parcel.region} Server
                                            </span>
                                            <h3 style={{ fontSize: '18px', margin: '10px 0 0', fontWeight: 'bold', color: '#fff' }}>{parcel.parcel_name}</h3>
                                        </div>
                                        <span style={{ fontSize: '11px', color: parcel.status === 'auction_active' ? '#34d399' : '#fbbf24', background: 'rgba(0,0,0,0.3)', padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                            {parcel.status === 'auction_active' ? '🟢 Auction Active' : '🔒 Contractor Controlled'}
                                        </span>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#9ca3af', marginBottom: '20px', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '14px 0' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <MapPin size={15} color="#34d399" /> Area: <strong style={{ color: '#fff' }}>{parcel.hectares} ha</strong>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <CheckCircle size={15} color="#34d399" /> Soil Classification: <strong style={{ color: '#fff' }}>{parcel.soil_type || 'Standard Loam'}</strong>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <Clock size={15} color="#fbbf24" /> Closes: <strong style={{ color: '#fff' }}>{parcel.auction_end_time ? new Date(parcel.auction_end_time).toLocaleString() : 'Pending Schedule'}</strong>
                                        </div>
                                    </div>
                                </div>

                                {/* Bidding Box */}
                                {parcel.status === 'auction_active' ? (
                                    <div style={{ background: 'rgba(3, 7, 18, 0.6)', padding: '14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        <label style={{ display: 'block', fontSize: '10px', color: '#9ca3af', marginBottom: '6px', fontWeight: 'bold', letterSpacing: '0.05em' }}>SUBMIT BID ($USD)</label>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <input 
                                                type="number" 
                                                placeholder="e.g. 50000" 
                                                style={{ flex: 1, padding: '9px 12px', background: '#111827', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', borderRadius: '6px', fontSize: '13px', outline: 'none' }}
                                                value={biddingId === parcel.parcel_id ? bidAmount : ''}
                                                onChange={(e) => {
                                                    setBiddingId(parcel.parcel_id);
                                                    setBidAmount(e.target.value);
                                                }}
                                            />
                                            <button 
                                                onClick={() => handlePlaceBid(parcel.parcel_id)}
                                                style={{ background: '#059669', color: '#fff', border: 'none', padding: '9px 16px', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', transition: 'background 0.2s' }}
                                            >
                                                Bid
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div style={{ textAlign: 'center', fontSize: '12px', color: '#6b7280', padding: '10px', background: 'rgba(3, 7, 18, 0.4)', borderRadius: '6px', fontStyle: 'italic' }}>
                                        Managed under Parent Contractor Farm operations
                                    </div>
                                )}

                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}