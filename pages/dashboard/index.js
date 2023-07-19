import Link from "next/link";
import Header from "../../components/Header";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const index = ({ data }) => {
  const router = useRouter();

  const handleDelete = async (slug) => {
    try {
      if (window.confirm("Are you sure you want to delete") === true) {
        const del = await fetch(`http://localhost:3000/api/blog/${slug}`, {
          method: "DELETE"
        });

        if (toast.success("Blog Deleted")) {
          router.push("/dashboard");
        } else {
          null;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header></Header>
      <section className="dash-main-div">
        <h1 className="dash-main-div-logo-heading">H BLOGS</h1>

        {data?.SingleBlog?.map((v) => {
          return (
            <>
              <div className="dash-all-blogs">
                <div className="dash-blog" key={v._id}>
                  <Image
                    src={v.avatar}
                    alt={v.avatarAlt}
                    height={150}
                    width={150}
                  ></Image>
                </div>
                <div className="dash-blog-title">
                  <div className="dash-title">{v.title}</div>
                  <div className="dash-cat">{v.category}</div>

                  <div className="dash-icons">
                    <Link href={`/posts/${v.slug}`}>
                      <i class="fa-sharp fa-regular fa-eye"></i>
                    </Link>
                    <Link href={`/edit/${v.slug}`}>
                      <i class="fa-regular fa-pen-to-square"></i>
                    </Link>

                    <i
                      class="fa-solid fa-trash-can"
                      onClick={() => handleDelete(v.slug)}
                    ></i>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};
export default index;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/getAllBlogs");
  const data = await res.json();
  return { props: { data } };
}
