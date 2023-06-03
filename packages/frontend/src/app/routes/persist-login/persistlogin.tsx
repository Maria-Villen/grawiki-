import { useState, useEffect, ReactNode } from "react";
import { getNewToken } from "../../redux/slices/auth/authActions";
import { useAppSelector, useAppDispatch } from "../../redux/store";

const PersistLogin = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { loggedUser, persist, loading, error } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!persist) {
      setIsLoading(false);
    } else if (loggedUser && loggedUser.token) {
      setIsLoading(false);
    } else {
      dispatch(getNewToken());
      setIsLoading(false);
    }
  }, [persist, loggedUser, dispatch]);

  if (isLoading || loading) {
    return <p>Loading...</p>;
  } else if (error.message) {
    console.log("error", error.message);
    return <p>Se ha producido un error. Intente nuevamente.</p>;
  } else {
    return <>{children}</>;
  }
};

export default PersistLogin;
