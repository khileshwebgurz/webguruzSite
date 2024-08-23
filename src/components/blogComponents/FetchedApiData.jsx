import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchPosts } from "../../../lib/fetchPosts";
import SearchablePost from "./SearchablePost";

const FetchedApiData = async () => {
  const posts = await fetchPosts();
  if (!posts || posts.length === 0) {
    return <p>No posts available</p>;
  }

  return (
    <section className="blog-card-sub-main">
      <div className="container">
        {/* <div className="row blog-main">
          <div className="col-sm-12 col-xs-12">
            <form>
              <input type="text" placeholder="search..." />
              <select>
                <option value="disable">Category</option>
                <option>Account Based Marketing</option>
                <option>Analytics</option>
                <option>App Development</option>
                <option>Business</option>
                <option>Content Marketing</option>
                <option>CRO</option>
                <option>Data Visualization</option>
                <option>Design</option>
                <option>Development</option>
              </select>
            </form>
          </div>
        </div> */}
        <SearchablePost posts={posts}/>

        {/* <div className="row">
          {posts.map((post, index) => (
            <div key={index} className="col-sm-4 col-xs-12">
              <div className="blog-card-sub">
                <div className="image">
                  <Image
                    src={post.yoast_head_json.schema["@graph"][0].thumbnailUrl}
                    alt={post.title}
                    width={700}
                    height={340}
                  />
                </div>

                <div className="content">
                  {/* <span className="mb-4 d-inline-block">
                    {post.yoast_head_json.schema["@graph"][4]['image'].caption|| "Unknown Author"}{" "}
                    {post.date || "Unknown Date"}{" "}
                    {post.readTime || "0 min read"}
                  </span> */}
                  {/* <h5 className="pb-4">{post.title.rendered}</h5>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.rendered
                        .replace(/<p>/g, "")
                        .replace(/<\/p>/g, ""),
                    }}
                  />
                  <Link href={`/blog/${post.slug}`} className="link-btn about--btn">
                    Read More{" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-right"
                      className="svg-inline--fa fa-arrow-right ps-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div> */} 

        <div className="row">
          <div className="col-sm-12 col-xs-12 pagination-main">
            <ul>
              <li className="nocolor">
                <a href="/">Prev </a>
              </li>
              <li>
                <a href="/">1</a>
              </li>
              <li>
                <a href="/">2</a>
              </li>
              <li>
                <a href="/">3</a>
              </li>
              <li>
                <a href="/">4</a>
              </li>
              <li className="nocolor">
                <a href="/">Next</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FetchedApiData;
