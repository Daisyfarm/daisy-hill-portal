'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ClipboardCheck, CheckCircle2, AlertCircle, ArrowLeft, Tractor, Award } from 'lucide-react';

export default function SurveyPage() {
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!answers.q1 || !answers.q2 || !answers.q3) {
      setError('Please answer all questions before submitting your orientation survey.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundImage: 'linear-gradient(rgba(5, 7, 10, 0.4), rgba(5, 7, 10, 0.5)), url("/JD2.jpg")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundAttachment: 'fixed',
      color: '#ffffff', 
      fontFamily: 'sans-serif' 
    }}>
      {/* Top Header */}
      <header style={{ backgroundColor: 'rgba(11, 14, 20, 0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', padding: '12px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ backgroundColor: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.4)', padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Tractor size={20} color="#34d399" />
            </div>
            <div>
              <span style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '0.05em', color: '#ffffff', display: 'block' }}>DHFC PORTAL</span>
              <span style={{ fontSize: '9px', color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold' }}>Farmer Orientation Survey</span>
            </div>
          </div>
          <Link href="/dashboard/player" style={{ backgroundColor: 'rgba(39, 39, 42, 0.8)', color: '#ffffff', border: '1px solid #3f3f46', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ArrowLeft size={14} /> Back to Dashboard
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ backgroundColor: 'rgba(15, 17, 23, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(39, 39, 42, 0.6)', padding: '32px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', borderBottom: '1px solid rgba(39, 39, 42, 0.6)', paddingBottom: '16px' }}>
            <ClipboardCheck size={28} color="#34d399" />
            <div>
              <h1 style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
                Pre-Whitelisting Task 3: Orientation Survey
              </h1>
              <p style={{ fontSize: '12px', color: '#a1a1aa', margin: '4px 0 0 0' }}>
                Verify your understanding of server rules and farm operations to unlock full server access.
              </p>
            </div>
          </div>

          {submitted ? (
            <div style={{ background: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.4)', padding: '32px', borderRadius: '8px', textAlign: 'center' }}>
              <CheckCircle2 size={48} color="#34d399" style={{ margin: '0 auto 16px auto' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#34d399', margin: '0 0 8px 0', textTransform: 'uppercase' }}>Survey Completed Successfully!</h3>
              <p style={{ fontSize: '13px', color: '#e4e4e7', margin: '0 0 24px 0' }}>
                Your responses have been recorded. Task #3 on your pre-whitelisting progress checklist is now marked as complete.
              </p>
              <Link href="/dashboard/player" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#34d399', color: '#05070a', padding: '10px 20px', borderRadius: '6px', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                Return to Dashboard
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {error && (
                <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.4)', padding: '12px 16px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '8px', color: '#f87171', fontSize: '12px' }}>
                  <AlertCircle size={16} /> {error}
                </div>
              )}

              {/* Question 1 */}
              <div style={{ background: 'rgba(5, 7, 10, 0.6)', padding: '20px', borderRadius: '8px', border: '1px solid #3f3f46' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#ffffff', marginBottom: '12px' }}>
                  1. What is expected when operating heavy machinery across public roads?
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#d4d4d8' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="radio" name="q1" value="a" onChange={(e) => setAnswers({...answers, q1: e.target.value})} />
                    Drive at maximum speed at all times.
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="radio" name="q1" value="b" onChange={(e) => setAnswers({...answers, q1: e.target.value})} />
                    Maintain realistic driving speeds and follow property boundaries.
                  </label>
                </div>
              </div>

              {/* Question 2 */}
              <div style={{ background: 'rgba(5, 7, 10, 0.6)', padding: '20px', borderRadius: '8px', border: '1px solid #3f3f46' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#ffffff', marginBottom: '12px' }}>
                  2. Are you allowed to tamper with or borrow another player&apos;s equipment without permission?
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#d4d4d8' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="radio" name="q2" value="a" onChange={(e) => setAnswers({...answers, q2: e.target.value})} />
                    No, respect player-owned plots, machinery, and crop yields.
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="radio" name="q2" value="b" onChange={(e) => setAnswers({...answers, q2: e.target.value})} />
                    Yes, all machinery on the map is shared property.
                  </label>
                </div>
              </div>

              {/* Question 3 */}
              <div style={{ background: 'rgba(5, 7, 10, 0.6)', padding: '20px', borderRadius: '8px', border: '1px solid #3f3f46' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#ffffff', marginBottom: '12px' }}>
                  3. What should you do with dropped objects, pallets, and trailers after use?
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#d4d4d8' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="radio" name="q3" value="a" onChange={(e) => setAnswers({...answers, q3: e.target.value})} />
                    Leave them wherever is most convenient.
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="radio" name="q3" value="b" onChange={(e) => setAnswers({...answers, q3: e.target.value})} />
                    Ensure proper cleanup to preserve server optimization and performance.
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                style={{ backgroundColor: '#34d399', color: '#05070a', border: 'none', padding: '14px', borderRadius: '6px', fontWeight: 'bold', fontSize: '13px', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <Award size={16} /> Submit Orientation Survey
              </button>
            </form>
          )}

        </div>
      </main>
    </div>
  );
}