import React, { useState } from "react";
import { searchPackages } from "../utils/api";

interface SearchProps {
  onSearch: (results: any[]) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const results = await searchPackages(query);
    onSearch(results);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for NPM packages..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
