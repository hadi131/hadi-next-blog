import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

const formate = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default formate;
