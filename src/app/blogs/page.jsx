import "./blogs.css";
import Contact from "@/components/homeComponents/11HomeContact";
import Addresshome from "@/components/homeComponents/12Addresshome";
import BlogListPage from "./BlogListPage";


const page = async () => {
  return (
    <>
      <section className="blog-content-main">
        <div className="container">
          <BlogListPage pageNumber={1} />
        </div>
      </section>
    </>
  );
};

export default page;
