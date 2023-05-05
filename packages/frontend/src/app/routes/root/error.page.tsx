import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>diablos!</h1>
      <p>La pagina a la que quieres accesar no existe.</p>
     
    </div>
  );
}