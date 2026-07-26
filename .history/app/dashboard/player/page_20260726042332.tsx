'use client';

import React, { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from 'lucide-react';

interface Commodity {
  id: string;
  name: string;
  pricePer1000L: number;
  trend: 'up' | 'down';
  changePercent: string;
  demandMultiplier: string;
}

export default function AgriculturalEconomyWidget() {
  const [commodities] = useState<Commodity[]>([
    { id: '1', name: 'Wheat', pricePer1000L: 1250, trend: 'up', changePercent: '+4.2%', demandMultiplier: '1.4x (High Demand)' },
    { id: '2', name: 'Corn', pricePer1000L: 1100, trend: 'up', changePercent: '+1.8%', demandMultiplier: '1.2x (Stable)' },
    { id: '3', name: 'Soybeans', pricePer1000L: 1680, trend: 'down', changePercent: '-2.1%', demandMultiplier: '0.9x (Normal)' },
    { id: '4', name: 'Canola', pricePer1000L: 1450, trend: 'up', changePercent: '+6.5%', demandMultiplier: '1.6x (Peak Surge)' },
    { id: '5', name: 'Silage', pricePer1000L: 420, trend: 'down', changePercent: '-0.5%', demandMultiplier: '1.0x (Standard)' },
  ]);

  return (
    <div style={{ 
      backgroundColor: 'rgba(15, 17, 23, 0.85)', 
      backdropFilter: 'blur(10px)', 
      border: '1px solid rgba(39, 39, 42, 0.6)', 
      padding: '24px', 
      borderRadius: '12px', 
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      color: '#ffffff',
      fontFamily: 'sans-serif'
    }}>
      
      {/* Widget Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', paddingBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <BarChart3 size={22} color="#34d399" />
          <div>
            <h2 style={{ fontSize: '15px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
              Live Commodity Market & Grain Prices
            </h2>
            <p style={{ fontSize: '11px', color: '#a1a1aa', margin: '2px 0 0 0' }}>
              Real-time elevator pricing index and demand multipliers for Daisy Hill economy.
            </p>
          </div>
        </div>
      </div>

      {/* Commodities Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #27272a', color: '#71717a', fontSize: '10px', textTransform: 'uppercase' }}>
              <th style={{ padding: '10px 12px' }}>Commodity</th>
              <th style={{ padding: '10px 12px' }}>Market Price (Per 1,000L)</th>
              <th style={{ padding: '10px 12px' }}>24h Trend</th>
              <th style={{ padding: '10px 12px', textAlign: 'right' }}>Elevator Multiplier</th>
            </tr>
          </thead>
          <tbody>
            {commodities.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid rgba(39, 39, 42, 0.4)' }}>
                <td style={{ padding: '12px', fontWeight: 'bold', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <DollarSign size={14} color="#34d399" />
                  {item.name}
                </td>
                <td style={{ padding: '12px', fontFamily: 'monospace', fontWeight: 'bold', color: '#34d399', fontSize: '13px' }}>
                  ${item.pricePer1000L.toLocaleString()}
                </td>
                <td style={{ padding: '12px' }}>
                  <span style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '4px',
                    color: item.trend === 'up' ? '#34d399' : '#f87171',
                    fontWeight: 'bold',
                    fontSize: '11px'
                  }}>
                    {item.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    {item.changePercent}
                  </span>
                </td>
                <td style={{ padding: '12px', textAlign: 'right' }}>
                  <span style={{ 
                    backgroundColor: 'rgba(52, 211, 153, 0.1)', 
                    color: '#34d399', 
                    border: '1px solid rgba(52, 211, 153, 0.3)', 
                    padding: '3px 8px', 
                    borderRadius: '4px', 
                    fontSize: '10px', 
                    fontWeight: 'bold', 
                    textTransform: 'uppercase' 
                  }}>
                    {item.demandMultiplier}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}