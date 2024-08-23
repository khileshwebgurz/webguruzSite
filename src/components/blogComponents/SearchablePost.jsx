"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import InputSearchComponent from "./InputSearchComponent";
const SearchablePost = ({ posts }) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("-1");
  const categoryLinks = {
    "artificial-intelligence": "categories/artificial-intelligence",
    "blogging": "categories/blogging",
    "brand-marketing": "/categories/brand-marketing",
    "content-marketing": "/categories/content-marketing",
    "digital-marketing": "/categories/digital-marketing",
    "ecommerce": "/categories/ecommerce",
    "email-marketing": "/categories/email-marketing",
    "facebook-marketing": "/categories/facebook-marketing",
    "frameworks": "/categories/frameworks",
    "full-stack-javascript-development":
      "/categories/full-stack-javascript-development",
    "google-remarketing": "/categories/google-remarketing",
    "hubspot": "/categories/hubspot",
    "infographic": "/categories/infographic",
    "infusionsoft": "/categories/infusionsoft",
    "internet-marketing": "/categories/internet-marketing",
    "ios-app": "/categories/ios-app",
    "iphone-app-development": "/categories/iphone-app-development",
    "java-development": "/categories/java-development",
    "joomla": "/categories/joomla",
    "linkedin-marketing": "/categories/linkedin-marketing",
    "logo-design": "/categories/logo-design",
    "magento": "/categories/magento",
    "main-post": "/categories/main-post",
    "mobile-application-development":
      "/categories/mobile-application-development",
    "office-culture": "/categories/office-culture",
    "online-reputation-management": "/categories/online-reputation-management",
    "orm": "/categories/orm",
    "paid-marketing": "/categories/paid-marketing",
    "php": "/categories/php",
    "seo": "/categories/seo",
    "shopify": "/categories/shopify",
    "social-media-marketing": "/categories/social-media-marketing",
    "titanium-development": "/categories/titanium-development",
    "web-application-development": "/categories/web-application-development",
    "web-design": "/categories/web-design",
    "web-developments": "/categories/web-developments",
    "wordpress": "/categories/wordpress",
  };
  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
    if (event.target.value !== "-1") {
      router.push(categoryLinks[event.target.value]);
    }
  };

  const [searchTerms, setSearchTerms] = useState("");

  const handleGettingdata = (setSearchTerm) => {
    setSearchTerms(setSearchTerm);
  };
  // console.log(posts)
  const filteredPosts = posts.filter((post) => {
    const titleMatch = post.title.rendered.toLowerCase().includes(searchTerms);
    return titleMatch;
  });
  return (
    <div className="row blog-main">
      <div className="col-sm-12 col-xs-12">
        <form>
          <InputSearchComponent setSearchTerm={handleGettingdata} />
          <select value={selectedCategory} onChange={handleChangeCategory}>
            <option value="-1">Select Category</option>
            {Object.keys(categoryLinks).map((category) => (
              <option key={category} value={category}>
                {category
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </option>
            ))}
          </select>
        </form>
        <div className="row">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <div key={index} className="col-sm-4 col-xs-12">
                <div className="blog-card-sub">
                  <div className="image">
                    <Image
                      src={
                        post.yoast_head_json.schema["@graph"][0].thumbnailUrl
                      }
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
                  <h5 className="pb-4">{post.title.rendered}</h5>
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
            ))
          ) : (
            <p>No matching posts found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchablePost;
