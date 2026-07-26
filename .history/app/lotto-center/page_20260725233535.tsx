TypeScript
"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { Ticket, DollarSign, Trophy, Sparkles } from 'lucide-react';

const sb = createClient('https://dlwhztcqntalrhfrefsk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsd2h6dGNxbnRhbHJoZnJlZnNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NzM2ODgsImV4cCI6MjA4OTQ0OTY4OH0.z_TOBv8Ky9Ksx3hTu19ScXHGcO86-GmwjdYFbdOt8ZY');
const HK = "https://discord.com/api/webhooks/1484184649847804016/o_bj5hINtTTZEux2RBegwBEqLUlNYIMS7Azomm4xadN7S6g353sEJhaaIiExvh0Ct4Za";

export default function LottoCenterPage() {
    const [u, setU] = useState<any>(null);
    const [tickets, setTickets] = useState<number>(1);
    const [jackpot, setJackpot] = useState<number>(25000);
    const [ld, setLd] = useState(true);

    const ticketPrice = 1000; // $1,000 per ticket

    const load = async () => {
        const { data: { user } } = await sb.auth.getUser();
        if (user) {
            const { data: profile } = await sb.from('profiles').select('*').eq('id', user.id).single();
            setU(profile);
        }
        setLd(false);
    };

    useEffect(() => { load(); }, []);

    const buyTickets = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!u) return;

        const totalCost = tickets * ticketPrice;
        if ((u.balance || 0) < totalCost) {
            alert("Insufficient funds to purchase these lottery tickets.");
            return;
        }

        const newBalance = (u.balance || 0) - totalCost;
        const { error } = await sb.from('profiles').update({ balance: newBalance }).eq('id', u.id);

        if (error) {
            alert("Error processing ticket purchase: " + error.message);
            return;
        }

        const newJackpot = jackpot + totalCost;
        setJackpot(newJackpot);

        await fetch(HK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: `🎟️ **LOTTERY TICKETS PURCHASED**\n**Operator:** ${u.username}\n**Tickets Bought:** ${tickets}\n**Total Spent:** $${totalCost.toLocaleString()}\n**Updated Jackpot Pool:** $${newJackpot.toLocaleString()}`
            })
        });

        alert(`Successfully purchased ${tickets} ticket(s) for $${totalCost.toLocaleString()}!`);
        load();
    };

    if (ld) return <div style={{background:'#030712',color:'#fff',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>Accessing Lotto Center...</div>;

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
                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link href="/" style={{ color: '#34d399', textDecoration: 'none', fontSize: '13px', fontWeight: 'bold' }}>
                        ← Back to Network Hub
                    </Link>
                    {u && <span style={{ color: '#34d399', fontSize: '12px', fontWeight: 'bold' }}>OPERATOR BALANCE: ${u.balance?.toLocaleString()}</span>}
                </div>

                <div style={{ 
                    background: 'rgba(17, 24, 39, 0.9)', 
                    backdropFilter: 'blur(12px)', 
                    border: '1px solid rgba(255, 255, 255, 0.1)', 
                    borderRadius: '16px', 
                    padding: '40px',
                    boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.6)'
                }}>
                    <div style={{ fontSize: '32px', marginBottom: '10px' }}>🎰</div>
                    <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#ffffff', margin: '0 0 10px 0' }}>
                        Lotto Center
                    </h1>
                    <p style={{ fontSize: '14px', color: '#9ca3af', lineHeight: '1.6', marginBottom: '30px' }}>
                        Participate in server raffles, lotteries, and community jackpot draws across <span style={{ color: '#34d399', fontWeight: 'bold' }}>Judith Plains Montana 4X</span>.
                    </p>

                    {/* JACKPOT DISPLAY BANNER */}
                    <div style={{ background: 'linear-gradient(135deg, rgba(52, 211, 153, 0.15), rgba(16, 185, 129, 0.05))', border: '1px solid rgba(52, 211, 153, 0.3)', borderRadius: '12px', padding: '30px', textAlign: 'center', marginBottom: '30px' }}>
                        <span style={{ fontSize: '12px', color: '#34d399', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Current Active Jackpot Pool</span>
                        <div style={{ fontSize: '48px', fontWeight: '900', color: '#fff', margin: '10px 0', textShadow: '0 0 20px rgba(52, 211, 153, 0.5)' }}>
                            ${jackpot.toLocaleString()}
                        </div>
                        <p style={{ fontSize: '13px', color: '#9ca3af', margin: 0 }}>Ticket Price: ${ticketPrice.toLocaleString()} per entry</p>
                    </div>

                    {/* PURCHASE FORM */}
                    {u ? (
                        <form onSubmit={buyTickets} style={{ maxWidth: '500px', margin: '0 auto', background: 'rgba(3, 7, 18, 0.6)', padding: '30px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <h3 style={{ margin: 0, fontSize: '16px', color: '#fff' }}>Purchase Lottery Tickets</h3>
                            <div>
                                <label style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', color: '#9ca3af', marginBottom: '8px', textTransform: 'uppercase' }}>Number of Tickets</label>
                                <input 
                                    type="number" 
                                    min="1" 
                                    max="100" 
                                    value={tickets} 
                                    onChange={e => setTickets(parseInt(e.target.value) || 1)}
                                    style={{ width: '100%', padding: '12px', background: '#111827', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '8px', color: '#fff', fontSize: '14px', outline: 'none' }}
                                />
                            </div>
                            <div style={{ fontSize: '13px', color: '#d1d5db', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Total Cost:</span>
                                <span style={{ color: '#34d399', fontWeight: 'bold' }}>${(tickets * ticketPrice).toLocaleString()}</span>
                            </div>
                            <button 
                                type="submit"
                                style={{ background: '#34d399', color: '#030712', border: 'none', padding: '14px', borderRadius: '8px', fontWeight: '900', textTransform: 'uppercase', fontSize: '13px', cursor: 'pointer', boxShadow: '0 4px 14px rgba(52, 211, 153, 0.4)' }}
                            >
                                Buy Tickets Now
                            </button>
                        </form>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '20px', color: '#9ca3af', fontSize: '14px' }}>
                            Please <Link href="/login" style={{ color: '#34d399', fontWeight: 'bold' }}>log in</Link> to purchase tickets and participate in the lotto draw.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}