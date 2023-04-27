
import Header from "./Header";
import DarkToLight from "./DarkToLight";
import Footer from "./Footer";

function Layout({children}){
    return (
        <div >
          <Header />
          {children}
          <DarkToLight />
          <Footer />
        </div>
      );
}

export default Layout;