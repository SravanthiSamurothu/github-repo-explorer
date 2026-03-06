"use client";

import { useState } from "react";

export default function SearchBar() {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    console.log(username);
  };

  return (
    <div className="flex gap-3">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        onClick={handleSearch}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
}