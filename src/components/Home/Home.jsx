import React from "react";
import HomeImg from "../../assets/homeimg.svg";

const Home = () => {
  return (
    <div className="h-[750px] md:h-[500px] bg-gradient-to-r from-violet-950 to-violet-900 pt-20">
      <section className="container flex flex-col items-center justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-white">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center text-center gap-4 md:items-start md:text-left"
          >
            <h1 className="text-4xl">
              We Bulid Apps That Get Trending On Appworld
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
              commodi iste aspernatur dolore doloremque repellendus eaque
              officia nam.
            </p>
            <div className="space-x-4">
              <button className="btn-primary">Get Started</button>
              <button className="btn-outline">Login</button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-xs p-4"
          >
            <img src={HomeImg} alt="Image" className="mx-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
