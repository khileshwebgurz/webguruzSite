// app/blogs/BlogListPage.js
import RecentPost from "@/components/blogComponents/RecentPost";
import { fetchPosts } from "../../../lib/fetchPosts";
import Link from "next/link";
import "./blogs.css";
import SearchWrapper from "@/components/blogComponents/SearchWrapper";

const POSTS_PER_PAGE = 5;

export default async function BlogListPage({ pageNumber = 1 }) {
  const posts = await fetchPosts();

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  return (
    <section className="blog-content-main">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <ul>
              <li>
                <Link href="/categories/web-design">Web Design</Link>
              </li>
              <li>
                <Link href="/categories/online-reputation-management">
                  Online Reputation Management
                </Link>
              </li>
              <li>
                <Link href="/categories/hubspot">Hubspot</Link>
              </li>
              <li>
                <Link href="/categories/digital-marketing">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/categories/google-remarketing">
                  Google Remarketing
                </Link>
              </li>
              <li>
                <Link href="/categories/artificial-intelligence">
                  Artificial Intelligence
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <RecentPost posts={posts} />
        <SearchWrapper 
          posts={posts}
          pageNumber={pageNumber}
          totalPages={totalPages}
          postsPerPage={POSTS_PER_PAGE}
        />
      </div>
    </section>
  );
}