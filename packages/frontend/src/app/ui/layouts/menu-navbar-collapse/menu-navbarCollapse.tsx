import { FC, ReactNode, MouseEvent } from "react";
import classes from "./menu-navbarCollapse.module.sass";
import { CloseIcon } from "../../icons";
import { ToggleButton } from "../..";
import { useState } from "react";

interface IMenuNavbarCollapseProps {
  className?: string | null;
  children: ReactNode;
}

const MenuNavbarCollapse: FC<IMenuNavbarCollapseProps> = ({
  className,
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenuView = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuView = () => {
    setIsMenuOpen(false);
  };
  const closeIfOptionChosen = (
    e: MouseEvent<HTMLDivElement> & { target: Element }
  ) => {
    const tagname = e?.target?.tagName.toLowerCase() || "";
    if (tagname === "a") setIsMenuOpen(false);
  };

  return (
    <nav className={`${classes.navbar} ${className}`}>
      <ToggleButton
        className={classes.navbar_btnmenu}
        iconClose={{ name: "MenuIcon" }}
        onClick={onToggleMenuView}
      />
      <div
        onClick={closeIfOptionChosen}
        className={`${classes.navbar_list} ${
          isMenuOpen ? classes.navbar_list__open : ""
        }`}
      >
        <div className={classes.navbar_btnClose} onClick={closeMenuView}>
          <CloseIcon />
        </div>
        {children}
      </div>
    </nav>
  );
};

export default MenuNavbarCollapse;
