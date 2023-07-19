import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from 'axios'
import { toast , Toaster } from "react-hot-toast";
const register = () => {
  const [isFetching, setIsfetching] = useState(false);
  

  const router = useRouter()

  const [form, setForm] = useState({
   name:"",
   email:"",
   password:""
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };



  const handleSubmit = async (e) => {
    setIsfetching(true);
    try {

      e.preventDefault();
      const res = await axios.post("/api/register", {
        ...form,
      });

      setIsfetching(false);

      if(toast.success("User Registered")){
        router.push('/login')
      }
    
        }
        
          catch (error) {
      if (error?.response?.data?.message) {
        console.log(error.response.data.message);
        setIsfetching(false);
        toast.error("Email Exists!");
      }
    }
  };




  return (
    <>
    <Toaster/>
      <div className="register-user-main-div">
        <form action="" onSubmit={handleSubmit}>
          <h1>REGISTER</h1>

          <div className="feilds">
            <label htmlFor="name">Username</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInput}
              id="name"
              placeholder="Enter username"
            />
          </div>

          <div className="feilds">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              id="email"
              onChange={handleInput}
              placeholder="Enter email address"
            />
          </div>

          <div className="feilds">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              id="password"
              placeholder="Enter password"
              onChange={handleInput}
            />
          </div>

          <div className="login-register-btns">
            <button type="submit" className="btn btn2">
              {isFetching ? "Registering..." : "Register"}
            </button>
            <div className="haventRegistered">
              Already Registered? <Link href={"/login"}>Login</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default register;
