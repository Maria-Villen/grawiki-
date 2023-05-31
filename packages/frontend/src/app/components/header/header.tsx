import classes from "./header.module.sass";
import {
  Logo,
  MenuListItem,
  MenuListItemSimple,
  MenuNavbarCollapse,
} from "../../ui";
import { menuItems, IMenuItem } from "./navbarmenuConfig";
import { Avatar, Create } from "../../assets";
import { HTMLProps, useEffect, useState } from "react";

/**
 * @component
 * @description Header component for the app.
 * @param ClassName: string
 * @returns
 */
const Header = ({ className }: HTMLProps<HTMLDivElement>) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

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
              if (isMobile) {
                return (
                  <MenuListItemSimple
                    className={classes.header_navbar_item}
                    key={id}
                    icon={icon}
                    text={text}
                    link={link}
                    inverse
                    fluid
                  />
                );
              } else {
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
              }
            })}
            {isMobile ? (
              <MenuListItemSimple
                className={classes.header_navbar_item}
                key="create"
                icon={Create}
                text="Crear Tema"
                link="Create"
                fluid
              />
            ) : (
              <MenuListItem
                className={classes.header_navbar_item}
                key="create"
                icon={Create}
                text="Crear Tema"
                link="Create"
                fluid
              />
            )}
          </ul>
          <ul className={classes.header_navbar_itemlist}>
            {isMobile ? (
              <MenuListItemSimple
                className={classes.header_navbar_item}
                key="Perfil"
                icon={Avatar}
                text="Perfil"
                link="/login"
                fluid
                inverse
              />
            ) : (
              <MenuListItem
                className={classes.header_navbar_item}
                key="Perfil"
                icon={Avatar}
                text="Perfil"
                link="/login"
                fluid
                dark
              />
            )}
          </ul>
        </div>
      </MenuNavbarCollapse>
    </div>
  );
};

export default Header;
