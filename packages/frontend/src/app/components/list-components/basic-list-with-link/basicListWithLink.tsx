import classes from "./basicListWithLink.module.sass";
import { Link } from "react-router-dom";
import React, { FC } from "react";

interface IBasicListWithLinkProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  /**
   * Link sitio hacia el que ir cuando hacemos click
   */
  link: string;
  /**
   * Texto de la lista
   */
  text: string;
  /**
   * icono del item de la lista
   */
  icon?: string;
}

/**
 * @Component
 * @Description A section that contains a title and various links to use with or without icon
 */

const BasicListWithLink: FC<IBasicListWithLinkProps> = ({
  link,
  text,
  icon,
}) => {
  return (
    <li className={classes.item}>
      <Link to={link}>
        {icon ? <img src={icon} alt={text} /> : null}
        <span>{text}</span>
      </Link>
    </li>
  );
};

export default BasicListWithLink;
