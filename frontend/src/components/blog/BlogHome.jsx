import React from "react";
import Header from "../Header";
import BlogHero from "./BlogHero";
import BlogPostCard from "./BlogPostCard";
import Footer from "../Footer";

function BlogHome() {
  return (
    <div>
      <BlogHero />
      {/* Post start */}
      <div className="mt-14 px-5 sm:px-10 xl:px-20 pb-20">
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-10">
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
        </div>

        {/* Post end */}
        {/* Next page start */}
        <div className="mt-10 flex items-center gap-2 sm:gap-3">
          <button className="hidden uppercase px-2 py-2 border border-[#035FCE] hover:bg-[#035FCE] hover:text-white shadow-lg">
            Previous
          </button>
          <div className="flex items-center justify-center w-11 h-11 border border-[#035FCE] bg-[#035FCE] text-white">
            <p>1</p>
          </div>
          <div className="flex items-center justify-center w-11 h-11 border border-[#035FCE]">
            <p>2</p>
          </div>
          {/* dot start */}
          <p className="text-base text-[#666666] sm:px-5">...</p>
          {/* dot end */}
          <div className="flex items-center justify-center w-11 h-11 border border-[#035FCE]">
            <p>17</p>
          </div>
          <button className="uppercase px-2 py-2 border border-[#035FCE] hover:bg-[#035FCE] hover:text-white  shadow-lg">
            Next
          </button>
        </div>
        {/* Next page end */}
      </div>
    </div>
  );
}

export default BlogHome;
