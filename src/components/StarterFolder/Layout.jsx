import { Outlet } from 'react-router-dom';
import Header from "./Header";
import DarkToLight from "./DarkToLight";
import Footer from "./Footer";

function Layout({ children }){
    return (
        <div >
          <Header />
          {/* <Outlet /> */}
          {/* {children} */}
          { children ?? <Outlet />}
          <DarkToLight />
          <Footer />
        </div>
      );
}

export default Layout;