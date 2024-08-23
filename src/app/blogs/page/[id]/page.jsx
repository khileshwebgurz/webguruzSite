import { fetchPosts } from "../../../../../lib/fetchPosts"
import RecentPost from "@/components/blogComponents/RecentPost";
import AllPost from "@/components/blogComponents/AllPost";

const POSTS_PER_PAGE = 6;

const page = async ({ params }) => {
  const pageNumber = parseInt(params.pageNumber, 10) || 1;
  const posts = await fetchPosts();
  
  // Calculate the start and end indices for the current page
  const startIndex = (pageNumber - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  
  // Slice the posts array to get the posts for the current page
  const paginatedPosts = posts.slice(startIndex, endIndex);
  
  // Determine the total number of pages
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  
  if (!paginatedPosts || paginatedPosts.length === 0) {
    return <p>No posts available</p>;
  }
  
  return (
    <>
      <section className="blog-content-main">
        <div className="container">
          <RecentPost posts={paginatedPosts} />
          <AllPost posts={paginatedPosts} currentPage={pageNumber} totalPages={totalPages} />
        </div>
      </section>
    </>
  );
};

export default page;
