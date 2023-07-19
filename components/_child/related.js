import Link from "next/link";
import Image from "next/image";
import Author from "./author";
const related = () => {
  return (
    <>
       <section className="pt-20">
            <h1 className="font-bold text-4xl py-12">Related</h1>
            <div className="flex flex-col gap-10">
{Post()}
{Post()}
{Post()}
            </div>
       </section>  
    </>
  )
}

export default related

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