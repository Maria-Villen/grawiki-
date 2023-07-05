import Icon from "../iconComponent/Icon";
import classes from "./avatar.module.sass";

interface IAvatar {
  image?: string;
  className?: string;
  rounded?: boolean;
}

const Avatar = ({ image, rounded, className }: IAvatar) => {
  return (
    <div
      className={`${classes.container} ${rounded && classes.rounded} ${
        className && className
      }`}
    >
      {image ? (
        <img
          src={image}
          className={rounded ? classes.rounded : ""}
          alt="Avatar"
        />
      ) : (
        <Icon
          name="AvatarIcon"
          className={`${classes.avatar} ${rounded && classes.rounded}`}
        />
      )}
    </div>
  );
};

export default Avatar;
