'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, FileText, Search, Filter, Calendar, UserCheck, AlertTriangle } from 'lucide-react';

interface LogEntry {
  id: string;
  timestamp: string;
  staff: string;
  action: string;
  target: string;
  category: 'Whitelist' | 'Moderation' | 'System';
}

export default function ActivityLogsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const logs: LogEntry[] = [
    { id: '1', timestamp: '2026-07-26 03:45 UTC', staff: 'AdminBob', action: 'Approved Whitelist Application', target: 'FarmerJoe', category: 'Whitelist' },
    { id: '2', timestamp: '2026-07-26 02:15 UTC', staff: 'ModeratorSarah', action: 'Issued Server Warning', target: 'SpeedyTractor', category: 'Moderation' },
    { id: '3', timestamp: '2026-07-25 22:30 UTC', staff: 'SystemBot', action: 'Updated Server Mod Pack v1.13.1', target: 'Global Server', category: 'System' },
    { id: '4', timestamp: '2026-07-25 20:10 UTC', staff: 'AdminBob', action: 'Rejected Whitelist Application', target: 'BadDriver99', category: 'Whitelist' },
    { id: '5', timestamp: '2026-07-25 18:05 UTC', staff: 'ModeratorDave', action: 'Temporary Ban (24h)', target: 'Rambambo', category: 'Moderation' }
  ];

  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.staff.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          log.target.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          log.action.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || log.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundImage: 'linear-gradient(rgba(5, 7, 10, 0.4), rgba(5, 7, 10, 0.5)), url("/JD2.jpg")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundAttachment: 'fixed',
      color: '#ffffff', 
      fontFamily: 'sans-serif',
      paddingBottom: '40px'
    }}>
      
      {/* Sub-Header bar */}
      <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.6)', borderBottom: '1px solid rgba(39, 39, 42, 0.4)', padding: '12px 24px', marginBottom: '32px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.1em', color: '#a1a1aa', textTransform: 'uppercase' }}>
            Daisy Hill Farming Community | <span style={{ color: '#34d399' }}>Staff Audit Logs</span>
          </span>
          <Link href="/dashboard/staff" style={{ backgroundColor: 'rgba(39, 39, 42, 0.8)', color: '#ffffff', border: '1px solid #3f3f46', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase' }}>
            Back to Staff Panel
          </Link>
        </div>
      </div>

      {/* Main Container */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '24px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', paddingBottom: '16px' }}>
            <FileText size={24} color="#34d399" />
            <div>
              <h1 style={{ fontSize: '16px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
                Server Activity & Staff Audit Logs
              </h1>
              <p style={{ fontSize: '11px', color: '#a1a1aa', margin: '2px 0 0 0' }}>
                Track administrative actions, whitelist decisions, and moderation history across the portal.
              </p>
            </div>
          </div>

          {/* Filters Bar */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(5, 7, 10, 0.6)', border: '1px solid #3f3f46', borderRadius: '6px', padding: '8px 12px', flex: 1, minWidth: '240px' }}>
              <Search size={16} color="#71717a" />
              <input 
                type="text" 
                placeholder="Search staff, target, or action..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ background: 'none', border: 'none', color: '#ffffff', fontSize: '12px', outline: 'none', width: '100%' }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Filter size={16} color="#71717a" />
              <select 
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                style={{ backgroundColor: '#0f1117', border: '1px solid #3f3f46', borderRadius: '6px', padding: '8px 12px', color: '#ffffff', fontSize: '12px', outline: 'none' }}
              >
                <option value="All">All Categories</option>
                <option value="Whitelist">Whitelist</option>
                <option value="Moderation">Moderation</option>
                <option value="System">System</option>
              </select>
            </div>
          </div>

          {/* Logs Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #27272a', color: '#71717a', fontSize: '10px', textTransform: 'uppercase' }}>
                  <th style={{ padding: '12px' }}>Timestamp</th>
                  <th style={{ padding: '12px' }}>Category</th>
                  <th style={{ padding: '12px' }}>Staff / Source</th>
                  <th style={{ padding: '12px' }}>Action Performed</th>
                  <th style={{ padding: '12px' }}>Target</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.map((log) => (
                  <tr key={log.id} style={{ borderBottom: '1px solid rgba(39, 39, 42, 0.4)' }}>
                    <td style={{ padding: '14px 12px', color: '#a1a1aa', fontFamily: 'monospace', fontSize: '11px' }}>{log.timestamp}</td>
                    <td style={{ padding: '14px 12px' }}>
                      <span style={{ 
                        backgroundColor: log.category === 'Whitelist' ? 'rgba(52, 211, 153, 0.1)' : log.category === 'Moderation' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                        color: log.category === 'Whitelist' ? '#34d399' : log.category === 'Moderation' ? '#f87171' : '#60a5fa',
                        border: `1px solid ${log.category === 'Whitelist' ? 'rgba(52, 211, 153, 0.3)' : log.category === 'Moderation' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(59, 130, 246, 0.3'}`,
                        padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase'
                      }}>
                        {log.category}
                      </span>
                    </td>
                    <td style={{ padding: '14px 12px', fontWeight: 'bold', color: '#ffffff' }}>{log.staff}</td>
                    <td style={{ padding: '14px 12px', color: '#e4e4e7' }}>{log.action}</td>
                    <td style={{ padding: '14px 12px', color: '#34d399', fontWeight: 'bold' }}>{log.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
}