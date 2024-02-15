import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";


const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="--pad">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;