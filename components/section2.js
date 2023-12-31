import Link from "next/link";
import Image from "next/image";
import Author from "../components/_child/author";
const section2 = ({ props }) => {
  return (
    <>
<div>
<h1 style={{fontSize:"40px",fontWeight:"700",textAlign:"center"}}>Blogs
</h1>
</div>
    <div className="allMargins sec2-parent">
      {props.SingleBlog.map((v) => {
        return (
          <div className="sec2-main">
            <div className="sec2-img">
              <Image
                style={{ height: "200px" }}
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
};

export default section2;
