import Header from "@/components/Header";
import Footer from "@/components/Footer";
const About = () => {
  return (
    <div style={{ paddingTop: "70px" }}>
      <Header></Header>
      <div style={{ maxWidth: "1200px", margin: "auto" }} className="About">
        <div className="MainParentDiv">
          <div className="AboutPageContent">
            <h3>What We are?</h3>
            <h2>Our Introduction</h2>
            <p>
              Welcome to CodeWithHadi, your ultimate destination for all things
              coding and development! We are not just another blog; we are a
              vibrant and innovative community of passionate coders, learners,
              and tech enthusiasts. At CodeWithHadi, we believe in the power of
              knowledge sharing and collaborative learning, fostering an
              environment where everyone can grow and excel in their coding
              journey. Whether you are a seasoned developer looking for the
              latest trends or a curious beginner eager to dive into the world
              of programming, we've got you covered. Our articles, tutorials,
              and insights cover a wide range of programming languages,
              frameworks, and cutting-edge technologies. Join us on this
              exhilarating adventure, as we unravel the secrets of the digital
              realm and empower you to become the best version of yourself
              through the art of code. Together, let's unlock the boundless
              potential of technology and create a brighter future, one line of
              code at a time. Welcome to CodeWithHadi, where inspiration meets
              innovation!
            </p>
          </div>
          <div className="AboutPageImage">
            <img src="/images/about.jpg" alt="AboutLandingImage" />
          </div>
        </div>
        <div className="SubParent">
          <h2>Why Choose Us</h2>
          <p>
            Welcome to CodeWithHadi, the ultimate destination for all things
            coding! At CodeWithHadi, we take pride in providing a one-of-a-kind
            blogging experience tailored specifically to tech enthusiasts,
            developers, and programming aficionados. What sets us apart is our
            unwavering commitment to delivering top-notch content that inspires,
            educates, and empowers our community. With a team of passionate and
            experienced writers, we ensure that each article is a carefully
            crafted masterpiece, covering a diverse range of topics from
            programming languages and frameworks to cutting-edge technologies
            and industry trends. Whether you're a seasoned coder seeking to stay
            updated or a curious newcomer eager to embark on your coding
            journey, CodeWithHadi is your go-to platform. Join us today and
            unlock a world of insightful articles, engaging discussions, and a
            thriving community of like-minded individuals. Choose CodeWithHadi
            for an unparalleled learning experience and watch your coding skills
            soar to new heights!
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
