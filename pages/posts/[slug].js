import Formate from "../../layout/formate";
import Author from "@/components/_child/author";
import Image from "next/image";
import Related from "@/components/_child/related";
import Link from "next/link";
const page = ({ Single }) => {
  function createMarkup(v) {
    return { __html: v };
  }

  return (
    <Formate>
      <section className="singleBlogMainSection">
      <div className="singleBlogSubMain">
      <div className="" style={{display:"grid",justifyContent:"center",margin:"auto",padding:"20px 0"}}>
            <Image
              src={Single.singleBlog.avatar}
              width={900}
              height={600}
              style={{ maxWidth: "100%",borderRadius:"10px" }}
            ></Image>
          </div>
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
         
          <div
            dangerouslySetInnerHTML={createMarkup(Single.singleBlog.desc)}
            className=""
          ></div>
        </div>
        {/* <Related ></Related> */}



     








      </div>
      </section>

      <h1 className="font-bold text-4xl py-12" style={{padding:"10px"}}>Related</h1>
      <div className="flex gap-5" style={{padding:"10px"}}>
        <div className="image flex flex-col justify-start">
          <Image
            src={Single.singleBlog.avatar}
            className="rounded"
            width={250}
            height={400}
            alt={Single.singleBlog.avatarAlt}

          />
        </div>
        <div className="info flex justify-center flex-col">
          <div className="cat">
            <div className="text-orange-600 hover:text-orange-800">
            {Single.singleBlog.category}
            </div>
            <div className="text-gray-800 hover:text-gray-600">
            {new Date(Single.singleBlog.createdAt).toDateString()}
            </div>
          </div>
          <div className="title">
            <Link
              href={"/"}
              className="text-sm md:text-3xl font-bold text-gray-800 hover:text-gray-600 "
            >
            {Single.singleBlog.title}
            </Link>
          </div>
          {/* <Author></Author> */}
        </div>
      </div>
    </Formate>
  );
};

export default page;

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://hadi-blogging-app.vercel.app/api/blog/${params.slug}`);
  const Single = await response.json();
  return { props: { Single } };
}
