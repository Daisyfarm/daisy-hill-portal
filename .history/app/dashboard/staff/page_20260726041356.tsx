'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Tractor, Users, CheckCircle2, XCircle, Clock, AlertTriangle, X, Eye, FileText } from 'lucide-react';

interface Applicant {
  id: string;
  username: string;
  discord: string;
  steam: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  tasksCompleted: number;
}

export default function StaffPanel() {
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);
  const [actionType, setActionType] = useState<'approve' | 'reject' | null>(null);
  const [reviewReason, setReviewReason] = useState('');
  
  const [applicants, setApplicants] = useState<Applicant[]>([
    { id: '1', username: 'FarmerJoe', discord: 'FarmerJoe#1234', steam: 'steam:11000010f234abc', status: 'Pending', tasksCompleted: 4 },
    { id: '2', username: 'TractorTom', discord: 'TomFarms#5678', steam: 'steam:11000010f987xyz', status: 'Pending', tasksCompleted: 3 },
    { id: '3', username: 'AcresAnna', discord: 'AnnaGreen#9999', steam: 'steam:11000010f456def', status: 'Pending', tasksCompleted: 2 }
  ]);

  const handleOpenModal = (applicant: Applicant, type: 'approve' | 'reject') => {
    setSelectedApplicant(applicant);
    setActionType(type);
    setReviewReason('');
  };

  const handleCloseModal = () => {
    setSelectedApplicant(null);
    setActionType(null);
    setReviewReason('');
  };

  const handleConfirmAction = () => {
    if (!selectedApplicant || !actionType) return;

    const newStatus = actionType === 'approve' ? 'Approved' : 'Rejected';
    setApplicants(applicants.map(app => app.id === selectedApplicant.id ? { ...app, status: newStatus } : app));
    handleCloseModal();
  };

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
            Daisy Hill Farming Community | <span style={{ color: '#34d399' }}>Staff Control Panel</span>
          </span>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Link href="/dashboard/staff/logs" style={{ backgroundColor: 'rgba(52, 211, 153, 0.1)', color: '#34d399', border: '1px solid rgba(52, 211, 153, 0.3)', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <FileText size={14} /> Audit Logs
            </Link>
            <Link href="/dashboard/player" style={{ backgroundColor: 'rgba(39, 39, 42, 0.8)', color: '#ffffff', border: '1px solid #3f3f46', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase' }}>
              Switch to Player View
            </Link>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '24px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', paddingBottom: '16px' }}>
            <Users size={24} color="#34d399" />
            <div>
              <h1 style={{ fontSize: '16px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
                Whitelisting Applications Review
              </h1>
              <p style={{ fontSize: '11px', color: '#a1a1aa', margin: '2px 0 0 0' }}>
                Review background details, survey scores, and manage server whitelist queue.
              </p>
            </div>
          </div>

          {/* Applicants Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #27272a', color: '#71717a', fontSize: '10px', textTransform: 'uppercase' }}>
                  <th style={{ padding: '12px' }}>Username</th>
                  <th style={{ padding: '12px' }}>Discord</th>
                  <th style={{ padding: '12px' }}>Steam ID</th>
                  <th style={{ padding: '12px' }}>Tasks Completed</th>
                  <th style={{ padding: '12px' }}>Status</th>
                  <th style={{ padding: '12px', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {applicants.map((app) => (
                  <tr key={app.id} style={{ borderBottom: '1px solid rgba(39, 39, 42, 0.4)' }}>
                    <td style={{ padding: '14px 12px', fontWeight: 'bold', color: '#ffffff' }}>{app.username}</td>
                    <td style={{ padding: '14px 12px', color: '#e4e4e7' }}>{app.discord}</td>
                    <td style={{ padding: '14px 12px', color: '#34d399', fontFamily: 'monospace', fontSize: '11px' }}>{app.steam}</td>
                    <td style={{ padding: '14px 12px', color: '#e4e4e7' }}>{app.tasksCompleted} / 4</td>
                    <td style={{ padding: '14px 12px' }}>
                      <span style={{ 
                        backgroundColor: app.status === 'Approved' ? 'rgba(52, 211, 153, 0.1)' : app.status === 'Rejected' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                        color: app.status === 'Approved' ? '#34d399' : app.status === 'Rejected' ? '#f87171' : '#f59e0b',
                        border: `1px solid ${app.status === 'Approved' ? 'rgba(52, 211, 153, 0.3)' : app.status === 'Rejected' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(245, 158, 11, 0.3'}`,
                        padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase'
                      }}>
                        {app.status}
                      </span>
                    </td>
                    <td style={{ padding: '14px 12px', textAlign: 'right' }}>
                      {app.status === 'Pending' ? (
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                          <button 
                            onClick={() => handleOpenModal(app, 'approve')}
                            style={{ backgroundColor: 'rgba(52, 211, 153, 0.15)', color: '#34d399', border: '1px solid rgba(52, 211, 153, 0.4)', padding: '6px 10px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer', textTransform: 'uppercase' }}
                          >
                            Approve
                          </button>
                          <button 
                            onClick={() => handleOpenModal(app, 'reject')}
                            style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#f87171', border: '1px solid rgba(239, 68, 68, 0.4)', padding: '6px 10px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer', textTransform: 'uppercase' }}
                          >
                            Reject
                          </button>
                        </div>
                      ) : (
                        <span style={{ color: '#71717a', fontSize: '11px', fontStyle: 'italic' }}>Reviewed</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </main>

      {/* Staff Review Action Modal */}
      {selectedApplicant && actionType && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: '20px' }}>
          <div style={{ backgroundColor: '#0f1117', border: `1px solid ${actionType === 'approve' ? 'rgba(52, 211, 153, 0.4)' : 'rgba(239, 68, 68, 0.4'}`, padding: '28px', borderRadius: '12px', width: '100%', maxWidth: '500px', boxShadow: '0 16px 48px rgba(0,0,0,0.6)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #27272a', paddingBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {actionType === 'approve' ? <CheckCircle2 size={20} color="#34d399" /> : <XCircle size={20} color="#f87171" />}
                <h3 style={{ fontSize: '15px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
                  {actionType === 'approve' ? 'Approve Farmer Application' : 'Reject Farmer Application'}
                </h3>
              </div>
              <button onClick={handleCloseModal} style={{ background: 'none', border: 'none', color: '#a1a1aa', cursor: 'pointer' }}>
                <X size={18} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '12px', color: '#e4e4e7' }}>
              <div style={{ backgroundColor: 'rgba(5, 7, 10, 0.6)', padding: '12px', borderRadius: '6px', border: '1px solid #27272a' }}>
                <span style={{ color: '#71717a', display: 'block', fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold' }}>Applicant</span>
                <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#ffffff' }}>{selectedApplicant.username}</span> ({selectedApplicant.discord})
              </div>

              <div>
                <label style={{ display: 'block', color: '#71717a', fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '6px' }}>
                  Staff Note / Reason {actionType === 'reject' ? '(Required)' : '(Optional)'}
                </label>
                <textarea 
                  rows={3}
                  value={reviewReason}
                  onChange={(e) => setReviewReason(e.target.value)}
                  placeholder={actionType === 'approve' ? 'Welcome to Daisy Hill Farming Community!' : 'Please specify why this application is being rejected...'}
                  style={{ width: '100%', backgroundColor: '#050710', border: '1px solid #3f3f46', borderRadius: '6px', padding: '10px', color: '#ffffff', fontSize: '12px', outline: 'none', resize: 'vertical' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '12px' }}>
                <button 
                  onClick={handleCloseModal}
                  style={{ backgroundColor: 'transparent', color: '#a1a1aa', border: '1px solid #3f3f46', padding: '10px 16px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', textTransform: 'uppercase' }}
                >
                  Cancel
                </button>
                <button 
                  onClick={handleConfirmAction}
                  style={{ 
                    backgroundColor: actionType === 'approve' ? '#34d399' : '#ef4444', 
                    color: actionType === 'approve' ? '#05070a' : '#ffffff', 
                    border: 'none', padding: '10px 20px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', textTransform: 'uppercase' 
                  }}
                >
                  Confirm {actionType === 'approve' ? 'Approval' : 'Rejection'}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}