import { lazy, Suspense } from "react";
import { IIcon } from "../iconComponent/interfaceofIcon";
import classes from "./icon.module.sass";

/**
 * IconLazy is used to lazy load icons
 */

const IconLazy = ({ name, className, rounded, ...props }: IIcon) => {
  const iconName = name.charAt(0).toUpperCase() + name.slice(1);
  const IconComponent = lazy(() => import(`../icons/${iconName}`));

  return (
    <Suspense fallback={null}>
      <IconComponent
        name={name}
        className={`${className} ${rounded && classes.rounded}`}
        {...props}
      />
    </Suspense>
  );
};

export default IconLazy;
