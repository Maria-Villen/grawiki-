import React from "react";
import * as Icons from "../icons"; // Ajusta la ruta según tu estructura de directorios
import { IIcon } from "../iconComponent/interfaceofIcon";
import classes from "./icon.module.sass";

const Icon = ({ name, className, rounded, ...props }: IIcon) => {
  const IconComponent = Icons[
    name as keyof typeof Icons
  ] as React.ComponentType<IIcon>;

  if (!IconComponent) {
    // En caso de que se proporcione un nombre de icono desconocido, puedes mostrar un icono de reemplazo o un mensaje de error.
    return <div>Icono no encontrado</div>;
  } else {
    return (
      <IconComponent
        name={name}
        className={`${className} ${rounded && classes.rounded}`}
        {...props}
      />
    );
  }
};

export default Icon;
