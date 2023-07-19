import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";
import Newsletter from "./_child/newsletter";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-50">
<Newsletter></Newsletter>
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
          <Link href={"/"}>
                  <ImFacebook color="888888" />
              </Link>
              <Link href={"/"}>
                  <ImTwitter color="888888" />
              </Link>
              <Link href={"/"}>
                  <ImYoutube color="888888" />
              </Link>
          </div>
          <p className="py-5 text-gray-400">Copyright ©2022 All right are reserved </p>
          <p className="text-gray-400 text-center">Terms & Conditions</p>
        </div>
      </div>
      </footer>
    </>
  )
}

export default Footer
