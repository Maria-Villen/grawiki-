import { useState } from "react";
import { ReactionButton } from "..";
import { IIcon } from "../iconComponent/interfaceofIcon";
import IconCounter from "../tags/iconCounter/IconCounter";
import classes from "./reactionPanel.module.sass";

interface IReactionInfo {
  icon: IIcon;
  iconActive?: IIcon;
  quantity: number;
}
interface IReactionPanel {
  // data of all the reactions, icons and the number of reactions
  data: Array<IReactionInfo>;
  // array of the reactions that the user has made
  userReacted: Array<string>;
}

const ReactionPanel = ({ data, userReacted }: IReactionPanel) => {
  const [userReaction, setUserReaction] = useState(userReacted);

  const handleReaction = (reaction: string) => {
    const isChoosen = getActive(reaction);
    const reactionItem = data.find((el) => el.icon.name === reaction);
    const reactionIndexItem = data.findIndex((el) => el === reactionItem);

    if (isChoosen) {
      if (reactionItem) {
        data[reactionIndexItem].quantity--;
      }
      setUserReaction(userReaction.filter((el) => el !== reaction));
      //removeReactionFromDB();
    } else {
      setUserReaction([...userReaction, reaction]);
      if (reactionItem) {
        data[reactionIndexItem].quantity++;
      }
      //addReaction();
    }
  };

  const getActive = (reaction: string) => {
    const type = userReaction.find((el) => el === reaction);
    return type ? true : false;
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapperCounter}>
        {data.map(({ icon, iconActive, quantity }) => (
          <IconCounter
            key={iconActive ? iconActive.name : icon.name}
            icon={iconActive ? iconActive : icon}
            quantity={quantity}
          />
        ))}
      </div>
      <div className={classes.wrapperButtons}>
        {data.map(({ icon, iconActive }) => (
          <ReactionButton
            key={icon.name}
            icon={icon}
            iconActive={iconActive}
            isActive={getActive(icon.name)}
            onClick={() => {
              handleReaction(icon.name);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ReactionPanel;
