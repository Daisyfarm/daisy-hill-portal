'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Gavel, RefreshCw, DollarSign, Clock, ShieldCheck, Tag } from 'lucide-react';

export default function AuctionHousePage() {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLot, setSelectedLot] = useState<any>(null);
  const [bidAmount, setBidAmount] = useState('');

  const [parcels, setParcels] = useState<any[]>([
    {
      id: 1,
      title: 'Heavy Tractor Unit X-900',
      category: 'Machinery',
      description: 'Low-hour dual-axle agricultural tractor in pristine working condition. Fully serviced with upgraded hydraulics.',
      currentBid: '12,500.00',
      bidsCount: 4,
      timeLeft: '04h 12m left',
      seller: 'Iron Daisy Central'
    },
    {
      id: 2,
      title: 'Bulk Organic Fertilizer Lot',
      category: 'Consumables',
      description: '50 metric tons of high-grade nutrient-rich compound optimized for maximum crop yield.',
      currentBid: '3,400.00',
      bidsCount: 2,
      timeLeft: '12h 45m left',
      seller: 'Judith Plains Co-op'
    }
  ]);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 600);
  };

  const openBidModal = (parcel: any) => {
    setSelectedLot(parcel);
    // Suggest next minimum bid (current bid + 500)
    const nextVal = (parseFloat(parcel.currentBid.replace(',', '')) + 500).toFixed(2);
    setBidAmount(nextVal);
    setModalOpen(true);
  };

  const handlePlaceBid = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLot) return;

    setParcels(prev => prev.map(p => {
      if (p.id === selectedLot.id) {
        return {
          ...p,
          currentBid: Number(bidAmount).toLocaleString('en-US', { minimumFractionDigits: 2 }),
          bidsCount: p.bidsCount + 1
        };
      }
      return p;
    }));

    setModalOpen(false);
    alert(`Successfully placed bid of $${bidAmount} on ${selectedLot.title}!`);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#05070a', color: '#ffffff', fontFamily: 'sans-serif' }}>
      {/* Top Header */}
      <header style={{ backgroundColor: '#0b0e14', borderBottom: '1px solid #1f2937', padding: '16px 32px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px', fontWeight: 900, letterSpacing: '0.05em' }}>
            <span style={{ color: '#ffffff' }}>IRON DAISY AGRI</span>
            <span style={{ color: '#4b5563' }}>/</span>
            <span style={{ color: '#fbbf24', textTransform: 'uppercase' }}>Auction House</span>
          </div>
          <Link href="/" style={{ backgroundColor: '#111827', color: '#e5e7eb', border: '1px solid #374151', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', transition: 'background 0.2s' }}>
            <ArrowLeft size={14} /> Back to Command
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 32px' }}>
        {/* Banner Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', borderBottom: '1px solid #1f2937', paddingBottom: '24px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <div style={{ backgroundColor: 'rgba(251, 191, 36, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(251, 191, 36, 0.2)' }}>
                <Gavel color="#fbbf24" size={26} />
              </div>
              <h1 style={{ fontSize: '28px', fontWeight: 900, textTransform: 'uppercase', margin: 0, letterSpacing: '0.02em' }}>
                Live Auction Terminal
              </h1>
            </div>
            <p style={{ fontSize: '13px', color: '#9ca3af', margin: 0, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
              Secure bidding network for heavy machinery, community assets, and surplus inventory across Judith Plains Montana 4X.
            </p>
          </div>
          <button 
            onClick={handleRefresh}
            style={{ backgroundColor: '#111827', color: '#fbbf24', border: '1px solid #374151', padding: '10px 20px', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}
          >
            <RefreshCw size={15} className={loading ? 'animate-spin' : ''} /> Refresh Feed
          </button>
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#9ca3af', fontSize: '13px', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '0.1em' }}>
            Synchronizing live auction nodes...
          </div>
        )}

        {/* Lots Grid */}
        {!loading && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
            {parcels.map((parcel) => (
              <div key={parcel.id} style={{ backgroundColor: '#0b0e14', border: '1px solid #1f2937', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
                <div>
                  {/* Card Header Tags */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', padding: '4px 10px', borderRadius: '4px', border: '1px solid rgba(59, 130, 246, 0.2)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Tag size={10} /> {parcel.category}
                    </span>
                    <span style={{ fontSize: '11px', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={12} color="#fbbf24" /> {parcel.timeLeft}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', margin: '0 0 8px 0', letterSpacing: '0.01em' }}>
                    {parcel.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#9ca3af', margin: '0 0 20px 0', lineHeight: '1.5' }}>
                    {parcel.description}
                  </p>
                </div>

                {/* Footer Details & Action */}
                <div style={{ borderTop: '1px solid #1f2937', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '10px', color: '#6b7280', textTransform: 'uppercase', display: 'block', fontWeight: 'bold' }}>Current Bid ({parcel.bidsCount} bids)</span>
                    <span style={{ fontSize: '18px', fontWeight: 900, color: '#fbbf24' }}>${parcel.currentBid}</span>
                  </div>
                  <button 
                    onClick={() => openBidModal(parcel)}
                    style={{ backgroundColor: '#fbbf24', color: '#000000', border: 'none', padding: '10px 18px', borderRadius: '6px', fontWeight: 900, cursor: 'pointer', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.05em', transition: 'opacity 0.2s' }}
                  >
                    Place Bid
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Interactive Bid Modal */}
      {modalOpen && selectedLot && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '20px' }}>
          <div style={{ backgroundColor: '#0b0e14', border: '1px solid #374151', borderRadius: '12px', padding: '32px', width: '100%', maxWidth: '450px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#fbbf24', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase' }}>
              <ShieldCheck size={16} /> Secure Network Terminal
            </div>
            <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#ffffff', margin: '0 0 6px 0', textTransform: 'uppercase' }}>
              Place Bid on Lot
            </h2>
            <p style={{ fontSize: '13px', color: '#9ca3af', margin: '0 0 20px 0' }}>
              {selectedLot.title}
            </p>

            <div style={{ backgroundColor: '#111827', padding: '14px 16px', borderRadius: '8px', border: '1px solid #1f2937', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: '#9ca3af', textTransform: 'uppercase' }}>Current Leading Bid:</span>
              <span style={{ fontSize: '16px', fontWeight: '900', color: '#fbbf24' }}>${selectedLot.currentBid}</span>
            </div>

            <form onSubmit={handlePlaceBid}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '8px' }}>
                Your Bid Amount ($ USD)
              </label>
              <div style={{ position: 'relative', marginBottom: '24px' }}>
                <span style={{ position: 'absolute', left: '12px', top: '12px', color: '#9ca3af' }}><DollarSign size={16} /></span>
                <input 
                  type="number" 
                  step="0.01" 
                  value={bidAmount} 
                  onChange={(e) => setBidAmount(e.target.value)}
                  style={{ width: '100%', backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '6px', padding: '10px 12px 10px 36px', color: '#ffffff', fontSize: '14px', fontWeight: 'bold', outline: 'none' }}
                  required
                />
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button 
                  type="button" 
                  onClick={() => setModalOpen(false)}
                  style={{ flex: 1, backgroundColor: '#1f2937', color: '#e5e7eb', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', textTransform: 'uppercase', fontSize: '11px' }}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  style={{ flex: 1, backgroundColor: '#fbbf24', color: '#000000', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 900, cursor: 'pointer', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.05em' }}
                >
                  Confirm Bid
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}