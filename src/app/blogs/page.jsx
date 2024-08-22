import React from "react";
import Image from "next/image";
import "./blogs.css";
import Contact from "@/components/homeComponents/11HomeContact";
import Addresshome from "@/components/homeComponents/12Addresshome";
import RecentPost from "@/components/blogComponents/RecentPost";
import FetchedApiData from "@/components/blogComponents/FetchedApiData";

const page = () => {
  return (
    <div>
      {/* this is for latest and recent blog post */}
      {/* <section className="blog-editor">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <div className="blog-edit-left">
                <Image src={blogone} alt={blogone} width={700} height={340} />
                <div className="blog-edit-contnt">
                  <div className="featured-tp-main d-flex align-items-center justify-content-between py-3">
                    <p className="mb-0">Featured</p>
                    <span>14 mins read</span>
                  </div>
                  <h5 className="mb-3">
                    Why an Entrepreneur Should have a Personal Brand
                  </h5>
                  <p>
                    Standing out is just one of the significant elements of
                    personal branding. Within many fields, name-recognition goes
                    a long way towards establishing authority and credibility.
                    Your followers, clients, prospective employers, and the rest
                    of the world will get to know you based on what you bring to
                    the table.
                  </p>
                  <a class="about--btn" aria-label="Tabber links" href="#">
                    About Us{" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-right"
                      class="svg-inline--fa fa-arrow-right "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="blog-edit-right">
                <h4>Editor's Picks</h4>
                <div className="blog-edit-right-sub">
                  <div class="featured-tp-main d-flex align-items-center justify-content-between pb-3">
                    <p class="mb-0">Marketing Automation</p>
                    <span>14 mins read</span>
                  </div>
                  <h5>Identify Sources of Technology</h5>
                  <p>
                    Standing out is just one of the significant elements of
                    personal branding. Within many fields, name-recognition goes
                    a long way towards establishing authority and credibility.{" "}
                  </p>
                  <a class="about--btn" aria-label="Tabber links" href="#">
                    About Us{" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-right"
                      class="svg-inline--fa fa-arrow-right "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="blog-edit-right-sub">
                  <div class="featured-tp-main d-flex align-items-center justify-content-between pb-3">
                    <p class="mb-0">Marketing Automation</p>
                    <span>14 mins read</span>
                  </div>
                  <h5>Identify Sources of Technology</h5>
                  <p>
                    Standing out is just one of the significant elements of
                    personal branding. Within many fields, name-recognition goes
                    a long way towards establishing authority and credibility.{" "}
                  </p>
                  <a class="about--btn" aria-label="Tabber links" href="#">
                    About Us{" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-right"
                      class="svg-inline--fa fa-arrow-right "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <RecentPost />

      {/* this is for all blog post */}
      {/* <section className="blog-card-sub-main">
        <div className="container">
          <div className="row blog-main">
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
          </div>
          <div className="row">
            <div className="col-sm-4 col-xs-12">
              <div className="blog-card-sub">
                <div className="image">
                  <Image src={blogone} alt={blogone} width={700} height={340} />
                </div>
                <div className="content">
                  <span className="mb-4 d-inline-block">
                    Sameer Pawar August 14, 2024 6 min read
                  </span>
                  <h5 className="pb-4">
                    Unlock the Power of Healthcare SEO with a Trusted Consultant
                  </h5>
                  <p>
                    Are you a healthcare provider looking to boost your online
                    presence and attract more patients? A healthcare SEO
                    consultant can be your secret...
                  </p>
                  <a href="" className="link-btn about--btn">
                    Read More{" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-right"
                      class="svg-inline--fa fa-arrow-right ps-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="blog-card-sub">
                <div className="image">
                  <Image src={blogone} alt={blogone} width={700} height={340} />
                </div>
                <div className="content">
                  <span className="mb-4 d-inline-block">
                    Sameer Pawar August 14, 2024 6 min read
                  </span>
                  <h5 className="pb-4">
                    Unlock the Power of Healthcare SEO with a Trusted Consultant
                  </h5>
                  <p>
                    Are you a healthcare provider looking to boost your online
                    presence and attract more patients? A healthcare SEO
                    consultant can be your secret...
                  </p>
                  <a href="" className="link-btn about--btn">
                    Read More{" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-right"
                      class="svg-inline--fa fa-arrow-right ps-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="blog-card-sub">
                <div className="image">
                  <Image src={blogone} alt={blogone} width={700} height={340} />
                </div>
                <div className="content">
                  <span className="mb-4 d-inline-block">
                    Sameer Pawar August 14, 2024 6 min read
                  </span>
                  <h5 className="pb-4">
                    Unlock the Power of Healthcare SEO with a Trusted Consultant
                  </h5>
                  <p>
                    Are you a healthcare provider looking to boost your online
                    presence and attract more patients? A healthcare SEO
                    consultant can be your secret...
                  </p>
                  <a href="" className="link-btn about--btn">
                    Read More{" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-right"
                      class="svg-inline--fa fa-arrow-right ps-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="blog-card-sub">
                <div className="image">
                  <Image src={blogone} alt={blogone} width={700} height={340} />
                </div>
                <div className="content">
                  <span className="mb-4 d-inline-block">
                    Sameer Pawar August 14, 2024 6 min read
                  </span>
                  <h5 className="pb-4">
                    Unlock the Power of Healthcare SEO with a Trusted Consultant
                  </h5>
                  <p>
                    Are you a healthcare provider looking to boost your online
                    presence and attract more patients? A healthcare SEO
                    consultant can be your secret...
                  </p>
                  <a href="" className="link-btn about--btn">
                    Read More{" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-right"
                      class="svg-inline--fa fa-arrow-right ps-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="blog-card-sub">
                <div className="image">
                  <Image src={blogone} alt={blogone} width={700} height={340} />
                </div>
                <div className="content">
                  <span className="mb-4 d-inline-block">
                    Sameer Pawar August 14, 2024 6 min read
                  </span>
                  <h5 className="pb-4">
                    Unlock the Power of Healthcare SEO with a Trusted Consultant
                  </h5>
                  <p>
                    Are you a healthcare provider looking to boost your online
                    presence and attract more patients? A healthcare SEO
                    consultant can be your secret...
                  </p>
                  <a href="" className="link-btn about--btn">
                    Read More{" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-right"
                      class="svg-inline--fa fa-arrow-right ps-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="blog-card-sub">
                <div className="image">
                  <Image src={blogone} alt={blogone} width={700} height={340} />
                </div>
                <div className="content">
                  <span className="mb-4 d-inline-block">
                    Sameer Pawar August 14, 2024 6 min read
                  </span>
                  <h5 className="pb-4">
                    Unlock the Power of Healthcare SEO with a Trusted Consultant
                  </h5>
                  <p>
                    Are you a healthcare provider looking to boost your online
                    presence and attract more patients? A healthcare SEO
                    consultant can be your secret...
                  </p>
                  <a href="" className="link-btn about--btn">
                    Read More{" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-right"
                      class="svg-inline--fa fa-arrow-right ps-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="blog-card-sub">
                <div className="image">
                  <Image src={blogone} alt={blogone} width={700} height={340} />
                </div>
                <div className="content">
                  <span className="mb-4 d-inline-block">
                    Sameer Pawar August 14, 2024 6 min read
                  </span>
                  <h5 className="pb-4">
                    Unlock the Power of Healthcare SEO with a Trusted Consultant
                  </h5>
                  <p>
                    Are you a healthcare provider looking to boost your online
                    presence and attract more patients? A healthcare SEO
                    consultant can be your secret...
                  </p>
                  <a href="" className="link-btn about--btn">
                    Read More{" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-right"
                      class="svg-inline--fa fa-arrow-right ps-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
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
      </section> */}
      <FetchedApiData />

      {/* these are bottom data */}
      <Contact />
      <Addresshome />
    </div>
  );
};

export default page;
