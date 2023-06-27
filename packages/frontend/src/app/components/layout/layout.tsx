import { Header, Footer } from "../";
import { Outlet } from "react-router-dom";
import classes from "./layout.module.sass";

interface ILayout {
  /**
   * Determine if the layout shows a footer or not
   * */
  withFooter: boolean;
}

/**
 * @component
 * @description Layout for the app
 */
const Layout = ({ withFooter }: ILayout) => {
  return (
    <div className={classes.container}>
      <Header className={classes.header} />
      <main
        className={`${classes.main} ${withFooter === false && classes.fluid}`}
      >
        <Outlet />
        {withFooter && <Footer dark />}
      </main>
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  withFooter: true,
};
