import classes from "./header.module.sass";
import { Logo, MenuButton, MenuNavbarCollapse } from "../../ui";
import { ICategory } from "../../interfaces/categories";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/auth/authSlice";
import { getCategories } from "../../redux/slices/categories/categoryActions";
import { FindIcon, NotificationIcon } from "../../ui/icons";
import { HTMLProps, useEffect, useState } from "react";

/**
 * @component
 * @description Header component for the app.
 * @param ClassName: string
 * @returns
 */

const Header = ({ className }: HTMLProps<HTMLDivElement>) => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const { categories } = useAppSelector((state) => state.category);
  const navigate = useNavigate();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const isMobile = width <= 768;

  const { loggedUser } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const handleMenuItemClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log((e.currentTarget as HTMLButtonElement).value);
  };
  const handleGoLogin = () => {
    console.log("go login");
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={`${classes.header} ${className}`}>
      <div className={classes.header_logo_mobile}>
        <Logo type="vertical" />
      </div>
      {isMobile && <FindIcon />}
      {isMobile && <NotificationIcon />}
      <MenuNavbarCollapse className={classes.header_nabvar}>
        <div className={classes.header_logo_desktop}>
          <Logo type="horizontal" />
        </div>
        <div className={classes.header_navbar_area}>
          <ul className={classes.header_navbar_itemlist}>
            {categories &&
              categories.map(({ id, icon, text, link }: ICategory) => (
                <MenuButton
                  key={id}
                  icon={icon}
                  label={text}
                  variant={isMobile ? "horizontal" : "vertical"}
                  value={link}
                  onClick={handleMenuItemClick}
                  fluid
                />
              ))}
            <MenuButton
              iconColor="black"
              iconBackground="white"
              key="create"
              icon={{ name: "CreateMoreIcon" }}
              label="Crear Tema"
              variant={isMobile ? "horizontal" : "vertical"}
              fluid
            />
          </ul>
          <ul className={classes.header_navbar_itemlist}>
            {loggedUser ? (
              <MenuButton
                key="cerrarSesión"
                icon={{ name: "CloseIcon" }}
                label="Cerrar Sesión"
                onClick={handleLogout}
                variant={isMobile ? "horizontal" : "vertical"}
                fluid
              />
            ) : (
              <MenuButton
                key="Perfil"
                icon={{ name: "AvatarIcon" }}
                label="Perfil"
                onClick={handleGoLogin}
                variant={isMobile ? "horizontal" : "vertical"}
                fluid
              />
            )}
          </ul>
        </div>
      </MenuNavbarCollapse>
    </div>
  );
};

export default Header;
