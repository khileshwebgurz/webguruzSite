'use client'
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
const SearchablePost = () => {
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
  return (
    <div className="row blog-main">
      <div className="col-sm-12 col-xs-12">
        <form>
          <input type="text" placeholder="search..." />
          <select value={selectedCategory} onChange={handleChangeCategory}>
            <option value="-1">Select Category</option>
            {Object.keys(categoryLinks).map((category) => (
            <option key={category} value={category}>
              {category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
            </option>
          ))}
         
          </select>
        </form>
      </div>
    </div>
  );
};

export default SearchablePost;
