import { Header, Footer } from "../../index";
import { Outlet } from "react-router-dom";
import classes from "./layout.module.sass";

const Layout = () => {
  return (
    <div className={classes.container}>
      <Header />
      <main className={classes.main}>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
