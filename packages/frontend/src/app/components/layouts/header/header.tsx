import classes from "./header.module.sass";
import { Logo, MenuListItem, MenuButton, MenuNavbarCollapse } from "../..";
import { menuItems, IMenuItem } from "./navbarmenuConfig";
import { Edit } from "../../../assets";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header_logo_mobile}>
        <Logo type="horizontal" />
      </div>
      <MenuNavbarCollapse className={classes.header_nabvar}>
        <div className={classes.header_logo_desktop}>
          <Logo type="vertical" />
        </div>
        <MenuButton to="/create" icon={Edit} text="Crear" />
        <ul className={classes.header_navbar_itemlist}>
          {menuItems.map(({ id, icon, text, link }: IMenuItem) => {
            return (
              <MenuListItem
                className={classes.header_navbar_item}
                key={id}
                icon={icon}
                text={text}
                link={link}
                fluid
              />
            );
          })}
        </ul>
      </MenuNavbarCollapse>
    </div>
  );
};

export default Header;
