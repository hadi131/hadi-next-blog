import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
const section1 = ({ blog }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <section className="py-16 section1-right-image header-main-section">
        <div className="container mx-auto md-px-20">
          <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
          <Slider {...settings}>
        
            {blog.SingleBlog.slice(0, 4).map((v, i) => {
              return (
                <div className="slider-grid">

                  <div className="slide-card" key={i}>
                    <div className="image">
                        <Image
                          className="blog_img"
                          alt={v.avatarAlt}
                          src={v.avatar}
                          width={500}
                          height={300}
                        />
                    </div>

                    <div className="header-slide-main-content-div">
                      <div className="sec2-blog-date">
                        <Link
                          className="text-orange-600 hover:text-orange"
                          href={"/"}
                        >
                          {v.category}
                        </Link>
                        <Link
                          className="text-gray-600 hover:text-gray"
                          href={"/"}
                        >
                          {" "}
                          {new Date(v.createdAt).toDateString()}
                        </Link>
                      </div>

                      <div className="title">
                        <Link
                          href={"/"}
                          className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600"
                        >
                          {v.title}
                        </Link>
                      </div>
                      {/* <div className="header-slide-para">{v.subTitle}</div> */}
                      <div className="sec2-subtitle">
                  {v.subTitle}
            </div>
                    </div>
                  </div>

                    
                  </div>
              );
            })}</Slider>
        </div>
      </section>
    </>
  );
};

export default section1;
