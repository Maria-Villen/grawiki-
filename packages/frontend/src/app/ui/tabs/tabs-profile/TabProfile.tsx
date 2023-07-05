import { HTMLProps, ReactNode, useEffect, useState } from "react";
import classes from "./tabProfile.module.sass";
import { ToggleButton } from "../..";
import Avatar from "../../avatar/Avatar";
import { Link } from "react-router-dom";

interface ITabProfileProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  fluid?: boolean;
}

const TabProfile = ({ children, fluid }: ITabProfileProps) => {
  // Obtain notifications from BBDD or webSocket events
  const [isNotification, setIsNotification] = useState(false);

  // Obtain user avatar image from user redux
  const avatarImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5M2j5aP_QleSz2Sb2Qgf-J5UgjP3po54hg&usqp=CAU";

  const handleNotification = () => {
    console.log("go to messages and notifications");
  };

  useEffect(() => {
    const eventWebSocket = false;
    if (eventWebSocket) {
      setIsNotification(true);
    } else {
      setIsNotification(false);
    }
  }, [isNotification]);

  return (
    <div className={`${classes.container} ${fluid && classes.fluid}`}>
      <div className={classes.wrapper}>{children}</div>
      <div className={classes.btnSection}>
        <Link to="/profile">
          <Avatar
            rounded
            image={avatarImage && avatarImage}
            className={classes.avatar}
          />
        </Link>

        <ToggleButton
          isOpen={isNotification}
          className={classes.toggle}
          iconClose={{ name: "NotificationIcon" }}
          iconOpen={{
            name: "NotificationIcon",
            props: { fill: true },
          }}
          onClick={handleNotification}
        />
      </div>
    </div>
  );
};

export default TabProfile;
