import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const sb = createClient(
  'https://yioyfxvabhzvkwuljcki.supabase.co',
  'sb_publishable_wvc-fOTg4S73QnDR3PEK0g_fDO6x4NG'
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password, email, discord, steamId, reason, referrer } = body;

    const payload = {
      username,
      password,
      email,
      discord_handle: discord,
      steam_hex: steamId,
      why_join: reason,
      streamer_code: referrer,
      status: 'PENDING_WHITELIST'
    };

    const { error } = await sb.from('farm_network').insert([payload]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: 'Registration submitted successfully!' });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}