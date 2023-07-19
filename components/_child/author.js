import Image from "next/image";
import Link from "next/link";
const author = () => {
  return (
    <>
      <div className="author flex py-5">
        <Image
          src={"/images/author/author1.jpg"}
          width={60}
          height={60}
          className="rounded-full"
        ></Image>
        <div className="fle flex-col justify-center px-4">
          <Link
            href={"/"}
            className="text-md font-bold text-gray-800 hover:text-gray-600"
          >
            Flying High
          </Link>
          <div className="text-sm text-gray-500">CEO and Founder</div>
        </div>
      </div>
    </>
  );
};

export default author;
