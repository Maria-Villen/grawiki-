import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/store";

interface IprotectedRouteProps {
  allowedRoles: Array<string>;
}

/**
 * Only to verify if the user can access a route.
 */
const ProtectedRoute = ({ allowedRoles }: IprotectedRouteProps) => {
  const { loggedUser } = useAppSelector((state) => state.auth);
  const location = useLocation();

  if (loggedUser && allowedRoles.includes(loggedUser.role)) {
    return <Outlet />;
  } else if (loggedUser) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default ProtectedRoute;
