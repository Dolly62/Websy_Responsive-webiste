import React from "react";
import Image from "../../assets/top.jpeg";

const BannerDetails = (props) => {
  return (
    <section className="bg-slate-100 dark:bg-slate-900 dark:text-white">
      <div className="container flex flex-col items-center justify-center py-10 md:h-[500px]">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className={`flex flex-col p-4 items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
              props.reverse ? "md:order-last" : ""
            }`}
          >
            <h1 className="text-2xl md:text-4xl">
              We Bulid Apps That Get Trending On Appworld
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
              commodi iste aspernatur dolore doloremque repellendus eaque
              officia nam.
            </p>
            <div>
              <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
                <li className="font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, esse?
                </li>
                <li className="font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, esse?
                </li>
                <li className="font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, esse?
                </li>
                <li className="font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, esse?
                </li>
              </ul>
            </div>
            <button className="btn-primary">Get Started</button>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className={props.reverse ? "order-1" : ""}
          >
            <img
              src={Image}
              alt="Image"
              className="mx-auto w-full p-4 md:max-w-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerDetails;
