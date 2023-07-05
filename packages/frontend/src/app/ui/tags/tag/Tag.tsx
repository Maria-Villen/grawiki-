import classes from "./tag.module.sass";
import { CloseSimpleIcon } from "../../icons";
import { MouseEventHandler } from "react";

interface TagProps {
  label: string;
  action?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

function Tag({ label, action, className, onClick }: TagProps) {
  return (
    <div className={`${classes.tag} ${className && className}`}>
      <span>#{label}</span>
      {action && (
        <button type="button" arial-label="Cerrar" onClick={onClick}>
          <CloseSimpleIcon className={classes.icon} />
        </button>
      )}
    </div>
  );
}

export default Tag;
