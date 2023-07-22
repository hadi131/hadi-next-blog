
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore , {Autoplay} from 'swiper'
import Link from "next/link";
import Image from "next/image";
import 'swiper/css'
 import Author from "./_child/author";
    SwiperCore.use([Autoplay])

const section3 = ({pop}) => {
  return (
    <>
<div>
<h1 style={{fontSize:"40px",fontWeight:"700",textAlign:"center"}}>  Latest Blogs
</h1>
</div>
    <div className="allMargins sec3-parent">
      {pop.SingleBlog.map((v) => {
        return (
          <div className="sec3-main">
            <div className="sec2-img">
              <Image
                style={{ height: "300px" }}
                alt={v.avatarAlt}
                src={v.avatar}
                className="rounded"
                width={500}
                height={200}
              />
            </div>
            <div className="blogs-main-content">

            <div className="sec2-blog-date">
            <div className="text-orange-600 hover:text-orange">

            {v.category}
            </div>
            <div className="sec2-blog-date-grid">

            {new Date(v.createdAt).toDateString()}
            </div>
            </div>
            <div className="sec2-title">
              <Link href={`/posts/${v.slug}`}>{v.title}</Link>
            </div>
            <div className="sec2-subtitle" style={{height:"125px", overflow:"hidden"}}>
                  {v.subTitle}
            </div>
          <Author></Author>
            </div>
          </div>
        );
      })}
    </div>
    </>

  );
}

export default section3
