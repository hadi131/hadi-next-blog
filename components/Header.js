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
 <Toaster
        position="bottom-right"

      />      <header className="bg-gray-50" style={{position:"fixed",width:"100%",zIndex:"9999",overflow:"hidden",top:"0px"}}>
        <div className="xl:container flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
           <Link href={"/"} style={{fontSize:"30px", fontWeight:"700",padding:"0px"}}>CodeWithHadi</Link>
          </div>

          {data?.user ? (
            <>
              <div className="order-3 flex justify-center px-2 py-3" >
                <div className="flex gap-6" style={{alignItems:"center"}}>
                  <Link className="nav-links" href="/">
                    Home
                  </Link>
                  <Link className="nav-links" href="/about">
                    About
                  </Link>
                  <Link className="nav-links" href="/write">
                    Write
                  </Link>

                  <span
                    children
                    className="nav-links loginlogout"
                    style={{ cursor: "pointer" }}
                    onClick={HandleSignOut}
                  >
                    Log out
                  </span>
              <Link
              href={"/dashboard"}
              >

                <span className="userName profileBox order-3" style={{fontWeight:"800"}}> {data?.user?.name} </span>
              </Link>
                </div>
              
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-6 order-3  px-10" style={{alignItems:"center"}}>
                <Link className="nav-links" href="/">
                  Home
                </Link>
                <Link className="nav-links" href="/about">
                  About
                </Link>
                <Link
                href={"/login"}
                    children
                    className="nav-links loginlogout"
                    style={{ cursor: "pointer" }}
                  >
                    Log In
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
