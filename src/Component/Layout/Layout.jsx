import PropTypes from 'prop-types';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="--pad">
        {children}
      </div>
      <Footer/>
    </>
  );
};

// Add prop type validation for children
Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
