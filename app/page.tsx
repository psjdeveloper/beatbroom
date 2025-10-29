"use client";
import React, { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const searchMusic = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${query}`);
      const data = await res.json();
      setTracks(data.data || []);
    } catch (err) {
      console.error("Error fetching music:", err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-green-400">
        🎵 MusicLovers
      </h1>
      <style jsx>
        {
          `
          h1 {
          text-shadow: 0 0 10px rgba(34, 197, 94, 0.7);
          text-transform: uppercase;
          letter-spacing: 12px;
          border-bottom: 2px solid #22c55e;
          padding-bottom: 10px; 
          }
          `
        }
      </style>
      <form
        onSubmit={searchMusic}
        className="flex justify-center items-center gap-4 mb-8"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a song..."
          className="px-4 py-2 rounded-md text-white hover:text-amber-300 w-72 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="bg-white/10 p-4 rounded-lg shadow-lg text-center"
          >
            <img
              src={track.album.cover_medium}
              alt={track.title}
              className="rounded-lg mb-3 mx-auto"
            />
            <h2 className="font-semibold">{track.title}</h2>
            <p className="text-gray-400 text-sm">{track.artist.name}</p>
            <audio controls src={track.preview} className="w-full mt-2 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}
