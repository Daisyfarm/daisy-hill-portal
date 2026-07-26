'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { CheckCircle2, Circle, Shield, Award, ArrowRight } from 'lucide-react';

const sb = createClient('https://dlwhztcqntalrhfrefsk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsd2h6dGNxbnRhbHJoZnJlZnNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NzM2ODgsImV4cCI6MjA4OTQ0OTY4OH0.z_TOBv8Ky9Ksx3hTu19ScXHGcO86-GmwjdYFbdOt8ZY');

export default function WhitelistPage() {
  const router = useRouter();
  const [tasks, setTasks] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const { data: { user: authUser } } = await sb.auth.getUser();
      setUser(authUser);

      // Fetch whitelist/daily operational tasks from database
      const { data } = await sb.from('whitelist_tasks').select('*').order('created_at', { ascending: true });
      if (data) {
        setTasks(data);
      } else {
        // Fallback default tasks if none in database yet
        setTasks([
          { id: 1, title: 'Join the Official Discord Network', description: 'Connect with community operators and access radio channels.', completed: false },
          { id: 2, title: 'Review Code of Conduct & Territory Rules', description: 'Ensure full compliance with Iron Daisy Agri protocols.', completed: false },
          { id: 3, title: 'Complete Initial Equipment Orientation', description: 'Verify operational readiness of assigned regional machinery.', completed: false },
          { id: 4, title: 'Daily Logistics Check-In', description: 'Log today\'s agricultural output and verify supply chain status.', completed: false },
        ]);
      }
      setLoading(false);
    }
    loadData();
  }, []);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#05070a', color: '#ffffff', fontFamily: 'sans-serif', padding: '40px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px' }}>
          <div>
            <span style={{ color: '#34d399', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>FSN Operations</span>
            <h1 style={{ fontSize: '28px', fontWeight: 900, textTransform: 'uppercase', margin: '4px 0 0' }}>Whitelist & Daily Tasks</h1>
          </div>
          <button 
            onClick={() => router.push('/dashboard')}
            style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' }}
          >
            Return to Dashboard
          </button>
        </div>

        {/* DESCRIPTION */}
        <div style={{ backgroundColor: 'rgba(11, 14, 20, 0.85)', border: '1px solid rgba(52, 211, 153, 0.3)', borderRadius: '12px', padding: '24px', marginBottom: '30px' }}>
          <h3 style={{ margin: '0 0 8px', fontSize: '16px', color: '#34d399', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Shield size={18} /> Operational Clearance & Daily Protocol
          </h3>
          <p style={{ margin: 0, fontSize: '13px', color: '#a1a1aa', lineHeight: '1.5' }}>
            Complete your initial whitelist requirements to unlock full executive privileges. Additionally, check in daily to fulfill operational tasks, maintain high network standing, and secure production bonuses.
          </p>
        </div>

        {/* TASK LIST */}
        {loading ? (
          <div style={{ textAlign: 'center', color: '#888', padding: '40px' }}>Loading Operational Directives...</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {tasks.map((task) => (
              <div 
                key={task.id} 
                onClick={() => toggleTask(task.id)}
                style={{ 
                  backgroundColor: task.completed ? 'rgba(52, 211, 153, 0.05)' : 'rgba(11, 14, 20, 0.6)', 
                  border: `1px solid ${task.completed ? 'rgba(52, 211, 153, 0.4)' : 'rgba(255, 255, 255, 0.1)'}`, 
                  borderRadius: '10px', 
                  padding: '20px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  {task.completed ? (
                    <CheckCircle2 size={24} color="#34d399" />
                  ) : (
                    <Circle size={24} color="#52525b" />
                  )}
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '15px', color: task.completed ? '#34d399' : '#fff', textDecoration: task.completed ? 'line-through' : 'none' }}>
                      {task.title}
                    </h4>
                    <p style={{ margin: 0, fontSize: '12px', color: '#a1a1aa' }}>
                      {task.description}
                    </p>
                  </div>
                </div>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: task.completed ? '#34d399' : '#71717a' }}>
                  {task.completed ? 'COMPLETED' : 'PENDING'}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* SUBMISSION / STATUS FOOTER */}
        <div style={{ marginTop: '30px', textAlign: 'right' }}>
          <button 
            onClick={() => alert("Task progress updated successfully!")}
            style={{ backgroundColor: '#34d399', color: '#05070a', border: 'none', padding: '14px 28px', borderRadius: '8px', fontWeight: 900, textTransform: 'uppercase', fontSize: '13px', cursor: 'pointer', boxShadow: '0 4px 14px rgba(52, 211, 153, 0.4)' }}
          >
            Save Task Progress
          </button>
        </div>

      </div>
    </div>
  );
}