import React from "react";
import * as Icons from "../icons"; // Ajusta la ruta según tu estructura de directorios
import { IIcon } from "../iconComponent/interfaceofIcon";

const Icon = ({ name, className, ...props }: IIcon) => {
  const IconComponent = Icons[
    name as keyof typeof Icons
  ] as React.ComponentType<IIcon>;

  if (!IconComponent) {
    // En caso de que se proporcione un nombre de icono desconocido, puedes mostrar un icono de reemplazo o un mensaje de error.
    return <div>Icono no encontrado</div>;
  } else {
    return <IconComponent name={name} className={className} {...props} />;
  }
};

export default Icon;
