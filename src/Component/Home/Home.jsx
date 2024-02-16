import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Home.css";
import Metric from "../Metric/Metric";
import { BsTwitterX, BsGithub, BsDiscord } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="particles"></div>
        <div className="hero-text">
          <h2>
            DLT COIN <span>PROTOCOL</span>
          </h2>
          <p>
            Swap and earn on the leading decentralized crypto trading
            protocol.
          </p>

          <div className="--flex-dir-column">
            <Link to="/">
              <BsTwitterX />
            </Link>
            <Link to="">
            <BsGithub />

            </Link>
            <Link to="">
            <BsDiscord />

            </Link>
          </div>
        </div>
      </section>
      <Metric />

      <Footer/>
    </>
  );
};

export default Home;
