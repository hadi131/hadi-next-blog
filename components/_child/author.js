import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

const author = () => {
  const { data } = useSession();

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
           {/* {data?.user.name} */}
           Abdul Hadi
          </Link>
          <div className="text-sm text-gray-500">CEO and Founder</div>
        </div>
      </div>
    </>
  );
};

export default author;
