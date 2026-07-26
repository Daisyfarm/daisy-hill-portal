import React from 'react';
import Link from 'next/link';
import { FaBolt, FaBoxOpen, FaCheckCircle, FaVoteYea } from 'react-icons/fa';

export default function WhitelistPage() {
  return (
    <div className="min-h-screen bg-[#111318] text-white p-6 font-sans">
      {/* Top Header / Stats Bar */}
      <header className="max-w-7xl mx-auto bg-[#1a1d24] border border-gray-800 rounded-lg p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-gray-400">WELCOME</span>
          <span className="text-green-400 font-bold">REUBY WLTEST</span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded border border-gray-800">
            <span className="text-gray-400">LEVEL</span>
            <span className="text-yellow-400 font-bold">1</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded border border-gray-800">
            <span className="text-green-400 font-bold">$0.00</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded border border-gray-800">
            <span className="text-yellow-500 font-bold">0</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded border border-gray-800">
            <span className="text-purple-400 font-bold">0</span>
          </div>
        </div>
      </header>

      {/* Main Grid Content */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pre-Whitelist Area */}
        <section className="bg-[#1a1d24] border border-gray-800 rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4 text-green-400 flex items-center gap-2">
              <FaCheckCircle /> Pre-Whitelist Area
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Hey there! You've made it here because you have signed up but have not been whitelisted. This is an area where you can login daily for a little reward and to help expedite your whitelisting speed.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              The more daily logins and tutorial quizzes you complete, the faster you'll move up the whitelisting queue, because we want to make sure everyone coming into FSN is going to help contribute to continuing to make it an awesome and unique experience!
            </p>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Go ahead and get started by checking the daily task each day, answering the 5 daily questions, and then working your way through as many of the starter tutorials as you can!
          </p>
        </section>

        {/* Daily Task Section */}
        <section className="bg-[#1a1d24] border border-gray-800 rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2 text-yellow-400 flex items-center gap-2">
              <FaBolt /> Daily Task
            </h2>
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Task #1 - Where are you from?</h3>
            <div className="mb-4">
              <label className="block text-xs uppercase text-gray-500 mb-1">My Country</label>
              <select className="w-full bg-black/50 border border-gray-700 rounded p-2 text-sm text-gray-200">
                <option>AFGHANISTAN</option>
                <option>UNITED STATES</option>
                <option>UNITED KINGDOM</option>
                <option>CANADA</option>
                <option>GERMANY</option>
              </select>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded text-sm transition">
              Submit Daily Task
            </button>
          </div>
          <div className="mt-6 p-4 bg-black/30 border border-gray-800 rounded text-center">
            <span className="text-xs text-gray-400 block mb-1">Reward</span>
            <span className="text-yellow-400 font-bold text-sm">Gold Bale x 1</span>
          </div>
        </section>

        {/* Mod Voting & Clearance Hub */}
        <section className="bg-[#1a1d24] border border-gray-800 rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
              <FaVoteYea /> Mod Voting Terminal
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Place your vote to get mod reviews reviewed for potentially being added. Each time a batch of mods is selected, no uncommon mods will lose its votes, meaning even if you don't get enough votes for reviewing in this batch, you win the next!
            </p>
            <div className="bg-black/40 border border-gray-800 p-4 rounded mb-4">
              <span className="text-xs text-gray-400 block mb-1">Active Status</span>
              <span className="text-green-400 font-semibold text-sm">Queue Open & Synchronized</span>
            </div>
          </div>
          <Link href="/tiers" className="block text-center bg-gray-800 hover:bg-gray-700 text-gray-200 font-bold py-2 px-4 rounded text-sm transition">
            Access Rank Tiers & Clearance
          </Link>
        </section>
      </main>
    </div>
  );
}