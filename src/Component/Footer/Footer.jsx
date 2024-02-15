
import "./Footer.css";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="headerFoot">
      <section className="mailing">
      <h1>
        Start making the world safer, Join the Movement.
      </h1>

        <button>Join Waitlist😉</button>
      </section>

      <div className="footer_box">
        <div className="footer_box_social">
          <a href="#">
            <CiFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>

        </div>

        <div className="footer_box_text">
        <div className="footer_box_Privacy">
            <h3>Privacy</h3>
          </div>
          <div className="footer_box_Terms">
            <h3>Terms</h3>
          </div>
          <div className="footer_box_EmailUs">
            <h3>Email Us</h3>
          </div>
      </div>
        </div>
    </div>
  );
};

export default Footer;


