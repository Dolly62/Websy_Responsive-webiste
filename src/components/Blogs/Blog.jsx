import React from "react";
import BlogCard from "./BlogCard";
import Img from "../../assets/top.jpeg";

const Blog = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white">
        <section data-aos="fade-up" className="container mb-10 py-8">
          <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <BlogCard Img={Img} />
            <BlogCard Img={Img} />
            <BlogCard Img={Img} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
