import Image from "next/image";
import { fetchPosts } from "../../../../lib/fetchPosts";
import { notFound } from "next/navigation";
import "../../blog/blog.css";
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
      <section className="blog-single-post">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              <Image
                src={post.yoast_head_json.schema["@graph"][0].thumbnailUrl}
                alt="Card image cap"
                priority
                width={825}
                height={431}
              />
              <div className="second">
                <Image
                  src={post.yoast_head_json.schema["@graph"][4].image.url}
                  priority
                  height={50}
                  width={50}
                  alt="logo"
                />
                <h4>
                  By {post.yoast_head_json.schema["@graph"][4].image.caption}
                </h4>
                <h4>
                  {post.yoast_head_json.schema["@graph"][0].datePublished.slice(
                    0,
                    10
                  )}
                </h4>
              </div>
              <h2>{post.title.rendered}</h2>
              {post.acf.post_inner_details &&
                post.acf.post_inner_details.length > 0 && (
                  <div>
                    {post.acf.post_inner_details.map((detail, index) => (
                      <div key={index}>
                        {detail.heading && <h3>{detail.heading}</h3>}
                        <div
                          dangerouslySetInnerHTML={{
                            __html: detail.description,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
