import { lazy, Suspense } from "react";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const IconLazy = ({ name, size, color, ...props }: IconProps) => {
  const iconName = name.charAt(0).toUpperCase() + name.slice(1);
  const IconComponent = lazy(() => import(`./icons/${iconName}`));

  return (
    <Suspense fallback={null}>
      <IconComponent size={size} color={color} {...props} />
    </Suspense>
  );
};

export default IconLazy;
