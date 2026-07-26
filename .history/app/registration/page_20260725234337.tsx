TypeScript
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const sb = createClient('https://dlwhztcqntalrhfrefsk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsd2h6dGNxbnRhbHJoZnJlZnNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NzM2ODgsImV4cCI6MjA4OTQ0OTY4OH0.z_TOBv8Ky9Ksx3hTu19ScXHGcO86-GmwjdYFbdOt8ZY');
const HK = "https://discord.com/api/webhooks/1484184649847804016/o_bj5hINtTTZEux2RBegwBEqLUlNYIMS7Azomm4xadN7S6g353sEJhaaIiExvh0Ct4Za";

export default function RegisterPage() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [farmName, setFarmName] = useState('');
    const [server, setServer] = useState('Judith Plains Montana 4X - Main');
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // 1. Sign up user with Supabase Auth
        const { data: authData, error: authError } = await sb.auth.signUp({
            email,
            password,
            options: {
                data: {
                    username,
                    farm_name: farmName,
                    server
                }
            }
        });

        if (authError) {
            alert("Registration error: " + authError.message);
            setLoading(false);
            return;
        }

        const user = authData.user;
        if (user) {
            // 2. Insert profile record into public.profiles table
            const { error: profileError } = await sb.from('profiles').insert([{
                id: user.id,
                username,
                farm_name: farmName,
                server,
                balance: 50000 // Starting balance for new farm operations
            }]);

            if (profileError) {
                console.error("Profile creation notice:", profileError.message);
            }

            // 3. Post notification to Discord Webhook
            await fetch(HK, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    content: `🚜 **NEW FARM REGISTERED ON NETWORK**\n**Farmer:** ${username}\n**Farm Name:** ${farmName}\n**Server:** ${server}\n**Email:** ${email}`
                })
            }).catch(err => console.log('Webhook error:', err));

            alert("Farm account successfully established! Welcome to Judith Plains.");
            router.push('/dashboard');
        } else {
            setLoading(false);
        }
    };

    return (
        <div 
            className="h-full min-h-screen bg-slate-950 flex items-center justify-center px-4 py-12 font-sans relative"
            style={{
                backgroundImage: 'linear-gradient(rgba(5, 7, 10, 0.75), rgba(5, 7, 10, 0.85)), url("/hero-farm.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="absolute top-6 left-6">
                <Link href="/" className="text-emerald-400 hover:text-emerald-300 text-sm font-semibold transition-colors">
                    ← Back to Network Hub
                </Link>
            </div>
            <div className="max-w-md w-full space-y-8 bg-slate-900/90 backdrop-blur-md p-8 rounded-2xl border border-emerald-500/20 shadow-2xl">
                
                {/* Header Branding */}
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-600/10 text-emerald-400 mb-4 border border-emerald-500/20">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-white">Join Farm Sim Network</h2>
                    <p className="mt-2 text-sm text-slate-400">Establish your agricultural enterprise and sync your operations.</p>
                </div>
                
                {/* Registration Form */}
                <form className="mt-8 space-y-5" onSubmit={handleRegister}>
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Username</label>
                        <input 
                            type="text" 
                            required 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                            placeholder="ReubyJuice" 
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Email Address</label>
                        <input 
                            type="email" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                            placeholder="farmer@fsn.com" 
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Password</label>
                        <input 
                            type="password" 
                            required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                            placeholder="••••••••" 
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Farm Name</label>
                        <input 
                            type="text" 
                            required 
                            value={farmName}
                            onChange={(e) => setFarmName(e.target.value)}
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                            placeholder="Cool Brook Farms" 
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Primary Server</label>
                        <select 
                            value={server}
                            onChange={(e) => setServer(e.target.value)}
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                        >
                            <option>Judith Plains Montana 4X - Main</option>
                            <option>Judith Plains Montana 4X - EU</option>
                        </select>
                    </div>

                    <div className="pt-2">
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg shadow-lg shadow-emerald-900/40 transition-all cursor-pointer disabled:opacity-50"
                        >
                            {loading ? 'Establishing Farm...' : 'Create Farm Account'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}