import classes from "./sweetProfileAlert.module.sass";

interface ISweetProfilAlertProps {
  message: string;
  fluid?: boolean;
}
const SweetProfileAlert = ({ message, fluid }: ISweetProfilAlertProps) => {
  return (
    <div className={`${classes.container} ${fluid && classes.fluid}`}>
      <span>{message}</span>
    </div>
  );
};

export default SweetProfileAlert;
