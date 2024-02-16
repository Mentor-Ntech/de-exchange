import { Link } from "react-router-dom";
import WaitList from "../WaitList/WaitList";

const Footer = () => {
  const updatedYear = new Date().getFullYear();
  return (
    <>
      <WaitList/>
      <hr style={{width: "100%"}}/>
      <footer style={{ padding: "4rem" }}>
        <div className="--flex-between">
          <p>All Right Reserved DLT COIN PROTOCOL || &copy; {updatedYear}</p>
          <div className="--flex-between" style={{ gap: "10px" }}>
            <Link to="/">Privacy</Link>
            <Link to="/">Terms</Link>
            <Link to="/">Email Us</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
