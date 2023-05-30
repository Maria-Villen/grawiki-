import classes from "./header.module.sass";
import { Logo, MenuListItem, MenuNavbarCollapse } from "../../ui";
import { menuItems, IMenuItem } from "./navbarmenuConfig";
import { Avatar, Create } from "../../assets";
import { HTMLProps } from "react";

const Header = ({ className }: HTMLProps<HTMLDivElement>) => {
  return (
    <div className={`${classes.header} ${className}`}>
      <div className={classes.header_logo_mobile}>
        <Logo type="vertical" />
      </div>
      <MenuNavbarCollapse className={classes.header_nabvar}>
        <div className={classes.header_logo_desktop}>
          <Logo type="horizontal" />
        </div>
        <div className={classes.header_navbar_area}>
          <ul className={classes.header_navbar_itemlist}>
            {menuItems.map(({ id, icon, text, link }: IMenuItem) => {
              return (
                <MenuListItem
                  className={classes.header_navbar_item}
                  key={id}
                  icon={icon}
                  text={text}
                  link={link}
                  dark
                  fluid
                />
              );
            })}
            <MenuListItem
              className={classes.header_navbar_item}
              key="create"
              icon={Create}
              text="Crear Tema"
              link="Create"
              fluid
            />
          </ul>
          <ul className={classes.header_navbar_itemlist}>
            <MenuListItem
              className={classes.header_navbar_item}
              key="Perfil"
              icon={Avatar}
              text="Perfil"
              link="/login"
              fluid
              dark
            />
          </ul>
        </div>
      </MenuNavbarCollapse>
    </div>
  );
};

export default Header;
