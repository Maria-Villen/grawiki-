import classes from "./home.module.sass";
import { LoginForm } from "../../components";

const Home = () => {
  return (
    <div className={classes.home}>
      <LoginForm />
    </div>
  );
};

export default Home;
