import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Toast, Toaster, toast } from "react-hot-toast";
const Header = () => {
  const { data } = useSession();
  const HandleSignOut = () => {
    if (window.confirm("Are you sure you want to logOut") === true) {
      signOut();
      toast.success("Successfully Loggged Out");
      
    }
  };
  return (
    <>
      <Toaster />
      <header className="bg-gray-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
          <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
            <h1 className="head" style={{fontSize:"30px", fontWeight:"700"}}>CodeWithHadi</h1>
          </div>

          {data?.user ? (
            <>
              <div className="order-3 flex justify-center px-10" >
                <div className="flex gap-6">
                  <Link className="nav-links" href="/">
                    Home
                  </Link>
                  <Link className="nav-links" href="/">
                    About
                  </Link>
                  <Link className="nav-links" href="/write">
                    Write
                  </Link>

                  <span
                    children
                    className="nav-links"
                    style={{ cursor: "pointer" }}
                    onClick={HandleSignOut}
                  >
                    Log out
                  </span>
              <Link
              href={"/dashboard"}
              >

                <span className="userName profileBox order-3" style={{fontWeight:"800",padding:"0 30px"}}> {data?.user?.name} </span>
              </Link>
                </div>
              
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-6 order-3  px-10">
                <Link className="nav-links" href="/">
                  Home
                </Link>
                <Link className="nav-links" href="/">
                  About
                </Link>
             
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
