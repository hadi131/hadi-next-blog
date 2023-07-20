import Formate from "../../layout/formate";
import Author from "@/components/_child/author";
import Image from "next/image";
import Related from "@/components/_child/related";
const page = ({ Single }) => {
  function createMarkup(v) {
    return { __html: v };
  }

  return (
    <Formate>
      <section className="singleBlogMainSection">
      <div className="singleBlogSubMain">

        <div className="">
          <Author></Author>
        </div>
        <div className="post">
          <h1 className="singlePostTtitle">
            {Single.singleBlog.title}
          </h1>
          <p className="">
            {Single.singleBlog.subTitle}
          </p>
          <div className="" style={{display:"grid",justifyContent:"center",margin:"auto",padding:"20px 0"}}>
            <Image
              src={Single.singleBlog.avatar}
              width={900}
              height={600}
              style={{ maxWidth: "100%",borderRadius:"20px" }}
            ></Image>
          </div>
          <div
            dangerouslySetInnerHTML={createMarkup(Single.singleBlog.desc)}
            className=""
          ></div>
        </div>
        <Related></Related>
      </div>
      </section>
    </Formate>
  );
};

export default page;

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://hadi-blogging-app.vercel.app/api/blog/${params.slug}`);
  const Single = await response.json();
  return { props: { Single } };
}
