import { Header, Footer } from "../";
import { Outlet } from "react-router-dom";
import classes from "./layout.module.sass";

interface ILayout {
  withFooter: boolean;
}

const Layout = ({ withFooter }: ILayout) => {
  return (
    <div className={classes.container}>
      <Header className={classes.header} />
      <main
        className={`${classes.main} ${withFooter === false && classes.fluid}`}
      >
        <Outlet />
        {withFooter && <Footer />}
      </main>
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  withFooter: true,
};
