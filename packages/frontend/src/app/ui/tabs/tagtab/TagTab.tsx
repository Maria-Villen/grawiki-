import { Tag } from "../..";
import { ITag } from "../../../interfaces/categories";
import classes from "./tagtab.module.sass";

interface TagProps {
  tags: Array<ITag>;
}

const TagTab = ({ tags }: TagProps) => {
  return (
    <div className={classes.container}>
      {tags.map(({ id, label }) => (
        <Tag key={id} label={label} className={classes.tag} />
      ))}
    </div>
  );
};

export default TagTab;
