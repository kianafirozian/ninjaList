import { Props } from "next/script";
import Navbar from "./Navbar";
import Footer from "./footer";

const Layout = ({ children }: Props) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
