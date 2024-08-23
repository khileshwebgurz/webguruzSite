

import "./blogs.css";
import Contact from "@/components/homeComponents/11HomeContact";
import Addresshome from "@/components/homeComponents/12Addresshome";
import RecentPost from "@/components/blogComponents/RecentPost";
import { fetchPosts } from "../../../lib/fetchPosts";
import Link from "next/link";
import AllPost from "@/components/blogComponents/AllPost";
const POSTS_PER_PAGE = 6;
const page = async ({params}) => {
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
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              <ul>
                <li>
                  <Link href="/categories/web-design">Web Design</Link>
                </li>
                <li>
                  <Link href="/categories/online-reputation-management">Online Reputation Management</Link>
                </li>
                <li>
                  <Link href="/categories/hubspot">Hubspot</Link>
                </li>
                <li>
                  <Link href="/categories/digital-marketing">Digital Marketing</Link>
                </li>
                <li>
                  <Link href="/categories/google-remarketing">Google Remarketing</Link>
                </li>
                <li>
                  <Link href="categories/artificial-intelligence">Artificial Intelligence</Link>
                </li>
              </ul>
            </div>
          </div>

          <RecentPost posts={posts} />

          <AllPost posts={paginatedPosts} currentPage={pageNumber} totalPages={totalPages} />
        </div>
      </section>
    </>
  );
};

export default page;
