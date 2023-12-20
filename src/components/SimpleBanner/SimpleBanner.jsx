import React from "react";

const SimpleBanner = () => {
  return (
    <>
      <div className="bg-primary mt-7">
        <div data-aos="fade-up" className="container py-8 md:py-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 items-center">
            <div className="px-2">
              <iframe
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                className="aspect-video w-full"
                frameborder="0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="flex flex-col items-center gap-4 text-center text-white dark:text-white md:col-span-2 md:items-start md:text-left">
              <h1 className="text-3xl font-bold">
                Market your next projects with Websy
              </h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias, cupiditate? Minus qui molestias quidem commodi.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                harum!
              </p>
              <button className="btn-primary !bg-white !text-black">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleBanner;
