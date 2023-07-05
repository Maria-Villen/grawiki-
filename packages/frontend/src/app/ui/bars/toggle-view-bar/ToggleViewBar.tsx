import classes from "./toggleViewBar.module.sass";
import { MouseEventHandler, ReactNode, useState } from "react";
import Icon from "../../iconComponent/Icon";

interface IToggleViewBarProps {
  selected: boolean;
  onChoice: (choice: string) => void;
  className?: string;
  children?: ReactNode;
}

function ToggleViewBar({
  selected,
  onChoice,
  children,
  className,
}: IToggleViewBarProps) {
  const [active, setActive] = useState(selected || "list");

  const onListSelected: MouseEventHandler = () => {
    setActive("list");
    onChoice("list");
  };
  const onCardSelected: MouseEventHandler = () => {
    setActive("cards");
    onChoice("cards");
  };

  return (
    <div className={`${classes.toggleViewBar} ${className}`}>
      <span className={classes.toggleViewBar_text}>{children}</span>
      <div className={classes.toggleViewBar_icons}>
        <div
          className={`${classes.toggleViewBar_icon} ${
            active === "list" && classes.active
          }`}
        >
          <Icon
            name="ListIcon"
            arial-label="Ver en modo lista"
            onClick={onListSelected}
            className={classes.icon}
          />
        </div>
        <div
          className={`${classes.toggleViewBar_icon} ${
            active === "cards" && classes.active
          }`}
        >
          <Icon
            name="CardsIcon"
            arial-lable="Ver en modo tarjetas"
            onClick={onCardSelected}
            className={classes.icon}
          />
        </div>
      </div>
    </div>
  );
}

export default ToggleViewBar;
