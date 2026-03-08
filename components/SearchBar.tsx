"use client";

import { useState } from "react";

export default function SearchBar() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);

  const handleSearch = async () => {
    if (!username) return;

    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setUser(data);

    const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`);
    const repoData = await repoResponse.json();
    setRepos(repoData);
  };

  return (
    <div className="flex flex-col items-center gap-6">

      {/* Search Section */}
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

      {/* User Profile */}
      {user && (
        <div className="text-center border p-4 rounded">
          <img
            src={user.avatar_url}
            alt="avatar"
            width="100"
            className="rounded-full mx-auto"
          />

          <h2 className="text-xl font-bold mt-2">{user.name}</h2>

          <p>Followers: {user.followers}</p>
          <p>Public Repos: {user.public_repos}</p>
        </div>
      )}

      {/* Repositories */}
      {repos.length > 0 && (
        <div className="mt-6 w-full max-w-md">
          <h2 className="text-xl font-bold mb-2 text-center">Repositories</h2>

          {repos.map((repo: any) => (
            <div key={repo.id} className="border p-2 rounded mb-2">
              {repo.name}
            </div>
          ))}
        </div>
      )}

    </div>
  );
}