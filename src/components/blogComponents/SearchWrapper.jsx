// components/blogComponents/SearchWrapper.js
"use client";
import { useState } from 'react';
import AllPost from "./AllPost";
import SearchablePost from "./SearchablePost";

export default function SearchWrapper({ posts, pageNumber, totalPages, postsPerPage }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = (searchTerm) => {
    const filtered = posts.filter(post => 
      post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  const startIndex = (pageNumber - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  return (
    <>
      <SearchablePost onSearch={handleSearch} />
      <AllPost
        posts={paginatedPosts}
        currentPage={pageNumber}
        totalPages={totalPages}
      />
    </>
  );
}