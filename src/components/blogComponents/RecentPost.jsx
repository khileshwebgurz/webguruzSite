import React from "react";
import Image from "next/image";
import Link from "next/link";
const RecentPost = ({posts}) => {
  return (
    <>
      {/* one recent post */}
   
          <div className="row blog-image-content">
            <div className="col-sm-6 col-xs-12 image">
              <Image src={posts[0].yoast_head_json.schema["@graph"][0].thumbnailUrl}
                alt="img" width={700} height={340} />
            </div>
            <div className="col-sm-6 col-xs-12 content">
              {/* <span className="tags">Guides</span> */}
              <h3>
                <Link href={`/blog/${posts[0].slug}`}>
                {posts[0].title.rendered}
                </Link>
             
              </h3>
              <p
                  dangerouslySetInnerHTML={{
                    __html: posts[0].excerpt.rendered
                      .replace(/<p>/g, "")
                      .replace(/<\/p>/g, ""),
                  }}
                />
              {/* <span className="name">Sudeep Srivastava</span> */}
            </div>
          </div>

          {/* 3 recent post */}
          <div className="row blog-image-content-center py-5">
            <div className="col-sm-4 col-xs-12">
              <div className="image">
                <Image src={posts[1].yoast_head_json.schema["@graph"][0].thumbnailUrl}
                alt="img1" width={700} height={340} />
              </div>
              <div className="content">
                {/* <span className="tags">Guides</span> */}
                <h3>
                <Link href={`/blog/${posts[1].slug}`}>
                {posts[1].title.rendered}
                </Link>
                </h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: posts[1].excerpt.rendered
                      .replace(/<p>/g, "")
                      .replace(/<\/p>/g, ""),
                  }}
                />
                {/* <span className="name">Sudeep Srivastava</span> */}
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="image">
                <Image src={posts[2].yoast_head_json.schema["@graph"][0].thumbnailUrl}
                alt="img2" width={700} height={340} />
              </div>
              <div className="content">
                {/* <span className="tags">Guides</span> */}
                <h3>
                <Link href={`/blog/${posts[2].slug}`}>
                {posts[2].title.rendered}
                </Link>
                </h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: posts[2].excerpt.rendered
                      .replace(/<p>/g, "")
                      .replace(/<\/p>/g, ""),
                  }}
                />
                {/* <span className="name">Sudeep Srivastava</span> */}
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="image">
                <Image src={posts[3].yoast_head_json.schema["@graph"][0].thumbnailUrl}
                alt="img3" width={700} height={340} />
              </div>
              <div className="content">
                {/* <span className="tags">Guides</span> */}
                <h3>
                <Link href={`/blog/${posts[3].slug}`}>
                {posts[3].title.rendered}
                </Link>
                </h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: posts[3].excerpt.rendered
                      .replace(/<p>/g, "")
                      .replace(/<\/p>/g, ""),
                  }}
                />
                {/* <span className="name">Sudeep Srivastava</span> */}
              </div>
            </div>
          </div>
       
    </>
  );
};

export default RecentPost;
