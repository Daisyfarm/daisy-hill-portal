import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Return sample or fetched auction data securely from the server side
    const auctionLots = [
      {
        title: 'Heavy Duty Tractor Unit',
        description: 'Low-hour agricultural utility machine, fully serviced and ready for field operations.',
        currentBid: '12,500.00'
      },
      {
        title: 'Surplus Grain Storage Silo',
        description: 'Industrial grade galvanized steel bin structure, dismantled and ready for transport.',
        currentBid: '4,200.00'
      }
    ];

    return NextResponse.json(auctionLots, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to fetch auction data' }, { status: 500 });
  }
}