import Header from "../../components/Header";
import React, { useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import { MdCloudUpload } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.min.css";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { redirect } from "next/dist/server/api-utils";
const index = () => {
  const router = useRouter();
  const editor = useRef(null);
  const [file, setFile] = useState("");
const [isFetching,setIsfetching] = useState(false)
  const handleDeleteImage = () => {
    setFile(null);
  };

  const [form, setForm] = useState({
    title: "",
    subTitle: "",
    metaDesc: "",
    category: "",
    desc: "",
    avatarAlt: "",
    authorID: ""
  });

  const UploadImageToCloudinary = async () => {
    try {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "blog-images");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/hadi131/image/upload ",
        {
          body: data,
          method: "POST"
        }
      );

      const jsonImg = await res.json();
      return jsonImg.secure_url;
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    setIsfetching(true)
    try {
      e.preventDefault();
      const ImageURL = await UploadImageToCloudinary();
      const res = await axios.post("/api/blog/post", {
        ...form,
        avatar: ImageURL
      });
      console.log(res)
      setIsfetching(false)
      // alert("Your blog is successfully posted");
if(toast.success("Blog Upload Successfuly!",{
  autoClose: 3000,

})
(setTimeout(() => {
  
  (router.push("/"))
}, 2000))
)
setForm(
  {
    title: "",
    subTitle: "",
    metaDesc: "",
    category: "",
    desc: "",
    avatarAlt: "",
    authorID: ""
  }
)
setFile(null)
      // router.push("/");
    } catch (error) {
      if (error?.response?.data?.message) {
        console.log(error.response.data.message);
        // alert("Title already taken!");
        setIsfetching(false)
toast.error("Title Already Exists!",{
  autoClose: 5000,

})
      }
    }
  };

  return (
    <>
    <Toaster/>
    <Header></Header>
      <div className="write-blog-main-div" >
        <form action="" onSubmit={handleSubmit}>
          <h1>What's On Your Mind?</h1>

          <div className="feilds">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              id="title"
              onChange={handleInput}
              placeholder="Enter Title"
            />
          </div>

          <div className="feilds">
            <label htmlFor="subtitle">Sub Title</label>
            <input
              type="text"
              name="subTitle"
              value={form.subTitle}
              id="subtitle"
              onChange={handleInput}
              placeholder="Enter Sub Title"
            />
          </div>

          <div className="feilds">
            <label htmlFor="metadesc">Meta Description</label>
            <input
              type="text"
              onChange={handleInput}
              name="metaDesc"
              value={form.metaDesc}
              id="metadesc"
              placeholder="Enter Meta Description"
            />
          </div>

          <div className="feilds">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              onChange={handleInput}
              name="category"
              value={form.category}
              id="category"
              placeholder="Enter Category"
            />
          </div>

          <div className="desc">
            <JoditEditor
              ref={editor}
              onBlur={(v) => setForm({ ...form, desc: v })}
              onChange={(v) => setForm({ ...form, desc: v })}
              value={form.desc}
              tabIndex={1}
            ></JoditEditor>
          </div>

          <div className="avatar-upload-main">
            {file && (
              <div className="crossimage">
                <ImCross
                  onClick={handleDeleteImage}
                  style={{ cursor: "pointer" }}
                />
              </div>
            )}

            <div className="avatar-upload">
              {file ? (
                <img
                  className="avatarpreview"
                  src={URL.createObjectURL(file)}
                  alt=""
                />
              ) : (
                <>
                  <div className="uploadIcon">
                    <MdCloudUpload />
                  </div>
                  <label htmlFor="avatarinput" style={{ cursor: "pointer" }}>
                    Upload Image
                  </label>
                  <input
                    id="avatarinput"
                    style={{ display: "none" }}
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </>
              )}
            </div>
          </div>
          {file && (
            <div className="feilds">
              <label htmlFor="avatarAlt">Avatar Alt</label>
              <input
                type="text"
                id="avatarAlt"
                onChange={handleInput}
                name="avatarAlt"
                value={form.avatarAlt}
                placeholder="avatarAlt"
              />
            </div>
          )}

          <div className="feilds">
            <label htmlFor="authoid">Author ID</label>
            <input
              type="text"
              name="authorID"
              value={form.authorID}
              onChange={handleInput}
              id="authoid"
              placeholder="Author Id"
            />
          </div>
          <div className="btns">
            <button className="btn btn1" type="reset" onClick={(e)=>setFile(null)}>Reset</button>
            <button type="submit" className="btn btn2">
              {
                isFetching ? "Uploading...":"Submit"
              }
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default index;
