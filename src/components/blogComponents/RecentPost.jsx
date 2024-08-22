import Image from "next/image";
import Link from "next/link";

import { fetchPosts } from "../../../lib/fetchPosts";

const RecentPosts = async () => {
  const posts = await fetchPosts();
  if (!posts || posts.length === 0) {
    return <p>No posts available</p>;
  }

  return (
    <section className="blog-editor">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <div className="blog-edit-left">
              <Image
                src={posts[0].yoast_head_json.schema["@graph"][0].thumbnailUrl}
                alt="img"
                width={700}
                height={340}
              />
              <div className="blog-edit-contnt">
                {/* <div className="featured-tp-main d-flex align-items-center justify-content-between py-3">
                  <p className="mb-0">Featured</p>
                  <span>14 mins read</span>
                </div> */}
                <h5 className="mb-3">{posts[0].title.rendered}</h5>
                <p
                  dangerouslySetInnerHTML={{
                    __html: posts[0].excerpt.rendered
                      .replace(/<p>/g, "")
                      .replace(/<\/p>/g, ""),
                  }}
                />

                <Link className="about--btn" aria-label="Tabber links" href={`/blog/${posts[0].slug}`}>
                  About Us{" "}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-right"
                    className="svg-inline--fa fa-arrow-right "
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
          <div className="col-sm-6 col-xs-12">
            <div className="blog-edit-right">
              <h4>Editor's Picks</h4>
              <div className="blog-edit-right-sub">
                {/* <div className="featured-tp-main d-flex align-items-center justify-content-between pb-3">
                  <p className="mb-0">{posts[1].acf.list_all_category}</p>
                  <span>14 mins read</span>
                </div> */}
                <h5>{posts[1].title.rendered}</h5>
                <p
                  dangerouslySetInnerHTML={{
                    __html: posts[1].excerpt.rendered
                      .replace(/<p>/g, "")
                      .replace(/<\/p>/g, ""),
                  }}
                />
                <Link className="about--btn" aria-label="Tabber links" href={`/blog/${posts[1].slug}`}>
                  About Us{" "}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-right"
                    className="svg-inline--fa fa-arrow-right "
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
              <div className="blog-edit-right-sub">
                {/* <div className="featured-tp-main d-flex align-items-center justify-content-between pb-3">
                  <p className="mb-0">{posts[2].acf.list_all_category}</p>
                  <span>14 mins read</span>
                </div> */}
                <h5>{posts[2].title.rendered}</h5>
                <p
                  dangerouslySetInnerHTML={{
                    __html: posts[2].excerpt.rendered
                      .replace(/<p>/g, "")
                      .replace(/<\/p>/g, ""),
                  }}
                />
                <Link className="about--btn" aria-label="Tabber links" href={`/blog/${posts[2].slug}`}>
                  About Us{" "}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-right"
                    className="svg-inline--fa fa-arrow-right "
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
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
