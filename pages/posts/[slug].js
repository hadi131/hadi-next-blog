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
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author></Author>
        </div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center">
            {Single.singleBlog.title}
          </h1>
          <p className="text-gray-500 text-xl text-center">
            {Single.singleBlog.subTitle}
          </p>
          <div className="py-10">
            <Image
              src={Single.singleBlog.avatar}
              width={900}
              height={600}
              style={{ width: "900px", height: "600px" }}
            ></Image>
          </div>
          <div
            dangerouslySetInnerHTML={createMarkup(Single.singleBlog.desc)}
            className="content text-gray-600 text-lg flex flex-col gap-4"
          ></div>
        </div>
        <Related></Related>
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
