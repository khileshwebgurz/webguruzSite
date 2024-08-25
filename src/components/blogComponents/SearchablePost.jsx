// components/blogComponents/SearchablePost.js
"use client";
import { useState } from 'react';

export default function SearchablePost({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <input 
      type="text" 
      placeholder="Search" 
      value={searchTerm}
      onChange={handleSearch}
    />
  );
}