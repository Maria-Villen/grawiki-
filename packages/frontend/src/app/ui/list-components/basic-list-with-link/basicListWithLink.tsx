import classes from "./basicListWithLink.module.sass";
import { Link } from "react-router-dom";
import React, { FC } from "react";
import { IIcon } from "../../iconComponent/interfaceofIcon";
import Icon from "../../iconComponent/Icon";

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
  icon?: IIcon;
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
        {icon ? (
          <Icon name={icon.name} {...(icon.props && { ...icon.props })} />
        ) : null}
        <span>{text}</span>
      </Link>
    </li>
  );
};

export default BasicListWithLink;
