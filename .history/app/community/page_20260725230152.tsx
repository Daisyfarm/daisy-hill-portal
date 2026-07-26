import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CommunityPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#111318] text-white flex flex-col items-center justify-center p-6 font-sans">
      {loading ? (
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-400 mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-300">Loading Daisy Hill Farming Network...</h2>
        </div>
      ) : (
        <div className="max-w-4xl w-full bg-[#1a1d24] border border-gray-800 rounded-lg p-8 shadow-xl">
          <h1 className="text-3xl font-bold mb-4 text-green-400">Daisy Hill Farming Network Community Hub</h1>
          <p className="text-gray-300 mb-6">
            Welcome to the centralized community network for Daisy Hill. Engage with fellow farmers, participate in discussions, and track community-wide updates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black/40 border border-gray-800 p-4 rounded">
              <h3 className="font-bold text-yellow-400 mb-2">Active Discussions</h3>
              <p className="text-sm text-gray-400">Join real-time network discussions and share operational insights.</p>
            </div>
            <div className="bg-black/40 border border-gray-800 p-4 rounded">
              <h3 className="font-bold text-blue-400 mb-2">Network Broadcasts</h3>
              <p className="text-sm text-gray-400">Review official announcements and community guidelines.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}