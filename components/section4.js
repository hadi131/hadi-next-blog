import Image from "next/image";
import Author from "./_child/author";
import Link from "next/link";

const section4 = ({ buss }) => {
  return (
    <>
      <section className=".post-cards container px-8 md-px-220 py-16">
        <div className="section4-post-card grid grid-cols2">
          <div className="item">
            <h1 className="font-bold text-4xl py-12">Business</h1>
            <div className="flex section4-post-card-data flex-col gap-6">
              {buss.SingleBlog.map((v) => {
                return(
                  <>
                     <div className="flex gap-5">
                  <div className="image flex flex-col justify-start">
                    <Image
                      alt={v.avatarAlt}
                      src={v.avatar}
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="info flex justify-center flex-col">
                    <div className="cat">
                      <span className="text-orange-600 hover:text-orange-800">
                      {v.category}
                      </span>
                      <span className="text-gray-800 hover:text-gray-600">
                      {new Date(v.createdAt).toDateString()}
                      </span>
                    </div>
                    <div className="title">
                      <Link
                        className="text-xl md:text-xl font-bold text-gray-800 hover:text-gray-600"
                        href={`/posts/${v.slug}`}>{v.title}
                      </Link>
                    </div>
                    <Author></Author>
                  </div>
                </div>
                </>
                );
             
              })}
            </div>
          </div>


          
          <div className="item">
            <h1 className="font-bold text-4xl py-12">Travel</h1>
            <div className="flex section4-post-card-data flex-col gap-6">
              {/* post */}
              {Post()}
              {Post()}
              {Post()}
              {Post()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default section4;
const Post = () => {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Image
          src={"/images/img1.jpg"}
          className="rounded"
          width={400}
          height={300}
        />
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <span className="text-orange-600 hover:text-orange-800">
            Business, Travel
          </span>
          <span className="text-gray-800 hover:text-gray-600">
            - July 3, 2022
          </span>
        </div>
        <div className="title">
          <Link
            href={"/"}
            className="text-xl md:text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            Your most unhappy customers are your greatest source of learning
          </Link>
        </div>
        <Author></Author>
      </div>
    </div>
  );
};
