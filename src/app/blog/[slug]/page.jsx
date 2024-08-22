import React from "react";
import Image from "next/image";
import { fetchPosts } from "../../../../lib/fetchPosts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await fetchPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
const page = async ({ params }) => {
  const { slug } = params;
  const posts = await fetchPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }
  return (
    <>
      <Image
        src={post.yoast_head_json.schema["@graph"][0].thumbnailUrl}
        alt="Card image cap"
        priority
        width={825}
        height={431}
        style={{ marginLeft: "500px", marginTop: "70px" }}
      />
      <div
        className="second"
        style={{ display: "flex", flexDirection: "row", marginLeft: "500px" }}
      >
        <Image
          src={post.yoast_head_json.schema["@graph"][4].image.url}
          priority
          height={50}
          width={50}
          alt="logo"
          style={{ borderRadius: "50px" }}
        />
        <h4 style={{ marginLeft: "12px" }}>
          By {post.yoast_head_json.schema["@graph"][4].image.caption}
        </h4>
        <h4 style={{ marginLeft: "500px" }}>
          {post.yoast_head_json.schema["@graph"][0].datePublished.slice(0, 10)}
        </h4>
      </div>
      <h2>{post.title.rendered}</h2>
      {post.acf.post_inner_details &&
        post.acf.post_inner_details.length > 0 && (
          <div>
            {post.acf.post_inner_details.map((detail, index) => (
              <div key={index}>
                {detail.heading && <h3>{detail.heading}</h3>}
                <div dangerouslySetInnerHTML={{ __html: detail.description }} />
              </div>
            ))}
          </div>
        )}
    </>
  );
};

export default page;
