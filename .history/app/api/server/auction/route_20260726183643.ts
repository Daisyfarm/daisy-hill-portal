'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Gavel, RefreshCw, AlertCircle } from 'lucide-react';

export default function AuctionHousePage() {
  const [parcels, setParcels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAuctionData = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch('/api/auction');
      if (!res.ok) throw new Error('Failed to fetch auction data from server');
      const data = await res.json();
      if (data) setParcels(data);
    } catch (err: any) {
      console.error("Error fetching auction data:", err.message);
      setError(err.message || 'Failed to fetch');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAuctionData();
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#05070a', color: '#ffffff', fontFamily: 'sans-serif' }}>
      <header style={{ backgroundColor: '#0b0e14', borderBottom: '1px solid #27272a', padding: '16px 24px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 900 }}>IRON DAISY AGRI</Link>
            <span style={{ color: '#52525b' }}>|</span>
            <span style={{ color: '#fbbf24' }}>Auction House</span>
          </div>
          <Link href="/" style={{ backgroundColor: '#27272a', color: '#ffffff', border: '1px solid #3f3f46', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ArrowLeft size={14} /> Back to Command
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', borderBottom: '1px solid #27272a', paddingBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: 900, textTransform: 'uppercase', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Gavel color="#fbbf24" size={24} /> Live Auction Terminal
            </h1>
            <p style={{ fontSize: '12px', color: '#71717a', margin: '4px 0 0 0', textTransform: 'uppercase' }}>Bid on heavy equipment, community assets, and surplus inventory.</p>
          </div>
          <button 
            onClick={fetchAuctionData}
            style={{ backgroundColor: '#18181b', color: '#fbbf24', border: '1px solid #3f3f46', padding: '8px 16px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', textTransform: 'uppercase' }}
          >
            <RefreshCw size={14} /> Refresh Feed
          </button>
        </div>

        {loading && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#a1a1aa', fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold' }}>
            Synchronizing auction data feeds...
          </div>
        )}

        {error && (
          <div style={{ backgroundColor: '#451a03', border: '1px solid #78350f', padding: '20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <AlertCircle color="#f59e0b" size={24} />
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '900', color: '#fef3c7', margin: '0 0 4px 0', textTransform: 'uppercase' }}>Connection Notice</h3>
              <p style={{ fontSize: '12px', color: '#fde68a', margin: 0 }}>Unable to reach active auction nodes: {error}. Please verify network status or try refreshing.</p>
            </div>
          </div>
        )}

        {!loading && !error && parcels.length === 0 && (
          <div style={{ backgroundColor: '#0f1117', border: '1px solid #27272a', padding: '40px', borderRadius: '12px', textAlign: 'center', color: '#71717a', fontSize: '13px', textTransform: 'uppercase' }}>
            No active lots currently listed in the auction queue.
          </div>
        )}

        {!loading && parcels.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            {parcels.map((parcel, index) => (
              <div key={index} style={{ backgroundColor: '#0f1117', border: '1px solid #27272a', padding: '20px', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '900', color: '#ffffff', margin: '0 0 8px 0' }}>{parcel.title || `Lot #${index + 1}`}</h3>
                <p style={{ fontSize: '12px', color: '#a1a1aa', margin: '0 0 16px 0' }}>{parcel.description || 'Verified agricultural asset available for acquisition.'}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
                  <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>Current Bid: ${parcel.currentBid || '0.00'}</span>
                  <button style={{ backgroundColor: '#fbbf24', color: '#000000', border: 'none', padding: '6px 12px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', textTransform: 'uppercase', fontSize: '10px' }}>
                    Place Bid
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}